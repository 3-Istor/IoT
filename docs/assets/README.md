# Visuels

## Déjà fournis

| Fichier | Contenu |
|---|---|
| `images/objet/optispace-situation-01.png`, `optispace-situation-02.jpg` | Les deux mises en situation du carrousel |
| `models/optispace.glb` | Modèle 3D manipulable, 832 ko, affiché en tête de la section « Visuels » |
| `images/3istor_new_dark.png` | Logo 3istor Corp (barre du haut + tuile de téléchargement) |
| `images/arthur.presle.jpg`, `brian.peret.jpeg`, `hugo.guillet.jpg`, `joe.bejjani.jpg`, `newfel.levrel.jpg`, `raphael.ye.jpg` | Portraits des six associés, cadrage carré appliqué en CSS |

Le carrousel n'accueille plus que des mises en situation. Pour en ajouter une :
déposez le fichier dans `images/objet/`, puis ajoutez un
`<li class="carousel-slide" data-caption="…">` dans `index.md`. Le compteur, les
pastilles et le lien de téléchargement se mettent à jour seuls.

La section « Autres visuels » est supprimée : la capture de l'application
n'est plus attendue, et le logo n'est plus proposé au téléchargement, il ne
sert plus que dans la barre du haut.

Le communiqué est déjà présent : `Communique_de_presse_OptiSpace_3istor_Corp_VF.pdf` (et sa source `.docx`).

Deux règles à ne pas contourner : pas de formulaire avant le téléchargement, et des fichiers réellement en haute définition : une image de 600 px ne sera pas utilisée en presse écrite.
