import { useState } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  CardAvisos,
  type PropriedadesCardAvisos,
} from "../components/avisos/CardAvisos";
import { AvisoPrincipal } from "../components/avisos/NoticiaPrincipal";
import { ErrorBoundary } from "react-error-boundary";
import { CardErrorBoundary } from "../components/errorBoundary/CardErrorBoundary";
import { NoticiaPrincipalErrorBoundary } from "../components/errorBoundary/NoticiaPrincipalErrorBoundary";
import noticiaPrincipal from "../content/noticiasPage/noticia-principal.json";

const quantidadePorCarregamento = 3;

const modulosNoticias = import.meta.glob<PropriedadesCardAvisos>(
  "../content/noticiasPage/noticias/*.json",
  { eager: true, import: "default" },
);

const listaNoticias: readonly PropriedadesCardAvisos[] = Object.values(
  modulosNoticias,
).sort((noticiaA, noticiaB) => {
  const timestampA = new Date(
    noticiaA.ano,
    noticiaA.mes - 1,
    noticiaA.dia,
  ).getTime();
  const timestampB = new Date(
    noticiaB.ano,
    noticiaB.mes - 1,
    noticiaB.dia,
  ).getTime();
  return timestampB - timestampA;
});

export function Noticias() {
  const [noticiasExibidas, setNoticiasExibidas] = useState<
    readonly PropriedadesCardAvisos[]
  >(() => listaNoticias.slice(0, quantidadePorCarregamento));

  function carregarMaisNoticias() {
    setNoticiasExibidas((noticiasAtuais) => {
      const indiceInicial = noticiasAtuais.length;
      const indiceFinal = indiceInicial + quantidadePorCarregamento;
      const novasNoticias = listaNoticias.slice(indiceInicial, indiceFinal);

      return [...noticiasAtuais, ...novasNoticias];
    });
  }

  const possuiMaisNoticias = noticiasExibidas.length < listaNoticias.length;

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom font-sans antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <title>Notícias da Areninha Cultural Renato Russo</title>
      <meta
        name="description"
        content="Fique por dentro das últimas notícias e atualizações da Areninha Cultural Renato Russo, incluindo eventos, oficinas, apresentações e novidades sobre a programação cultural na Ilha do Governador."
      />
      <meta
        name="keywords"
        content="Areninha Cultural Renato Russo, notícias, atualizações, eventos culturais, oficinas, apresentações, programação cultural, Ilha do Governador, Rio de Janeiro"
      />
      <meta name="robots" content="index, follow" />
      <Header paginaAtiva="Notícias" />
      <main className="grow">
        <section className="w-full bg-bg-whiteCustom relative py-12 md:py-16 px-6 md:px-12 border-b-2 border-brand-darkCustom">
          <div className="max-w-7xl mx-auto">
            <ErrorBoundary fallback={<NoticiaPrincipalErrorBoundary />}>
              <AvisoPrincipal {...noticiaPrincipal} />
            </ErrorBoundary>
          </div>
        </section>
        <section className="py-10 px-6 md:px-12 bg-bg-grayCustom border-b-2 border-brand-darkCustom">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-brand-darkCustom tracking-tight whitespace-nowrap">
                  Últimas Atualizações
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-12 bg-bg-whiteCustom py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {noticiasExibidas.map((noticia) => (
                <ErrorBoundary
                  key={noticia.titulo}
                  fallback={<CardErrorBoundary />}
                >
                  <CardAvisos
                    imagem={noticia.imagem}
                    altImagem={noticia.altImagem}
                    dia={noticia.dia}
                    mes={noticia.mes}
                    ano={noticia.ano}
                    titulo={noticia.titulo}
                    descricao={noticia.descricao}
                  />
                </ErrorBoundary>
              ))}
            </div>
            {possuiMaisNoticias && (
              <div className="mt-16 flex justify-center">
                <button
                  type="button"
                  onClick={carregarMaisNoticias}
                  className="inline-flex items-center gap-3 bg-bg-whiteCustom text-brand-darkCustom font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full border-2 border-brand-darkCustom sticker-shadow-lg hover:bg-street-yellowCustom hover-sticker cursor-pointer"
                >
                  <span className="material-symbols-outlined">refresh</span>
                  <span>Carregar mais notícias</span>
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Noticias;
