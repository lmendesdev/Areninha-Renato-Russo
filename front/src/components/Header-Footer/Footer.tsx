import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import AreninhaCulturalIcon from "../../assets/AreninhaIcon/AreninhaIcon.webp";
import UsinaSocialIcon from "../../assets/UsinaSocialIcon/usinaSocial.webp";
import secretariaCulturaIcon from "../../assets/SecretariaCulturaIcon/secretariaCultura.webp";

interface ItemLinkInstitucional {
  readonly rotulo: string;
  readonly endereco: string;
}

interface ItemRedeSocial {
  readonly rotulo: string;
  readonly endereco: string;
  readonly icone: ReactNode;
}

const linksInstitucionais: readonly ItemLinkInstitucional[] = [
  { rotulo: "Termos de Uso", endereco: "#" },
  { rotulo: "Privacidade", endereco: "#" },
  { rotulo: "Trabalhe Conosco", endereco: "#" },
];

const redesSociais: readonly ItemRedeSocial[] = [
  {
    rotulo: "Instagram",
    endereco: "#",
    icone: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    rotulo: "Linktree",
    endereco: "#",
    icone: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M13.736 5.853l-4.005-4.117 2.325-1.736 5.2 5.368-5.2 5.37-2.325-1.737 3.864-3.978c-3.155-.078-6.496.26-10.435 2.155l-1.077-2.585c4.761-2.228 8.194-2.457 11.653-2.32zM12.57 24L.8 11.839l2.766-2.673 8.986 9.288L21.522 9.17l2.766 2.671L12.57 24z" />
      </svg>
    ),
  },
  {
    rotulo: "YouTube",
    endereco: "#",
    icone: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-darkCustom text-white border-t-4 border-street-yellowCustom mt-auto">
      <div className="px-4 md:px-10 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 space-y-4">
            <a className="flex items-center" href="#">
              <img
                alt="Logo Areninha Cultural"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                src={AreninhaCulturalIcon}
              />
            </a>
            <div className="text-sm font-medium text-white/80 space-y-2 pt-2">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-street-yellowCustom text-xl shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="leading-relaxed">
                  Praça Manuel Bandeira, s/nº – Cocotá – Ilha do Governador, Rio
                  de Janeiro/RJ.
                </span>
              </p>
            </div>
          </div>
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-street-yellowCustom">
              Contato E Horários
            </h4>
            <div className="text-sm font-medium text-white/80 space-y-2.5">
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-street-yellowCustom text-lg shrink-0">
                  call
                </span>
                (21) 97664-7013
              </p>
              <p className="flex items-center gap-3 break-all">
                <span className="material-symbols-outlined text-street-yellowCustom text-lg shrink-0">
                  mail
                </span>
                gestaoculturalareninharrusso@gmail.com
              </p>
              <div className="mt-4 border-t border-white/10 pt-3 space-y-1 text-xs text-white/70">
                <p>Secretaria: segunda a quinta-feira, das 10h às 21h.</p>
                <p>Sábados e domingos conforme programação.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-street-yellowCustom">
              Institucional
            </h4>
            <nav className="flex flex-col space-y-2 text-sm font-medium text-white/80">
              {linksInstitucionais.map((linkInstitucional) => (
                <Link
                  key={linkInstitucional.rotulo}
                  className="hover:text-street-yellowCustom transition-colors w-fit"
                  to={linkInstitucional.endereco}
                >
                  {linkInstitucional.rotulo}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-street-yellowCustom">
              Siga-nos
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-medium">
              {redesSociais.map((redeSocial) => (
                <Link
                  key={redeSocial.rotulo}
                  className="flex items-center gap-3 group text-white/80 hover:text-street-yellowCustom transition-colors"
                  to={redeSocial.endereco}
                >
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-street-yellowCustom group-hover:text-brand-darkCustom 
                  group-hover:border-brand-darkCustom transition-all"
                  >
                    {redeSocial.icone}
                  </div>
                  <span>{redeSocial.rotulo}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 
        text-xs text-white/70 font-medium"
        >
          <p>© 2024 Areninha Cultural Renato Russo.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            <span className="font-bold text-street-yellowCustom">Gestão:</span>
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 bg-white/10 px-5 py-3 rounded-lg border border-white/15 
            backdrop-blur-sm"
            >
              <img
                alt="Logo do Instituto Usina Social"
                className="h-[10vh] md:h-[8vh] w-auto object-contain"
                src={UsinaSocialIcon}
              />
              <img
                alt="Logo da Areninha Cultural Renato Russo"
                className="h-[10vh] md:h-[8vh] w-auto object-contain"
                src={AreninhaCulturalIcon}
              />
              <img
                alt="Logo da Secretaria Municipal de Cultura do Rio de Janeiro"
                className="h-[10vh] md:h-[8vh] w-auto object-contain"
                src={secretariaCulturaIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
