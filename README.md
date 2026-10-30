# Flow-Score

**Flow-Score** est un gestionnaire de notes destiné aux enseignants. Il permet de gérer des classes, des élèves, des devoirs avec coefficients, de calculer les moyennes et de suivre les stages — le tout en local, sans serveur ni compte utilisateur.

![Version](https://img.shields.io/badge/version-1.0.3-40b3a2) ![Plateformes](https://img.shields.io/badge/plateformes-Windows%20%7C%20Linux-e8a87c) ![Langue](https://img.shields.io/badge/langue-Fran%C3%A7ais-c38d9d) ![Licence](https://img.shields.io/badge/licence-GPL--3.0-blue)

## Fonctionnalités

- **Classes** : création, duplication, renommage, suppression et filtrage par période
- **Élèves** : ajout, renommage, suppression
- **Devoirs** : ajout et modification, avec **coefficient** par devoir
- **Notes** : saisie directe dans le tableau (édition en ligne), moyennes par élève et moyenne de classe
- **Statistiques** : vue synthétique des moyennes de classe
- **Stages** : suivi des stages des élèves (statut, commentaires, convention)
- **Import / Export JSON** : sauvegarde et restauration complètes des données
- **Impression** : tableau des notes et tableau des stages (mise en page dédiée)
- **Thème clair / sombre** : suit le système, avec bascule manuelle persistante

## Stack technique

- [Electron](https://www.electronjs.org/) — application de bureau multiplateforme (Windows, Linux)
- HTML / CSS / JavaScript vanilla — l'interface est une application monopage autonome (`build/index.html`, sans framework ni dépendance npm côté rendu)
- Stockage **100 % local** : les données sont conservées dans le `localStorage` du profil applicatif (clé `genechNotesData`)

### Sécurité

Le processus de rendu est durci : `contextIsolation: true`, `sandbox: true`, `nodeIntegration: false`. Aucune ressource externe n'est chargée au runtime ; les liens externes s'ouvrent dans le navigateur par défaut de l'utilisateur.

## Structure du projet

```
.
├── main.js             # Processus principal Electron (fenêtre, impression, sécurité)
├── package.json
├── icon_512.png        # Icône de l'application
├── build/
│   ├── index.html      # Application complète (UI, styles, logique)
│   └── icon.png
├── LICENSE             # Licence GPL-3.0
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## Exécution en développement

Prérequis : [Node.js](https://nodejs.org/) (LTS).

```bash
npm install --save-dev electron
npx electron .
```

## Données et confidentialité

Aucune donnée ne quitte la machine : pas de télémétrie, pas de réseau, pas de compte. Les données vivent dans le profil Electron (`~/.config/flowscore` sous Linux, `%APPDATA%\flowscore` sous Windows). Utilisez **Export JSON** pour vos sauvegardes régulières.

## Licence

Ce projet est distribué sous licence [GPL-3.0](LICENSE). Vous pouvez l'utiliser,
l'étudier, le modifier et le redistribuer librement, à condition que les
travaux dérivés soient publiés sous la même licence.

## Contribuer

Les rapports de bugs et les propositions de fonctionnalités sont les bienvenus :
consultez [CONTRIBUTING.md](CONTRIBUTING.md) et ouvrez une
[issue](https://github.com/GitKernelDesign/FlowScore/issues).

## Téléchargements (v1.0.3.a)

Les installateurs ne sont pas versionnés dans le dépôt (trop volumineux pour Git) — téléchargez-les depuis la page **[Releases](https://github.com/GitKernelDesign/FlowScore/releases)** :

| Fichier | Plateforme |
|---|---|
| `Flow-Score-Setup-1.0.3.a.exe` | Windows — installateur |
| `Flow-Score-Portable-1.0.3.a.exe` | Windows — portable, sans installation |
| `Flow-Score-1.0.3.a.AppImage` | Linux — exécutable autonome |
