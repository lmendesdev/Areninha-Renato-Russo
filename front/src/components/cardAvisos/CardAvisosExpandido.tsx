export interface PropriedadesCardAvisosExpandido {
  readonly titulo: string;
  readonly dia: number;
  readonly mes: string;
  readonly ano: number;
  readonly descricao: string;
  readonly imagem: string;
  readonly altImagem?: string;
  readonly funcaoSair?: () => void;
}

export function CardAvisosExpandido({
  titulo,
  dia,
  mes,
  ano,
  descricao,
  imagem,
  altImagem,
  funcaoSair,
}: PropriedadesCardAvisosExpandido) {
  const textoAlternativo: string = altImagem || titulo;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-brand-darkCustom/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-7xl bg-white border-4 border-brand-darkCustom rounded-3xl sticker-shadow-lg overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="w-full md:w-1/2 p-5 sm:p-7 md:p-8 bg-[#F8FAFC] border-b-4 md:border-b-0 md:border-r-4 border-brand-darkCustom flex flex-col justify-between shrink-0">
          <div className="relative w-full aspect-4/3 md:aspect-4/5 max-h-150 rounded-2xl overflow-hidden border-2 border-brand-darkCustom shadow-[5px_5px_0px_#0A2435] bg-brand-darkCustom">
            <img
              alt={textoAlternativo}
              className="w-full h-full object-cover"
              src={imagem}
              loading="lazy"
              decoding="async"
            />
          </div>
            <div className="mt-4 hidden md:flex items-center justify-between text-xs text-brand-darkCustom/80 font-bold uppercase tracking-wider pt-2 border-t-2 border-brand-darkCustom/15">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-energy-blueCustom">
                  hub
                </span>
                Areninha Renato Russo
              </span>
              <span className="bg-street-yellowCustom text-brand-darkCustom px-2 py-0.5 rounded text-[10px] font-black border border-brand-darkCustom">
                Cocotá • Ilha
              </span>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-9 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-darkCustom/75 uppercase tracking-wide">
              <span className="material-symbols-outlined text-[17px] text-energy-blueCustom">
                calendar_today
              </span>
              <span>
                {dia} de {mes} de {ano}
              </span>
            </div>
            <h2 className="font-extrabold text-2xl sm:text-3xl text-brand-darkCustom tracking-tight leading-tight">
              {titulo}
            </h2>
            <div className="h-0.5 w-full bg-brand-darkCustom/15 rounded" />
            <div className="text-sm md:text-base text-brand-darkCustom/80 leading-relaxed font-medium whitespace-pre-line">
              <p>{descricao}</p>
            </div>
          </div>
          <div className="pt-5 mt-6 border-t-2 border-brand-darkCustom/15 flex items-center justify-end w-full">
            <button
              type="button"
              onClick={funcaoSair}
              className="w-full sm:w-auto px-8 py-3 font-bold text-xs uppercase tracking-widest text-brand-darkCustom hover:bg-bg-grayCustom rounded-full border-2 border-brand-darkCustom transition-all duration-200 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAvisosExpandido;