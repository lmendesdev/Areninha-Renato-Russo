import { useState } from "react";
import { Link } from "react-router-dom";
import { IngressoButton } from "../ingressoButton/IngressoButton";
import AreninhaLogo from "../../assets/AreninhaIcon/AreninhaIcon.webp";

interface ItemLinkNavegacao {
  readonly rotulo: string;
  readonly endereco: string;
}

const linksDeNavegacao: readonly ItemLinkNavegacao[] = [
  { rotulo: "Sobre", endereco: "/sobre" },
  { rotulo: "Programação", endereco: "/programacao" },
  { rotulo: "Oficinas", endereco: "/oficinas" },
  { rotulo: "Estrutura", endereco: "/estrutura" },
  { rotulo: "Notícias", endereco: "/noticias" },
  { rotulo: "Sugestões", endereco: "/sugestoes" },
];

export function Header() {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  function alternarMenuMobile() {
    setMenuMobileAberto((estadoAnterior) => !estadoAnterior);
  }

  function fecharMenuMobile() {
    setMenuMobileAberto(false);
  }

  const iconeMenuMobile:string = menuMobileAberto ? "close" : "menu";

  return (
    <header
      className="bg-brand-darkCustom text-white sticky top-0 z-50 w-full border-b-4 
    border-street-yellowCustom"
    >
      <div className="flex justify-between items-center w-full px-4 md:px-10 h-24">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img
            alt="Logo Areninha Cultural"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            fetchPriority="high"
            decoding="async"
            src={AreninhaLogo}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {linksDeNavegacao.map((linkNavegacao) => (
            <Link
              key={linkNavegacao.rotulo}
              className="text-sm font-semibold text-white/90 hover:text-street-yellowCustom transition-colors relative py-1"
              to={linkNavegacao.endereco}
            >
              {linkNavegacao.rotulo}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <IngressoButton />
          </div>
          <button
            type="button"
            className="lg:hidden text-white hover:text-street-yellowCustom transition-colors p-1"
            onClick={alternarMenuMobile}
            aria-label="Alternar menu de navegação"
          >
            <span className="material-symbols-outlined text-3xl">
              {iconeMenuMobile}
            </span>
          </button>
        </div>
      </div>
      {menuMobileAberto && (
        <nav
          className={`fixed left-0 right-0 top-24 bottom-0 ${menuMobileAberto ? "translate-x-0" : "-translate-x-full"} 
        lg:hidden border-t border-white/10 bg-brand-darkCustom px-4 pt-4 pb-28 space-y-3 transition-transform duration-1000`}
        >
          {linksDeNavegacao.map((linkNavegacao) => (
            <div
              className="flex flex-row spacebetween items-center justify-start bg-[rgba(255,255,255,0.05)] rounded-2xl
             border-[1rem] border-[rgba(0,0,0,0.00)]"
            >
              <Link
                key={linkNavegacao.rotulo}
                className="block text-[1.875rem] font-black text-white hover:text-street-yellowCustom 
                transition-colors py-1)] uppercase"
                to={linkNavegacao.endereco}
                onClick={fecharMenuMobile}
              >
                {linkNavegacao.rotulo}
              </Link>
            </div>
          ))}
          <div className="fixed left-0 w-full bottom-0 py-6 px-6 bg-[#071926] border-t-2 border-[#20303C]">
            <IngressoButton estilo="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
