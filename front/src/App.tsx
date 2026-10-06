import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";
import Adesivos from "./components/adesivos/Adesivos";
function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 mx-auto px-4 md:px-10 py-12 w-full">
        <Adesivos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
