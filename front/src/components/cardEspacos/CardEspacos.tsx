export type CorTagEspaco = "amarelo" | "azul" | "laranja" | "preto";

export interface PropriedadesCardEspacos {
  readonly tag: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly corTag: CorTagEspaco;
}

function corTagParaEstilo(corTag: CorTagEspaco = "amarelo"): string {
  switch (corTag) {
    case "amarelo":
      return "bg-street-yellowCustom text-brand-darkCustom";
    case "azul":
      return "bg-energy-blueCustom text-white";
    case "laranja":
      return "bg-fest-orangeCustom text-white";
    case "preto":
      return "bg-brand-darkCustom text-street-yellowCustom";
    default:
      return "";
  }
}

export function CardEspacos({
  tag,
  titulo,
  descricao,
  corTag = "amarelo",
}: PropriedadesCardEspacos) {
  const estiloTag: string = corTagParaEstilo(corTag);

  return (
    <article className="bg-white rounded-[28px] border-2 md:border-4 border-brand-darkCustom sticker-shadow-lg p-6 md:p-8 flex flex-col justify-between relative max-w-92 transition-transform duration-300 hover:-translate-y-1">
      <div className="space-y-4">
        <div>
          <span
            className={`inline-block font-bold text-xs px-3 py-1 rounded-full border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435] ${estiloTag}`}
          >
            {tag}
          </span>
        </div>
        <h3 className="font-black text-xl md:text-2xl text-brand-darkCustom tracking-tight uppercase">
          {titulo}
        </h3>
        <p className="text-sm md:text-base text-brand-darkCustom/90 leading-relaxed font-medium">
          {descricao}
        </p>
      </div>
    </article>
  );
}

export default CardEspacos;
