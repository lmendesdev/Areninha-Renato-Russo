export type CorDataHistoria = "azul" | "amarelo" | "laranja" | "preto";

export interface PropriedadesCardDataHistoria {
  readonly dataAno: string | number;
  readonly titulo: string;
  readonly descricao: string;
  readonly cor: CorDataHistoria;
}

function obterEstiloData(cor: CorDataHistoria = "azul"): string {
  switch (cor) {
    case "amarelo":
      return "bg-street-yellowCustom text-brand-darkCustom";
    case "laranja":
      return "bg-fest-orangeCustom text-white";
    case "preto":
      return "bg-brand-darkCustom text-street-yellowCustom";
    case "azul":
    default:
      return "bg-energy-blueCustom text-white";
  }
}

export function CardDataHistoria({
  dataAno,
  titulo,
  descricao,
  cor = "azul",
}: PropriedadesCardDataHistoria) {
  const estiloCor: string = obterEstiloData(cor);

  return (
    <article className="bg-white border-2 border-brand-darkCustom rounded-3xl p-6 md:p-8 sticker-shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all hover:translate-x-1 w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full">
        <div
          className={`font-black mb-4 md:mb-0 text-2xl md:text-3xl px-6 py-4 rounded-2xl border-2 border-brand-darkCustom shadow-[4px_4px_0px_#0A2435] shrink-0 text-center min-w-28 ${estiloCor}`}
        >
          {dataAno}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black text-brand-darkCustom uppercase tracking-tight">
            {titulo}
          </h3>
          <p className="text-sm md:text-base text-brand-darkCustom/80 font-normal mt-1 max-w-2xl leading-relaxed">
            {descricao}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CardDataHistoria;
