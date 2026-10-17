import oculosSvg from "../../assets/adesivos/oculos.svg";
import barcasSvg from "../../assets/adesivos/barcas.svg";
import fitaK7Svg from "../../assets/adesivos/fita-k7.svg";
import palhetaSvg from "../../assets/adesivos/palheta.svg";
import carimboSvg from "../../assets/adesivos/carimbo.svg";
import patchSvg from "../../assets/adesivos/patch.svg";
import faixaSvg from "../../assets/adesivos/faixa.svg";

const CLASSE_LARGURA_PADRAO = "w-36 md:w-44";
const ROTACAO_PADRAO_GRAUS = 0;
const TEXTO_ALTERNATIVO_PADRAO = "Adesivo decorativo";

export interface PosicaoInicialAdesivo {
  readonly top?: string;
  readonly left?: string;
  readonly right?: string;
  readonly bottom?: string;
}

export interface ConfiguracaoAdesivo {
  readonly id: string;
  readonly imagem: string;
  readonly textoAlternativo: string;
  readonly classeLargura: string;
  readonly rotacaoInicial: number;
  readonly posicaoInicial: PosicaoInicialAdesivo;
}

export interface ConfiguracaoAdesivoJson {
  readonly ordem?: number;
  readonly id?: string;
  readonly imagem?: string;
  readonly textoAlternativo?: string;
  readonly classeLargura?: string;
  readonly rotacaoInicial?: number;
  readonly posicaoInicial?: PosicaoInicialAdesivo;
}

const mapaFallbacksSvgPorId: Record<string, string> = {
  "sticker-sunglasses": oculosSvg,
  "sticker-barcas": barcasSvg,
  "sticker-k7": fitaK7Svg,
  "sticker-pick": palhetaSvg,
  "sticker-stamp": carimboSvg,
  "sticker-patch": patchSvg,
  "sticker-tape": faixaSvg,
};

function sanitizarPosicao(
  posicao?: PosicaoInicialAdesivo,
): PosicaoInicialAdesivo {
  if (!posicao) {
    return {};
  }

  const posicaoLimpa: Record<string, string> = {};

  if (posicao.top && posicao.top.trim() !== "") {
    posicaoLimpa.top = posicao.top;
  }
  if (posicao.left && posicao.left.trim() !== "") {
    posicaoLimpa.left = posicao.left;
  }
  if (posicao.right && posicao.right.trim() !== "") {
    posicaoLimpa.right = posicao.right;
  }
  if (posicao.bottom && posicao.bottom.trim() !== "") {
    posicaoLimpa.bottom = posicao.bottom;
  }

  return posicaoLimpa;
}

function resolverImagemAdesivo(
  imagemInformada: string | undefined,
  identificador: string,
): string {
  const temImagemValida = Boolean(
    imagemInformada && imagemInformada.trim() !== "",
  );
  if (temImagemValida && imagemInformada) {
    return imagemInformada;
  }

  return mapaFallbacksSvgPorId[identificador] ?? "";
}

const modulosAdesivos = import.meta.glob<ConfiguracaoAdesivoJson>(
  "../../content/homePage/adesivos/*.json",
  { eager: true, import: "default" },
);

const listaAdesivosCarregados = Object.values(modulosAdesivos);

export const listaAdesivos: readonly ConfiguracaoAdesivo[] =
  listaAdesivosCarregados
    .sort((adesivoA, adesivoB) => {
      const ordemA = adesivoA.ordem ?? 0;
      const ordemB = adesivoB.ordem ?? 0;
      return ordemA - ordemB;
    })
    .map((adesivo, indice) => {
      const id = adesivo.id || `sticker-${indice + 1}`;
      const imagem = resolverImagemAdesivo(adesivo.imagem, id);
      const textoAlternativo =
        adesivo.textoAlternativo || TEXTO_ALTERNATIVO_PADRAO;
      const classeLargura = adesivo.classeLargura || CLASSE_LARGURA_PADRAO;
      const rotacaoInicial = adesivo.rotacaoInicial ?? ROTACAO_PADRAO_GRAUS;
      const posicaoInicial = sanitizarPosicao(adesivo.posicaoInicial);

      return {
        id,
        imagem,
        textoAlternativo,
        classeLargura,
        rotacaoInicial,
        posicaoInicial,
      };
    });

export default listaAdesivos;
