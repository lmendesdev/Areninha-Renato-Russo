import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  CardDataHistoria,
  type PropriedadesCardDataHistoria,
} from "../components/cardDataHistoria/CardDataHistoria";
import {
  CardProfissionais,
  type PropriedadesCardProfissionais,
} from "../components/cardProfissionais/CardProfissionais";
import lonaHeroSvg from "../assets/historia/lonaHero.svg";
import lonaCitacaoSvg from "../assets/historia/lonaCitacao.svg";
import { ErrorBoundary } from "react-error-boundary";
import { CardErrorBoundary } from "../components/errorBoundary/CardErrorBoundary";

const marcosHistoricos: readonly PropriedadesCardDataHistoria[] = [
  {
    dataAno: 2007,
    titulo: "Fundação da Lona Cultural",
    descricao:
      "Inauguração como Lona Cultural Renato Russo, prestando tributo inesquecível ao poeta do rock brasileiro que viveu no bairro, abrindo as portas para toda a comunidade insulana.",
    cor: "azul",
  },
  {
    dataAno: 2016,
    titulo: "Reinauguração como Areninha",
    descricao:
      "Evolução para estrutura definitiva em alvenaria, cobertura com isolamento termoacústico, sala de espetáculos com ar-condicionado central e ambientes de oficinas multidisciplinares.",
    cor: "amarelo",
  },
  {
    dataAno: "Hoje",
    titulo: "Polo Cultural Vibrante",
    descricao:
      "Consolidação como principal centro cultural público da região, unindo espetáculos teatrais, shows, cursos formativos gratuitos e biblioteca comunitária integrada à praça.",
    cor: "laranja",
  },
];

const listaEquipe: readonly PropriedadesCardProfissionais[] = [
  {
    nome: "Mariana Oliveira",
    setor: "Gestão",
    tagFuncao: "Administradora",
    corTag: "azul",
    descricao:
      "Coordenação administrativa e planejamento operacional das ações diárias da Areninha.",
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1WfqLv0-D4MAuqxwGr-cCg00V_-hLl8p3t03Hxrs0MmcvJa-Y7U1N0PDRzdxsnYI3cBvzHKGcIXVrMfEiF9EVmUfXIZv3wy5b-n6gQw7FXQuRvIT94u057MawaYH63xscarFsO3X_pJgQjCA2GCxbwb-m4GDw0ZbUudPqpBnK8IGY4KpAOX4vT_FbkyQdJRh6tNch-nMd71NexrMn6PQgHfzRhRMD_kPZeiadzwF3PNYla0e6_j2Lx_1SA",
    altImagem: "Mariana Oliveira",
  },
  {
    nome: "José Nilton Barbosa Oliveira",
    setor: "Curadoria",
    tagFuncao: "Gestor Cultural",
    corTag: "laranja",
    descricao:
      "Articulação institucional, projetos de formação artística e diálogo direto com a comunidade.",
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1XzjOB94DdX5bHV4nGQkAcJzma1S32eFkyxHPHa1krWyZze4v_BdXRQn3hDMhA0FgNridD5pv20vPMubCwVlHFrD9ZZiP3Dlh-VtasVQIWlJvpbx3Kd0V08xnT5C-Gvbk2iYtY1MDgjs662qRsvwn6LZeH7jRSzPfSizcmiC4nHqZR0esaKeT1VihRpDCzQoaF5Dn8BdFKJK41bapDAmPNaPlUQ-wjTGQemQ2C-DkhLLhPsQF_WFGIpQw",
    altImagem: "José Nilton Barbosa Oliveira",
  },
  {
    nome: "Rômulo Johann",
    setor: "Produção",
    tagFuncao: "Coordenador de Eventos",
    corTag: "preta",
    descricao:
      "Produção técnica, logística de espetáculos e suporte operacional às montagens em palco.",
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1Vzg8rYbQzlyLZlBy_4Z6HZpQkRLXQhSolIHtk7DmV-FsvCMzQ-gZ0oElWiv9Wlh5AyYA5_vx6Ioe44CNz3SPgJ5RFqGKJ9O0Cm3AGRSA6PLbA9B2vjqoXOx_644_YrgPgYFA7CqioLggIAFYGWhBLVTk-zjyw9bnlhy3PA-uEqLbMqOOOR0DsW5LSm4rsnmQk6fsm3Bi9Vdht4hSLHusEeyX5I4RR9Wb5ZBsmhd5ybQQlVIE7KAi5XIHw",
    altImagem: "Rômulo Johann",
  },
];

