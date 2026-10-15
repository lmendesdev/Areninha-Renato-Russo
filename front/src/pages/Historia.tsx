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
import configuracaoHistoria from "../content/historiaPage/config.json";

const modulosMarcosHistoricos = import.meta.glob<PropriedadesCardDataHistoria>(
  "../content/historiaPage/marcos/*.json",
  { eager: true, import: "default" },
);
const marcosHistoricos: readonly PropriedadesCardDataHistoria[] = Object.values(
  modulosMarcosHistoricos,
);
const modulosEquipe = import.meta.glob<PropriedadesCardProfissionais>(
  "../content/historiaPage/funcionarios/*.json",
  { eager: true, import: "default" },
);
const listaEquipe: readonly PropriedadesCardProfissionais[] = Object.values(
  modulosEquipe,
).sort((membroA, membroB) => membroA.nome.localeCompare(membroB.nome));

export function Historia() {
  return (
    <div className="font-sans antialiased min-h-screen flex flex-col bg-bg-grayCustom text-brand-darkCustom selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <title>História da Areninha Cultural Renato Russo</title>
      <meta
        name="description"
        content="Descubra a trajetória da Areninha Cultural Renato Russo, desde sua fundação como Lona Cultural em 2007 até sua reinauguração em 2016 como polo cultural vibrante na Ilha do Governador."
      />
      <meta
        name="keywords"
        content="Areninha Cultural Renato Russo, história, trajetória, fundação, reinauguração, Ilha do Governador, cultura, arte, teatro, música, literatura"
      />
      <meta name="robots" content="index,follow" />
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
              {configuracaoHistoria.subtituloHero}
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
                {configuracaoHistoria.textoMemorial}
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
                &ldquo;{configuracaoHistoria.citacaoProposito}&rdquo;
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
                {configuracaoHistoria.subtituloEquipe}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {listaEquipe.map((membro) => (
                <ErrorBoundary
                  key={membro.nome}
                  fallback={<CardErrorBoundary />}
                >
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
