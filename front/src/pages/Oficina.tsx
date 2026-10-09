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

type FiltroDiaOficina = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Todos";

const abasDiasSemana: readonly FiltroDiaOficina[] = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
];

const listaRegrasOficina: readonly PropriedadesBlocoRegras[] = [
  {
    titulo: "Aulas Experimentais",
    descricao: "Primeira aula gratuita para experimentar o ritmo da turma.",
  },
  {
    titulo: "Inscrições na Secretaria",
    descricao: "Atendimento de segunda a quinta, das 10h às 21h no balcão.",
  },
  {
    titulo: "Documentos",
    descricao:
      "Cópia do RG, Comprovante de Residência e documento do responsável.",
  },
  {
    titulo: "Valores Populares",
    descricao:
      "Mensalidades populares acertadas diretamente com o oficineiro.",
  },
];

const listaOficinas: readonly PropriedadesCardOficina[] = [
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1WMgHMQHPGq5d2X6YiU4ALfu2Tv8NvcXjFv8mUSOFxZdYG_Ggc8h34fYexCsqvTgl0o5HYKQ8FuAlUnQGHi_vxCgohR_ihaPRBYJZ5FOuMqg4Sn6rBNPmuOouwAYGmCi3-M2fuXETzV8c5kTmb3PQlM9jmWSqHI5hJEkfR1-m8Z7LK0mDOwhfhFv-oiJ-1UhNHhCe12IL4ath61GOp0_rGFArmQW2iSOYNJXJ9Qzj4bnEyDXF637GH89GQ",
    altImagem: "Ballet Baby",
    titulo: "Ballet Baby",
    categoria: "Dança Clássica",
    diaSemana: "Segunda",
    horario: "10h",
    professor: "Profª Isabelle",
    modalidade: "Semanal (1h)",
    faixaEtaria: "3 a 5 anos",
    local: "Sala Multiuso — Areninha Cultural Renato Russo",
    vagas: "Inscrições Abertas",
    link: "https://wa.me/5521976647013",
    descricao:
      "Iniciação lúdica ao ballet clássico, trabalhando coordenação motora, musicalidade e expressão corporal para a primeira infância.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1XrfqGYqQnilB54cmGsZyHQeqCRqGge0bcmYEBqY2j95H_cb2VZpWwQz8vsmy-Y5aEDwEOm7iRHndAdG8rx9AboVU4uUrbn39Ikk_SrSsxBasJsV2rxjSr37csYJkgBMbWt2PfS3LTLUhC_K7LdGswyvwGJprtGM9YKEBNoJNOyOiPsLoZRPt_GfsH2KY98ZJoiaEzJnaxJCXZm0_hSZDEwz56u8FYRtksPfspofgANVqzgabL_eWB_JuM",
    altImagem: "Ballet Preliminar",
    titulo: "Ballet Preliminar",
    categoria: "Dança Clássica",
    diaSemana: "Segunda",
    horario: "14h",
    professor: "Profª Vitória",
    modalidade: "Semanal (1h)",
    faixaEtaria: "6 a 9 anos",
    local: "Sala Multiuso — Areninha Cultural Renato Russo",
    vagas: "Aula Experimental",
    link: "https://wa.me/5521976647013",
    descricao:
      "Desenvolvimento dos fundamentos técnicos do ballet clássico com foco em postura, ritmo, disciplina e trabalho em grupo.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1XInn9dUawMGliSbSuZoDmJRffTIomf4uc4RO7M7F7V_jPRIPm1sG2tnDTTbH4IMb4U1aqMXHMsuXixhIVEznD_x_moC2xpS9ohqjUAKuItDxql3NK6V5E_2AHDbTfLX8BZZmpSf1_qNFOnJOdWUSEXP9ToeR5RiJ2earERGQufyAmWnXDd5e0jprGAebuVZlwVV98ltUxelYk3J0Wb4TMWLwOowDawRDtOKgG216x6IHUlSP57-xkjL2I",
    altImagem: "Ballet Iniciante +14",
    titulo: "Ballet Iniciante +14",
    categoria: "Dança / Jovens",
    diaSemana: "Segunda",
    horario: "17h",
    professor: "Profª Isabelle",
    modalidade: "Semanal (1h30)",
    faixaEtaria: "14+ anos",
    local: "Sala Multiuso — Areninha Cultural Renato Russo",
    vagas: "Últimas Vagas",
    link: "https://wa.me/5521976647013",
    descricao:
      "Turma voltada para jovens e adultos iniciantes que desejam aprender a técnica do ballet clássico, alongamento e consciência corporal.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1WJubP_CG79J3Cdl948_p6jx0Iuqfb4ZegiEUHisOPqB1goSqlCxK_Zf_jps44uvl5K5AO8vi_jZi4RYGUWvj5rJpJEL-BMZKKucHBcX00MxAIxCY1mqgdWYR4ey-UiNQhYSz5EoSBzBLrN6Nl6VBz012xsVDPiItgvHuEtVxfUV6i--G6_y2KQdLN7tqj08TM7SdTa3_E4yVjSt4m-c40VrqQmhb8N2FdovUHIx73ZYtd3gnJam3-V-A",
    altImagem: "Violão e Práticas Musicais",
    titulo: "Violão & Práticas",
    categoria: "Música Instrumental",
    diaSemana: "Segunda",
    horario: "15h",
    professor: "Prof. Marcos",
    modalidade: "Semanal (1h)",
    faixaEtaria: "Livre",
    local: "Sala de Música — Areninha Cultural Renato Russo",
    vagas: "Musicalização",
    link: "https://wa.me/5521976647013",
    descricao:
      "Aulas práticas de violão popular, acordes, batidas, percepção rítmica e repertório coletivo da música brasileira.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1VNxo8OCzjBImPZDszdEYsSlUItflsAJlXZycKB4c_bKdWRHzrQwELmZKWO0lbuNgMpDwoayAPD67DYFHSXQdP3PxAuZI3Kug-TbjaQpyFM97KXUbbhfuKzFCdN2wM9avJtSIjhg5C-D7h2l7IEvUP02EZ_DjQsXmKD4RLsFgZ-yIU7bVUNBge22BcDSPtYFU6Fqu7bQ7WPYojGRi94OOwxwc5LZSOeKg0QcrI0RwTn1gpyuSjMc2lL7r4",
    altImagem: "Teatro Infantil",
    titulo: "Teatro Infantil",
    categoria: "Expressão Corporal",
    diaSemana: "Segunda",
    horario: "16h",
    professor: "Profª Paloma",
    modalidade: "Semanal (1h30)",
    faixaEtaria: "6 a 12 anos",
    local: "Palco Principal — Areninha Cultural Renato Russo",
    vagas: "Artes Cênicas",
    link: "https://wa.me/5521976647013",
    descricao:
      "Jogos teatrais, improvisação, desinibição, expressão vocal e criação coletiva de cenas para crianças.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1X2wXp3GrDquXsxpO8xh7uz3oPN82fdRNQR4KrwKDIZvGg6tayDdIJlNGL0GK0TVlg05fT94bU8n_eTIctUQgLeSByDYNNx6FyGvUmy7yxg4xtIGH7XyT5zi5ddsCzq7tXbYidgDKdZqJoermxFXf3HZy03aGgfgcdkKZ1Ri4mnTDGbRTnquGaxkpa1QCXAb3HOp4_62p2eIqydzKfhZy9omkENAqMZOV_OE9yfXsDJlQS3emv2pXZicy0",
    altImagem: "Danças Urbanas & Ritmos",
    titulo: "Danças Urbanas",
    categoria: "Street & Ritmos",
    diaSemana: "Segunda",
    horario: "19h",
    professor: "Prof. Carlos André",
    modalidade: "Semanal (1h)",
    faixaEtaria: "Geral",
    local: "Sala Multiuso — Areninha Cultural Renato Russo",
    vagas: "Sucesso de Público",
    link: "https://wa.me/5521976647013",
    descricao:
      "Coreografias dinâmicas de hip-hop, street dance, charme e ritmos urbanos com muita energia e integração.",
  },
];

function obterClassesBotaoFiltro(estaAtivo: boolean): string {
  if (estaAtivo) {
    return "px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-wider bg-street-yellowCustom text-brand-darkCustom border-2 border-brand-darkCustom shadow-sm cursor-pointer";
  }

  return "px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider text-brand-darkCustom hover:bg-bg-whiteCustom transition-colors duration-150 cursor-pointer";
}

export function Oficina() {

  const [filtroDia, setFiltroDia] = useState<FiltroDiaOficina>("Segunda");

  const oficinasFiltradas = listaOficinas.filter((oficina) => {
    const exibirTodas = filtroDia === "Todos";
    const correspondeAoDia = oficina.diaSemana === filtroDia;
    return exibirTodas || correspondeAoDia;
  });

  const botaoTodosAtivo = filtroDia === "Todos";

  const classesBotaoTodos = obterClassesBotaoFiltro(botaoTodosAtivo);

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom font-sans antialiased flex flex-col min-h-screen selection:bg-street-yellowCustom selection:text-brand-darkCustom">
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
                    Formação cultural, movimento e expressão artística para
                    todas as idades na Ilha do Governador. Faça parte dos nossos
                    núcleos ativos.
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