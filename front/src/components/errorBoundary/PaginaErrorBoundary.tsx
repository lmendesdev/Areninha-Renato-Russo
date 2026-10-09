import { useNavigate } from "react-router-dom";
import { Header } from "../Header-Footer/Header";
import { Footer } from "../Header-Footer/Footer";

export function PaginaErrorBoundary() {
  const navegar = useNavigate();

  const voltarPaginaAnterior = (): void => {
    navegar(-1);
  };

  const recarregarPagina = (): void => {
    navegar(0);
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="bg-bg-grayCustom text-brand-darkCustom font-sans antialiased min-h-screen flex flex-col selection:bg-street-yellowCustom selection:text-brand-darkCustom"
    >
      <Header />
      <main className="grow relative flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-street-yellowCustom/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-energy-blueCustom/15 rounded-full blur-3xl pointer-events-none" />
        <section className="relative z-10 max-w-2xl w-full bg-bg-whiteCustom border-4 border-brand-darkCustom rounded-3xl p-8 md:p-14 sticker-shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-fest-orangeCustom text-white border-2 border-brand-darkCustom sticker-shadow-sm flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-5xl"
              aria-hidden="true"
            >
              warning
            </span>
          </div>
          <span className="bg-street-yellowCustom text-brand-darkCustom font-black text-xs uppercase px-3.5 py-1 rounded-full border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435] mb-4">
            Erro inesperado
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-darkCustom mb-4">
            Algo deu errado por aqui
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium text-brand-darkCustom/75 max-w-lg mx-auto leading-relaxed mb-8">
            Ocorreu um problema inesperado ao carregar esta página. Tente
            atualizar a tela ou volte para a página anterior.
          </p>
          <button
            type="button"
            onClick={recarregarPagina}
            className="inline-flex items-center gap-3 bg-street-yellowCustom hover:bg-fest-orangeCustom text-brand-darkCustom hover:text-white font-black text-sm md:text-base px-8 py-4 rounded-full uppercase tracking-wider justify-center border-2 border-brand-darkCustom sticker-shadow-md hover-sticker transition-colors cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-xl"
              aria-hidden="true"
            >
              refresh
            </span>
            <span>Tentar novamente</span>
          </button>
        </section>
        <button
          type="button"
          onClick={voltarPaginaAnterior}
          aria-label="Voltar para a página anterior"
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 inline-flex items-center gap-2.5 bg-street-yellowCustom hover:bg-fest-orangeCustom text-brand-darkCustom hover:text-white font-black text-xs md:text-sm uppercase tracking-wider px-5 py-3.5 rounded-full border-2 border-brand-darkCustom sticker-shadow-md hover-sticker transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl leading-none">
            arrow_back
          </span>
          <span>Voltar</span>
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default PaginaErrorBoundary;
