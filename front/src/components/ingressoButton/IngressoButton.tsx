import ingressoIcon from "../../assets/IngressoIcon/ingressoIcon.svg";

import { useNavigate } from "react-router-dom";
interface IngressoButtonProps {
  estilo?: string;
}
export function IngressoButton({ estilo }: IngressoButtonProps) {
  const navegar = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navegar("/ingressos")}
      className={`relative inline-flex items-center justify-center gap-2.5 bg-street-yellowCustom 
      text-brand-darkCustom font-extrabold text-xs md:text-sm tracking-wide uppercase px-7 py-2.5 
      rounded-sm hover:brightness-95 transition-all shadow-sm group select-none overflow-hidden cursor-pointer ${estilo}`}
    >
      <span
        className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 
      bg-brand-darkCustom rounded-full pointer-events-none"
      />
      <span
        className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 
      bg-brand-darkCustom rounded-full pointer-events-none"
      />
      <img src={ingressoIcon} alt="Ingresso" className="w-10 h-10" /> 
      <span className="leading-none tracking-wider">Garantir Ingresso</span>
    </button>
  );
}

export default IngressoButton;
