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

const URL_IMAGEM_VIDEO_INSTITUCIONAL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3gdu1geTy0ZYOzfXf7x4zJI1Ai94Ui-Ge8XIlM-b-qzp4NGaCVYepAXBD3oJwZNta8zstq5142Q1-VXzWBgzwq3IXJ5T7I2G-h7iHztVHPLbzjbcJRp9dwzjU8tqD-edJLQQoO44kZ21FpJCveb4TsoV8G2M2Anal-RhwnecUgRP9LuZC5Pj09Gu9R5qe22pg7vVVGwvZz6zkAnpcNjaxQhP45oJe84jbirbPviyrOchwvZxCdfP";

const URL_EMBED_VIDEO_YOUTUBE =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

const PROXIMOS_EVENTOS: readonly PropriedadesCardProgramacao[] = [
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1UbGwsSH-78UDp2FCkVCc4Rt59x6LdVJqYGxzwFIk1QeQhQ6lr4zM8GcGvLC7_4piB8CEC-Hv-q2p8sgMgm-amxqE5Xibk5DVyxBISanWea_xudXmVRhjnZLiUOhGANOoegAgKvoTZBetPY8vZ5nlwPL9lBvdsLYo8NMLetdBJX2n9YgPSSVLCX2arwIo6y8EbykxALKLsARA9_vAiyFUBxQYZpjTrP2jaa-KabeV5NzpkRQLV7IzDmels",
    altImagem: "Minha Voz, Nosso Samba — Marinho",
    titulo: "Minha Voz, Nosso Samba — Marinho",
    tag: "SHOW",
    dia: 22,
    mes: 8,
    ano: 2026,
    horario: "20h",
    diaSemana: "Sábado",
    descricao:
      "Um espetáculo inesquecível celebrando as raízes do samba com a voz marcante e calorosa de Marinho.",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    link: "#",
    valor: 0,
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1UyhOO4g--QU8-7nkKuCQUJEZjA7pSFUcwa8DAQGFGEuooyYKKgwaFlTS9qyvQd_QjthIo29Hs6l8Jh5-YlwrK1qvkvvjWdqMjeD-ZgFeSgGQolAtet5ifbR9ZXT6Qoxi2moAq_jkOiqBpmKtVIe39RzuwQo3lmQhdeVHTgQr8HLf46PwT8dfUOxP2iRMwRSoh-VAgT_0C1en88X9XWVHa2wlW0uMJ4ij18CjxNxJSbfZAaiDPRsgHQGw",
    altImagem: "Felipe Ferreira — O Novo Show",
    titulo: "Felipe Ferreira — O Novo Show",
    tag: "SHOW",
    dia: 28,
    mes: 8,
    ano: 2026,
    horario: "20h",
    diaSemana: "Sexta-feira",
    descricao:
      "Apresentação inédita trazendo os novos sucessos e clássicos da carreira com arranjos eletrizantes.",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    link: "#",
    valor: 0,
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1UWD4dCaxZfyxRJuo2j8WyWxjLarfkAcH-O2PazLsLeiJkUa_SR_yg2fM06qYd8yka0w7kkuNM8_9ghnAf6UokxeDoJAm-naMEsrf3a9S1QYHhPPbOa4PwvY5dZ2SZPwGp8H6eG69IlUDvuTajGpLnbjvOfp7lHmYrQKUoL_7gugClXN0RpvSA7yHizmQO44dt09MpLHmWg1NInBVplav6Q97GPWZCWN3DKA-DmsgadVUEKp_D11uKGAWA",
    altImagem: "Baia — Solar ao Vivo",
    titulo: "Baia — Solar ao Vivo",
    tag: "SHOW",
    dia: 29,
    mes: 8,
    ano: 2026,
    horario: "20h",
    diaSemana: "Sábado",
    descricao:
      "Energia contagiante e muita música boa no aguardado repertório do aclamado show Solar ao Vivo.",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    link: "#",
    valor: 0,
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1W1p3n_V19a5LTdyqw-cBiziibDl2koPlQgdQbVmiiA7-4pTy0Ucvkuj_FC-hyFl0xLokY9j79YM4H2iefBBzcLPGnjahhW1HL2LcOy8WmSzMaRcI46HFLexP91uvp57Z4G4kKBIKiJOCycUrZquVYTt7g_tLC5Dqe3U9TplBP19d18RaArysAMpcbxHNGQetILrm6Tw5NpdoRgnI6U-fT6xcSqajGgG-S1EwJAJiqHHc6ZzSbwq-mt1ho",
    altImagem: "KD O Show? — Stand Up Daniel Lopes e Kwesny",
    titulo: "KD O Show? — Stand Up Daniel Lopes e Kwesny",
    tag: "COMÉDIA",
    dia: 4,
    mes: 9,
    ano: 2026,
    horario: "20h",
    diaSemana: "Sexta-feira",
    descricao:
      "Noite de muitas risadas e descontração com a química afiada dos comediantes Daniel Lopes e Kwesny.",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    link: "#",
    valor: 0,
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1W4vQbdMMOaasv_HBdeiiyBjldZ--SCs7OX0zJCM1YumvGER8ztzT2sOML3QjaSDVP5Hee0GFE7Ugj3nVmxUr9T9WuKe2xma6G19lgJqzLLfAvre3QexlWR0svoPWjGLrZV3P1EuJLPARGO_RbO8uZ2d661RJHs_ENPbAj7Am-c7_I2te6XGgCRMhdQyB_xP02OKlCvj008jcbS2bN-0gGwhCDYbh3y240P-OQSlEBDC1qQWGBRe2I-jQ",
    altImagem: "Era Uma Vez... Em Movimento",
    titulo: "Era Uma Vez... Em Movimento",
    tag: "TEATRO",
    dia: 5,
    mes: 9,
    ano: 2026,
    horario: "16h",
    diaSemana: "Sábado",
    descricao:
      "Um espetáculo teatral envolvente que mistura contação de histórias lúdicas e vibrante expressão corporal.",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    link: "#",
    valor: 0,
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1VX6ozUpDPFFywbhI9fMuqMLfqZBYcM5shNdgiSdy32RQMKHvtyZrchi2PcqJUX9jrxn5AGGRaq7Cg3VD00sJNp7Pe5dVzjMJ9ZglbGp4fFSwkUN18NMjSocjYZ0Evp-efld0upV2v7hDvxZHNcGQmHnPhCOnA7ci5rE97nHZ2jfAmB5YqSVDkSIoFdTFMLqfUlkcz3Ioq-CMoVgx8hUPRpZ3sozKpWqD7RxRTtFnrf4Q9PwfJ2yVAnJ-w",
    altImagem: "Class Rock — Concerto à Luz de Velas",
    titulo: "Class Rock — Concerto à Luz de Velas",
    tag: "CONCERTO",
    dia: 6,
    mes: 9,
    ano: 2026,
    horario: "19h",
    diaSemana: "Domingo",
    descricao:
      "Clássicos do rock internacional reinterpretados em um ambiente intimista e mágico iluminado por velas.",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    link: "#",
    valor: 0,
  },
];

