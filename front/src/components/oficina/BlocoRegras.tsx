export interface PropriedadesBlocoRegras {
  readonly titulo: string;
  readonly descricao: string;
}

export function BlocoRegras({ titulo, descricao }: PropriedadesBlocoRegras) {
  return (
    <article className="bg-bg-whiteCustom p-6 rounded-2xl border-2 border-brand-darkCustom sticker-shadow-lg hover-sticker flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-black text-brand-darkCustom uppercase leading-tight mb-2">
          {titulo}
        </h3>
        <p className="text-xs font-semibold text-brand-darkCustom/70 leading-snug">
          {descricao}
        </p>
      </div>
    </article>
  );
}

export default BlocoRegras;
