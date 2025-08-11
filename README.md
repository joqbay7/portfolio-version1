# Portfólio — Vite + TypeScript

> Projeto desenvolvido como parte da formação Oracle Next Education (ONE) em parceria com a Alura, com foco em práticas modernas de Front-end, acessibilidade e deploy.

## Sobre o projeto
Este repositório contém meu portfólio pessoal, construído com Vite + TypeScript e estilização em CSS. Além de apresentar minhas informações e contatos, ele lista projetos do meu GitHub automaticamente, facilitando a navegação por demos e código-fonte.

Destaques didáticos da formação ONE + Alura aplicados aqui:
- Organização de projeto e versionamento com Git/GitHub (commits semânticos, branches).
- Acessibilidade (ARIA, navegação por teclado, foco e rótulos adequados).
- Responsividade, tipografia e boas práticas de CSS.
- JavaScript/TypeScript moderno (fetch API, módulos, tipagem, DOM API com segurança).
- Build rápido com Vite e automações de lint/format (ESLint + Prettier).

## Recursos principais
- Menu mobile com alternância de estado e atributos ARIA.
- Scroll suave e destaque de seção ativa ao rolar.
- Lista de projetos dinâmica vinda da API do GitHub, com prioridade para repositórios com demo.
- Componentes com estados de carregamento (skeleton) e tratamento de erro.
- Atualização automática do ano no rodapé.

## Stack e ferramentas
- Vite 5, TypeScript 5, HTML5, CSS3
- ESLint 9 (typescript-eslint), Prettier 3
- Git + GitHub

## Estrutura do projeto
 - `index.html` — marcação e seções principais (Hero, Sobre, Skills, Projetos, Contato)
 - `src/main.ts` — lógica de UI, acessibilidade, scroll e busca de projetos no GitHub
 - `src/style.css` — estilos globais e utilitários
 - `vite.config.ts` — configuração do servidor (porta e auto-open)
 - `images/` — assets do avatar

## Como executar localmente
Pré-requisitos: Node.js 18+ e npm.

Instalação e desenvolvimento:
```bash
npm install
npm run dev
```
Acesse http://localhost:5173

Build de produção e preview:
```bash
npm run build
npm run preview
```

## Configuração dos projetos do GitHub
A seção "Projetos" lê repositórios públicos via GitHub API. Você pode controlar o usuário e uma lista de repositórios priorizados diretamente no `index.html` usando data-atributos:

```html
<section id="projetos" data-github-user="joqbay7" data-include-repos="repoA,repoB">...</section>
```

- `data-github-user` define o usuário do GitHub.
- `data-include-repos` (opcional) prioriza e filtra repositórios específicos, quando informado.

Se um repositório tiver `homepage` configurado, o botão "Ver demo" apontará para essa URL. Caso contrário, o código tenta inferir GitHub Pages no padrão `https://USUARIO.github.io/NOME_DO_REPO/`.

## Acessibilidade
- Botão do menu com `aria-expanded` e rótulos claros.
- Fechamento do menu por clique externo e tecla `Esc`.
- Links de navegação com estado ativo baseado na seção visível.
- Link "Ir para conteúdo" para pular diretamente ao conteúdo principal.

## Deploy
Este projeto pode ser hospedado facilmente no GitHub Pages, Vercel ou Netlify. Para GitHub Pages (build gerado em `dist/`):

1. Execute o build: `npm run build`.
2. Publique o conteúdo da pasta `dist/` na branch `gh-pages` ou use uma Action pronta para Vite.

## Roadmap (próximos passos)
- [ ] Adicionar testes rápidos de UI/DOM
- [ ] Melhorar semântica e contraste em temas escuros
- [ ] Adicionar i18n opcional (PT-BR/EN)

## Créditos
- Formação Oracle Next Education (ONE) — Alura
- Ícones, tipografia e inspirações de layouts baseados em boas práticas da comunidade Front-end.

## Contato
- Email: julio.maciel@cs.up.edu.br
- GitHub: https://github.com/joqbay7
- LinkedIn: https://www.linkedin.com/
# ortfolio-version1 (Vite + TypeScript)

Projeto inicial criado com Vite (vanilla) e TypeScript.

## Pré-requisitos
- Node.js 18+ e npm

## Instalar dependências
```powershell
npm install
```

## Ambiente de desenvolvimento
```powershell
npm run dev
```
Acesse: http://localhost:5173

## Build de produção
```powershell
npm run build
```

## Preview do build
```powershell
npm run preview
```