export function Home() {
  const [videoAtivo, setVideoAtivo] = useState<boolean>(false);

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom antialiased flex flex-col min-h-screen selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <title>Areninha Cultural Renato Russo</title>
      <meta name="description" content="A Areninha Cultural Renato Russo é um espaço cultural na Ilha do Governador, Rio de Janeiro, oferecendo programação diversificada de música, teatro, dança, literatura e oficinas gratuitas para a comunidade." />
      <meta name="keywords" content="Areninha Cultural Renato Russo, Ilha do Governador, Rio de Janeiro, programação cultural, música, teatro, dança, literatura, oficinas gratuitas, espaço cultural" />
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
                  <span className="bg-street-yellowCustom text-brand-darkCustom font-black text-xs md:text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-brand-darkCustom sticker-shadow-sm inline-flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-fest-orangeCustom animate-pulse" />
                    Ilha do Governador • Rio de Janeiro
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-darkCustom uppercase tracking-tight leading-[1.05] mb-6">
                  Areninha Cultural <br />
                  <span>Renato Russo</span>
                </h1>
                <div className="space-y-4 mb-10 max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl font-bold text-brand-darkCustom leading-snug">
                    Cultura, arte, formação e convivência na Ilha do Governador.
                  </p>
                  <p className="text-sm sm:text-base font-medium text-brand-darkCustom/80 leading-relaxed">
                    A Areninha Cultural Renato Russo é um equipamento cultural
                    da Secretaria Municipal de Cultura do Rio de Janeiro,
                    localizado no Cocotá, na Ilha do Governador, e co-gerido
                    pelo Instituto Usina Social. O espaço promove o acesso à
                    cultura, à formação artística e à convivência...
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Link
                    to="/programacao"
                    className="w-full sm:w-auto rounded-full bg-street-yellowCustom text-brand-darkCustom font-black text-base uppercase tracking-wider px-8 py-4 border-2 border-brand-darkCustom sticker-shadow-md hover-sticker flex items-center justify-center gap-2"
                  >
                    Ver Programação
                  </Link>
                  <Link
                    to="/oficina"
                    className="w-full sm:w-auto rounded-full bg-energy-blueCustom text-white font-black text-base uppercase tracking-wider px-8 py-4 border-2 border-brand-darkCustom sticker-shadow-md hover-sticker flex items-center justify-center gap-2"
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
                  +200
                </div>
                <div className="text-base sm:text-lg font-black text-brand-darkCustom uppercase tracking-widest max-w-xs mx-auto">
                  atividades regulares por mês
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-darkCustom/70 mt-4 max-w-sm mx-auto">
                  Música, teatro, circo, dança, artesanato e oficinas gratuitas
                  para toda a comunidade.
                </p>
              </div>
              <div className="bg-bg-whiteCustom rounded-3xl p-3 sm:p-4 border-2 border-brand-darkCustom sticker-shadow-lg">
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
          </div>
        </section>
        <section className="bg-bg-whiteCustom py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-brand-darkCustom/10 pb-6">
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-darkCustom uppercase tracking-tight leading-none mt-1">
                  Próximos Eventos
                </h2>
                <p className="text-sm md:text-base font-medium text-brand-darkCustom/75 mt-1">
                  Não perca o que está rolando na Areninha.
                </p>
              </div>
              <Link
                to="/programacao"
                className="rounded-full bg-bg-grayCustom text-brand-darkCustom hover:bg-street-yellowCustom font-extrabold text-xs uppercase tracking-wider px-6 py-3 border-2 border-brand-darkCustom sticker-shadow-sm hover-sticker flex items-center gap-2 shrink-0 transition-all"
              >
                <span>Ver toda agenda</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {PROXIMOS_EVENTOS.map((evento) => (
              <ErrorBoundary key={evento.titulo} fallback={<CardErrorBoundary />}>
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
