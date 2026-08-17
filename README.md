# jonataribeiro.dev

Portfólio profissional de **Jonata Ribeiro** — posicionamento **Backend • Data • AI**.

Projeto independente, separado de jonataribeiro.tech (plataforma de estudos).

## Stack

- Vite
- React 19
- TypeScript (strict)
- CSS moderno (variáveis, `prefers-color-scheme`, `prefers-reduced-motion`)

## Estrutura

```
src/
├── components/
│   ├── layout/    # Header, Footer
│   ├── sections/  # Hero, Sobre, Formação, Skills, Projetos, Contato
│   └── ui/        # Componentes reutilizáveis (Section, Icon, EmptyState)
├── data/          # Conteúdo editável (perfil, skills, projetos, formação)
├── App.tsx
└── index.css
```

Todo o conteúdo é orientado a dados em `src/data/`. Adicione projetos, formação e canais de contato editando esses arquivos — nada é inventado.

## Comandos

```bash
npm install
npm run dev       # desenvolvimento
npm run typecheck # TypeScript strict
npm run lint      # oxlint
npm run build     # build de produção em dist/
npm run preview   # pré-visualização do build
```

## GitHub Pages

- `base: './'` no `vite.config.ts` — o build funciona em subdiretórios (`https://seu-usuario.github.io/PORTIFÓLIO_JONATARIBEIRO.DEV/`).
- Publicar o conteúdo de `dist/` via GitHub Pages (branch `gh-pages` ou Actions).
- SEO: `index.html` com meta/OG/JSON-LD, `public/robots.txt` e `public/sitemap.xml` apontam para `https://jonataribeiro.dev`.