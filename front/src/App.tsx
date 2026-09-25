import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        {/* Conteúdo principal */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
