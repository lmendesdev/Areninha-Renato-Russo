import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";
import CardProgramacao from "./components/cardProgramacao/CardProgramacao";
import CardProgramacaoExpandido from "./components/cardProgramacao/CardProgramacaoExpandido";

function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        <CardProgramacao
          imagem="https://res.cloudinary.com/dqjv0xw6f/image/upload/v1697040915/areninha/2023-10-11_19-00_-_Areninha_Cultural_-_Show_-_Banda_Sem_Nome_-_Foto_-_Divulgacao_-_1_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia_-_Copia.jpg"
          altImagem="Banda Sem Nome se apresentando no palco da Areninha Cultural"
          titulo="Banda Sem Nome"
          tag="Show"
          dia={11}
          mes={10}
          ano={2023}
          horario="19:00"
          diaSemana="Quarta-feira"
          descricao="A Banda Sem Nome é uma banda de rock alternativo formada por quatro amigos apaixonados por música. Com influências que vão desde o rock clássico até o indie moderno, a banda busca criar um som único e envolvente. Suas letras abordam temas do cotidiano, relacionamentos e reflexões pessoais, sempre com uma abordagem poética e introspectiva. A energia contagiante de suas apresentações ao vivo conquista o público, tornando cada show uma experiência memorável."
          local="Areninha Cultural"
          link="https://www.sympla.com.br/banda-sem-nome__123456"
          valor={30}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
