import { useState } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  CardAvisos,
  type PropriedadesCardAvisos,
} from "../components/cardAvisos/CardAvisos";
import { CardAvisosExpandido } from "../components/cardAvisos/CardAvisosExpandido";

const quantidadePorCarregamento = 3;

const nomesMeses: readonly string[] = [
    "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const noticiaPrincipal: PropriedadesCardAvisos = {
  imagem:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAleIcp1Tr0AHxvQpAY0_TYd7M4aIbZKdiNoTFHpuB6U4sCvJFNSppizqKFPv_-Owy2XBwazaDE3E4DjXgqV2ilrGetYBTaADzXpyMDORCcdRoP87HUVh1C4BR1Wclf4tWKjfiLisgV5SMqGN0vpjyeRzroSv50y_sndoUO9PhpUoc1oUBjDUkBfs3lRimWVwbcQz8er-SW5nIHkIz4pIvdgRvZYGxtCpkH5rK9HfVCOW3u7X15QwRl",
  altImagem: "Festival de Inverno",
  dia: 24,
  mes: 10,
  ano: 2026,
  titulo: "Festival de Inverno reúne mais de 5 mil pessoas na Areninha",
  descricao:
    "Três dias de música, teatro e exposições marcaram o encerramento da temporada cultural, consolidando o espaço como o principal polo comunitário e criativo da região.",
};


const listaNoticias: readonly PropriedadesCardAvisos[] = [
  {
    imagem:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2iQuHGWEEzxA9xzu4uUkHoV37R5bShWKHXgF7s6KVGThPSfQjl4PJvz6ePhCRlsXmsHvWJhtJ8sDw1GEThRGy9PqS4zmpEb3RO_y41Aw5z0WgBBlgUG-PzrDwSfT7j5VS4uBLO47GZVTysgPmLgt65nh6eclkMn3KXgQL1bCJ8DQllgeoPS44qJQwBnpgsijQp34yl8a4gD2z2v8tmnb-e327L2owu0uumO4WER2ELZORlnncdp8e",
    altImagem: "Oficina de Cerâmica",
    dia: 20,
    mes: 10,
    ano: 2026,
    titulo:
      "Inscrições abertas para novas turmas de cerâmica e artes visuais",
    descricao:
      "As vagas são limitadas. Jovens a partir de 12 anos podem se inscrever presencialmente na secretaria para as oficinas do próximo semestre com materiais inclusos.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWbjfzchc3k8n-P75XOy3_RTDr6XoB9rf9uHAkwUYhnKynDmWZnKy6qoDxofogEKBRHcpl-l6MWF9VgLm4rBrW2_8xWLZN0y2l4Gk5lX2vYAzh64zH7jjtXde0Lv_ue1_FjorNGqmDTPNvQpA2Egt5e1a1a26WJwjdKi46X73fRrmQBYCsqSVuET7HBOkHuwDPgJP-VZ9qdOuNq-Fk1I_8cfLSuX7gaZdFf_sN84yR1ZMT17u4qA0D",
    altImagem: "Apresentação Teatral",
    dia: 18,
    mes: 10,
    ano: 2026,
    titulo: "Cia. Os Satyros estreia novo espetáculo nesta sexta-feira",
    descricao:
      "Uma reflexão contundente sobre as relações interpessoais na era digital marca o retorno triunfal do grupo aos palcos da Areninha com ingressos a preços populares.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLhHUgV5fcH5z1g5PVXhO6OPoBUzRUWDja0AF_iAqU2mNZdAtUn1PD1uLiGCYeWJQh6zWFedHfpp5cjLwRaA8U3La7sVme8om0xtkYxjLNC1r0vZZZoTD5VWHbuG3W_pAFyGG6ejCSc6jxG2z2M04YpmUN9-dWgbnhKGkeaNGOTNtjteqZsGVikhC_mD7rfiqvsPzduDFqo8K6V8Yvwis4C5rq187K3sArbOplZ1U1XaBQ8vS4HCdO",
    altImagem: "Reforma da Fachada",
    dia: 15,
    mes: 10,
    ano: 2026,
    titulo:
      "Secretaria de Cultura anuncia verba para revitalização do espaço",
    descricao:
      "Obras de acessibilidade universal, acústica e modernização da sala de espetáculos começarão no próximo mês, trazendo melhorias para artistas e público.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1UbGwsSH-78UDp2FCkVCc4Rt59x6LdVJqYGxzwFIk1QeQhQ6lr4zM8GcGvLC7_4piB8CEC-Hv-q2p8sgMgm-amxqE5Xibk5DVyxBISanWea_xudXmVRhjnZLiUOhGANOoegAgKvoTZBetPY8vZ5nlwPL9lBvdsLYo8NMLetdBJX2n9YgPSSVLCX2arwIo6y8EbykxALKLsARA9_vAiyFUBxQYZpjTrP2jaa-KabeV5NzpkRQLV7IzDmels",
    altImagem: "Roda de Samba na Esplanada",
    dia: 11,
    mes: 10,
    ano: 2026,
    titulo: "Roda de samba gratuita ocupa a praça externa neste domingo",
    descricao:
      "Encontro reúne músicos da Ilha do Governador e feirantes locais em uma tarde inteira dedicada ao samba de raiz e à gastronomia popular no Parque Manuel Bandeira.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1W4vQbdMMOaasv_HBdeiiyBjldZ--SCs7OX0zJCM1YumvGER8ztzT2sOML3QjaSDVP5Hee0GFE7Ugj3nVmxUr9T9WuKe2xma6G19lgJqzLLfAvre3QexlWR0svoPWjGLrZV3P1EuJLPARGO_RbO8uZ2d661RJHs_ENPbAj7Am-c7_I2te6XGgCRMhdQyB_xP02OKlCvj008jcbS2bN-0gGwhCDYbh3y240P-OQSlEBDC1qQWGBRe2I-jQ",
    altImagem: "Sala de Leitura Infantojuvenil",
    dia: 7,
    mes: 10,
    ano: 2026,
    titulo: "Sala de leitura recebe acervo inédito de poesia e literatura",
    descricao:
      "Mais de 300 novos títulos infantojuvenis e coletâneas poéticas passam a integrar o catálogo aberto para consulta gratuita e rodas de leitura semanais.",
  },
  {
    imagem:
      "https://lh3.googleusercontent.com/aida/AEtjO1VX6ozUpDPFFywbhI9fMuqMLfqZBYcM5shNdgiSdy32RQMKHvtyZrchi2PcqJUX9jrxn5AGGRaq7Cg3VD00sJNp7Pe5dVzjMJ9ZglbGp4fFSwkUN18NMjSocjYZ0Evp-efld0upV2v7hDvxZHNcGQmHnPhCOnA7ci5rE97nHZ2jfAmB5YqSVDkSIoFdTFMLqfUlkcz3Ioq-CMoVgx8hUPRpZ3sozKpWqD7RxRTtFnrf4Q9PwfJ2yVAnJ-w",
    altImagem: "Mostra de Música Independente",
    dia: 2,
    mes: 10,
    ano: 2026,
    titulo: "Mostra de bandas independentes abre chamada para artistas insulanos",
    descricao:
      "Bandas e projetos autorais da Zona Norte podem enviar portfólio até o fim do mês para integrar a programação especial de verão no palco principal.",
  },
];

