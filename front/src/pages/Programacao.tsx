import { useState } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  CardProgramacao,
  type PropriedadesCardProgramacao,
} from "../components/cardProgramacao/CardProgramacao";
import { CardChamada } from "../components/cardChamada/CardChamada";

type FiltroDia = "Sábado" | "Domingo" | "Geral";

const anguloSabado = -45;
const anguloDomingo = 45;
const anguloGeral = 180;

const ordemFiltros: readonly FiltroDia[] = ["Sábado", "Domingo", "Geral"];

interface OpcaoChaveIndustrial {
  readonly id: FiltroDia;
  readonly rotuloFita: string;
  readonly codigoCanal: string;
  readonly classeRotacaoFita: string;
}

const opcoesChaveIndustrial: readonly OpcaoChaveIndustrial[] = [
  {
    id: "Sábado",
    rotuloFita: "SÁBADO",
    codigoCanal: "CH-01",
    classeRotacaoFita: "-rotate-2",
  },
  {
    id: "Domingo",
    rotuloFita: "DOMINGO",
    codigoCanal: "CH-02",
    classeRotacaoFita: "rotate-1",
  },
  {
    id: "Geral",
    rotuloFita: "GERAL",
    codigoCanal: "CH-ALL",
    classeRotacaoFita: "-rotate-1",
  },
];

