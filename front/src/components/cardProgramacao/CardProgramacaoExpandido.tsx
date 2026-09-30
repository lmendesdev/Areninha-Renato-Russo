import IngressoButton from "../ingressoButton/IngressoButton";

export interface PropriedadesCardProgramacaoExpandido {
  readonly tag: string;
  readonly titulo: string;
  readonly descricao: string;
  readonly imagem: string;
  readonly altImagem: string;
  readonly dia: number;
  readonly mes: number;
  readonly ano: number;
  readonly horario: string;
  readonly diaSemana: string;
  readonly local: string;
  readonly valor?: number;
  readonly link: string;
  readonly aoFechar?: () => void;
}

const nomeDosMeses: readonly string[] = [
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

function formatarNomeDoMes(mes: number) {
  const indiceDoMes = mes - 1;
  return nomeDosMeses[indiceDoMes];
}

export function CardProgramacaoExpandido({
  tag,
  titulo,
  descricao,
  imagem,
  altImagem,
  dia,
  mes,
  ano,
  horario,
  diaSemana,
  local,
  valor,
  link,
  aoFechar,
}: PropriedadesCardProgramacaoExpandido) {
  const textoAlternativo: string = altImagem || titulo;
  const nomeDoMes: string = formatarNomeDoMes(mes);
  const valorIngresso: number | string | undefined =
    valor === undefined ? "Valor a definir" : valor ? valor : "Evento gratuito";
  const meia: number =
    typeof valorIngresso === "number" ? valorIngresso / 2 : 0;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-brand-darkCustom/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border-4 border-brand-darkCustom rounded-3xl shadow-[10px_10px_0px_#FFD600,10px_10px_0px_4px_#0A2435] overflow-hidden flex flex-col md:flex-row my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white border-2 border-brand-darkCustom text-brand-darkCustom font-black flex items-center justify-center shadow-[2px_2px_0px_#0A2435] hover:bg-bg-grayCustom hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
        >
          ✕
        </button>
        <div className="w-full md:w-5/12 p-5 sm:p-6 md:p-8 bg-[#F8FAFC] border-b-4 md:border-b-0 md:border-r-4 border-brand-darkCustom flex flex-col justify-center shrink-0">
          <div className="relative w-full aspect-4/5 sm:aspect-square md:aspect-auto md:h-full min-h-75 md:min-h-105 rounded-2xl overflow-hidden border-4 border-brand-darkCustom shadow-[6px_6px_0px_#0A2435]">
            <img
              alt={textoAlternativo}
              className="w-full h-full object-cover"
              src={imagem}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-fest-orangeCustom text-white font-extrabold text-xs tracking-wider uppercase border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
                {tag}
              </span>
            </div>
            <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-darkCustom tracking-tight leading-tight mb-4">
              {titulo}
            </h2>
            <div className="text-sm sm:text-base text-brand-darkCustom/80 leading-relaxed mb-6 font-medium whitespace-pre-line">
              <p>{descricao}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-bg-grayCustom border-2 border-brand-darkCustom rounded-xl p-3 shadow-[3px_3px_0px_#0A2435] flex flex-col justify-center">
                <span className="text-fest-orangeCustom font-bold text-xs uppercase mb-1">
                  Data
                </span>
                <p className="font-extrabold text-sm text-brand-darkCustom">
                  {diaSemana}, {dia} de {nomeDoMes} de {ano}
                </p>
                <p className="text-xs font-semibold text-brand-darkCustom/70">
                  às {horario}
                </p>
              </div>
              <div className="bg-bg-grayCustom border-2 border-brand-darkCustom rounded-xl p-3 shadow-[3px_3px_0px_#0A2435] flex flex-col justify-center">
                <span className="text-energy-blueCustom font-bold text-xs uppercase mb-1">
                  Local
                </span>
                <p className="font-extrabold text-sm text-brand-darkCustom">
                  {local}
                </p>
              </div>
              <div className="bg-bg-grayCustom border-2 border-brand-darkCustom rounded-xl p-3 shadow-[3px_3px_0px_#0A2435] flex flex-col justify-center">
                <span className="text-brand-darkCustom font-bold text-xs uppercase mb-1">
                  Ingresso
                </span>
                <p className="font-extrabold text-sm text-brand-darkCustom">
                  {typeof valorIngresso === "number"
                    ? `R$ ${valorIngresso} / R$ ${meia}`
                    : valorIngresso}
                </p>
                <p className="text-xs font-semibold text-brand-darkCustom/70">
                  {typeof valorIngresso === "number" ? "Total / Meia" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5 border-t-2 border-brand-darkCustom/15 flex flex-col-reverse sm:flex-row items-center justify-end gap-3.5">
            <button
              type="button"
              onClick={aoFechar}
              className="w-full sm:w-auto px-6 py-3 font-bold text-xs uppercase tracking-widest text-brand-darkCustom hover:bg-bg-grayCustom rounded-full border-2 border-brand-darkCustom transition-all duration-200 cursor-pointer"
            >
              Fechar
            </button>
            <IngressoButton destino={link} corFuros="bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProgramacaoExpandido;
