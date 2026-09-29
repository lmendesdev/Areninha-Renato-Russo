import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";
import CardEspacos from "./components/cardEspacos/CardEspacos";

function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        <CardEspacos 
          tag="Oficina"
          titulo="Oficina de Canto"
          descricao="Aprenda técnicas vocais e melhore sua performance em apresentações musicais."
          corTag="azul"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
