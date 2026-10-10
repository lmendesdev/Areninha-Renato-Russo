import { useState } from "react";
import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";
import {
  CardAvisos,
  type PropriedadesCardAvisos,
} from "../components/avisos/CardAvisos";
import { AvisoPrincipal } from "../components/avisos/NoticiaPrincipal";
import { ErrorBoundary } from "react-error-boundary";
import { CardErrorBoundary } from "../components/errorBoundary/CardErrorBoundary";
import { NoticiaPrincipalErrorBoundary } from "../components/errorBoundary/NoticiaPrincipalErrorBoundary";

const quantidadePorCarregamento = 3;

const noticiaPrincipal: PropriedadesCardAvisos = {
  imagem:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC2iQuHGWEEzxA9xzu4uUkHoV37R5bShWKHXgF7s6KVGThPSfQjl4PJvz6ePhCRlsXmsHvWJhtJ8sDw1GEThRGy9PqS4zmpEb3RO_y41Aw5z0WgBBlgUG-PzrDwSfT7j5VS4uBLO47GZVTysgPmLgt65nh6eclkMn3KXgQL1bCJ8DQllgeoPS44qJQwBnpgsijQp34yl8a4gD2z2v8tmnb-e327L2owu0uumO4WER2ELZORlnncdp8e",
  altImagem: "Oficina de Cerâmica",
  dia: 20,
  mes: 10,
  ano: 2026,
  titulo: "Inscrições abertas para novas turmas de cerâmica e artes visuais",
  descricao:
    "As vagas são limitadas. Jovens a partir de 12 anos podem se inscrever presencialmente na secretaria para as oficinas do próximo semestre com materiais inclusos.",
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

export function Noticias() {

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

  return (
    <div className="bg-bg-whiteCustom text-brand-darkCustom font-sans antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-street-yellowCustom selection:text-brand-darkCustom">
        <title>Notícias da Areninha Cultural Renato Russo</title>
        <meta name="description" content="Fique por dentro das últimas notícias e atualizações da Areninha Cultural Renato Russo, incluindo eventos, oficinas, apresentações e novidades sobre a programação cultural na Ilha do Governador." />
        <meta name="keywords" content="Areninha Cultural Renato Russo, notícias, atualizações, eventos culturais, oficinas, apresentações, programação cultural, Ilha do Governador, Rio de Janeiro" />
        <meta name="robots" content="index, follow" />
      <Header paginaAtiva="Notícias" />
      <main className="grow">
        <section className="w-full bg-bg-whiteCustom relative py-12 md:py-16 px-6 md:px-12 border-b-2 border-brand-darkCustom">
          <div className="max-w-7xl mx-auto">
        <ErrorBoundary fallback={<NoticiaPrincipalErrorBoundary/>}>
            <AvisoPrincipal {...noticiaPrincipal} />
        </ ErrorBoundary>
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
            <ErrorBoundary key={noticia.titulo} fallback={<CardErrorBoundary />}>
                <CardAvisos
                  imagem={noticia.imagem}
                  altImagem={noticia.altImagem}
                  dia={noticia.dia}
                  mes={noticia.mes}
                  ano={noticia.ano}
                  titulo={noticia.titulo}
                  descricao={noticia.descricao}
                />
            </ErrorBoundary>
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
      <Footer />
    </div>
  );
}

export default Noticias;