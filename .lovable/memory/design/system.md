---
name: Design System
description: Paleta HSL roxo neon, tokens semânticos, gradientes e sombras com glow
type: design
---
# Design System — Roxo Neon

Tema dark minimalista com acento roxo neon (atualizado de mint).

## Paleta (HSL)
- background: 250 30% 5%
- foreground: 250 15% 94%
- card: 250 25% 8%
- primary: 270 95% 65% (roxo neon principal)
- primary-glow: 280 100% 75%
- border: 250 20% 14%
- muted-foreground: 250 10% 60%
- whatsapp: 142 70% 49% (cor da marca, semântica isolada)

## Tipografia
- Display: Space Grotesk (headings)
- Body: Inter (texto)
- Mono: JetBrains Mono (acentos técnicos / labels)

## Gradientes
- gradient-text: branco → roxo claro → magenta (135deg)
- gradient-hero: glow radial roxo no topo
- gradient-card: card escuro 145deg
- gradient-primary: roxo → magenta

## Sombras com glow
- shadow-glow: 60px primary 35%
- shadow-glow-sm: 24px primary 25%
- shadow-elegant: 20px 60px roxo 50%

## Animações
- blink (cursor)
- float (avatar)
- glow-pulse (FAB / CTAs)

## Regra crítica
Nunca usar cores hardcoded nos componentes. Sempre tokens semânticos via Tailwind
ou variáveis CSS. Todas as cores em HSL.
