import ingressoIcon from "../../assets/IngressoIcon/ingressoIcon.svg";
import { useNavigate } from "react-router-dom";

export interface IngressoButtonProps {
  readonly estilo?: string;
  readonly destino?: string;
  readonly corFuros?: string;
}

const destinoPadrao = "https://www.sympla.com.br";

export function IngressoButton({
  estilo = "",
  destino = destinoPadrao,
  corFuros,
}: IngressoButtonProps) {
  return (
    <a
      href={destino}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center gap-2.5 bg-street-yellowCustom 
      text-brand-darkCustom font-extrabold text-xs md:text-sm tracking-wide uppercase px-7 py-2.5 
      rounded-sm hover:brightness-95 transition-all shadow-sm group select-none overflow-hidden cursor-pointer ${estilo}`}
    >
      <span
        className={`absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 
      ${corFuros || "bg-brand-darkCustom"} rounded-full pointer-events-none`}
      />
      <span
        className={`absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 
      ${corFuros || "bg-brand-darkCustom"} rounded-full pointer-events-none`}
      />
      <img src={ingressoIcon} alt="Ingresso" className="w-10 h-10" />
      <span className="leading-none tracking-wider">Garantir Ingresso</span>
    </a>
  );
}

export default IngressoButton;
