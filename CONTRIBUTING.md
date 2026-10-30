# Contribuer à Flow-Score

Merci de votre intérêt pour Flow-Score ! Ce document explique comment
signaler un bug, proposer une fonctionnalité ou soumettre du code.

## Signaler un bug

Ouvrez une [issue](https://github.com/GitKernelDesign/FlowScore/issues) en
précisant :

- votre système d'exploitation et la version de Flow-Score ;
- les étapes pour reproduire le problème ;
- le comportement attendu et le comportement observé ;
- si possible, une capture d'écran ou la sauvegarde JSON anonymisée des données.

**Ne joignez jamais de données réelles d'élèves** (noms, notes, stages) :
anonymisez-les avant de les partager.

## Proposer une fonctionnalité

Les propositions sont les bienvenues. Ouvrez d'abord une issue pour en
discuter avant de développer : cela évite que du travail soit fait dans une
direction qui ne sera pas retenue.

## Environnement de développement

Prérequis : [Node.js](https://nodejs.org/) (LTS).

```bash
npm install --save-dev electron
npx electron .
```

### Organisation du code

- `main.js` — processus principal Electron (fenêtre, impression, sécurité) ;
- `build/index.html` — application complète (interface, styles, logique) en
  HTML/CSS/JavaScript vanilla, **sans framework ni dépendance** côté rendu ;
- les données sont conservées dans le `localStorage` (clé `genechNotesData`).

### Règles de contribution

1. Forkez le dépôt puis créez une branche dédiée
   (`git checkout -b feat/ma-fonctionnalite`).
2. Une fonctionnalité = une branche = une pull request.
3. Conservez le code du rendu en JavaScript vanilla, sans dépendance externe :
   c'est un choix assumé du projet (application autonome et légère).
4. Respectez la langue française pour l'interface et la documentation.
5. Mettez à jour `CHANGELOG.md` si votre changement est visible pour
   l'utilisateur.
6. Décrivez clairement le but et le contenu de votre pull request.

### Licence

En soumettant une contribution, vous acceptez qu'elle soit publiée sous
licence [GPL-3.0](LICENSE).
