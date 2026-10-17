/// <reference types="node" />

import type { RequisicaoVercelApi, RespostaVercelApi } from "./types.ts";

export default function handler(
  request: RequisicaoVercelApi,
  response: RespostaVercelApi,
): void {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    response.status(500).json({
      error:
        "Variável GITHUB_CLIENT_ID não configurada nas variáveis da Vercel.",
    });
    return;
  }

  const cabecalhoHost = request.headers["x-forwarded-host"];

  const host =
    typeof cabecalhoHost === "string"
      ? cabecalhoHost
      : (request.headers.host ?? "localhost");

  const cabecalhoProto = request.headers["x-forwarded-proto"];

  const protocolo =
    typeof cabecalhoProto === "string" ? cabecalhoProto : "https";

  const redirectUri =
    process.env.REDIRECT_URI ?? `${protocolo}://${host}/api/callback`;

  const authorizationUrl = new URL("https://github.com/login/oauth/authorize");

  authorizationUrl.searchParams.set("client_id", clientId);
  authorizationUrl.searchParams.set("redirect_uri", redirectUri);
  authorizationUrl.searchParams.set("scope", "repo,user");

  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.writeHead(307, { Location: authorizationUrl.toString() });
  response.end();
}
