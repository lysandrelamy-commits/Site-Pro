# 🚀 Tutoriel — Déployer votre site sur GitHub Pages (gratuitement)

## Prérequis
- Un compte GitHub gratuit → https://github.com/signup
- Git installé sur votre ordinateur → https://git-scm.com/downloads
- Les 3 fichiers du site : `index.html`, `style.css`, `script.js`

---

## Étape 1 — Créer un dépôt GitHub

1. Connectez-vous à [github.com](https://github.com)
2. Cliquez sur le bouton **"New"** (ou le **"+"** en haut à droite → *New repository*)
3. Remplissez le formulaire :
   - **Repository name** : `autoflow-site` *(ou le nom de votre choix)*
   - **Visibility** : cochez **Public** *(requis pour GitHub Pages gratuit)*
   - **Ne cochez rien d'autre** (pas de README, pas de .gitignore)
4. Cliquez sur **"Create repository"**

---

## Étape 2 — Préparer votre dossier local

Assurez-vous que vos 3 fichiers sont dans un même dossier, par exemple :

```
mon-site/
├── index.html
├── style.css
└── script.js
```

---

## Étape 3 — Initialiser Git et pousser les fichiers

Ouvrez un **terminal** (ou l'application Git Bash sur Windows), puis naviguez jusqu'à votre dossier :

```bash
cd chemin/vers/mon-site
```

Ensuite, exécutez ces commandes **une par une** :

```bash
# Initialiser Git dans le dossier
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Premier déploiement du site AutoFlow"

# Renommer la branche principale (si nécessaire)
git branch -M main

# Lier votre dossier au dépôt GitHub
# ⚠️ Remplacez VOTRE_NOM_UTILISATEUR et autoflow-site par vos vraies valeurs
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/autoflow-site.git

# Envoyer les fichiers sur GitHub/
git push -u origin main
```

> 💡 GitHub vous demandera votre nom d'utilisateur et votre mot de passe (ou un token).
> Si vous n'avez pas encore de token : allez dans *Settings → Developer settings → Personal access tokens → Tokens (classic)* et créez-en un avec la permission `repo`.

---

## Étape 4 — Activer GitHub Pages

1. Sur GitHub, allez dans votre dépôt (`autoflow-site`)
2. Cliquez sur l'onglet **"Settings"** (en haut du dépôt)
3. Dans le menu gauche, cliquez sur **"Pages"**
4. Dans la section **"Branch"**, sélectionnez :
   - Branch : **main**
   - Dossier : **/ (root)**
5. Cliquez sur **"Save"**

GitHub affiche alors un message :

> *"Your site is ready to be published at https://VOTRE_NOM_UTILISATEUR.github.io/autoflow-site/"*

---

## Étape 5 — Accéder à votre site 🎉

Patientez **1 à 3 minutes**, puis ouvrez l'URL suivante dans votre navigateur :

```
https://VOTRE_NOM_UTILISATEUR.github.io/autoflow-site/
```

Votre site est en ligne, accessible partout dans le monde, **gratuitement**.

---

## Étape 6 — Mettre à jour le site plus tard

Chaque fois que vous modifiez un fichier, re-déployez en 3 commandes :

```bash
git add .
git commit -m "Mise à jour du site"
git push
```

Le site se met à jour automatiquement en moins de 2 minutes.

---

## 🔧 Personnaliser le site (points clés)

| Élément | Où modifier |
|---|---|
| Nom de l'entreprise | Cherchez `AutoFlow` dans `index.html` |
| Email de contact | Cherchez `contact@autoflow.fr` dans `index.html` |
| Numéro de téléphone | Cherchez `+33 1 00 00 00 00` dans `index.html` |
| Couleur principale | Variable `--accent` dans `style.css` (ligne ~11) |
| Services proposés | Section `<!-- SERVICES -->` dans `index.html` |

---

## 🌐 Utiliser un nom de domaine personnalisé (optionnel)

Si vous souhaitez utiliser votre propre domaine (ex : `www.votre-entreprise.fr`) :

1. Achetez un domaine chez un registrar (OVH, Gandi, Namecheap…)
2. Dans les réglages DNS de votre domaine, ajoutez un enregistrement **CNAME** :
   - Nom : `www`
   - Valeur : `VOTRE_NOM_UTILISATEUR.github.io`
3. Dans GitHub Pages (Settings → Pages), entrez votre domaine dans le champ **"Custom domain"**
4. Cochez **"Enforce HTTPS"** pour le certificat SSL gratuit

---

## ❓ Problèmes fréquents

| Problème | Solution |
|---|---|
| Le site affiche une erreur 404 | Vérifiez que le fichier s'appelle bien `index.html` (pas `Index.html`) |
| Les styles ne s'appliquent pas | Vérifiez que `style.css` est dans le même dossier que `index.html` |
| La page n'est pas à jour | Attendez 2-3 minutes ou videz le cache du navigateur (Ctrl+Shift+R) |
| Push refusé | Vérifiez votre token GitHub et les droits du dépôt |

---

*Tutoriel rédigé pour AutoFlow — Site vitrine d'automatisation professionnelle*
