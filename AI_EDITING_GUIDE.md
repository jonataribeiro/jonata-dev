# 🤖 Guia Mestre para IA — Portfólio Jônata Ribeiro

> **Para a IA que vai me ajudar no VS Code:** leia este arquivo INTEIRO antes de sugerir qualquer alteração. Ele contém a arquitetura, convenções e regras do projeto. Aja como um **mentor sênior**: explique o *porquê* de cada decisão, não só o *como*.

---

## 🎯 Contexto do projeto

- **Quem:** Jônata Emerson da Silva Ribeiro — servidor público em transição de carreira para Desenvolvimento Full-Stack.
- **Objetivo do site:** vitrine profissional para conquistar a **primeira oportunidade** no mercado de tecnologia.
- **Tom:** profissional, maduro, direto. A trajetória no serviço público é apresentada como **diferencial analítico**, não como desvio de carreira.
- **Domínio:** `jonataribeiro.tech`

## 🛠️ Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | **React 18 + Vite 5** |
| Linguagem | **TypeScript 5** (strict) |
| Estilo | **Tailwind CSS v3** + CSS variables (HSL) |
| Animações | **Framer Motion** |
| Ícones | **lucide-react** |
| UI base | **shadcn/ui** (radix) |
| Roteamento | **react-router-dom** |

Scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run test`.

## 📁 Arquitetura de pastas

```
src/
├── assets/               # Imagens (avatar.jpg)
├── components/
│   ├── portfolio/        # ⭐ Seções do site — EDITE AQUI
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Timeline.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx   (exporta Contact + Footer)
│   │   └── WhatsAppFab.tsx
│   └── ui/               # shadcn — NÃO editar salvo necessidade real
├── config/
│   └── site.ts           # ⭐ CONTEÚDO CENTRALIZADO — texto, links, stack, projetos
├── pages/
│   ├── Index.tsx         # Monta todas as seções
│   └── NotFound.tsx
├── index.css             # ⭐ DESIGN TOKENS (paleta, gradientes, sombras, neon)
└── main.tsx
public/
└── curriculo.pdf         # ⭐ Troque pelo PDF real
```

## 🎨 Design System (regra de ouro)

**NUNCA** use cores hardcoded (`text-white`, `bg-purple-500`, `#c084fc`, etc.) nos componentes. Sempre use **tokens semânticos** definidos em `src/index.css`.

### Paleta atual: Roxo / Violeta neon (dark theme)

| Token | HSL | Uso |
|---|---|---|
| `--background` | `260 35% 6%` | fundo global |
| `--foreground` | `280 20% 97%` | texto principal |
| `--primary` | `270 92% 65%` | violeta neon — acento |
| `--primary-glow` | `280 100% 75%` | brilho lilás |
| `--accent` | `285 95% 65%` | magenta/violeta vibrante |
| `--muted-foreground` | `270 12% 68%` | texto secundário |
| `--border` | `265 25% 18%` | bordas sutis |
| `--card` | `260 30% 9%` | fundo de cards |

### Classes utilitárias customizadas (definidas em `index.css`)

- `.text-gradient` — texto com gradiente violeta
- `.glass` — card com backdrop-blur + borda sutil
- `.shadow-glow` / `.shadow-glow-sm` — glow violeta
- `.bg-hero-glow` — halo radial roxo
- `.grid-bg` — grid sutil (fundo do Hero)
- `.nav-neon` — link do menu com underline neon + text-shadow no hover
- `.btn-neon` — botão sólido com glow violeta
- `.btn-outline-neon` — botão outline que ganha borda neon no hover
- `.logo-neon` — text-shadow sutil para a logo

### Tipografia

- **Display (títulos):** `Space Grotesk` → classe `.font-display`
- **Body:** `Inter` (padrão)
- **Código/mono:** `JetBrains Mono` → classe `.font-mono`

### Como ajustar a paleta

Edite apenas os valores HSL em `src/index.css` dentro de `:root`. Tudo (tokens, gradientes, sombras, orbs) propaga automaticamente.

## ✏️ Onde editar cada coisa

