import {Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { Contato } from "../pages/Contato";
import { Espaco } from "../pages/Espaco";
import { Historia } from "../pages/Historia";
import { Oficina } from "../pages/Oficina";
import { Privacidade } from "../pages/Privacidade";
import Programacao from "../pages/Programacao";
import { Noticias } from "../pages/Noticias";
import { TermosDeUso } from "../pages/TermosDeUso";
import { Error404 } from "../pages/Error404";

export function Rotas() {
  return (
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
  );
}