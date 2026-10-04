# Rapport de validation — Landing V3

## Contrôles réalisés

- Architecture modulaire : **OK**
- Assets locaux : **OK**
- Responsive : desktop / tablette / 640 px / 380 px intégrés
- `prefers-reduced-motion` : **OK**
- Client JS : limité au menu mobile
- TS/TSX files: **14** ; syntax errors: **0**
- CSS rules: **95** ; parse errors: **0**
- Preview HTML autonome : **générée**

## Limites de l'environnement

- `npm install` a été tenté dans l'environnement cloud mais le registre npm a expiré avant la fin ; je ne marque donc pas `next build` comme réussi.
- Chromium est présent mais la navigation `file://` / `localhost` est bloquée par la politique du navigateur cloud ; la capture E2E visuelle automatisée n'a donc pas été validée ici.

Le code source reste le projet Next.js principal. `landing-preview.html` est uniquement une prévisualisation autonome pour le test visuel depuis le chat.