export function Historia() {
  return (
    <div className="font-sans antialiased min-h-screen flex flex-col bg-bg-grayCustom text-brand-darkCustom selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <Header paginaAtiva="Sobre" />
      <main className="grow">
        <section className="bg-brand-darkCustom text-white pt-16 pb-20 md:pt-20 md:pb-28 border-b-[2.5px] border-brand-darkCustom relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-30 select-none">
            <img
              src={lonaHeroSvg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-energy-blueCustom/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-street-yellowCustom/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              Nossa História
            </h1>
            <p className="text-lg md:text-xl font-medium text-slate-200 max-w-3xl leading-relaxed">
              Localizada no Parque Poeta Manuel Bandeira, no Cocotá, a Areninha
              Cultural Renato Russo é o coração pulsante da arte, convivência e
              resistência cultural na Ilha do Governador.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-bg-grayCustom relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #0A2435 0, #0A2435 30px, #ffffff 30px, #ffffff 60px)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="bg-bg-whiteCustom border-2 border-brand-darkCustom rounded-3xl p-8 md:p-10 sticker-shadow-lg mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-black text-xs uppercase tracking-widest text-brand-darkCustom/60">
                  Memorial &amp; Trajetória
                </span>
              </div>
              <p className="text-base md:text-lg text-brand-darkCustom leading-relaxed font-normal">
                A{" "}
                <strong className="font-bold">
                  Areninha Cultural Renato Russo
                </strong>{" "}
                está localizada no Parque Poeta Manuel Bandeira, no Cocotá, na
                Ilha do Governador. A antiga Lona Cultural foi fundada em
                setembro de 2007 e recebeu o nome de Renato Russo, em homenagem
                ao líder da Legião Urbana, que viveu parte de sua infância e
                juventude na Ilha do Governador. Em setembro de 2016, o espaço
                foi reinaugurado como Areninha Cultural, passando a contar com
                estrutura definitiva em alvenaria e cobertura termoacústica. O
                espaço conta com teatro climatizado, salas destinadas à
                formação, sala de leitura com foco em literatura infantojuvenil
                e poesia e área externa integrada ao parque.
              </p>
            </div>
            <div className="space-y-8">
              {marcosHistoricos.map((marco) => (
                <CardDataHistoria
                  key={marco.titulo}
                  dataAno={marco.dataAno}
                  titulo={marco.titulo}
                  descricao={marco.descricao}
                  cor={marco.cor}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-brand-darkCustom text-white py-16 md:py-24 border-y-[2.5px] border-brand-darkCustom relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-15 select-none">
            <img
              src={lonaCitacaoSvg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-fest-orangeCustom/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-energy-blueCustom/15 rounded-full blur-2xl" />
          <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
            <div className="bg-brand-darkCustom/80 backdrop-blur-sm border-2 border-street-yellowCustom rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_#FFD600] relative">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-white">
                &ldquo;A Areninha Cultural Renato Russo tem como propósito{" "}
                <span className="text-street-yellowCustom underline decoration-fest-orangeCustom decoration-4">
                  fortalecer a centralidade cultural
                </span>{" "}
                da Ilha do Governador, ampliando o acesso da população à cultura
                e oferecendo um espaço de qualidade para fruição, formação,
                criação e convivência.&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                <span>• Acesso Democrático</span>
                <span>• Arte Pública</span>
                <span>• Território Criativo</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-bg-grayCustom relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-brand-darkCustom">
                Nossa Equipe
              </h2>
              <p className="mt-3 text-base md:text-lg font-medium text-brand-darkCustom/70 max-w-2xl mx-auto">
                Conheça as pessoas que fazem a cultura acontecer todos os dias
                na Areninha.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {listaEquipe.map((membro) => (
              < ErrorBoundary key={membro.nome} fallback={<CardErrorBoundary />}>
                <CardProfissionais
                  imagem={membro.imagem}
                  altImagem={membro.altImagem}
                  nome={membro.nome}
                  tagFuncao={membro.tagFuncao}
                  descricao={membro.descricao}
                  corTag={membro.corTag}
                  setor={membro.setor}
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

export default Historia;