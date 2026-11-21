# Changelog

Toutes les évolutions notables de Flow-Score sont documentées dans ce fichier.
Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/)
et le projet suit une versionnement [SemVer](https://semver.org/lang/fr/).

## [1.2.0] — 2026-11-21

Version actuelle. **Refonte UX/UI mobile-first** : nouvelle coquille de
navigation, trois vues de notes, feuille de saisie repensée, dialogues
accessibles et retours d'action (annulation, enregistrement).

### Ajouté

- **Navigation mobile-first** : barre d'application compacte (classe active,
  thème, données), onglets Notes / Stages / Stats, et **barre de navigation
  fixe en bas** sur mobile (barre horizontale classique sur ordinateur).
- **Trois vues de notes**, mémorisées d'une session à l'autre :
  **Fiches élève** (cartes), **Par devoir** (saisie en liste) et **Grille**
  (tableau complet).
- **Feuille de saisie d'une note** : grand champ numérique, barème 20 / 10 / 5,
  boutons ABS / NN / NR, aperçu converti sur 20, coefficient dans « Options
  avancées », enchaînement **élève suivant / précédent** et suppression.
- **Ajout d'élèves en série** : un nom par ligne (collage d'une liste complète),
  doublons ignorés avec un récapitulatif.
- **Dialogue « Mes classes »** : recherche, filtres par période avec compteurs,
  création, renommage, duplication et suppression.
- **Gestion des matières** dans un dialogue dédié (renommage, coefficient,
  suppression avec confirmation listant les devoirs concernés).
- **Gestion des devoirs** : nom, matière et coefficient dans un dialogue, avec
  suppression et annulation.
- **Stages** : cartes par élève, filtres par statut (dont « Convention à
  signer »), bascule de convention, commentaire de suivi et recherche.
- **Statistiques** : 4 indicateurs clés, moyenne par matière, répartition des
  moyennes en 6 tranches et classement triable (moyenne ou nom).
- **Annulation** : chaque suppression (note, élève, devoir, matière, classe,
  import, réinitialisation) affiche un toast « Annuler » qui restaure l'état
  précédent.
- **Import JSON** par sélection de fichier ou glisser-déposer, avec résumé
  (classes / élèves) et confirmation avant remplacement.
- **Thème Auto / Clair / Sombre** et **mode compact** persistants, accessibles
  depuis l'en-tête et le dialogue « Données & réglages ».
- **Accessibilité** : cibles tactiles de 44 px, focus visibles, libellés
  `aria`, états `aria-pressed`, textes réservés aux lecteurs d'écran,
  dialogues natifs et respect de `prefers-reduced-motion`.

### Modifié

- **Identité visuelle** entièrement revue : palette teal / ambre, jetons de
  couleur clair et sombre, typographie hiérarchisée, cartes, rayons et ombres
  cohérents, écrans vides illustrés.
- **Codes couleur des moyennes** unifiés sur 4 niveaux (≥ 16 excellent,
  ≥ 12 bien, ≥ 10 moyen, < 10 faible) dans les fiches, la grille, les
  statistiques et les impressions.
- **Grille de notes** : un tableau par matière + un récapitulatif, en-tête et
  colonne des noms gelés, colonnes redimensionnables, libellés de devoirs sur
  deux lignes sur mobile, moyenne non gelée sous 560 px pour libérer la largeur.
- **Documents imprimés** (notes et stages) alignés sur la nouvelle grille et
  les nouveaux libellés.
- **Fenêtre Electron** : taille minimale ramenée à 360 × 520 px et fond
  d'ouverture `#f1f5f8`, en phase avec l'interface.

### Corrigé

- Histogramme des statistiques : les barres ont de nouveau une hauteur
  proportionnelle aux effectifs.
- Pied de la fiche de note qui débordait sur les écrans de 320 à 360 px
  (bouton « Enregistrer » désormais toujours visible, suppression en icône).
- Champ de recherche qui s'étirait verticalement dans les dialogues.
- Segments actifs peu lisibles, pastilles de matière redondantes et titres
  dupliqués dans les vues.
- En-têtes de la grille tronqués sur ordinateur.

## [1.1.0] — 2026-11-21

### Ajouté

- **Matières** : gestion par classe (ajout, renommage, suppression — avec
  confirmation listant les devoirs concernés), rattachement des devoirs à une
  matière, pastilles de couleur par matière.
- **Onglets par matière** dans la grille de notes, plus un tableau
  **récapitulatif** (une colonne par matière + moyenne générale).
- **Coefficients de matière** : pondèrent la moyenne générale (grille,
  statistiques, impression PDF, export CSV).
- **Export CSV** de la grille (point-virgule + BOM UTF-8, compatible Excel FR).
- **Tri cliquable** sur les colonnes (grille de notes et statistiques).
- Grille de notes : en-têtes et colonnes gelés (`position: sticky`), colonnes
  redimensionnables, survol de colonne, ligne de l'élève sélectionné
  surlignée, barres de progression colorées dans les moyennes, pied de
  tableau « Moyenne classe » par devoir et par matière, ombres de scroll.
- Onglet Stage : statut **« Arrêt maladie »**, lignes colorées selon le statut,
  commentaires en hauteur augmentée (120px).
- **Header horizontal** : la sidebar est supprimée ; la gestion des classes
  (ajout, filtre par période, liste en chips) est dans le header et la zone de
  notes occupe toute la largeur.
- Mode **compact par défaut** (bascule persistante « Mode confort / compact »).

### Modifié

- Grille de notes : un seul tableau par matière avec colonnes gelées, sans
  synchronisation JS des hauteurs de lignes.
- Impression PDF : vrais noms de devoirs/matières dans les en-têtes.
- Statistiques : en-tête gelé, tri cliquable, barres de progression, couleurs
  sur meilleure/pire note.

## [1.0.3.a] — 2025-10-30

Première version publiée sur GitHub.

### Fonctionnalités

- **Classes** : création, duplication, renommage, suppression et filtrage par période.
- **Élèves** : ajout, renommage, suppression.
- **Devoirs** : ajout et modification, avec **coefficient** par devoir.
- **Notes** : saisie directe dans le tableau (édition en ligne), moyennes par
  élève et moyenne de classe.
- **Statistiques** : vue synthétique des moyennes de classe.
- **Stages** : suivi des stages des élèves (statut, commentaires, convention).
- **Import / Export JSON** : sauvegarde et restauration complètes des données.
- **Impression** : tableau des notes et tableau des stages (mise en page dédiée).
- **Thème clair / sombre** : suit le système, avec bascule manuelle persistante.

### Sécurité

- Durcissement du processus de rendu : `contextIsolation: true`,
  `sandbox: true`, `nodeIntegration: false`.
- Aucune ressource externe chargée au runtime ; les liens externes
  s'ouvrent dans le navigateur par défaut.
- Instance unique : un second lancement restaure la fenêtre existante.

## Versions antérieures

Les versions 1.0.0 à 1.0.2 précèdent la publication du projet sur GitHub ;
leur historique détaillé n'a pas été conservé.
