Spécifications Détaillées par Page
1. PAGE D'ACCUEIL (index.html)
Header / Navigation :

Logo/Nom : Initiales ou Pseudo GitHub.

Liens : À propos, Projets, Compétences, Contact.

Bouton CTA externe : Lien vers mon profil GitHub et mon LinkedIn.

Hero Section :

Titre principal : "Ingénierie Systèmes, Dynamique Véhicule & IA Embarquée"

Sous-titre / Pitch : "Étudiant à l'UTC (Génie Mécanique & Génie Informatique). Je conçois des architectures matérielles et logicielles haute performance où le code rencontre le monde physique."

Statut dynamique : Badge "En recherche de stage d'élite (R&D / F1 / Robotique / Edge AI)".

CTA : Bouton "Explorer mes projets" + Bouton "Télécharger CV (PDF)".

Section Projets en Vedette (Grid de cartes) :

Carte 1 : Contrôle de Traction Formula Student

Tag : Embarqué MATLAB/Simulink Dynamique Véhicule STM32

Résumé : Algorithme d'estimation de glissement et régulation de couple temps réel pour monoplaces thermique et électrique.

Boutons : Voir la fiche détaillée (Redirige vers projects/traction-control.html) + GitHub Repo.

Carte 2 : Système Complet de Détection d'AVC (Edge AI)

Tag : Computer Vision PyTorch Sécurité & Mobile Architecture

Résumé : Application médicale mobile bout-en-bout avec inférence d'IA locale, architecture sécurisée et respect des normes RGPD.

Boutons : Voir la fiche détaillée (Redirige vers projects/avc-detection.html) + GitHub Repo.

Section Compétences (L'Hybridation Méca/Info) :

Bloc 1 : Génie Mécanique & Systèmes (CAO/SolidWorks, Dynamique Véhicule, Acquisition de données/Télémétrie, MATLAB/Simulink).

Bloc 2 : Génie Informatique & IA (Python, C/C++, PyTorch, Edge AI / TensorFlow Lite, Git/CI-CD, Architectures Sécurisées).

Footer : Liens réseaux, copyright, status GitHub Pages.

2. PAGE PROJET 1 : Contrôle de Traction Formula Student (projects/traction-control.html)
Header de projet :

Bouton retour vers index.html.

Titre : "Système de Contrôle de Traction & Télémétrie — Monoplace Formula Student"

Liens directs : Bouton GitHub Repo (Obligatoire).

Grille d'onglets de navigation rapide : Vue Générale, Modélisation MATLAB, Hardware & Firmware, Télémétrie & Piste.

Blocs Div Prépareés & Structurés (Conteneurs à remplir) :

<div id="project-overview"> :

Contexte du projet (Monoplace Thermique vs Électrique).

Objectif : Gain de temps au tour, réduction du patinage en sortie de virage.

<div id="matlab-simulink-block" class="placeholder-card"> :

Emplacement réservé : Inserer schémas du modèle Simulink, équations différentielles du glissement pneumatique et logique floue / PID.

<div id="hardware-firmware-block" class="placeholder-card"> :

Emplacement réservé : Schéma d'architecture CAN Bus, microcontrôleur STM32, capteurs de vitesse de roues.

<div id="telemetry-results-block" class="placeholder-card"> :

Emplacement réservé : Graphiques interactifs/images de comparaison de télémétrie (Sans contrôle vs Avec contrôle de traction).

<div id="video-demo-placeholder" class="aspect-video bg-slate-800 rounded-lg"> :

Emplacement réservé : Intégration vidéo/GIF de la voiture en essais sur piste.

3. PAGE PROJET 2 : Application de Détection d'AVC (projects/avc-detection.html)
Header de projet :

Bouton retour vers index.html.

Titre : "Dispositif Médical Mobile : Détection d'AVC par Computer Vision & Edge AI"

Liens directs : Bouton GitHub Repo (Obligatoire).

Grille d'onglets : Architecture Système, Modèle IA & Inférence, Sécurité & Normes, Démonstration UI.

Blocs Div Préparés & Structurés (Conteneurs à remplir) :

<div id="system-architecture-block" class="placeholder-card"> :

Emplacement réservé : Schéma d'architecture global de l'application (Frontend Mobile, Traitement Local, Gestion de la mémoire, Flux de données).

<div id="ai-model-block" class="placeholder-card"> :

Emplacement réservé : Détails sur le réseau CNN (PyTorch), optimisation pour l'inférence mobile temps réel (Edge AI / ONNX / TFLite).

<div id="security-compliance-block" class="placeholder-card"> :

Emplacement réservé : Chiffrement des données, conformité médicale (ISO 13485) et RGPD.

<div id="app-demo-gallery" class="grid grid-cols-1 md:grid-cols-3 gap-4"> :

Emplacement réservé : Screenshots/Mockups de l'interface utilisateur et métriques de performances (Temps d'inférence, Taux de précision).

4. TEMPLATE PROJET UNIVERSEL (projects/template-project.html)
Fournis un fichier HTML modèle totalement prêt à être dupliqué pour mes 3ème, 4ème et 5ème projets futurs.

Il doit contenir la structure exacte, la topbar, la zone GitHub, et des sections génériques réutilisables (Contexte, Architecture Technique, Résultats & Métriques, Galerie Média / Vidéo).

🎯 Ce que tu dois produire :
Génère le code HTML, CSS et JS complet pour :

index.html (avec tout le design Tailwind CSS intégré)

projects/traction-control.html (avec la structure et les divs de placeholders prêtes)

projects/avc-detection.html (avec la structure et les divs de placeholders prêtes)

projects/template-project.html (template générique pour futurs projets)

Veille à ce que chaque div de projet contienne des commentaires HTML clairs de type `` pour que je puisse facilement ajouter mes données, photos, schémas et vidéos au fur et à mesure que mes projets avancent.