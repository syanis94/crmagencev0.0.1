# Architecture GestionVoyage.com

## Principes
- Next.js App Router ; Server Components par défaut.
- Client Components minimaux : uniquement pour les interactions nécessaires (menu mobile aujourd'hui).
- Modules métier isolés sous `src/modules`.
- Composants réutilisables sous `src/components`.
- Design tokens centralisés dans `src/styles/tokens.css`.
- Données statiques de présentation séparées des composants.
- Animations CSS légères, compatibles `prefers-reduced-motion`.
- Assets locaux pour éviter les dépendances runtime externes sur la landing.

## Structure cible
```text
src/
├── app/
│   ├── (marketing)/
│   ├── (auth)/
│   ├── (dashboard)/
│   └── api/
├── components/
│   ├── brand/
│   ├── icons/
│   └── ui/
├── modules/
│   ├── landing/
│   ├── auth/
│   ├── clients/
│   ├── dossiers/
│   ├── visa/
│   ├── hotels/
│   ├── flights/
│   ├── maritime/
│   ├── packages/
│   ├── excursions/
│   ├── transfers/
│   ├── suppliers/
│   ├── allotments/
│   ├── operations/
│   ├── documents/
│   ├── treasury/
│   ├── invoicing/
│   ├── crm/
│   └── administration/
└── styles/
```
Chaque module métier pourra contenir `components`, `actions`, `services`, `schemas`, `types`, `repositories`, `queries` et `tests`.
