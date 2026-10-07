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
              Termos de Uso e Privacidade
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
              3. Links Externos, Ingressos e Inscrições
            </h2>
            <p className="text-base leading-relaxed text-black">
              Este site não realiza cobranças financeiras nem exige cadastro de
              usuários em seu próprio domínio. Os botões de aquisição de
              ingressos e de inscrição em oficinas redirecionam o visitante para
              plataformas externas ou formulários específicos, que possuem suas
              próprias políticas de uso, segurança e privacidade.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              4. Formulário de Sugestões e Contato
            </h2>
            <p className="text-base leading-relaxed text-black">
              O envio de mensagens pela página de Sugestões e Contato é
              totalmente voluntário, sendo o preenchimento de nome e e-mail
              opcional. As mensagens e o e-mail eventualmente informados são
              utilizados unicamente pela equipe de gestão para responder dúvidas,
              acolher sugestões da comunidade e aprimorar o site e as atividades
              da Areninha Cultural Renato Russo.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              5. Hospedagem e Métricas de Tráfego
            </h2>
            <p className="text-base leading-relaxed text-black">
              Este portal é hospedado em uma plataforma virtual que coleta métricas
              técnicas e estatísticas agregadas de acesso (como volume de
              visitas, páginas mais acessadas, tipo de navegador e desempenho de
              carregamento). Esses dados são anônimos, não identificam
              pessoalmente o visitante e são utilizados apenas para monitorar a
              estabilidade e melhorar a experiência de navegação do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              6. Atualizações e Contato Oficial
            </h2>
            <p className="text-base leading-relaxed text-black">
              A programação de eventos, os horários das oficinas e o conteúdo
              destes Termos de Uso podem ser atualizados a qualquer momento, sem
              aviso prévio, para refletir mudanças operacionais do espaço
              cultural. Em caso de dúvidas ou solicitações, entre em contato pelo
              e-mail oficial:{" "}
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
