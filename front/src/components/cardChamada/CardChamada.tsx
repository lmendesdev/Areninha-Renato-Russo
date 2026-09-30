export interface PropriedadesCardChamada {
  readonly titulo: string;
  readonly descricao: string;
  readonly link: string;
}

export function CardChamada({
  titulo,
  descricao,
  link,
}: PropriedadesCardChamada) {
  return (
    <article className="bg-street-yellowCustom border-2 border-brand-darkCustom rounded-3xl p-8 md:p-12 sticker-shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 w-full">
      <div className="text-left max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-darkCustom uppercase tracking-tight">
          {titulo}
        </h2>
        <p className="text-sm md:text-base font-semibold text-brand-darkCustom/80 mt-2 leading-relaxed">
          {descricao}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-brand-darkCustom text-white font-black text-xs uppercase tracking-wider hover:bg-energy-blueCustom hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 text-center flex items-center justify-center gap-2 border-2 border-brand-darkCustom shadow-[3px_3px_0px_#0A2435] cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </article>
  );
}

export default CardChamada;