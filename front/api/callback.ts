import type {
  RequisicaoVercelApi,
  RespostaVercelApi,
  RespostaTokenGitHub,
} from "./types.ts";

function gerarHtmlSucesso(payloadJson: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Autenticação Concluída</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        background: #0A2435;
        color: #FFFFFF;
      }
    </style>
  </head>
  <body>
    <p>Autenticação concluída! Fechando janela...</p>
    <script>
      (function() {
        function receiveMessage(event) {
          window.opener.postMessage(
            'authorization:github:success:${payloadJson}',
            event.origin
          );
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;
}

export default async function handler(
  request: RequisicaoVercelApi,
  response: RespostaVercelApi,
): Promise<void> {
  const codigoAutorizacao = request.query.code;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (typeof codigoAutorizacao !== "string" || codigoAutorizacao.length === 0) {
    response.status(400).send("Código de autorização não recebido do GitHub.");
    return;
  }

  if (!clientId || !clientSecret) {
    response
      .status(500)
      .send(
        "Credenciais GITHUB_CLIENT_ID ou GITHUB_CLIENT_SECRET ausentes na Vercel.",
      );
    return;
  }

  try {
    const gitHubTokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: codigoAutorizacao,
        }),
      },
    );

    const tokenData = (await gitHubTokenResponse.json()) as RespostaTokenGitHub;

    const accessToken = tokenData.access_token;

    if (!accessToken) {
      response
        .status(400)
        .send(`Erro ao obter token do GitHub: ${JSON.stringify(tokenData)}`);
      return;
    }

    const payload = JSON.stringify({
      token: accessToken,
      provider: "github",
    });

    const htmlPagina = gerarHtmlSucesso(payload);

    response.setHeader("Cache-Control", "no-store, max-age=0");
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.status(200).send(htmlPagina);
  } catch (erro) {
    console.error("Erro na autenticação OAuth:", erro);
    response.status(500).send("Erro interno durante autenticação.");
  }
}
