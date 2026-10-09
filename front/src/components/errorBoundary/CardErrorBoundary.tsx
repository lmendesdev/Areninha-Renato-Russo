import { useNavigate } from "react-router-dom";

export function CardErrorBoundary() {
    const navegar = useNavigate();
    const recarregarPagina = ():void => {
        navegar(0);
    }
  return (
    <article
      role="alert"
      aria-live="polite"
      className="bg-white border-2 border-brand-darkCustom rounded-3xl flex flex-col h-full min-h-96 w-full max-w-94 overflow-hidden sticker-shadow-lg"
    >
      <div className="relative w-full aspect-video border-b-2 border-brand-darkCustom bg-bg-creamCustom flex flex-col items-center justify-center p-6 shrink-0 overflow-hidden">
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="bg-street-yellowCustom text-brand-darkCustom font-black text-xs uppercase px-3 py-1 rounded-full border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
            Erro de exibição
          </span>
        </div>
        <div className="w-16 h-16 mt-4 sm:mt-0 rounded-2xl bg-fest-orangeCustom text-white border-2 border-brand-darkCustom sticker-shadow-sm flex items-center justify-center">
          <span
            className="material-symbols-outlined text-4xl"
            aria-hidden="true"
          >
            warning
          </span>
        </div>
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-fest-orangeCustom uppercase tracking-wide">
            <span
              className="material-symbols-outlined text-sm"
              aria-hidden="true"
            >
              error
            </span>
            <span>Falha ao carregar</span>
          </div>

          <h3 className="text-xl font-black text-brand-darkCustom mb-3 leading-snug">
            Não foi possível carregar este card
          </h3>

          <p className="text-sm font-medium text-brand-darkCustom/70 leading-relaxed">
            Ocorreu um erro inesperado ao exibir as informações deste item. Atualize a página ou tente novamente em instantes.
          </p>
        </div>

        <div className="pt-4 mt-6 border-t-2 border-brand-darkCustom/10 flex flex-col gap-3">
          <button
            type="button"
            onClick={recarregarPagina}
            className="w-full py-2.5 px-4 bg-street-yellowCustom hover:bg-fest-orangeCustom text-brand-darkCustom hover:text-white font-black text-xs uppercase tracking-wider rounded-xl border-2 border-brand-darkCustom sticker-shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-base"
              aria-hidden="true"
            >
              refresh
            </span>
            <span>Tentar novamente</span>
          </button>
          <div className="inline-flex items-center justify-center gap-2 text-xs font-black text-brand-darkCustom/60 uppercase tracking-wider">
            <span
              className="material-symbols-outlined text-base text-fest-orangeCustom"
              aria-hidden="true"
            >
              info
            </span>
            <span>Conteúdo temporariamente indisponível</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardErrorBoundary;
