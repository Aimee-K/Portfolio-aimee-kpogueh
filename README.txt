QUALITÉ — Résumé de la démarche d'optimisation et d'accessibilité

Projet : Portfolio SPA (Single Page Application)
Auteure : Aimée KPOGUEH
Formation : DCLiC - Développement Web Débutant

1) Accessibilité (a11y)
- Problème : Risque de mauvaise lisibilité pour les lecteurs d'écran et mauvaise structuration du document sans balises sémantiques.
- Correction : 
  * Structuration complète avec des balises HTML5 sémantiques (<header>, <nav>, <main>, <section>, <article>, <footer>).
  * Ajout systématique d'un attribut alternative explicite (`alt="Boutique BamiShop"`) sur l'image du projet.
  * Hiérarchisation stricte des titres (un seul <h1> pour le nom, <h2> pour les sections, <h3> pour le projet).
  * Association explicite des balises <label> aux champs du formulaire (<input> et <textarea>).
- Résultat : Navigation fluide et lisible au clavier (touche Tab) et compatibilité optimale avec les outils d'assistance/lecteurs d'écran.

2) Performance & Éco-conception
- Problème : Affichage initial de l'image de projet en taille réelle (très grande) et risque de surcharge de bande passante avec des dépendances inutiles.
- Correction :
  * Redimensionnement et limitation CSS du logo via la classe `.logo-projet` (`width: 150px; height: auto;`).
  * Suppression de toute dépendance externe (aucun framework CSS/JS, aucune police externe Google Fonts).
  * Placement du fichier `script.js` juste avant la fermeture de la balise </body> pour éviter de bloquer le rendu visuel.
- Résultat : 
  * Mesure DevTools (onglet Network) : 5 requêtes au total, moins de 1 kB transféré (969 B) et chargement complet en 73 ms.
  * Empreinte carbone minimale et vitesse d'affichage instantanée.

3) Corrections / Robustesse
- Problème 1 : Image non chargée sur le site en raison d'une erreur de casse de dossier (`IMAGE` au lieu de `images`), d'espaces dans le nom et d'une double extension (`.png.jpeg`).
- Correction 1 : Normalisation du dossier (`images`), renommage propre de l'image (`logo-bamishop.jpeg`) et mise à jour de la source dans `index.html`.
- Résultat 1 : Affichage immédiat et stable de l'image sur tous les navigateurs.

- Problème 2 : Soumission du formulaire provoquant un rechargement de page involontaire (perte du comportement SPA) et absence de contrôle sur la validité de l'email.
- Correction 2 : Intégration de `event.preventDefault()` dans `script.js`, ajout de vérifications de champs requis et contrôle de la présence du caractère `@` dans l'email.
- Résultat 2 : Validation en temps réel avec retours utilisateur clairs (alertes d'erreur et message de confirmation de succès) sans rechargement de page.
- Vérification Console : Aucune erreur ou avertissement dans l'onglet Console (F12).