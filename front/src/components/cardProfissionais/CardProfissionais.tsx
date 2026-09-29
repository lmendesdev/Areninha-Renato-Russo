
export interface PropriedadesCardProfissionais {
  readonly imagem: string;
  readonly altImagem?: string;
  readonly nome: string;
  readonly tagFuncao: string;
  readonly descricao: string;
  readonly corTag?: OpcaoCorTag;
  readonly setor: string;
}

export type OpcaoCorTag = "azul" | "laranja" | "amarelo" | "preta";

function obterEstiloDaTag(cor?: string): string {

  const corFormatada = cor ? cor.toLowerCase() : "azul";

  switch (corFormatada) {
    case "laranja":
      return "bg-fest-orangeCustom text-white border-brand-darkCustom";
    case "amarelo":
      return "bg-street-yellowCustom text-brand-darkCustom border-brand-darkCustom";
    case "preta":
      return "bg-brand-darkCustom text-street-yellowCustom border-brand-darkCustom";
    case "azul":
    default:
      return "bg-energy-blueCustom text-white border-brand-darkCustom";
  }
}

export function CardProfissionais({
  imagem,
  altImagem,
  nome,
  tagFuncao,
  descricao,
  corTag = "azul",
  setor,
}: PropriedadesCardProfissionais) {

  const textoAlternativo: string = altImagem || nome;

  const estiloTag: string = obterEstiloDaTag(corTag);

  return (
    <article className="bg-white border-2 border-brand-darkCustom rounded-3xl overflow-hidden sticker-shadow-lg flex flex-col group transition-transform duration-300 hover:-translate-y-2 max-w-94">
      <div className="w-full h-80 overflow-hidden bg-slate-200 border-b-2 border-brand-darkCustom relative">
        <img
          alt={textoAlternativo}
          className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-500"
          src={imagem}
          loading="lazy"
          decoding="async"
        />
        {setor && (
          <div className="absolute top-4 right-4">
            <span className="bg-street-yellowCustom text-brand-darkCustom font-black text-xs uppercase px-3 py-1 rounded-full border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
              {setor}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <span
            className={`inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md border shadow-[1px_1px_0px_#0A2435] mb-3 ${estiloTag}`}
          >
            {tagFuncao}
          </span>
          <h3 className="text-2xl font-black text-brand-darkCustom leading-tight">
            {nome}
          </h3>
        </div>

        <p className="text-sm font-normal text-brand-darkCustom/75 mt-3 pt-3 border-t border-slate-200">
          {descricao}
        </p>
      </div>
    </article>
  );
}

export default CardProfissionais;