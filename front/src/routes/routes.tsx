import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Home } from "../pages/Home";

const Contato = lazy(() => import("../pages/Contato"));
const Espaco = lazy(() => import("../pages/Espaco"));
const Historia = lazy(() => import("../pages/Historia"));
const Oficina = lazy(() => import("../pages/Oficina"));
const Privacidade = lazy(() => import("../pages/Privacidade"));
const Programacao = lazy(() => import("../pages/Programacao"));
const Noticias = lazy(() => import("../pages/Noticias"));
const TermosDeUso = lazy(() => import("../pages/TermosDeUso"));
const Error404 = lazy(() => import("../pages/Error404"));

export function Rotas() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg-whiteCustom">
          <div className="w-8 h-8 border-4 border-brand-darkCustom border-t-street-yellowCustom rounded-full animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/oficina" element={<Oficina />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/espaco" element={<Espaco />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}
