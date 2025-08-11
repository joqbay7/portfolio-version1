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
# Portfolio — Vite + TypeScript



## About
This repository hosts my personal portfolio, built with Vite + TypeScript and CSS. Besides basic information and contact links, it automatically lists my GitHub projects, making it easy to find live demos and source code.

Program highlights from Oracle Next Education applied here:
- Project organization and version control with Git/GitHub (conventional commits, branches).
- Accessibility (proper ARIA, keyboard navigation, focus management and labels).
- Responsiveness, typography, and CSS best practices.
- Modern JavaScript/TypeScript (fetch API, ES modules, typing, safe DOM APIs).
- Fast builds with Vite and lint/format automation (ESLint + Prettier).

## Key features
- Mobile menu with state toggle and ARIA attributes.
- Smooth scrolling and active section highlighting on scroll.
- Dynamic projects grid powered by the GitHub API, with priority for repositories that have a live demo.
- Loading skeletons and error handling for better UX.
- Auto-updating year in the footer.

## Stack & tooling
- Vite 5, TypeScript 5, HTML5, CSS3
- ESLint 9 (typescript-eslint), Prettier 3
- Git + GitHub

## Project structure
- `index.html` — markup and main sections (Hero, About, Skills, Projects, Contact)
- `src/main.ts` — UI logic, accessibility, scrolling, and GitHub projects fetch
- `src/style.css` — global styles and utilities
- `vite.config.ts` — dev server configuration (port and auto-open)
- `images/` — avatar assets

## Run locally
Prerequisites: Node.js 18+ and npm.

Install and start dev server:
```bash
npm install
npm run dev
```
Open http://localhost:5173

Production build and preview:
```bash
npm run build
npm run preview
```

## GitHub projects configuration
The “Projects” section fetches public repositories via the GitHub API. Control the user and an optional prioritized list of repositories via data attributes in `index.html`:

```html
<section id="projetos" data-github-user="joqbay7" data-include-repos="repoA,repoB">...</section>
```

- `data-github-user` sets the GitHub user.
- `data-include-repos` (optional) prioritizes and filters specific repositories, when defined.

If a repository has a `homepage` set, the “Live demo” button points to that URL. Otherwise, the code tries to infer a GitHub Pages URL using the pattern `https://USER.github.io/REPO_NAME/`.

## Accessibility
- Menu button with `aria-expanded` and clear labels.
- Close menu on outside click and `Esc` key.
- Navigation links reflect the currently visible section.
- “Skip to content” link to jump to the main content.

## Deployment
This project can be hosted on GitHub Pages, Vercel, or Netlify. For GitHub Pages (build output in `dist/`):

1. Build the project: `npm run build`.
2. Publish the `dist/` folder to the `gh-pages` branch or use a prebuilt Vite Action.

## Roadmap
- [ ] Add quick UI/DOM tests
- [ ] Improve semantics and contrast for dark themes
- [ ] Optional i18n (EN/PT-BR)

## Credits
- Oracle Next Education — Alura
- Icons, typography, and layout inspiration based on Front-end community best practices.

## Contact
- Email: julio.maciel@cs.up.edu.br
- GitHub: https://github.com/joqbay7
- LinkedIn: https://www.linkedin.com/
## Preview do build
```powershell
npm run preview
```
