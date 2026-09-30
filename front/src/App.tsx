import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";
import CardDataHistoria from "./components/cardDataHistoria/CardDataHistoria";
function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        <CardDataHistoria
          dataAno={2024}
          titulo="Areninha Cultural Renato Russo"
          descricao="A Areninha Cultural Renato Russo é um espaço cultural localizado no bairro de Realengo, na Zona Oeste do Rio de Janeiro. O local oferece uma variedade de atividades culturais, incluindo apresentações musicais, peças teatrais, oficinas de arte e eventos comunitários. A Areninha busca promover a cultura local e proporcionar um ambiente acolhedor para a comunidade."
          cor="azul"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
