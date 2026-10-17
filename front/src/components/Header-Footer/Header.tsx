import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IngressoButton } from "../ingressoButton/IngressoButton";
import AreninhaLogo from "../../assets/Areninha/AreninhaIcon.webp";
import configuracaoGeral from "../../content/configuracoes/geral.json";

const ESTILO_OVERFLOW_TRAVADO = "hidden";
const LARGURA_BREAKPOINT_DESKTOP_PX = 1024;

interface ItemLinkNavegacao {
  readonly rotulo: string;
  readonly endereco: string;
}

export interface PropriedadesHeader {
  readonly paginaAtiva?: string;
}

const linksDeNavegacao: readonly ItemLinkNavegacao[] = [
  { rotulo: "Sobre", endereco: "/historia" },
  { rotulo: "Programação", endereco: "/programacao" },
  { rotulo: "Oficinas", endereco: "/oficina" },
  { rotulo: "Estrutura", endereco: "/espaco" },
  { rotulo: "Notícias", endereco: "/noticias" },
  { rotulo: "Sugestões", endereco: "/contato" },
];

export function Header({ paginaAtiva }: PropriedadesHeader = {}) {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  const localizacao = useLocation();

  function alternarMenuMobile() {
    setMenuMobileAberto((estadoAnterior) => !estadoAnterior);
  }

  function fecharMenuMobile() {
    setMenuMobileAberto(false);
  }

  useEffect(() => {
    if (!menuMobileAberto) {
      return;
    }

    const valorOriginalOverflow = document.body.style.overflow;
    document.body.style.overflow = ESTILO_OVERFLOW_TRAVADO;

    function fecharAoRedimensionarParaDesktop() {
      const estaNoTamanhoDesktop =
        window.innerWidth >= LARGURA_BREAKPOINT_DESKTOP_PX;
      if (estaNoTamanhoDesktop) {
        setMenuMobileAberto(false);
      }
    }

    window.addEventListener("resize", fecharAoRedimensionarParaDesktop);

    return () => {
      document.body.style.overflow = valorOriginalOverflow;
      window.removeEventListener("resize", fecharAoRedimensionarParaDesktop);
    };
  }, [menuMobileAberto]);

  useEffect(() => {
    setMenuMobileAberto(false);
  }, [localizacao.pathname]);

  function verificarLinkAtivo(linkNavegacao: ItemLinkNavegacao): boolean {
    const ativoPorPropriedade =
      paginaAtiva === linkNavegacao.rotulo ||
      paginaAtiva === linkNavegacao.endereco;
    const ativoPorRota = localizacao.pathname === linkNavegacao.endereco;

    return ativoPorPropriedade || ativoPorRota;
  }

  const iconeMenuMobile: string = menuMobileAberto ? "close" : "menu";

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
            width={56}
            height={56}
            fetchPriority="high"
            decoding="async"
            src={AreninhaLogo}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {linksDeNavegacao.map((linkNavegacao) => {
            const estaAtivo = verificarLinkAtivo(linkNavegacao);
            const classesLink = estaAtivo
              ? "text-sm font-bold text-street-yellowCustom border-b-2 border-street-yellowCustom pb-1 transition-colors relative"
              : "text-sm font-semibold text-white/90 hover:text-street-yellowCustom transition-colors relative py-1";

            return (
              <Link
                key={linkNavegacao.rotulo}
                className={classesLink}
                to={linkNavegacao.endereco}
              >
                {linkNavegacao.rotulo}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <IngressoButton destino={configuracaoGeral.linkIngressosGeral} />
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
        <nav className="fixed left-0 right-0 top-24 bottom-0 lg:hidden border-t border-white/10 bg-brand-darkCustom backdrops-blur-md flex flex-col justify-between w-60">
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-6 space-y-3">
            {linksDeNavegacao.map((linkNavegacao) => (
              <div
                key={linkNavegacao.rotulo}
                className="flex flex-row items-center justify-start w-50 bg-[rgba(255,255,255,0.05)] rounded-2xl border-8 border-[rgba(0,0,0,0.00)]"
              >
                <Link
                  className="block text-[1.5rem] font-extrabold text-white hover:text-street-yellowCustom transition-colors py-1"
                  to={linkNavegacao.endereco}
                  onClick={fecharMenuMobile}
                >
                  {linkNavegacao.rotulo}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full py-6 px-6 bg-[#071926] border-t-2 border-[#20303C] shrink-0">
            <IngressoButton
              estilo="w-fit"
              destino={configuracaoGeral.linkIngressosGeral}
            />
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
