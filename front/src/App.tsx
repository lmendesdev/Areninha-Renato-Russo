import { Rotas } from "./routes/routes";
import { ErrorBoundary } from "react-error-boundary";
import { PaginaErrorBoundary } from "./components/errorBoundary/PaginaErrorBoundary";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-whiteCustom text-brand-darkCustom flex flex-col">
      <ErrorBoundary fallback={<PaginaErrorBoundary />} resetKeys={[location.pathname]}>
        <Rotas />
      </ErrorBoundary>
    </div>
  );
}

export default App;
