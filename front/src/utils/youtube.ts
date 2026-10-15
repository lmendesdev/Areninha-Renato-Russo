const parametrosAutoPlayPadrao = "autoplay=1&rel=0";
const comprimentoIdYoutube = 11;

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
    return `${urlLimpa}${separador}${parametrosAutoPlayPadrao}`;
  }

  const expressaoRegular =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const correspondencia = urlLimpa.match(expressaoRegular);
  const idVideoEncontrado = correspondencia ? correspondencia[1] : null;

  const idTemTamanhoValido =
    idVideoEncontrado !== null &&
    idVideoEncontrado.length === comprimentoIdYoutube;

  if (idTemTamanhoValido) {
    return `https://www.youtube.com/embed/${idVideoEncontrado}?${parametrosAutoPlayPadrao}`;
  }

  return urlLimpa;
}
