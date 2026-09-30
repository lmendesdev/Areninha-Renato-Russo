import { useState } from "react";
import CardOficinaExpandido from "./CardOficinaExpandido";

export interface PropriedadesCardOficina {
  readonly imagem: string;
  readonly altImagem?: string;
  readonly titulo: string;
  readonly categoria: string;
  readonly diaSemana: string;
  readonly horario: string;
  readonly professor: string;
  readonly modalidade: string;
  readonly faixaEtaria: string;
  readonly local: string;
  readonly vagas: string;
  readonly link: string;
  readonly descricao: string;
}

const modalidadePadrao: string = "Semanal 1h";

export function CardOficina({
  imagem,
  altImagem,
  titulo,
  categoria,
  diaSemana,
  horario,
  professor,
  modalidade = modalidadePadrao,
  faixaEtaria,
  local,
  vagas,
  link,
  descricao,
}: PropriedadesCardOficina) {
  const textoAlternativo: string = altImagem ? altImagem : "Oficina Areninha";
  const [expandido, setExpandido] = useState(false);

  function aoClicarSobre() {
    setExpandido(true);
  }

  return (
    <>
      <article className="bg-white rounded-3xl md:w-[24rem] border-2 border-brand-darkCustom sticker-shadow-lg flex flex-col justify-between overflow-hidden transition-transform hover:-translate-y-1 group">
        <div className="relative overflow-hidden border-b-2 border-brand-darkCustom h-60">
          <img
            alt={textoAlternativo}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            src={imagem}
            loading="lazy"
            decoding="async"
          />
          <span className="absolute bottom-3 right-3 bg-street-yellowCustom text-brand-darkCustom text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-brand-darkCustom">
            {faixaEtaria}
          </span>
        </div>
        <div className="p-6 flex flex-col grow justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="bg-bg-grayCustom text-brand-darkCustom border border-brand-darkCustom text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                {categoria}
              </span>
              <span className="bg-energy-blueCustom/10 text-energy-blueCustom border border-energy-blueCustom text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                {diaSemana} • {horario}
              </span>
            </div>
            <h3 className="text-2xl font-black text-brand-darkCustom uppercase tracking-tight leading-tight mb-1">
              {titulo}
            </h3>
            <p className="text-sm font-semibold text-brand-darkCustom/70 flex items-center gap-1.5 mb-6">
              <span className="material-symbols-outlined text-fest-orangeCustom text-lg">
                person
              </span>
              {professor}
            </p>
          </div>
          <div className="mt-auto pt-4 border-t-2 border-dashed border-brand-darkCustom/20 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-brand-darkCustom/60">
                Modalidade
              </span>
              <span className="text-xs font-black uppercase text-brand-darkCustom">
                {modalidade}
              </span>
            </div>
            <button
              type="button"
              onClick={aoClicarSobre}
              className="px-6 py-2.5 rounded-full bg-brand-darkCustom text-street-yellowCustom hover:bg-street-yellowCustom hover:text-brand-darkCustom border-2 border-brand-darkCustom text-xs font-black uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm"
            >
              Sobre
            </button>
          </div>
        </div>
      </article>
      {expandido && (
        <CardOficinaExpandido
          imagem={imagem}
          altImagem={textoAlternativo}
          titulo={titulo}
          categoria={categoria}
          diaSemana={diaSemana}
          horario={horario}
          professor={professor}
          modalidade={modalidade}
          faixaEtaria={faixaEtaria}
          local={local}
          vagas={vagas}
          linkInscricao={link}
          descricao={descricao}
          aoFechar={() => setExpandido(false)}
        />
      )}
    </>
  );
}

export default CardOficina;
