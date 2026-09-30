import { useState } from "react";
import CardAvisosExpandido from "./CardAvisosExpandido";

export interface PropriedadesCardAvisos {
  readonly imagem: string;
  readonly altImagem?: string;
  readonly dia: number;
  readonly mes: number;
  readonly ano: number;
  readonly titulo: string;
  readonly descricao: string;
}

const converterMeses: readonly string[] = [
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

export function CardAvisos({
  imagem,
  altImagem,
  dia,
  mes,
  ano,
  titulo,
  descricao,
}: PropriedadesCardAvisos) {
  const [expandido, setExpandido] = useState(false);

  const aoClicarSobre = () => {
    setExpandido(true);
  };

  const textoAlternativo: string = altImagem || "Aviso Areninha";

  const nomeDoMes: string = converterMeses[mes - 1];

  return (
    <>
      <article className="bg-white border-2 border-brand-darkCustom rounded-3xl flex flex-col h-full overflow-hidden sticker-shadow-lg group transition-transform duration-300 hover:-translate-y-1 max-w-92">
        <div className="relative w-full aspect-video border-b-2 border-brand-darkCustom overflow-hidden bg-brand-darkCustom shrink-0">
          <img
            alt={textoAlternativo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imagem}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-brand-darkCustom/60 uppercase tracking-wide">
            <span className="material-symbols-outlined text-sm text-energy-blueCustom">
              calendar_month
            </span>
            <span>
              {dia < 10 ? `0${dia}` : dia} {nomeDoMes} de {ano}
            </span>
          </div>
          <h3 className="text-xl font-bold text-brand-darkCustom mb-3 line-clamp-2 group-hover:text-energy-blueCustom transition-colors leading-snug">
            {titulo}
          </h3>
          <p className="text-sm font-medium text-brand-darkCustom/70 line-clamp-3 leading-relaxed">
            {descricao}
          </p>
          <div className="pt-4 mt-auto border-t-2 border-brand-darkCustom/10">
            <button
              type="button"
              onClick={aoClicarSobre}
              className="inline-flex items-center gap-2 text-sm font-black text-brand-darkCustom group-hover:text-energy-blueCustom transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>Ler matéria</span>
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </article>
      <div>
        {expandido && (
          <CardAvisosExpandido
            titulo={titulo}
            dia={dia}
            mes={nomeDoMes}
            ano={ano}
            descricao={descricao}
            imagem={imagem}
            altImagem={altImagem}
            funcaoSair={() => setExpandido(false)}
          />
        )}
      </div>
    </>
  );
}

export default CardAvisos;
