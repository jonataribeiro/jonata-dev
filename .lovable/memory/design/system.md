---
name: Design System
description: Paleta navy + cinza espacial + off-white, Modern Minimalist sóbrio
type: design
---
# Design System — Modern Minimalist (Navy)

Tema dark profissional, sóbrio. Atualizado de roxo neon → azul marinho.

## Paleta (HSL)
- background: 220 35% 6% (navy quase preto)
- foreground: 40 25% 96% (off-white)
- card: 220 30% 9% (cinza espacial)
- primary: 215 88% 62% (navy/blue principal)
- primary-glow: 210 95% 72%
- primary-deep: 220 80% 42%
- accent: 200 90% 60% (azul ciano sutil)
- border: 220 22% 16%
- muted-foreground: 220 12% 65%
- whatsapp: 142 70% 45% (mantida isolada)

## Tipografia
- Display: Space Grotesk
- Body: Inter (300-700)
- Mono: JetBrains Mono

## Gradientes (sutis, sem neon excessivo)
- gradient-text: off-white → azul claro (135deg)
- gradient-hero: halo navy radial discreto
- gradient-primary: navy deep → blue claro

## Sombras
- shadow-glow: 60px navy 30%
- shadow-elegant: 24px navy 40%
- shadow-card: 8px 32px preto 85%

## Utilitário
- .glass: backdrop-blur 14px + saturate 140%, fundo card 55% opacity

## Regra crítica
Tokens semânticos via Tailwind/CSS vars. Sempre HSL. Nada hardcoded.
