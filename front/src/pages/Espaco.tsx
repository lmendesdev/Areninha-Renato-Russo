import { useState } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  CardEspacos,
  type PropriedadesCardEspacos,
} from "../components/cardEspacos/CardEspacos";
import holofotesHeroSvg from "../assets/espaco/holofotesHero.svg";

const URL_IMAGEM_ARQUITETONICA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgbxRbWGoE-Mv1tS1Jo2eFxDa2g_enZMDia_y7R9svJMxufhq0xI5PipXxPnePrR0qP4-APNkVSPeiPRZpHSWWchsYireC44T457zHPKw08U3lruXDgz-a3TS9AbKz5Rcd3F3ygjDZSmKA8_3opFs90FIUFbmXxjBLcnP5Go0B7hz6UkUhp40zmajVCA-9vdzwuL1oR9CpPMtq7P5DJSmT9kYMiAQV8fEb_6u6cNnuFho0555ho1n";

const URL_IMAGEM_VIDEO_INSTITUCIONAL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3gdu1geTy0ZYOzfXf7x4zJI1Ai94Ui-Ge8XIlM-b-qzp4NGaCVYepAXBD3oJwZNta8zstq5142Q1-VXzWBgzwq3IXJ5T7I2G-h7iHztVHPLbzjbcJRp9dwzjU8tqD-edJLQQoO44kZ21FpJCveb4TsoV8G2M2Anal-RhwnecUgRP9LuZC5Pj09Gu9R5qe22pg7vVVGwvZz6zkAnpcNjaxQhP45oJe84jbirbPviyrOchwvZxCdfP";

const URL_EMBED_VIDEO_YOUTUBE =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

const listaEspacos: readonly PropriedadesCardEspacos[] = [
  {
    tag: "320 Lugares • Climatizado",
    titulo: "TEATRO PRINCIPAL",
    descricao:
      "Estrutura técnica completa de sonorização e iluminação cênica para espetáculos, shows e festivais.",
    corTag: "amarelo",
  },
  {
    tag: "3 Salas Multiuso + Sala de Leitura",
    titulo: "SALAS DE FORMAÇÃO",
    descricao:
      "Ambientes formativos dedicados a oficinas de artes, dança, música, capoeira e foco em literatura infantojuvenil.",
    corTag: "azul",
  },
  {
    tag: "Integrada ao Parque Manuel Bandeira",
    titulo: "PRAÇA & ESPLANADA",
    descricao:
      "Espaço aberto para eventos comunitários, feiras criativas, intervenções urbanas e convivência ao ar livre.",
    corTag: "laranja",
  },
];

const itensInformacoesTecnicas: readonly string[] = [
  "Cobertura com isolamento termoacústico",
  "Camarins equipados e acessibilidade física",
  "Conexão direta com a esplanada do parque",
];

