const PARAMETROS_AUTOPLAY_PADRAO = "autoplay=1&rel=0";
const COMPRIMENTO_ID_YOUTUBE = 11;

/**
 * Converte URLs do YouTube (watch, share, short ou embed) para o formato de embed padrão com autoplay.
 */
export function formatarUrlEmbedYoutube(url: string): string {
  const urlLimpa = url.trim();
  const estaVazia = urlLimpa.length === 0;

  if (estaVazia) {
    return "";
  }

  const jaEEmbed = urlLimpa.includes("/embed/");
  if (jaEEmbed) {
    const jaPossuiAutoplay = urlLimpa.includes("autoplay=");
    if (jaPossuiAutoplay) {
      return urlLimpa;
    }

    const contemParametros = urlLimpa.includes("?");
    const separador = contemParametros ? "&" : "?";
    return `${urlLimpa}${separador}${PARAMETROS_AUTOPLAY_PADRAO}`;
  }

  const expressaoRegular =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const correspondencia = urlLimpa.match(expressaoRegular);
  const idVideoEncontrado = correspondencia ? correspondencia[1] : null;

  const idTemTamanhoValido =
    idVideoEncontrado !== null &&
    idVideoEncontrado.length === COMPRIMENTO_ID_YOUTUBE;

  if (idTemTamanhoValido) {
    return `https://www.youtube.com/embed/${idVideoEncontrado}?${PARAMETROS_AUTOPLAY_PADRAO}`;
  }

  return urlLimpa;
}
