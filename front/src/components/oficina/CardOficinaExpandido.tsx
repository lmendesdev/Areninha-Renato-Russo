export interface PropriedadesCardOficinaExpandido {
  readonly titulo: string;
  readonly descricao: string;
  readonly imagem: string;
  readonly altImagem: string;
  readonly categoria: string;
  readonly diaSemana: string;
  readonly horario: string;
  readonly professor: string;
  readonly faixaEtaria: string;
  readonly modalidade: string;
  readonly local: string;
  readonly vagas: string;
  readonly linkInscricao: string;
  readonly aoFechar: () => void;
}

const localPadrao: string = "Sala de Oficinas";
const vagasOficina: string = "Limitadas (Secretaria)";

export function CardOficinaExpandido({
  titulo,
  descricao,
  imagem,
  altImagem,
  categoria,
  diaSemana,
  horario,
  professor,
  faixaEtaria,
  modalidade,
  local = localPadrao,
  vagas = vagasOficina,
  linkInscricao,
  aoFechar,
}: PropriedadesCardOficinaExpandido) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-brand-darkCustom/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border-4 border-brand-darkCustom rounded-3xl shadow-[10px_10px_0px_#FFD600,10px_10px_0px_4px_#0A2435] overflow-hidden flex flex-col md:flex-row my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white border-2 border-brand-darkCustom text-brand-darkCustom font-black flex items-center justify-center shadow-[2px_2px_0px_#0A2435] hover:bg-bg-grayCustom hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
        >
          ✕
        </button>
        <div className="w-full md:w-[40%] p-5 sm:p-6 md:p-7 bg-[#F8FAFC] border-b-4 md:border-b-0 md:border-r-4 border-brand-darkCustom flex flex-col justify-center shrink-0">
          <div className="relative w-full aspect-4/5 sm:aspect-square md:aspect-auto md:h-full min-h-75 md:min-h-110 rounded-3xl overflow-hidden border-4 border-brand-darkCustom shadow-[6px_6px_0px_#0A2435]">
            <img
              alt={altImagem}
              className="w-full h-full object-cover"
              src={imagem}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-9 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-street-yellowCustom text-brand-darkCustom font-extrabold text-[11px] tracking-wider uppercase border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
                {faixaEtaria}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-energy-blueCustom text-white font-extrabold text-[11px] tracking-wider uppercase border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
                {categoria}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white text-brand-darkCustom font-extrabold text-[11px] tracking-wider uppercase border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
                {diaSemana} - {horario}
              </span>
            </div>
            <div className="mb-3">
              <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-brand-darkCustom tracking-tight leading-tight">
                {titulo}
              </h2>
              <div className="flex items-center gap-1.5 text-sm font-bold text-fest-orangeCustom mt-1">
                <span className="material-symbols-outlined text-[18px]">
                  person
                </span>
                <span>{professor}</span>
              </div>
            </div>
            <div className="text-sm text-brand-darkCustom/80 leading-relaxed mb-5 font-medium whitespace-pre-line">
              <p>{descricao}</p>
            </div>
            <div className="border-2 border-brand-darkCustom rounded-2xl p-4 shadow-[4px_4px_0px_#0A2435] mb-5 bg-[#FAFAFA] bg-linear-gradient(#0A243512_1px,transparent_1px) bg-size-[100%_28px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                <div className="flex md:flex-col lg:flex items-baseline gap-1.5 text-xs sm:text-sm">
                  <span className="font-extrabold text-brand-darkCustom uppercase tracking-wide shrink-0">
                    Modalidade:
                  </span>
                  <span className="font-semibold text-brand-darkCustom/80 border-b border-brand-darkCustom/30 pb-0.5 w-full">
                    {modalidade}
                  </span>
                </div>
                <div className="flex md:flex-col lg:flex items-baseline gap-1.5 text-xs sm:text-sm">
                  <span className="font-extrabold text-brand-darkCustom uppercase tracking-wide shrink-0">
                    Professor(a):
                  </span>
                  <span className="font-semibold text-brand-darkCustom/80 border-b border-brand-darkCustom/30 pb-0.5 w-full">
                    {professor}
                  </span>
                </div>
                <div className="flex md:flex-col lg:flex items-baseline gap-1.5 text-xs sm:text-sm">
                  <span className="font-extrabold text-brand-darkCustom uppercase tracking-wide shrink-0">
                    Local:
                  </span>
                  <span className="font-semibold text-brand-darkCustom/80 border-b border-brand-darkCustom/30 pb-0.5 w-full">
                    {local}
                  </span>
                </div>
                <div className="flex md:flex-col lg:flex items-baseline gap-1.5 text-xs sm:text-sm">
                  <span className="font-extrabold text-brand-darkCustom uppercase tracking-wide shrink-0">
                    Vagas:
                  </span>
                  <span className="font-semibold text-brand-darkCustom/80 border-b border-brand-darkCustom/30 pb-0.5 w-full">
                    {vagas}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t-2 border-brand-darkCustom/15 flex flex-col-reverse sm:flex-row items-center justify-end gap-3.5">
            <button
              type="button"
              onClick={aoFechar}
              className="w-full sm:w-auto px-6 py-2.5 font-bold text-xs uppercase tracking-widest text-brand-darkCustom hover:bg-bg-grayCustom rounded-full border-2 border-brand-darkCustom transition-all duration-200 cursor-pointer"
            >
              Fechar
            </button>
            <a
              href={linkInscricao}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white border-2 border-brand-darkCustom rounded-lg shadow-[3px_3px_0px_#0A2435] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#0A2435] transition-all duration-150 cursor-pointer"
            >
              <span className="font-black text-sm tracking-wider uppercase text-brand-darkCustom underline underline-offset-4 decoration-2 decoration-brand-darkCustom">
                Preencher Inscrição
              </span>
              <span className="material-symbols-outlined text-brand-darkCustom text-lg">
                edit
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOficinaExpandido;
