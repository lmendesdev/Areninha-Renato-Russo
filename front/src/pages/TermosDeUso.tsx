import { Header } from "../components/Header-Footer/Header";
import { Footer } from "../components/Header-Footer/Footer";

export function TermosDeUso() {
  return (
    <div className="bg-bg-whiteCustom text-black font-sans antialiased min-h-screen flex flex-col">
      <Header />

      <main className="grow py-12 md:py-20 px-6 md:px-12">
        <article className="max-w-3xl mx-auto space-y-8">
          <header className="border-b border-black/15 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Termos de Uso
            </h1>
            <p className="text-sm text-black/70">
              Última atualização: Outubro de 2026
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              1. Objetivo do Site
            </h2>
            <p className="text-base leading-relaxed text-black">
              Este site tem caráter exclusivamente institucional e informativo,
              com a finalidade de divulgar a programação cultural, as oficinas
              formativas, as notícias, a história e a infraestrutura da Areninha
              Cultural Renato Russo, localizada no Parque Poeta Manuel Bandeira,
              no Cocotá, Ilha do Governador (Rio de Janeiro/RJ).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              2. Uso do Conteúdo e Propriedade Intelectual
            </h2>
            <p className="text-base leading-relaxed text-black">
              Os textos, logotipos, fotografias, ilustrações e demais materiais
              disponibilizados neste portal pertencem à gestão da Areninha
              Cultural Renato Russo ou aos artistas e parceiros divulgados na
              programação. É permitida a reprodução das informações para fins
              jornalísticos, educativos e de divulgação cultural, sendo vedado o
              uso comercial indevido ou a alteração do sentido original das
              publicações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              3. Programação, Horários e Eventos
            </h2>
            <p className="text-base leading-relaxed text-black">
              As datas, os horários, as classificações indicativas e a
              disponibilidade de vagas em espetáculos e oficinas divulgados
              neste site estão sujeitos a alterações por motivos técnicos,
              operacionais ou climáticos, respeitando sempre a capacidade máxima
              de lotação de cada ambiente da Areninha Cultural Renato Russo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              4. Links Externos, Ingressos e Inscrições
            </h2>
            <p className="text-base leading-relaxed text-black">
              Este portal não realiza vendas nem processa pagamentos em seu
              próprio domínio. Os botões de aquisição ou retirada de ingressos e
              de inscrição em oficinas redirecionam o visitante para plataformas
              externas ou formulários específicos, que operam sob suas próprias
              regras, termos de serviço e responsabilidades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              5. Atualizações e Contato Oficial
            </h2>
            <p className="text-base leading-relaxed text-black">
              Estes Termos de Uso podem ser atualizados a qualquer momento, sem
              aviso prévio, para refletir melhorias no portal ou mudanças nas
              diretrizes operacionais do espaço cultural. Em caso de dúvidas ou
              solicitações, entre em contato pelo e-mail oficial:{" "}
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

export default TermosDeUso;
