import { useState } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  BlocoRegras,
  type PropriedadesBlocoRegras,
} from "../components/oficina/BlocoRegras";
import {
  CardOficina,
  type PropriedadesCardOficina,
} from "../components/oficina/CardOficina";
import { CardChamada } from "../components/cardChamada/CardChamada";
import { ErrorBoundary } from "react-error-boundary";
import { CardErrorBoundary } from "../components/errorBoundary/CardErrorBoundary";
import configuracaoOficina from "../content/oficinasPage/config.json";

type FiltroDiaOficina = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Todos";

const abasDiasSemana: readonly FiltroDiaOficina[] = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
];

interface CardTopoJson {
  readonly ordem: number;
  readonly titulo: string;
  readonly descricao: string;
}

const modulosCardTopo = import.meta.glob<CardTopoJson>(
  "../content/oficinasPage/cardsTopo/*.json",
  { eager: true, import: "default" },
);
const listaRegrasOficina: readonly PropriedadesBlocoRegras[] = Object.values(
  modulosCardTopo,
).sort((cardA, cardB) => cardA.ordem - cardB.ordem);
const modulosOficinas = import.meta.glob<PropriedadesCardOficina>(
  "../content/oficinasPage/oficinas/*.json",
  { eager: true, import: "default" },
);
const listaOficinas: readonly PropriedadesCardOficina[] =
  Object.values(modulosOficinas);

function obterClassesBotaoFiltro(estaAtivo: boolean): string {
  if (estaAtivo) {
    return "px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-wider bg-street-yellowCustom text-brand-darkCustom border-2 border-brand-darkCustom shadow-sm cursor-pointer";
  }

  return "px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider text-brand-darkCustom hover:bg-bg-whiteCustom transition-colors duration-150 cursor-pointer";
}

export function Oficina() {
  const [filtroDia, setFiltroDia] = useState<FiltroDiaOficina>("Todos");

  const oficinasFiltradas = listaOficinas.filter((oficina) => {
    const exibirTodas = filtroDia === "Todos";
    const correspondeAoDia = oficina.diaSemana === filtroDia;
    return exibirTodas || correspondeAoDia;
  });

  const botaoTodosAtivo = filtroDia === "Todos";

  const classesBotaoTodos = obterClassesBotaoFiltro(botaoTodosAtivo);

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom font-sans antialiased flex flex-col min-h-screen selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <title>Oficinas Regulares - Areninha Cultural Renato Russo</title>
      <meta
        name="description"
        content="Explore as oficinas regulares da Areninha Cultural Renato Russo, oferecendo aulas de dança, música, teatro e expressão artística para todas as idades na Ilha do Governador."
      />
      <meta
        name="keywords"
        content="Areninha Cultural Renato Russo, oficinas regulares, aulas de dança, aulas de música, aulas de teatro, expressão artística, Ilha do Governador, Rio de Janeiro"
      />
      <meta name="robots" content="index, follow" />
      <Header paginaAtiva="Oficinas" />
      <main className="grow w-full">
        <section className="bg-bg-whiteCustom w-full pt-14 pb-12 border-b-2 border-brand-darkCustom relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6 mt-2">
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-darkCustom tracking-tight uppercase leading-[0.95]">
                    Oficinas Regulares
                  </h1>
                  <p className="text-base md:text-lg font-medium text-brand-darkCustom/80 mt-4 max-w-2xl leading-relaxed">
                    {configuracaoOficina.subtitulo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bg-grayCustom py-10 border-b-2 border-brand-darkCustom">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {listaRegrasOficina.map((regra) => (
                <BlocoRegras
                  key={regra.titulo}
                  titulo={regra.titulo}
                  descricao={regra.descricao}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-bg-whiteCustom py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2 bg-bg-grayCustom border-2 border-brand-darkCustom rounded-3xl sm:rounded-full w-fit mx-auto sticker-shadow-md">
                {abasDiasSemana.map((diaDaSemana) => {
                  const estaAtivo = filtroDia === diaDaSemana;
                  const classesBotao = obterClassesBotaoFiltro(estaAtivo);
                  return (
                    <button
                      key={diaDaSemana}
                      type="button"
                      onClick={() => setFiltroDia(diaDaSemana)}
                      className={classesBotao}
                    >
                      {diaDaSemana}
                    </button>
                  );
                })}
                <div className="hidden sm:block h-6 w-px bg-brand-darkCustom/20 mx-1" />
                <button
                  type="button"
                  onClick={() => setFiltroDia("Todos")}
                  className={classesBotaoTodos}
                >
                  Todos
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {oficinasFiltradas.map((oficina) => (
                <ErrorBoundary
                  key={oficina.titulo}
                  fallback={<CardErrorBoundary />}
                >
                  <CardOficina
                    key={oficina.titulo}
                    imagem={oficina.imagem}
                    altImagem={oficina.altImagem}
                    titulo={oficina.titulo}
                    categoria={oficina.categoria}
                    diaSemana={oficina.diaSemana}
                    horario={oficina.horario}
                    professor={oficina.professor}
                    modalidade={oficina.modalidade}
                    faixaEtaria={oficina.faixaEtaria}
                    local={oficina.local}
                    vagas={oficina.vagas}
                    link={oficina.link}
                    descricao={oficina.descricao}
                  />
                </ErrorBoundary>
              ))}
            </div>
            <div className="mt-16">
              <CardChamada
                titulo="Quer propor uma oficina ou se matricular?"
                descricao="Nossa secretaria funciona de segunda a quinta das 10h às 21h na Praça Manuel Bandeira no Cocotá. Venha nos visitar!"
                link="https://api.whatsapp.com/send?phone=5521976647013"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Oficina;