const listaProgramacao: readonly PropriedadesCardProgramacao[] = [
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
    diaSemana: "Sábado",
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
    diaSemana: "Sábado",
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
    diaSemana: "Domingo",
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

function reproduzirSomClique() {
  const contexto = new AudioContext();
  const oscilador = contexto.createOscillator();
  const ganho = contexto.createGain();

  oscilador.frequency.value = 150;
  ganho.gain.value = 0.15;

  oscilador.connect(ganho);
  ganho.connect(contexto.destination);

  oscilador.start();
  oscilador.stop(contexto.currentTime + 0.04);
}

function obterAngulo(filtro: FiltroDia): number {
  if (filtro === "Sábado") {
    return anguloSabado;
  }

  if (filtro === "Domingo") {
    return anguloDomingo;
  }

  return anguloGeral;
}

function obterNomeCanal(filtro: FiltroDia): string {
  if (filtro === "Sábado") {
    return "01 - SÁBADO";
  }

  if (filtro === "Domingo") {
    return "02 - DOMINGO";
  }

  return "ALL - PROGRAMAÇÃO GERAL";
}

export function Programacao() {
    
  const [filtroAtivo, setFiltroAtivo] = useState<FiltroDia>("Sábado");

  function selecionarFiltro(novoFiltro: FiltroDia) {
    reproduzirSomClique();
    setFiltroAtivo(novoFiltro);
  }

  function alternarProximoFiltro() {
    const indiceAtual = ordemFiltros.indexOf(filtroAtivo);
    const proximoIndice = (indiceAtual + 1) % ordemFiltros.length;
    selecionarFiltro(ordemFiltros[proximoIndice]);
  }

  const eventosFiltrados = listaProgramacao.filter((evento) => {
    const exibirTodos = filtroAtivo === "Geral";
    const correspondeAoDia = evento.diaSemana === filtroAtivo;
    return exibirTodos || correspondeAoDia;
  });

  const angulo = obterAngulo(filtroAtivo);

  const nomeCanalAtivo = obterNomeCanal(filtroAtivo);
  
  const textoTotalAtracoes = `${eventosFiltrados.length} ATRAÇÕES`;

  return (
    <div className="font-poppins text-brand-darkCustom antialiased flex flex-col min-h-screen m-0 p-0 bg-bg-whiteCustom">
      <div className="bg-street-yellowCustom border-b-2 border-brand-darkCustom text-brand-darkCustom px-4 py-2.5 font-bold text-xs md:text-sm tracking-wide text-center uppercase flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-lg">campaign</span>
        <span>
          INGRESSOS DISPONÍVEIS NA BILHETERIA E ONLINE! Apresentações aos finais
          de semana
        </span>
        <span className="material-symbols-outlined text-lg hidden sm:inline">
          campaign
        </span>
      </div>
      <Header paginaAtiva="Programação" />
      <main className="grow w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-8">
        <section className="py-10 md:py-14 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-brand-darkCustom tracking-tight mb-4 uppercase">
            PROGRAMAÇÃO CULTURAL
          </h1>
          <p className="text-base md:text-lg text-brand-darkCustom/80 max-w-2xl mx-auto font-medium">
            Confira os shows, espetáculos teatrais e comédias imperdíveis que
            agitam nosso palco neste fim de semana!
          </p>
        </section>
        <section className="mb-14">
          <div className="industrial-panel border-2 border-brand-darkCustom rounded-3xl p-5 md:p-8 relative overflow-hidden text-white">
            <div className="absolute top-3 left-3 w-4 h-4 rounded-full screw-head flex items-center justify-center">
              <div className="w-2.5 h-[1.5px] bg-neutral-800 rotate-45" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 rounded-full screw-head flex items-center justify-center">
              <div className="w-2.5 h-[1.5px] bg-neutral-800 -rotate-12" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full screw-head flex items-center justify-center">
              <div className="w-2.5 h-[1.5px] bg-neutral-800 rotate-75" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full screw-head flex items-center justify-center">
              <div className="w-2.5 h-[1.5px] bg-neutral-800 rotate-18" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-neutral-700/80 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 led-red-active animate-pulse" />
                <div className="font-mono-tech uppercase tracking-wider text-xs text-neutral-300">
                  MESA PRINCIPAL DE PAUTA // MOD. ARENA-RIO-82
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs bg-black/40 px-3 py-1 rounded border border-neutral-700 text-street-yellowCustom">
                  <span className="w-1.5 h-1.5 rounded-full bg-street-yellowCustom animate-ping" />{" "}
                  CANAL: <span className="font-bold">{nomeCanalAtivo}</span>
                </span>
                <span className="text-[10px] font-mono-tech text-neutral-400 hidden sm:inline">
                  600Ω BALANCED
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 bg-black/40 rounded-2xl p-4 border border-neutral-700/70 flex flex-col items-center justify-center relative">
                <div className="font-mono-tech text-[11px] text-neutral-400 tracking-widest uppercase mb-2">
                  SELETOR DE DIA // DIAL ROTATIVO
                </div>
                <div className="relative w-36 h-36 flex items-center justify-center my-2">
                  <div className="absolute inset-0 rounded-full border border-dashed border-neutral-600/70 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => selecionarFiltro("Sábado")}
                    className="absolute top-1 left-2 -translate-x-1/2 text-left font-handwritten text-lg font-black text-street-yellowCustom hover:scale-110 transition-transform cursor-pointer"
                  >
                    <span className="gaffer-tape text-brand-darkCustom px-1.5 py-0.5 rounded -rotate-6 text-sm inline-block">
                      SÁB
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => selecionarFiltro("Domingo")}
                    className="absolute top-1 right-2 translate-x-1/2 text-right font-handwritten text-lg font-black text-street-yellowCustom hover:scale-110 transition-transform cursor-pointer"
                  >
                    <span className="gaffer-tape text-brand-darkCustom px-1.5 py-0.5 rounded rotate-6 text-sm inline-block">
                      DOM
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => selecionarFiltro("Geral")}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 font-handwritten text-lg font-black text-street-yellowCustom hover:scale-110 transition-transform cursor-pointer"
                  >
                    <span className="gaffer-tape text-brand-darkCustom px-2 py-0.5 rounded text-sm inline-block">
                      GERAL
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={alternarProximoFiltro}
                    aria-label="Girar seletor de dia"
                    style={{ transform: `rotate(${angulo}deg)` }}
                    className="dial-knob w-20 h-20 rounded-full border-2 border-neutral-400 flex items-center justify-center relative cursor-pointer shadow-2xl"
                  >
                    <div className="absolute inset-1 rounded-full border border-neutral-600/50 pointer-events-none" />
                    <div className="absolute top-1.5 w-1.5 h-4 bg-street-yellowCustom rounded-full shadow-[0_0_8px_#ffd600]" />
                    <div className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-700 flex items-center justify-center text-[10px] font-mono-tech text-neutral-300">
                      <span className="material-symbols-outlined text-sm text-neutral-400">
                        tune
                      </span>
                    </div>
                  </button>
                </div>
                <div className="text-[11px] font-mono-tech text-neutral-400 mt-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-street-yellowCustom">
                    touch_app
                  </span>{" "}
                  Clique na opção para girar
                </div>
              </div>
              <div className="lg:col-span-5 bg-neutral-900/80 rounded-2xl p-3 sm:p-5 border border-neutral-700/80 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tech text-xs tracking-wider uppercase text-neutral-400">
                    CHAVE PRINCIPAL
                  </span>
                  <span className="text-[10px] font-mono-tech bg-fest-orangeCustom/20 text-fest-orangeCustom px-2 py-0.5 rounded border border-fest-orangeCustom/40 font-bold">
                    FILTRO ATIVO
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 p-1 sm:p-1.5 bg-black/60 rounded-xl border border-neutral-700 relative">
                  {opcoesChaveIndustrial.map((opcaoFiltro) => {
                    const estaSelecionado = filtroAtivo === opcaoFiltro.id;
                    const classesBotao = estaSelecionado
                      ? "bg-neutral-800/90 border-2 border-street-yellowCustom shadow-[0_0_12px_rgba(255,214,0,0.25)]"
                      : "hover:bg-neutral-800/60 border border-neutral-700";
                    const classesLed = estaSelecionado
                      ? "bg-street-yellowCustom led-active"
                      : "bg-neutral-600";
                    const classesTextoCanal = estaSelecionado
                      ? "text-neutral-300 font-bold"
                      : "text-neutral-400";
                    const classesTrilho = estaSelecionado
                      ? "justify-end"
                      : "justify-start";
                    const classesAlavanca = estaSelecionado ? "" : "opacity-60";
                    return (
                      <button
                        key={opcaoFiltro.id}
                        type="button"
                        onClick={() => selecionarFiltro(opcaoFiltro.id)}
                        className={`relative flex flex-col items-center py-2.5 px-1 sm:py-3 sm:px-2 rounded-lg transition-all duration-200 group cursor-pointer ${classesBotao}`}
                      >
                        <div
                          className={`gaffer-tape text-brand-darkCustom px-1.5 sm:px-2.5 py-0.5 ${opcaoFiltro.classeRotacaoFita} rounded font-handwritten font-black text-[11px] sm:text-base shadow-sm mb-2 group-hover:scale-105 transition-transform`}
                        >
                          {opcaoFiltro.rotuloFita}
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 mb-1.5">
                          <span
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${classesLed}`}
                          />
                          <span
                            className={`font-mono-tech text-[10px] sm:text-[11px] ${classesTextoCanal}`}
                          >
                            {opcaoFiltro.codigoCanal}
                          </span>
                        </div>
                        <div
                          className={`w-10 h-5 bg-neutral-950 rounded-full border border-neutral-600 p-0.5 flex items-center ${classesTrilho}`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full toggle-lever-head ${classesAlavanca}`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-3 bg-black/40 rounded-2xl p-4 border border-neutral-700/70 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-tech text-[11px] text-neutral-400 uppercase">
                      VU METER // SINAL
                    </span>
                    <span className="font-mono-tech text-[10px] text-street-yellowCustom font-bold">
                      +3 dB
                    </span>
                  </div>
                  <div className="space-y-1.5 my-2">
                    <div className="flex gap-1 h-2">
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-street-yellowCustom rounded-sm animate-pulse" />
                      <div className="flex-1 bg-street-yellowCustom rounded-sm animate-pulse" />
                      <div className="flex-1 bg-fest-orangeCustom/30 rounded-sm" />
                      <div className="flex-1 bg-red-600/30 rounded-sm" />
                    </div>
                    <div className="flex gap-1 h-2">
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-emerald-500 rounded-sm" />
                      <div className="flex-1 bg-street-yellowCustom rounded-sm animate-pulse" />
                      <div className="flex-1 bg-street-yellowCustom rounded-sm animate-pulse" />
                      <div className="flex-1 bg-fest-orangeCustom/30 rounded-sm" />
                      <div className="flex-1 bg-red-600/30 rounded-sm" />
                      <div className="flex-1 bg-red-600/20 rounded-sm" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">
                      EVENTOS NO CANAL
                    </div>
                    <div className="font-mono-tech text-sm font-black text-street-yellowCustom">
                      {textoTotalAtracoes}
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-fest-orangeCustom text-xl">
                    graphic_eq
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {eventosFiltrados.map((evento) => (
              <CardProgramacao
                key={evento.titulo}
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
            ))}
          </div>
        </section>
        <section className="mb-16">
          <CardChamada
            titulo="QUER APRESENTAR SEU ESPETÁCULO NA ARENINHA?"
            descricao="O edital de pauta e propostas culturais está aberto! Traga sua música, dança, comédia ou teatro para o nosso palco."
            link="https://api.whatsapp.com/send?phone=5521976647013"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Programacao;
