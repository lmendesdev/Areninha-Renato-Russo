import type { IncomingMessage, ServerResponse } from "node:http";

export interface RequisicaoVercelApi extends IncomingMessage {
  readonly query: Partial<Record<string, string | string[]>>;
  readonly cookies?: Partial<Record<string, string>>;
  readonly body?: unknown;
}

export interface RespostaVercelApi extends ServerResponse {
  send: (body: string | Buffer | object) => RespostaVercelApi;
  json: (jsonBody: unknown) => RespostaVercelApi;
  status: (statusCode: number) => RespostaVercelApi;
  redirect: (url: string) => RespostaVercelApi;
}

export interface RespostaTokenGitHub {
  readonly access_token?: string;
  readonly scope?: string;
  readonly token_type?: string;
  readonly error?: string;
  readonly error_description?: string;
}
