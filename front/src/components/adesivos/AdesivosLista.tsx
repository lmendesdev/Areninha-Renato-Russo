import oculosSvg from "../../assets/adesivos/oculos.svg";
import barcasSvg from "../../assets/adesivos/barcas.svg";
import fitaK7Svg from "../../assets/adesivos/fita-k7.svg";
import palhetaSvg from "../../assets/adesivos/palheta.svg";
import carimboSvg from "../../assets/adesivos/carimbo.svg";
import patchSvg from "../../assets/adesivos/patch.svg";
import faixaSvg from "../../assets/adesivos/faixa.svg";

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

export const LISTA_ADESIVOS: readonly ConfiguracaoAdesivo[] = [
  {
    id: "sticker-sunglasses",
    imagem: oculosSvg,
    textoAlternativo: "Adesivo Óculos Tempo Perdido",
    classeLargura: "w-36 sm:w-40 md:w-48",
    rotacaoInicial: -11,
    posicaoInicial: { top: "10%", left: "3%" },
  },
  {
    id: "sticker-barcas",
    imagem: barcasSvg,
    textoAlternativo: "Adesivo Bilhete Barcas RJ",
    classeLargura: "w-36 md:w-44",
    rotacaoInicial: 7,
    posicaoInicial: { top: "38%", left: "2%" },
  },
  {
    id: "sticker-k7",
    imagem: fitaK7Svg,
    textoAlternativo: "Adesivo Fita K7 Mixtape Cocotá",
    classeLargura: "w-40 md:w-48",
    rotacaoInicial: 9,
    posicaoInicial: { top: "66%", left: "3%" },
  },
  {
    id: "sticker-pick",
    imagem: palhetaSvg,
    textoAlternativo: "Adesivo Palheta Rock 80 Legião",
    classeLargura: "w-28 md:w-32",
    rotacaoInicial: -14,
    posicaoInicial: { top: "36%", right: "4%" },
  },
  {
    id: "sticker-stamp",
    imagem: carimboSvg,
    textoAlternativo: "Adesivo Carimbo Praça Manuel Bandeira",
    classeLargura: "w-28 md:w-36",
    rotacaoInicial: 13,
    posicaoInicial: { top: "54%", right: "18%" },
  },
  {
    id: "sticker-patch",
    imagem: patchSvg,
    textoAlternativo: "Adesivo Há Tempos Quase Sem Querer",
    classeLargura: "w-48 md:w-60",
    rotacaoInicial: -5,
    posicaoInicial: { top: "76%", right: "28%" },
  },
  {
    id: "sticker-tape",
    imagem: faixaSvg,
    textoAlternativo: "Adesivo Faixa Cultura Viva",
    classeLargura: "w-44 md:w-56",
    rotacaoInicial: -7,
    posicaoInicial: { top: "72%", right: "5%" },
  },
];

export default LISTA_ADESIVOS;
