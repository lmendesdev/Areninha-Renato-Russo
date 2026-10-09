import { useState } from "react";
import CardAvisosExpandido from "./CardAvisosExpandido";

interface PropriedadesAvisoPrincipal {
  readonly imagem: string;
  readonly altImagem?: string;
  readonly dia: number;
  readonly mes: number;
  readonly ano: number;
  readonly titulo: string;
  readonly descricao: string;
}

const nomesMeses: readonly string[] = [
    "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function formatarDia(dia: number): string {
  if (dia < 10) {
    return `0${dia}`;
  }

  return String(dia);
}

export function AvisoPrincipal({ imagem, altImagem, dia, mes, ano, titulo, descricao }: PropriedadesAvisoPrincipal) {

    const diaFormatado = formatarDia(dia);

    const textoAlternativo = altImagem || titulo;

    const nomeMes = nomesMeses[mes - 1];

    const [noticiaPrincipalExpandida, setNoticiaPrincipalExpandida] = useState<boolean>(false);

    return (
    <>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              <div className="w-full lg:w-7/12 flex flex-col items-start text-left order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span className="inline-flex items-center bg-street-yellowCustom text-brand-darkCustom text-xs font-bold px-3 py-1.5 rounded-full border-2 border-brand-darkCustom">
                    Destaque
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-brand-darkCustom mb-5 tracking-tight leading-[1.15]">
                  {titulo}
                </h1>
                <p className="text-base md:text-lg text-brand-darkCustom/80 mb-8 max-w-2xl font-medium leading-relaxed">
                  {descricao}
                </p>
                <div className="flex items-center gap-6 mb-8 text-sm font-semibold text-brand-darkCustom/70">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-fest-orangeCustom">
                      calendar_today
                    </span>
                    <span>
                      {diaFormatado} {nomeMes},{" "}
                      {ano}
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNoticiaPrincipalExpandida(true)}
                  className="inline-flex items-center gap-3 bg-street-yellowCustom text-brand-darkCustom font-black text-base px-8 py-4 rounded-full uppercase tracking-wider justify-center border-2 border-brand-darkCustom sticker-shadow-lg hover-sticker cursor-pointer"
                >
                  Ler Matéria Completa
                </button>
              </div>
              <div className="w-full lg:w-5/12 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-energy-blueCustom rounded-3xl translate-x-3 translate-y-3 border-2 border-brand-darkCustom" />
                  <div className="relative rounded-3xl border-2 border-brand-darkCustom overflow-hidden bg-brand-darkCustom aspect-4/3 group">
                    <img
                      alt={textoAlternativo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={imagem}
                    />
                  </div>
                </div>
              </div>
            </div>
            {noticiaPrincipalExpandida && (
                    <CardAvisosExpandido
                      titulo={titulo}
                      dia={dia}
                      mes={nomeMes}
                      ano={ano}
                      descricao={descricao}
                      imagem={imagem}
                      altImagem={altImagem}
                      funcaoSair={() => setNoticiaPrincipalExpandida(false)}
                    />
                  )}
        </>
    );
}