# Modules métier

La landing est le premier module réellement implémenté. Les modules suivants sont réservés pour les phases applicatives et seront ajoutés un par un pour éviter un monolithe couplé :

`auth`, `dashboard`, `agencies`, `sub-agencies`, `users`, `clients`, `dossiers`, `packages`, `excursions`, `hotels`, `transfers`, `flights`, `maritime`, `visa`, `suppliers`, `allotments`, `operations`, `documents`, `treasury`, `currencies`, `invoicing`, `crm`, `reports`, `administration`.

Structure recommandée d'un module :

```text
module/
├── components/
├── actions/
├── services/
├── repositories/
├── queries/
├── schemas/
├── types/
└── tests/
```

Les frontières de modules sont importantes : un module expose une API interne minimale et n'accède pas directement aux détails d'implémentation d'un autre module.
