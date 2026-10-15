# 🎭 Areninha Cultural Renato Russo — Portal Web Oficial

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Decap CMS](https://img.shields.io/badge/Decap_CMS-FF0080?style=for-the-badge&logo=netlify&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Sobre o Projeto

Este portal web institucional foi desenvolvido como um **Projeto de Extensão Universitária da Universidade Federal do Rio de Janeiro (UFRJ)** chamado **UFRJ na Cultura**, integrando tecnologia, arte e desenvolvimento social em parceria direta com a **Secretaria Municipal de Cultura da Prefeitura da Cidade do Rio de Janeiro**, o **Instituto Usina Social** e a gestão da **Areninha Cultural Renato Russo**.

Localizada no Parque Poeta Manuel Bandeira, no Cocotá, Ilha do Governador, a Areninha Cultural Renato Russo é um polo vibrante de formação artística, convívio comunitário e difusão cultural. O portal atua como ponte digital entre o equipamento público e os moradores, oferecendo catálogo completo de oficinas, agenda de espetáculos, memorial histórico e canal de comunicação direto.

---

## Tecnologias e Arquitetura

O projeto foi construído utilizando a arquitetura **Jamstack** (JavaScript, APIs e Markup estático), garantindo alta velocidade de carregamento, índice máximo de segurança e ausência de banco de dados vulnerável:

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build & Dev Tooling:** [Vite](https://vitejs.dev/)
- **Design & Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Roteamento SPA:** [React Router](https://reactrouter.com/)
- **Gestão de Conteúdo (Headless CMS):** [Decap CMS](https://decapcms.org/) (Versionado em Git através de arquivos `.json`)
- **Otimização e Armazenamento de Mídia:** [Cloudinary](https://cloudinary.com/) (Media Library com CDN global)
- **Formulário de Contato & Sugestões:** [Web3Forms](https://web3forms.com/) (API serverless de mensageria com proteção Honeypot)
- **Hospedagem & CI/CD:** [Vercel](https://vercel.com/)

---

## Estrutura de Diretórios

```text
Areninha/
├── front/
│   ├── public/
│   │   ├── admin/             # Interface do Decap CMS (index.html e config.yml)
│   │   └── uploads/           # Imagens e mídias estáticas locais
│   ├── src/
│   │   ├── assets/            # Ícones, logotipos oficiais e vetores
│   │   ├── components/        # Componentes modulares (Header, Footer, Cards)
│   │   ├── content/           # Base de dados em JSON editável via CMS
│   │   │   ├── configuracoes/ # Telefones, e-mails, horários e redes sociais
│   │   │   ├── homePage/      # Textos, subtítulos, estatísticas e vídeo da Home
│   │   │   ├── espacoPage/    # Textos da infraestrutura e vídeo do Espaço
│   │   │   ├── historiaPage/  # Linha do tempo, equipe e textos da memória
│   │   │   ├── noticiasPage/  # Notícias e destaques editoriais
│   │   │   ├── oficinasPage/  # Turmas regulares e regras de inscrição
│   │   │   └── programacaoPage/# Eventos, shows e peças teatrais
│   │   ├── pages/             # Telas da aplicação (Home, Espaço, Programação, etc.)
│   │   └── utils/             # Formatador de URLs do YouTube e utilitários
│   ├── vercel.json            # Regras de rewrite SPA e roteamento para a Vercel
│   └── package.json           # Dependências do frontend
└── README.md
```

---

## Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### 1. Instalação das dependências
```bash
cd front
npm install
```

### 2. Variáveis de ambiente
Crie um arquivo `.env` dentro da pasta `front/` contendo:
```env
VITE_WEB3FORMS_ACCESS_KEY="sua_chave_de_acesso_do_web3forms"
```

### 3. Iniciar o servidor Vite
```bash
npm run dev
```
Acesse o portal em: `http://localhost:5173`

### 4. Executar o painel do Decap CMS localmente
Para editar conteúdos e salvar alterações diretamente no seu ambiente local (sem precisar de commits remotos imediatos), abra um segundo terminal na pasta `front/` e execute:
```bash
npx decap-server
```
Em seguida, acesse: `http://localhost:5173/admin`

---

## Gestão de Conteúdo (Painel Administrativo)

O Decap CMS permite que gestores editem textos, publiquem novos eventos, criem notícias e gerenciem oficinas diretamente pela interface web em `/admin`.

Coleções configuradas no `config.yml`:
- **Notícias:** Manchete principal de capa e grade cronológica de novidades.
- **Programação:** Catálogo de shows e eventos (dia, horário, categoria e links de ingressos).
- **Oficinas:** Turmas regulares (segunda a quinta-feira), professores, faixa etária e regras de inscrição.
- **História & Equipe:** Marcos da linha do tempo institucional e colaboradores da equipe.
- **Configurações Gerais:** Telefones, e-mails, horários de atendimento da secretaria e redes sociais.
- **Subtítulos e Textos das Páginas:** Edição de chamadas, apresentações e vídeos do YouTube.

---

## Realização e Parcerias Institucionais

- **Universidade Federal do Rio de Janeiro (UFRJ)** — *Projeto de Extensão Universitária*
- **Prefeitura da Cidade do Rio de Janeiro**
- **Secretaria Municipal de Cultura do Rio de Janeiro (SMC)**
- **Instituto Usina Social**
- **Areninha Cultural Renato Russo**
