import { Header } from "./components/Header-Footer/Header";
import { Footer } from "./components/Header-Footer/Footer";
import CardChamada from "./components/cardChamada/CardChamada";

function App() {
  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 py-12 w-full">
        <CardChamada
          titulo="Sugestões e Feedback"
          descricao="Sua opinião é muito importante para nós! Envie suas sugestões, críticas ou elogios para que possamos melhorar continuamente a experiência na Areninha Cultural."
          link="/sugestoes"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
