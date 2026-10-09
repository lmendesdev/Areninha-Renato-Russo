import { Link } from "react-router-dom";
import AreninhaCulturalIcon from "../../assets/AreninhaIcon/AreninhaIcon.webp";
import UsinaSocialIcon from "../../assets/UsinaSocialIcon/usinaSocial.webp";
import secretariaCulturaIcon from "../../assets/SecretariaCulturaIcon/secretariaCultura.webp";
import instagramSvg from "../../assets/footer/instagram.svg";
import linktreeSvg from "../../assets/footer/linktree.svg";
import youtubeSvg from "../../assets/footer/youtube.svg";

interface ItemLinkInstitucional {
  readonly rotulo: string;
  readonly endereco: string;
}

interface ItemRedeSocial {
  readonly rotulo: string;
  readonly endereco: string;
  readonly icone: string;
}

const linksInstitucionais: readonly ItemLinkInstitucional[] = [
  { rotulo: "Termos de Uso", endereco: "/termos-de-uso" },
  { rotulo: "Privacidade", endereco: "/privacidade" },
  { rotulo: "Trabalhe Conosco", endereco: "/contato" },
];

const redesSociais: readonly ItemRedeSocial[] = [
  {
    rotulo: "Instagram",
    endereco: "https://www.instagram.com/areninhaculturalrenatorusso/",
    icone: instagramSvg,
  },
  {
    rotulo: "Linktree",
    endereco: "https://linktr.ee/AreninhaCulturalRenatoRusso",
    icone: linktreeSvg,
  },
  {
    rotulo: "YouTube",
    endereco: "https://www.youtube.com/@AreninhaCulturalRenatoRusso",
    icone: youtubeSvg,
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-darkCustom text-white border-t-4 border-street-yellowCustom mt-auto">
      <div className="px-4 md:px-10 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 space-y-4">
            <Link className="flex items-center" to="/">
              <img
                alt="Logo Areninha Cultural"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                src={AreninhaCulturalIcon}
              />
            </Link>
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
                <a
                  key={redeSocial.rotulo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group text-white/80 hover:text-street-yellowCustom transition-colors"
                  href={redeSocial.endereco}
                >
                  <div
                    className="w-8 h-8 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-street-yellowCustom group-hover:text-brand-darkCustom 
                  group-hover:border-brand-darkCustom transition-all"
                  >
                    <img
                      src={redeSocial.icone}
                      alt={redeSocial.rotulo}
                      className="w-4 h-4 object-contain group-hover:brightness-0 transition-all"
                    />
                  </div>
                  <span>{redeSocial.rotulo}</span>
                </a>
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
