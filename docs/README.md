# Espace presse OptiSpace — 3istor Corp

Page presse publiée avec **GitHub Pages**. Le contenu est écrit en **Markdown** (`index.md`) ; GitHub le convertit en HTML à chaque modification, via Jekyll.

## Mettre en ligne (une seule fois)

1. GitHub → **New repository** → nom `optispace-presse` → **Public** → *Create repository*.
2. Sur le dépôt vide : **uploading an existing file**, glissez tout le contenu de ce dossier, **Commit changes**.
3. **Settings** → **Pages** → *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)` → **Save**.
4. Une à deux minutes plus tard, l'URL apparaît en haut de cette même page Settings → Pages :

```
https://VOTRE-PSEUDO.github.io/optispace-presse/
```

C'est cette adresse qui remplace le placeholder « Dossier de presse » du communiqué.

> N'ajoutez **pas** de fichier `.nojekyll` : il désactiverait Jekyll, et les fichiers `.md` ne seraient plus convertis en pages.

## Où modifier quoi

| Ce que vous voulez changer | Fichier |
|---|---|
| Tous les textes de la page | `index.md` |
| Le titre et l'accroche du bandeau | en haut de `index.md`, entre les `---` |
| Les 4 chiffres du bandeau sombre | `_data/chiffres.yml` |
| Nom de société, baseline, mention de bas de page | `_config.yml` |
| Couleurs, tailles, espacements | `assets/css/style.css` |
| Barre de navigation, pied de page, boutons du haut | `_layouts/default.html` |

Les couleurs sont regroupées tout en haut de `style.css`, dans le bloc `:root` : changez-y une valeur et elle se propage à toute la page.

```css
--brand:#1F4E79;      /* bleu principal : titres, boutons, liens */
--brand-deep:#0F2C47; /* bleu foncé : bandeau de chiffres, pied de page */
--accent:#0E9F8E;     /* vert-bleu : surtitres, filets d'accent */
```

## Conventions d'écriture dans `index.md`

- `## Titre {#ancre}` — l'ancre est imposée pour que les liens du menu ne cassent pas. Ne la supprimez pas.
- `<mark>[texte]</mark>` — affiche une pastille orange « à compléter ». Retirez la balise quand l'information est renseignée.
- `> texte` — encadré à filet vert, utilisé pour les conditions d'utilisation.
- Les tableaux Markdown standard donnent la mise en forme de la fiche produit.

## Les visuels

Déposez les images dans `assets/` avec les noms listés dans `assets/README.md`. Chaque emplacement vide de la page affiche le nom de fichier attendu ; remplacez alors le bloc `<div class="ph ...">…</div>` par :

```html
<img src="assets/optispace-produit-16-9.jpg" alt="Le boîtier OptiSpace posé sur une table de salle de réunion">
```

## Prévisualiser en local (facultatif)

```bash
gem install bundler jekyll
jekyll serve
```

Puis ouvrez `http://localhost:4000`. Sans Jekyll installé, publiez directement : GitHub fait la conversion.
