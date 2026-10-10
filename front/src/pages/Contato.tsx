import { useState, type FormEvent } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";

const faixaCorreio =
  "repeating-linear-gradient(-45deg, rgb(21, 128, 61) 0px, rgb(21, 128, 61) 14px, rgb(255, 255, 255) 14px, rgb(255, 255, 255) 22px, rgb(255, 214, 0) 22px, rgb(255, 214, 0) 36px, rgb(255, 255, 255) 36px, rgb(255, 255, 255) 44px)";

const quantidadeLinhasMensagem = 10;

export function Contato() {
  const [nomeRemetente, setNomeRemetente] = useState<string>("");
  const [emailRemetente, setEmailRemetente] = useState<string>("");
  const [mensagemCarta, setMensagemCarta] = useState<string>("");
  const [mensagemEnviada, setMensagemEnviada] = useState<boolean>(false);

  function aoEnviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const possuiMensagemValida = mensagemCarta.trim().length > 0;
    if (!possuiMensagemValida) {
      return;
    }

    setMensagemEnviada(true);
  }

  function escreverOutraCarta() {
    setNomeRemetente("");
    setEmailRemetente("");
    setMensagemCarta("");
    setMensagemEnviada(false);
  }

  return (
    <div className="bg-bg-grayCustom text-brand-darkCustom font-sans antialiased flex flex-col min-h-screen selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <title>Sugestões & Contato - Areninha Cultural Renato Russo</title>
      <meta name="description" content="Entre em contato com a Areninha Cultural Renato Russo para enviar sugestões, elogios ou tirar dúvidas sobre a programação e atividades do espaço cultural." />
      <meta name="keywords" content="Areninha Cultural Renato Russo, contato, sugestões, elogios, dúvidas, programação cultural, atividades culturais, Ilha do Governador, Rio de Janeiro" />
      <meta name="robots" content="index, follow" />
      <Header paginaAtiva="Sugestões" />
      <main className="grow bg-bg-grayCustom py-12 md:py-20 px-4 md:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-brand-darkCustom tracking-tight mb-4 uppercase">
              Sugestões &amp; Contato
            </h1>
            <p className="text-lg md:text-xl font-medium text-brand-darkCustom/80 max-w-2xl">
              A Areninha Cultural Renato Russo quer ouvir você! Compartilhe
              elogios, sugestões de atividades ou tire suas dúvidas diretamente
              conosco.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-energy-blueCustom text-white border-4 border-brand-darkCustom sticker-shadow-lg rounded-2xl p-7 md:p-8 relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2 leading-snug">
                  FALE DIRETO COM A EQUIPE
                </h2>
                <p className="text-sm font-medium text-white/90 mb-8">
                  Atendimento ágil para produtores, frequentadores e alunos das
                  oficinas da Ilha do Governador.
                </p>
                <div className="space-y-4">
                  <a
                    className="flex items-center gap-4 bg-bg-whiteCustom text-brand-darkCustom p-4 rounded-xl border-3 border-brand-darkCustom sticker-shadow-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                    href="https://api.whatsapp.com/send?phone=5521976647013"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-street-yellowCustom flex items-center justify-center border-2 border-brand-darkCustom text-brand-darkCustom shrink-0">
                      <span className="material-symbols-outlined text-2xl font-bold">
                        call
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-extrabold uppercase tracking-widest text-brand-darkCustom/60">
                        Telefone &amp; WhatsApp
                      </span>
                      <span className="block text-base md:text-lg font-bold truncate text-brand-darkCustom group-hover:text-energy-blueCustom transition-colors">
                        (21) 97664-7013
                      </span>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-4 bg-bg-whiteCustom text-brand-darkCustom p-4 rounded-xl border-3 border-brand-darkCustom sticker-shadow-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                    href="mailto:gestaoculturalareninharrusso@gmail.com"
                  >
                    <div className="w-12 h-12 rounded-lg bg-fest-orangeCustom flex items-center justify-center border-2 border-brand-darkCustom text-white shrink-0">
                      <span className="material-symbols-outlined text-2xl font-bold">
                        mail
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-extrabold uppercase tracking-widest text-brand-darkCustom/60">
                        E-mail Oficial
                      </span>
                      <span className="block text-sm md:text-base font-bold truncate text-brand-darkCustom group-hover:text-fest-orangeCustom transition-colors">
                        gestaoculturalareninharrusso@gmail.com
                      </span>
                    </div>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-brand-darkCustom/20 text-white">
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-street-yellowCustom">
                        Horário da Secretaria
                      </h3>
                      <p className="text-xs font-semibold text-white/95 mt-1">
                        Segunda a quinta-feira: 10h às 21h
                      </p>
                      <p className="text-xs font-semibold text-white/80">
                        Sábados e domingos conforme programação dos eventos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bg-whiteCustom border-4 border-brand-darkCustom sticker-shadow-lg rounded-2xl p-6 relative">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-brand-darkCustom flex items-center gap-1.5">
                    Nosso Espaço
                  </span>
                  <span className="bg-street-yellowCustom text-brand-darkCustom text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-brand-darkCustom">
                    Cocotá / Ilha
                  </span>
                </div>
                <p className="text-sm font-bold text-brand-darkCustom leading-snug">
                  Praça Manuel Bandeira, s/nº – Cocotá – Ilha do Governador, Rio
                  de Janeiro/RJ.
                </p>
                <p className="text-xs font-medium text-brand-darkCustom/70 mt-2">
                  Localizado próximo à Estação das Barcas do Cocotá e ao Parque
                  Manoel Bandeira.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#FFFDF7] border-4 border-brand-darkCustom shadow-[8px_8px_0px_#0A2435] rounded-2xl overflow-hidden relative">
                <div
                  className="h-3.5 w-full border-b-2 border-brand-darkCustom"
                  style={{ background: faixaCorreio }}
                />
                <div className="p-6 md:p-8 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b-2 border-dashed border-brand-darkCustom/30 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-[#15803D] text-white px-3 py-1 rounded border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435] mb-2 font-black text-[11px] uppercase tracking-wider">
                        <span className="material-symbols-outlined text-sm font-bold">
                          flight_takeoff
                        </span>
                        <span>VIA CORREIO CULTURAL // ILHA DO GOVERNADOR</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black uppercase text-brand-darkCustom tracking-tight flex items-center gap-2">
                        Deixe sua Mensagem
                      </h2>
                      <p className="text-xs md:text-sm font-medium text-brand-darkCustom/70 mt-0.5">
                        Correspondência direta com a gestão do espaço cultural.
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#15803D] text-[#15803D] flex flex-col items-center justify-center -rotate-8 p-1 select-none pointer-events-none opacity-90">
                        <span className="text-[8px] font-black tracking-tighter uppercase leading-none text-center">
                          CORREIO
                        </span>
                        <span className="text-[10px] font-black tracking-widest my-0.5 leading-none">
                          RIO-RJ
                        </span>
                        <span className="text-[7px] font-bold tracking-tighter leading-none text-center">
                          COCOTÁ
                        </span>
                      </div>
                      <div className="w-16 h-20 bg-street-yellowCustom border-2 border-dashed border-brand-darkCustom sticker-shadow-sm rounded-sm flex flex-col items-center justify-between p-1.5 rotate-4 select-none">
                        <div className="text-[7px] font-black uppercase text-brand-darkCustom tracking-wider text-center leading-none">
                          SELO PARTICIPATIVO
                        </div>
                        <div className="w-7 h-7 rounded bg-brand-darkCustom text-street-yellowCustom flex items-center justify-center">
                          <span className="material-symbols-outlined text-lg">
                            theater_comedy
                          </span>
                        </div>
                        <div className="text-[8px] font-black text-brand-darkCustom tracking-tight">
                          R$ 0,00
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="space-y-6" onSubmit={aoEnviarFormulario}>
                    <div className="bg-[#ECF5FF] border-2 border-brand-darkCustom rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_#0A2435]">
                      <div className="flex items-center gap-3">
                        <div>
                          <span className="block text-[10px] font-black uppercase tracking-widest text-brand-darkCustom/60">
                            Destinatário Oficial
                          </span>
                          <span className="block text-xs md:text-sm font-extrabold text-brand-darkCustom">
                            Areninha Cultural Renato Russo
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-bg-whiteCustom border border-brand-darkCustom rounded-lg font-mono text-xs font-bold text-brand-darkCustom">
                        <span className="truncate max-w-55 sm:max-w-none">
                          gestaoculturalareninharrusso@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="bg-bg-whiteCustom/90 border-2 border-brand-darkCustom rounded-xl p-4 shadow-[2px_2px_0px_#0A2435]">
                      <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-brand-darkCustom/15">
                        <span className="text-xs font-black uppercase tracking-wider text-brand-darkCustom">
                          Remetente (Seus Dados)
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-[11px] font-black uppercase tracking-wider text-brand-darkCustom mb-1.5"
                            htmlFor="name"
                          >
                            Nome Completo{" "}
                            <span className="text-[10px] font-medium text-brand-darkCustom/50 normal-case">
                              (opcional)
                            </span>
                          </label>
                          <div className="relative">
                            <input
                              className="w-full bg-bg-grayCustom border-2 border-brand-darkCustom rounded-lg px-3.5 py-2.5 font-medium text-sm text-brand-darkCustom placeholder-brand-darkCustom/40 focus:bg-bg-whiteCustom focus:outline-none focus:ring-0 focus:border-energy-blueCustom transition-colors"
                              id="name"
                              name="name"
                              placeholder="Ex: Maria da Silva"
                              type="text"
                              value={nomeRemetente}
                              onChange={(evento) =>
                                setNomeRemetente(evento.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            className="block text-[11px] font-black uppercase tracking-wider text-brand-darkCustom mb-1.5"
                            htmlFor="email"
                          >
                            E-mail para Resposta{" "}
                            <span className="text-[10px] font-medium text-brand-darkCustom/50 normal-case">
                              (opcional)
                            </span>
                          </label>
                          <div className="relative">
                            <input
                              className="w-full bg-bg-grayCustom border-2 border-brand-darkCustom rounded-lg px-3.5 py-2.5 font-medium text-sm text-brand-darkCustom placeholder-brand-darkCustom/40 focus:bg-bg-whiteCustom focus:outline-none focus:ring-0 focus:border-energy-blueCustom transition-colors"
                              id="email"
                              name="email"
                              placeholder="seu.email@exemplo.com"
                              type="email"
                              value={emailRemetente}
                              onChange={(evento) =>
                                setEmailRemetente(evento.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-bg-whiteCustom border-2 border-brand-darkCustom rounded-xl p-4 shadow-[2px_2px_0px_#0A2435]">
                      <div className="flex justify-between items-center pb-2.5 mb-2 border-b border-brand-darkCustom/15">
                        <div className="flex items-center gap-2">
                          <label
                            className="text-xs font-black uppercase tracking-wider text-brand-darkCustom"
                            htmlFor="message"
                          >
                            Corpo da Mensagem / Carta
                          </label>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-brand-darkCustom/50 bg-bg-grayCustom px-2 py-0.5 rounded border border-brand-darkCustom/20">
                          Campo obrigatório
                        </span>
                      </div>
                      <div className="relative rounded-lg overflow-hidden border-2 border-brand-darkCustom/40 focus-within:border-energy-blueCustom transition-colors">
                        <textarea
                          aria-required="true"
                          className="w-full p-4 font-medium text-sm text-brand-darkCustom placeholder-brand-darkCustom/40 focus:outline-none focus:ring-0 resize-y border-none"
                          id="message"
                          name="message"
                          placeholder="Prezada equipe da Areninha Cultural, gostaria de sugerir para a programação..."
                          required
                          rows={quantidadeLinhasMensagem}
                          value={mensagemCarta}
                          onChange={(evento) =>
                            setMensagemCarta(evento.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t-2 border-dashed border-brand-darkCustom/25">
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-darkCustom/70">
                        <span className="material-symbols-outlined text-base text-energy-blueCustom">
                          mark_email_read
                        </span>
                        <span>Correspondência protegida &amp; protocolada</span>
                      </div>
                      <button
                        className="bg-fest-orangeCustom hover:bg-street-yellowCustom hover:text-brand-darkCustom text-white font-black text-sm uppercase tracking-wider py-3.5 px-8 rounded-xl border-3 border-brand-darkCustom sticker-shadow-md hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0A2435] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 group cursor-pointer"
                        type="submit"
                      >
                        <span>POSTAR MENSAGEM</span>
                      </button>
                    </div>
                  </form>
                  {mensagemEnviada && (
                    <div className="absolute inset-0 bg-[#FFFDF7]/98 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 text-center z-20 animate-in fade-in duration-200">
                      <div className="w-20 h-20 bg-street-yellowCustom rounded-2xl border-3 border-brand-darkCustom sticker-shadow-md flex items-center justify-center mb-6 -rotate-3">
                        <span className="material-symbols-outlined text-brand-darkCustom text-4xl font-bold">
                          outgoing_mail
                        </span>
                      </div>
                      <div className="inline-block bg-energy-blueCustom text-white font-black text-xs uppercase tracking-wider px-3 py-1 rounded border-2 border-brand-darkCustom shadow-[2px_2px_0px_#0A2435] mb-3">
                        Correspondência Enviada!
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase text-brand-darkCustom mb-3">
                        Mensagem Postada com Sucesso!
                      </h3>
                      <p className="text-sm md:text-base font-medium text-brand-darkCustom/80 max-w-md mx-auto mb-8">
                        Sua carta foi entregue à caixa postal da Areninha
                        Cultural Renato Russo. Agradecemos sua colaboração ativa
                        com a cultura da Ilha do Governador!
                      </p>
                      <button
                        type="button"
                        onClick={escreverOutraCarta}
                        className="bg-energy-blueCustom hover:bg-brand-darkCustom text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-full border-2 border-brand-darkCustom sticker-shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-base">
                          drafts
                        </span>
                        <span>Escrever outra carta</span>
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className="h-3.5 w-full border-t-2 border-brand-darkCustom"
                  style={{ background: faixaCorreio }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contato;