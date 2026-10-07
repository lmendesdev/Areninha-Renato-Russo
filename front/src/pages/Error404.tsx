import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";

const passoVoltarHistorico = -1;

export function Error404() {
  const navegar = useNavigate();

  function voltarPaginaAnterior() {
    navegar(passoVoltarHistorico);
  }

  return (
    <div className="bg-bg-grayCustom text-brand-darkCustom font-sans antialiased min-h-screen flex flex-col selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <Header />

      <main className="grow relative flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-street-yellowCustom/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-energy-blueCustom/15 rounded-full blur-3xl pointer-events-none" />

        <section className="relative z-10 max-w-2xl w-full bg-bg-whiteCustom border-4 border-brand-darkCustom rounded-3xl p-8 md:p-14 sticker-shadow-lg text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-brand-darkCustom tracking-tighter leading-none mb-4">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-darkCustom mb-4">
            Página não encontrada
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-medium text-brand-darkCustom/75 max-w-lg mx-auto leading-relaxed">
            Parece que você entrou nos bastidores errados ou o endereço que
            procurou não faz parte do nosso espaço cultural.
          </p>
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

export default Error404;
