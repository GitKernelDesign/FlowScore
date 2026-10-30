# Changelog

Toutes les évolutions notables de Flow-Score sont documentées dans ce fichier.
Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/)
et le projet suit une versionnement [SemVer](https://semver.org/lang/fr/).

## [1.0.3.a] — 2025-10-30

Version actuelle. Première version publiée sur GitHub.

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