export function Espaco() {

  const [videoAtivo, setVideoAtivo] = useState<boolean>(false);

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom font-sans antialiased flex flex-col min-h-screen selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <Header paginaAtiva="Estrutura" />

      <main className="grow">
        <section className="bg-bg-whiteCustom border-b-2 border-brand-darkCustom py-16 md:py-24 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
            <img
              src={holofotesHeroSvg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-20">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-street-yellowCustom border-2 border-brand-darkCustom px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider sticker-shadow-md ring-4 ring-street-yellowCustom/20">
                <span className="w-2 h-2 rounded-full bg-fest-orangeCustom shrink-0" />
                <span>PARQUE POETA MANUEL BANDEIRA • COCOTÁ</span>
              </div>
            </div>
            <div className="relative inline-block max-w-4xl mx-auto mb-6">
              <div className="absolute -inset-4 bg-street-yellowCustom/30 blur-2xl rounded-full -z-10 pointer-events-none" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-darkCustom tracking-tight uppercase leading-none inline-flex flex-wrap items-center justify-center gap-3 md:gap-4">
                ESPAÇO E ESTRUTURA
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-medium text-brand-darkCustom/85 max-w-2xl mx-auto leading-relaxed mt-2">
              Um polo vibrante de cultura, formação e convivência comunitária no
              coração da Ilha do Governador.
            </p>
          </div>
        </section>
        <section className="bg-bg-grayCustom border-b-2 border-brand-darkCustom py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-black text-3xl md:text-4xl text-brand-darkCustom leading-tight uppercase">
                Infraestrutura completa para a cena artística carioca
              </h2>
              <div className="space-y-4 text-base md:text-lg text-brand-darkCustom/90 leading-relaxed font-medium">
                <p className="bg-bg-whiteCustom p-6 rounded-3xl border-2 border-brand-darkCustom sticker-shadow-lg">
                  A{" "}
                  <strong className="font-bold text-brand-darkCustom">
                    Areninha Cultural Renato Russo
                  </strong>{" "}
                  está localizada no Parque Poeta Manuel Bandeira, no Cocotá,
                  Ilha do Governador. O equipamento possui teatro climatizado
                  com capacidade para 320 pessoas, três salas multiuso
                  destinadas à formação, sala de leitura com foco em literatura
                  infantojuvenil e poesia e uma praça/área externa integrada ao
                  parque, utilizada para eventos, atividades culturais e feiras
                  comunitárias.
                </p>
                <p className="bg-bg-whiteCustom p-6 rounded-3xl border-2 border-brand-darkCustom sticker-shadow-lg">
                  A programação regular também utiliza diferentes ambientes do
                  equipamento, incluindo salas de atividades, área externa e
                  espaço principal da Areninha.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-4 border-brand-darkCustom shadow-[8px_8px_0px_#0A2435] bg-street-yellowCustom p-2">
                <div className="rounded-2xl overflow-hidden h-96 md:h-110 w-full border-2 border-brand-darkCustom">
                  <img
                    alt="Fotografia arquitetônica da Areninha Cultural com praça externa e público"
                    className="w-full h-full object-cover"
                    src={URL_IMAGEM_ARQUITETONICA}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F6F9FF] px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="font-black text-3xl md:text-4xl text-brand-darkCustom tracking-tight uppercase">
                Espaços de Criação e Encontro
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6 justify-items-center">
              {listaEspacos.map((espaco) => (
                <CardEspacos
                  key={espaco.titulo}
                  tag={espaco.tag}
                  titulo={espaco.titulo}
                  descricao={espaco.descricao}
                  corTag={espaco.corTag}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-bg-whiteCustom border-b-2 border-brand-darkCustom px-6 md:px-12 pt-2 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-stretch gap-6">
              <div className="bg-bg-whiteCustom rounded-[28px] border-4 border-brand-darkCustom sticker-shadow-lg overflow-hidden flex flex-col relative pt-0">
                <div className="h-2.5 w-full bg-street-yellowCustom" />
                <div className="p-6 md:p-8 flex flex-col gap-6 grow">
                  <div className="flex items-center gap-3">
                    <h3 className="font-black text-xl md:text-2xl text-brand-darkCustom tracking-tight uppercase">
                      INFORMAÇÕES TÉCNICAS
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-brand-darkCustom leading-relaxed font-medium">
                    O equipamento possui teatro climatizado e infraestrutura
                    técnica de sonorização e iluminação cênica destinada à
                    realização de espetáculos teatrais, shows musicais,
                    oficinas, ensaios e intervenções comunitárias.
                  </p>
                  <div className="rounded-2xl border-2 border-brand-darkCustom p-5 space-y-4 bg-bg-whiteCustom mt-auto">
                    {itensInformacoesTecnicas.map((itemTecnico) => (
                      <div
                        key={itemTecnico}
                        className="flex items-center gap-3 text-left"
                      >
                        <span className="material-symbols-outlined text-energy-blueCustom text-xl shrink-0">
                          check_circle
                        </span>
                        <span className="font-bold text-sm md:text-base text-brand-darkCustom">
                          {itemTecnico}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-bg-whiteCustom rounded-[28px] border-4 border-brand-darkCustom sticker-shadow-lg overflow-hidden flex flex-col relative pt-0">
                <div className="h-2.5 w-full bg-fest-orangeCustom" />
                <div className="p-6 md:p-8 flex flex-col gap-6 grow">
                  <div className="flex items-center gap-3">
                    <h3 className="font-black text-xl md:text-2xl text-brand-darkCustom tracking-tight uppercase">
                      CAPACIDADE
                    </h3>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl border-2 border-brand-darkCustom p-4 bg-bg-whiteCustom">
                    <div className="flex items-center gap-3">
                      <span className="font-black text-base md:text-lg text-brand-darkCustom">
                        Teatro Principal:
                      </span>
                    </div>
                    <span className="bg-street-yellowCustom text-brand-darkCustom font-black text-sm md:text-base px-5 py-1.5 rounded-full border-2 border-brand-darkCustom">
                      320 pessoas
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl border-2 border-brand-darkCustom p-4 bg-bg-whiteCustom">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <span className="font-black text-base md:text-lg text-brand-darkCustom">
                        Outros Ambientes:
                      </span>
                    </div>
                    <span className="bg-bg-whiteCustom text-brand-darkCustom font-bold text-sm md:text-base px-5 py-1.5 rounded-full border-2 border-brand-darkCustom">
                      A confirmar
                    </span>
                  </div>
                  <div className="rounded-2xl border-2 border-brand-darkCustom bg-[#F6F9FF] p-5 mt-auto">
                    <p className="text-xs md:text-sm text-brand-darkCustom/90 leading-relaxed font-medium">
                      * Lotação regulamentada conforme as normas de segurança do
                      Corpo de Bombeiros e diretrizes da Secretaria Municipal de
                      Cultura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bg-grayCustom py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-bg-whiteCustom rounded-3xl p-3 sm:p-4 border-2 border-brand-darkCustom sticker-shadow-lg max-w-4xl mx-auto">
              <div className="aspect-video bg-brand-darkCustom rounded-2xl overflow-hidden relative border-2 border-brand-darkCustom">
                {videoAtivo ? (
                  <iframe
                    className="w-full h-full"
                    src={URL_EMBED_VIDEO_YOUTUBE}
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
                      src={URL_IMAGEM_VIDEO_INSTITUCIONAL}
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Espaco;