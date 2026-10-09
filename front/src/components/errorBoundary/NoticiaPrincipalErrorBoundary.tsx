import { useNavigate } from "react-router-dom";

export function NoticiaPrincipalErrorBoundary() {
  const navegar = useNavigate();

  const recarregarPagina = (): void => {
    navegar(0);
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
    >
      <div className="w-full lg:w-7/12 flex flex-col items-start text-left order-2 lg:order-1">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <span className="inline-flex items-center bg-street-yellowCustom text-brand-darkCustom text-xs font-black uppercase px-3 py-1.5 rounded-full border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435]">
            Erro de exibição
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-brand-darkCustom mb-5 tracking-tight leading-[1.15]">
          Não foi possível carregar a notícia em destaque
        </h1>
        <p className="text-base md:text-lg text-brand-darkCustom/80 mb-8 max-w-2xl font-medium leading-relaxed">
          Ocorreu um erro inesperado ao exibir a matéria principal. Atualize a
          página para tentar novamente ou confira as demais atualizações logo
          abaixo.
        </p>
        <div className="flex items-center gap-6 mb-8 text-sm font-bold text-fest-orangeCustom uppercase tracking-wide">
          <span className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-lg"
              aria-hidden="true"
            >
              error
            </span>
            <span>Destaque temporariamente indisponível</span>
          </span>
        </div>
        <button
          type="button"
          onClick={recarregarPagina}
          className="inline-flex items-center gap-3 bg-street-yellowCustom hover:bg-fest-orangeCustom text-brand-darkCustom hover:text-white font-black text-base px-8 py-4 rounded-full uppercase tracking-wider justify-center border-2 border-brand-darkCustom sticker-shadow-lg hover-sticker transition-colors cursor-pointer"
        >
          <span
            className="material-symbols-outlined text-xl"
            aria-hidden="true"
          >
            refresh
          </span>
          <span>Tentar novamente</span>
        </button>
      </div>
      <div className="w-full lg:w-5/12 order-1 lg:order-2">
        <div className="relative">
          <div className="absolute inset-0 bg-energy-blueCustom rounded-3xl translate-x-3 translate-y-3 border-2 border-brand-darkCustom" />
          <div className="relative rounded-3xl border-2 border-brand-darkCustom overflow-hidden bg-bg-creamCustom aspect-4/3 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-2xl bg-fest-orangeCustom text-white border-2 border-brand-darkCustom sticker-shadow-sm flex items-center justify-center mb-4">
              <span
                className="material-symbols-outlined text-5xl"
                aria-hidden="true"
              >
                warning
              </span>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-brand-darkCustom/70">
              Falha ao carregar imagem e conteúdo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticiaPrincipalErrorBoundary;
