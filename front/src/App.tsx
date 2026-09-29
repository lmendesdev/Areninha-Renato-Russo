import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";
import CardProgramacao from "./components/cardProgramacao/CardProgramacao";

function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        <CardProgramacao
          imagem="https://res.cloudinary.com/dqjv8xw0g/image/upload/v1697040915/areninha/2023-10-11_19-00_-_Oficina_de_Canto_-_Areninha_Cultural_-_Foto_de_Divulga%C3%A7%C3%A3o_-_Cr%C3%A9dito_de_Divulga%C3%A7%C3%A3o_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1_-_1.jpg"
          altImagem="Oficina de Canto"
          titulo="Oficina de Canto"
          tag="Oficina"
          dia={28}
          mes={9}
          ano={2026}
          horario="19:00"
          diaSemana="Quarta-feira"
          descricao="Aprenda técnicas vocais e melhore sua performance em apresentações musicais."
          local="Areninha Cultural"
          link="https://www.areninhacultural.com.br/oficina-de-canto"
          valor={0}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
