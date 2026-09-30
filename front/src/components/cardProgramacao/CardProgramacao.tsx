import { useState } from "react";
import CardProgramacaoExpandido from "./CardProgramacaoExpandido";

export interface PropriedadesCardProgramacao {
  readonly imagem: string;
  readonly altImagem?: string;
  readonly titulo: string;
  readonly tag: string;
  readonly dia: number;
  readonly mes: number;
  readonly ano: number;
  readonly horario: string;
  readonly diaSemana: string;
  readonly descricao: string;
  readonly local: string;
  readonly link: string;
  readonly valor: number;
}
function verificarEhHoje(dia: number, mes: number, ano: number): boolean {
  const dataAtual = new Date();
  const diaAtual: number = dataAtual.getDate();
  const mesAtual: number = dataAtual.getMonth() + 1;
  const anoAtual: number = dataAtual.getFullYear();

  const ehMesmoDia: boolean = dia === diaAtual;
  const ehMesmoMes: boolean = mes === mesAtual;
  const ehMesmoAno: boolean = ano === anoAtual;

  return ehMesmoDia && ehMesmoMes && ehMesmoAno;
}

export function CardProgramacao({
  imagem,
  altImagem,
  titulo,
  tag,
  dia,
  mes,
  ano,
  horario,
  diaSemana,
  descricao,
  local,
  link,
  valor,
}: PropriedadesCardProgramacao) {
  const [expandido, setExpandido] = useState(false);

  const textoAlt: string = altImagem || "Evento Areninha";

  const ehHoje: boolean = verificarEhHoje(dia, mes, ano);

  return (
    <>
      <article className="bg-white rounded-3xl md:w-[24rem] border-2 border-brand-darkCustom sticker-shadow-lg flex flex-col h-max-[30rem] overflow-hidden p-5 transition-transform hover:-translate-y-1">
        <div className="h-48 w-full rounded-2xl overflow-hidden relative shrink-0 border border-brand-darkCustom/10">
          <img
            alt={textoAlt}
            className="w-full h-full object-cover"
            src={imagem}
            loading="lazy"
            decoding="async"
          />
          {ehHoje && (
            <div className="absolute top-3 right-3">
              <span className="bg-fest-orangeCustom text-white text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-brand-darkCustom/20">
                <span className="material-symbols-outlined text-xs">album</span>{" "}
                HOJE TEM!
              </span>
            </div>
          )}
        </div>
        <div className="pt-4 flex flex-col grow justify-between">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="bg-fest-orangeCustom text-white text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                {tag}
              </span>
              <span className="bg-street-yellowCustom text-brand-darkCustom border border-brand-darkCustom text-xs font-bold px-3 py-0.5 rounded-full">
                {dia < 10 ? `0${dia}` : dia}/{mes < 10 ? `0${mes}` : mes}/{ano}{" "}
                {verificarEhHoje(dia, mes, ano) ? ` - ${horario}` : ""}
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-brand-darkCustom leading-tight mb-2">
              {titulo}
            </h3>
            <p className="text-xs md:text-sm text-brand-darkCustom/75 leading-relaxed mb-3 line-clamp-3">
              {descricao}
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-darkCustom/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setExpandido(true);
              }}
              className="w-full rounded-full py-2.5 px-4 border-2 border-brand-darkCustom bg-energy-blueCustom text-white font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-sm transition-all cursor-pointer"
            >
              Sobre o evento
            </button>
          </div>
        </div>
      </article>
      {expandido && (
        <CardProgramacaoExpandido
          tag={tag}
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          altImagem={altImagem ? altImagem : "Evento Areninha"}
          dia={dia}
          mes={mes}
          ano={ano}
          horario={horario}
          diaSemana={diaSemana}
          local={local}
          valor={valor}
          link={link}
          aoFechar={() => {
            setExpandido(false);
          }}
        />
      )}
    </>
  );
}

export default CardProgramacao;