| Quer mudar... | Arquivo |
|---|---|
| Nome, bio, email, telefone, WhatsApp, redes | `src/config/site.ts` |
| Lista de stack (cards "em uso"/"estudando") | `src/config/site.ts` → `stack` |
| Filosofia, projetos, trajetória | `src/config/site.ts` |
| Foto de perfil | Substituir `src/assets/avatar.jpg` |
| Currículo PDF | Substituir `public/curriculo.pdf` |
| Paleta de cores | `src/index.css` (`:root`) |
| Layout de uma seção | `src/components/portfolio/<Nome>.tsx` |
| SEO / meta tags | `index.html` |

## 📐 Seções atuais (ordem em `src/pages/Index.tsx`)

1. **Navbar** — fixa, com efeito neon
2. **Hero** — foto ampliada (`object-top` para não cortar cabelo)
3. **About** (Sobre) — transição de carreira
4. **Stack** — 4 cards com badges `em uso` / `estudando` (inclui SQL)
5. **Timeline** (Trajetória) — experiência + educação
6. **Projects** — projetos destacados
7. **Contact** — CTAs: WhatsApp + **Baixar Currículo** (movido do topo)
8. **Footer**
9. **WhatsAppFab** — botão flutuante

> ℹ️ A seção **Philosophy foi removida** conforme pedido. O componente não existe mais.

## 🧱 Convenções de código

1. **Componentes funcionais** com TypeScript. Exports nomeados (não `default`) para componentes de seção.
2. **Props tipadas** sempre. Evitar `any`.
3. **Framer Motion** para animações de entrada: padrão `initial / whileInView / viewport={{ once: true, margin: "-100px" }}`.
4. **Mobile-first**: comece pelo mobile, depois `sm:` `md:` `lg:`.
5. **Acessibilidade:** `aria-label` em ícones clicáveis, `alt` em imagens, `aria-hidden` em decorações.
6. **Sem comentários redundantes** — mas DEIXE comentários explicativos onde houver edição comum (ex: trocar foto).
7. **Imports absolutos** com `@/` (alias para `src/`).

## 🚀 Como rodar localmente (VS Code)

```bash
npm install
npm run dev          # http://localhost:8080
npm run build        # build de produção
npm run lint         # checagem de lint
```

## ✅ Checklist antes de fazer deploy

- [ ] Trocou `public/curriculo.pdf` pelo PDF real
- [ ] Trocou `src/assets/avatar.jpg` pela foto definitiva (1:1, boa iluminação)
- [ ] Revisou textos em `src/config/site.ts`
- [ ] Atualizou `index.html` (title, description, og:image)
- [ ] Rodou `npm run build` sem erros
- [ ] Testou em mobile (DevTools → responsive)

## 🧭 Como a IA deve me orientar (mentor sênior)

Quando eu pedir uma mudança, siga este fluxo:

1. **Diagnóstico:** identifique o(s) arquivo(s) envolvido(s).
2. **Princípio:** explique a convenção/token do design system que se aplica.
3. **Edição proposta:** mostre o *patch* (antes/depois) com `search/replace` ou trecho claro.
4. **Justificativa:** por que essa é a melhor forma — legibilidade, performance, manutenibilidade.
5. **Teste:** diga como eu verifico (ex: "rode `npm run dev` e vá até a seção X").

**NÃO faça:**
- Criar cores hardcoded fora do design system.
- Adicionar libs pesadas sem justificar.
- Quebrar a responsividade mobile.
- Mudar o tom de voz (tem que permanecer maduro/profissional).

**SEMPRE faça:**
- Mantenha o conteúdo em `src/config/site.ts` (separar conteúdo de apresentação).
- Priorize `search/replace` sobre reescrita completa de arquivos.
- Comente decisões não-óbvias no código.

---

## 🔑 Três regras que guiam esse projeto

1. **Legibilidade** — se o código não for fácil de manter, ele não está pronto.
2. **Performance** — UX é a métrica mais importante.
3. **Propósito** — tecnologia é ferramenta; o objetivo é resolver problema real (aqui: ser contratado).

Boa edição 🚀
