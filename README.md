# GestionVoyage.com — Landing V3

Refonte de la landing dans la direction UI validée : page SaaS premium, très aérée, peu chargée, responsive et organisée en composants réutilisables.

## Stack
- Next.js 16 / App Router
- React 19
- TypeScript strict
- CSS Modules + design tokens
- Zod préparé pour les futurs formulaires
- Vitest / Playwright préparés pour la suite

## Choix 2026
- Server Components par défaut
- JavaScript client limité au strict nécessaire
- Assets locaux optimisables par `next/image`
- Responsive mobile-first
- `prefers-reduced-motion`
- séparation `app / modules / components / styles`

## Lancer
```bash
npm install
npm run dev
```
Puis ouvrir `http://localhost:3000`.

## Contrôles
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Voir `docs/ARCHITECTURE.md`.