function formatarDia(dia: number): string {
  if (dia < 10) {
    return `0${dia}`;
  }

  return String(dia);
}

export function Noticias() {

  const [noticiaPrincipalExpandida, setNoticiaPrincipalExpandida] =
    useState<boolean>(false);

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

  const diaPrincipalFormatado = formatarDia(noticiaPrincipal.dia);

  const nomeMesPrincipal = nomesMeses[noticiaPrincipal.mes - 1];

  const textoAlternativoPrincipal =
    noticiaPrincipal.altImagem || noticiaPrincipal.titulo;

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom font-sans antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-street-yellowCustom selection:text-brand-darkCustom">
      <Header paginaAtiva="Notícias" />
      <main className="grow">
        <section className="w-full bg-bg-whiteCustom relative py-12 md:py-16 px-6 md:px-12 border-b-2 border-brand-darkCustom">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              <div className="w-full lg:w-7/12 flex flex-col items-start text-left order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span className="inline-flex items-center bg-street-yellowCustom text-brand-darkCustom text-xs font-bold px-3 py-1.5 rounded-full border-2 border-brand-darkCustom">
                    Destaque
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-brand-darkCustom mb-5 tracking-tight leading-[1.15]">
                  {noticiaPrincipal.titulo}
                </h1>
                <p className="text-base md:text-lg text-brand-darkCustom/80 mb-8 max-w-2xl font-medium leading-relaxed">
                  {noticiaPrincipal.descricao}
                </p>
                <div className="flex items-center gap-6 mb-8 text-sm font-semibold text-brand-darkCustom/70">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-fest-orangeCustom">
                      calendar_today
                    </span>
                    <span>
                      {diaPrincipalFormatado} {nomeMesPrincipal},{" "}
                      {noticiaPrincipal.ano}
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNoticiaPrincipalExpandida(true)}
                  className="inline-flex items-center gap-3 bg-street-yellowCustom text-brand-darkCustom font-black text-base px-8 py-4 rounded-full uppercase tracking-wider justify-center border-2 border-brand-darkCustom sticker-shadow-lg hover-sticker cursor-pointer"
                >
                  Ler Matéria Completa
                </button>
              </div>
              <div className="w-full lg:w-5/12 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-energy-blueCustom rounded-3xl translate-x-3 translate-y-3 border-2 border-brand-darkCustom" />
                  <div className="relative rounded-3xl border-2 border-brand-darkCustom overflow-hidden bg-brand-darkCustom aspect-4/3 group">
                    <img
                      alt={textoAlternativoPrincipal}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={noticiaPrincipal.imagem}
                    />
                  </div>
                </div>
              </div>
            </div>
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
                <CardAvisos
                  key={noticia.titulo}
                  imagem={noticia.imagem}
                  altImagem={noticia.altImagem}
                  dia={noticia.dia}
                  mes={noticia.mes}
                  ano={noticia.ano}
                  titulo={noticia.titulo}
                  descricao={noticia.descricao}
                />
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
      {noticiaPrincipalExpandida && (
        <CardAvisosExpandido
          titulo={noticiaPrincipal.titulo}
          dia={noticiaPrincipal.dia}
          mes={nomeMesPrincipal}
          ano={noticiaPrincipal.ano}
          descricao={noticiaPrincipal.descricao}
          imagem={noticiaPrincipal.imagem}
          altImagem={noticiaPrincipal.altImagem}
          funcaoSair={() => setNoticiaPrincipalExpandida(false)}
        />
      )}
      <Footer />
    </div>
  );
}

export default Noticias;