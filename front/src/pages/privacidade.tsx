import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";

export function Privacidade() {
  return (
    <div className="bg-bg-whiteCustom text-black font-sans antialiased min-h-screen flex flex-col">
      <Header />

      <main className="grow py-12 md:py-20 px-6 md:px-12">
        <article className="max-w-3xl mx-auto space-y-8">
          <header className="border-b border-black/15 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Política de Privacidade
            </h1>
            <p className="text-sm text-black/70">
              Última atualização: Outubro de 2026
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              1. Navegação Sem Cadastro
            </h2>
            <p className="text-base leading-relaxed text-black">
              O portal da Areninha Cultural Renato Russo pode ser acessado
              livremente por qualquer visitante, sem necessidade de criação de
              conta, login ou fornecimento obrigatório de dados pessoais para
              consultar a programação, as oficinas, a estrutura e as notícias do
              espaço.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              2. Formulário de Sugestões e Contato
            </h2>
            <p className="text-base leading-relaxed text-black">
              Na página de Sugestões e Contato, o envio de mensagens é
              voluntário e a identificação por nome e endereço de e-mail é
              totalmente opcional. Caso o visitante opte por informar esses
              dados, eles serão utilizados exclusivamente pela equipe de gestão
              para responder à manifestação enviada e aprimorar o portal e as
              atividades culturais da Areninha.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              3. Métricas Anônimas de Tráfego
            </h2>
            <p className="text-base leading-relaxed text-black">
              Este portal é hospedado em uma plataforma virtual que coleta
              apenas métricas técnicas e estatísticas agregadas de acesso (como
              volume de visitas, páginas mais acessadas, tipo de navegador e
              desempenho de carregamento). Esses dados são anônimos, não
              identificam pessoalmente o visitante e servem unicamente para
              monitorar a estabilidade e melhorar a experiência de navegação do
              site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              4. Compartilhamento de Dados e Serviços de Terceiros
            </h2>
            <p className="text-base leading-relaxed text-black">
              A gestão da Areninha Cultural Renato Russo não comercializa, aluga
              nem compartilha dados de visitantes com terceiros para fins
              publicitários. Ao clicar em links externos presentes no site (como
              plataformas de retirada ou compra de ingressos, formulários de
              inscrição, WhatsApp, Instagram ou YouTube), o visitante passará a
              estar sujeito às políticas de privacidade próprias de cada serviço
              externo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              5. Direitos do Titular e Contato (LGPD)
            </h2>
            <p className="text-base leading-relaxed text-black">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018), qualquer pessoa que tenha enviado voluntariamente
              seu nome ou e-mail por meio do canal de sugestões pode solicitar a
              consulta ou a exclusão dessas informações a qualquer momento,
              entrando em contato pelo e-mail oficial:{" "}
              <a
                href="mailto:gestaoculturalareninharrusso@gmail.com"
                className="underline font-medium"
              >
                gestaoculturalareninharrusso@gmail.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Privacidade;
