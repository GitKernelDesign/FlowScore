# Changelog

Toutes les évolutions notables de Flow-Score sont documentées dans ce fichier.
Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/)
et le projet suit une versionnement [SemVer](https://semver.org/lang/fr/).

## [1.1.0] — 2026-11-21

Version actuelle.

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
