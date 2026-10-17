import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import { Adesivos } from "../components/adesivos/Adesivos";
import {
  CardProgramacao,
  type PropriedadesCardProgramacao,
} from "../components/cardProgramacao/CardProgramacao";
import { ErrorBoundary } from "react-error-boundary";
import { CardErrorBoundary } from "../components/errorBoundary/CardErrorBoundary";
import configuracaoHome from "../content/homePage/home.json";
import { formatarUrlEmbedYoutube } from "../utils/youtube";

const quantidadeProximosEventos = 3;

const modulosProximosEventos = import.meta.glob<PropriedadesCardProgramacao>(
  "../content/programacaoPage/programacao/*.json",
  { eager: true, import: "default" },
);
const listaEventos: readonly PropriedadesCardProgramacao[] = Object.values(
  modulosProximosEventos,
)
  .sort((eventoA, eventoB) => {
    const timestampA = new Date(
      eventoA.ano,
      eventoA.mes - 1,
      eventoA.dia,
    ).getTime();
    const timestampB = new Date(
      eventoB.ano,
      eventoB.mes - 1,
      eventoB.dia,
    ).getTime();
    return timestampB - timestampA;
  })
  .slice(0, quantidadeProximosEventos);

export function Home() {
  const [videoAtivo, setVideoAtivo] = useState<boolean>(false);
  const urlEmbedFinal = formatarUrlEmbedYoutube(
    configuracaoHome.linkVideoYoutube,
  );

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom antialiased flex flex-col min-h-screen selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <title>Areninha Cultural Renato Russo</title>
      <meta
        name="description"
        content="A Areninha Cultural Renato Russo é um espaço cultural na Ilha do Governador, Rio de Janeiro, oferecendo programação diversificada de música, teatro, dança, literatura e oficinas gratuitas para a comunidade."
      />
      <meta
        name="keywords"
        content="Areninha Cultural Renato Russo, Ilha do Governador, Rio de Janeiro, programação cultural, música, teatro, dança, literatura, oficinas gratuitas, espaço cultural"
      />
      <meta name="robots" content="index, follow" />
      <Header />
      <main className="grow w-full">
        <section
          id="hero-interactive-zone"
          className="relative bg-bg-whiteCustom overflow-hidden border-b-2 border-brand-darkCustom select-none"
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-street-yellowCustom/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-72 h-72 bg-energy-blueCustom/15 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(#0A2435 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />
          <Adesivos>
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-6 transform -rotate-2">
                  <span className="bg-street-yellowCustom text-brand-darkCustom font-black text-xs md:text-sm px-5 py-2 rounded-full border-2 border-brand-darkCustom sticker-shadow-sm inline-flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-fest-orangeCustom animate-pulse" />
                    Ilha do Governador • Rio de Janeiro
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-darkCustom tracking-tight leading-[1.05] mb-6">
                  Areninha Cultural <br />
                  <span>Renato Russo</span>
                </h1>
                <div className="space-y-4 mb-10 max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl font-bold text-brand-darkCustom leading-snug">
                    {configuracaoHome.subtituloHero}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-brand-darkCustom/80 leading-relaxed">
                    {configuracaoHome.descricaoHero}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Link
                    to="/programacao"
                    className="w-full sm:w-auto rounded-full bg-street-yellowCustom text-brand-darkCustom font-black text-base px-8 py-4 border-2 border-brand-darkCustom sticker-shadow-md hover-sticker flex items-center justify-center gap-2"
                  >
                    Ver Programação
                  </Link>
                  <Link
                    to="/oficina"
                    className="w-full sm:w-auto rounded-full bg-energy-blueCustom text-white font-black text-base px-8 py-4 border-2 border-brand-darkCustom sticker-shadow-md hover-sticker flex items-center justify-center gap-2"
                  >
                    Conhecer Oficinas
                  </Link>
                </div>
              </div>
            </div>
          </Adesivos>
        </section>
        <section className="bg-bg-grayCustom py-14 md:py-20 border-b-2 border-brand-darkCustom">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="bg-bg-whiteCustom rounded-3xl p-8 sm:p-12 border-2 border-brand-darkCustom sticker-shadow-lg text-center relative overflow-hidden group">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-fest-orangeCustom tracking-tight leading-none mb-4">
                  {configuracaoHome.numeroAtividades}
                </div>
                <div className="text-base sm:text-lg font-black text-brand-darkCustom max-w-xs mx-auto">
                  {configuracaoHome.tituloAtividades}
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-darkCustom/70 mt-4 max-w-sm mx-auto">
                  {configuracaoHome.descricaoAtividades}
                </p>
              </div>
              <div className="bg-bg-whiteCustom rounded-3xl p-3 sm:p-4 border-2 border-brand-darkCustom sticker-shadow-lg">
                <div className="aspect-video bg-brand-darkCustom rounded-2xl overflow-hidden relative border-2 border-brand-darkCustom">
                  {videoAtivo ? (
                    <iframe
                      className="w-full h-full"
                      src={urlEmbedFinal}
                      title="Vídeo Institucional — Areninha Cultural Renato Russo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setVideoAtivo(true)}
                      aria-label="Reproduzir vídeo institucional"
                      className="w-full h-full relative group cursor-pointer flex items-center justify-center"
                    >
                      <img
                        alt="Iluminação de palco da Areninha Cultural"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                        src={configuracaoHome.imagemCapaVideo}
                        width={640}
                        height={360}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-brand-darkCustom/30 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-street-yellowCustom border-2 border-brand-darkCustom sticker-shadow-md flex items-center justify-center text-brand-darkCustom group-hover:scale-110 transition-transform duration-200">
                          <span
                            className="material-symbols-outlined text-4xl sm:text-5xl ml-1"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            play_arrow
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-brand-darkCustom/90 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                        Assista ao vídeo institucional
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bg-whiteCustom py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-brand-darkCustom/10 pb-6">
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-darkCustom tracking-tight leading-none mt-1">
                  Próximos Eventos
                </h2>
                <p className="text-sm md:text-base font-medium text-brand-darkCustom/75 mt-1">
                  {configuracaoHome.subtituloProximosEventos}
                </p>
              </div>
              <Link
                to="/programacao"
                className="rounded-full bg-bg-grayCustom text-brand-darkCustom hover:bg-street-yellowCustom font-extrabold text-xs px-6 py-3 border-2 border-brand-darkCustom sticker-shadow-sm hover-sticker flex items-center gap-2 shrink-0 transition-all"
              >
                <span>Ver toda agenda</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {listaEventos.map((evento) => (
                <ErrorBoundary
                  key={evento.titulo}
                  fallback={<CardErrorBoundary />}
                >
                  <CardProgramacao
                    imagem={evento.imagem}
                    altImagem={evento.altImagem}
                    titulo={evento.titulo}
                    tag={evento.tag}
                    dia={evento.dia}
                    mes={evento.mes}
                    ano={evento.ano}
                    horario={evento.horario}
                    diaSemana={evento.diaSemana}
                    descricao={evento.descricao}
                    local={evento.local}
                    link={evento.link}
                    valor={evento.valor}
                  />
                </ErrorBoundary>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
