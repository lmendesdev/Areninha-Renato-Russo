import { useState, useRef, type ReactNode, type RefObject } from "react";
import { motion } from "motion/react";
import { listaAdesivos, type PosicaoInicialAdesivo } from "./AdesivosLista";

const zIndexInicial = 20;
const zIndexTopoInicial = 30;
const incrementoZIndex = 2;
const inclinacaoArrastoGraus = 4;
const escalaArrasto = 1.06;
const elasticidadeArrasto = 0.05;

export interface PropriedadesAdesivoArrastavel {
  readonly id: string;
  readonly imagem: string;
  readonly textoAlternativo: string;
  readonly classeLargura: string;
  readonly rotacaoInicial: number;
  readonly posicaoInicial: PosicaoInicialAdesivo;
  readonly zIndex: number;
  readonly referenciaLimite: RefObject<HTMLElement | null>;
  readonly aoIniciarArrasto: (id: string) => void;
}

function calcularRotacaoArrasto(rotacaoBase: number): number {
  if (rotacaoBase > 0) {
    return rotacaoBase + inclinacaoArrastoGraus;
  }

  return rotacaoBase - inclinacaoArrastoGraus;
}

export function AdesivoArrastavel({
  id,
  imagem,
  textoAlternativo,
  classeLargura,
  rotacaoInicial,
  posicaoInicial,
  zIndex,
  referenciaLimite,
  aoIniciarArrasto,
}: PropriedadesAdesivoArrastavel) {
  const rotacaoDuranteArrasto = calcularRotacaoArrasto(rotacaoInicial);

  return (
    <motion.div
      id={id}
      title="Segure e arraste!"
      drag
      dragConstraints={referenciaLimite}
      dragMomentum={false}
      dragElastic={elasticidadeArrasto}
      onDragStart={() => aoIniciarArrasto(id)}
      initial={{ rotate: rotacaoInicial, scale: 1 }}
      whileDrag={{
        scale: escalaArrasto,
        rotate: rotacaoDuranteArrasto,
      }}
      className="lambe-sticker"
      style={{
        ...posicaoInicial,
        zIndex,
      }}
    >
      <img
        src={imagem}
        alt={textoAlternativo}
        draggable={false}
        className={`pointer-events-none select-none h-auto ${classeLargura}`}
      />
    </motion.div>
  );
}

export interface PropriedadesAdesivos {
  readonly children?: ReactNode;
}

export function Adesivos({ children }: PropriedadesAdesivos) {
  const referenciaLimite = useRef<HTMLElement | null>(null);

  const [topoZIndex, setTopoZIndex] = useState<number>(zIndexTopoInicial);

  const [zIndicesPorId, setZIndicesPorId] = useState<Record<string, number>>(
    {},
  );

  const [idsMovidos, setIdsMovidos] = useState<readonly string[]>([]);

  const [chaveReset, setChaveReset] = useState<number>(0);

  function definirReferenciaLimite(elemento: HTMLDivElement | null) {
    if (!elemento) {
      referenciaLimite.current = null;
      return;
    }

    referenciaLimite.current =
      elemento.closest("section") ?? elemento.closest("main") ?? elemento;
  }

  function aoIniciarArrasto(id: string) {
    const proximoZIndex = topoZIndex + incrementoZIndex;

    setTopoZIndex(proximoZIndex);

    setZIndicesPorId((estadoAnterior) => ({
      ...estadoAnterior,
      [id]: proximoZIndex,
    }));

    setIdsMovidos((listaAnterior) => {
      const jaFoiMovido = listaAnterior.includes(id);
      if (jaFoiMovido) {
        return listaAnterior;
      }
      return [...listaAnterior, id];
    });
  }

  function resetarAdesivos() {
    setChaveReset((valorAnterior) => valorAnterior + 1);
    setIdsMovidos([]);
    setZIndicesPorId({});
    setTopoZIndex(zIndexTopoInicial);
  }

  const totalColados = listaAdesivos.length;
  const totalMovidos = idsMovidos.length;
  const temAdesivosMovidos = totalMovidos > 0;

  const textoContador = temAdesivosMovidos
    ? `${totalColados} colados (${totalMovidos} movidos)`
    : `${totalColados} colados`;

  return (
    <div
      ref={definirReferenciaLimite}
      className="relative w-full min-h-160 md:min-h-180 hidden lg:block select-none"
    >
      <div className="absolute top-4 right-4 md:right-10 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-sm border-2 border-brand-darkCustom px-3.5 py-1.5 rounded-full sticker-shadow-sm text-xs font-bold">
        <span className="text-brand-darkCustom/80 hidden sm:inline font-semibold">
          Arraste os lambe-lambes!
        </span>
        <span className="font-extrabold bg-brand-darkCustom text-white px-2.5 py-0.5 rounded-full text-[11px] tracking-wide">
          {textoContador}
        </span>
        <button
          type="button"
          onClick={resetarAdesivos}
          title="Resetar todos os adesivos para suas posições de colagem"
          className="ml-1 bg-street-yellowCustom hover:bg-street-yellowCustom/80 active:translate-y-0.5 text-brand-darkCustom border border-brand-darkCustom font-black text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full transition-all cursor-pointer flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[13px] leading-none">
            restart_alt
          </span>
          <span>Resetar</span>
        </button>
      </div>
      {listaAdesivos.map((adesivo) => {
        const zIndexAdesivo = zIndicesPorId[adesivo.id] ?? zIndexInicial;

        return (
          <AdesivoArrastavel
            key={`${adesivo.id}-${chaveReset}`}
            id={adesivo.id}
            imagem={adesivo.imagem}
            textoAlternativo={adesivo.textoAlternativo}
            classeLargura={adesivo.classeLargura}
            rotacaoInicial={adesivo.rotacaoInicial}
            posicaoInicial={adesivo.posicaoInicial}
            zIndex={zIndexAdesivo}
            referenciaLimite={referenciaLimite}
            aoIniciarArrasto={aoIniciarArrasto}
          />
        );
      })}

      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default Adesivos;
