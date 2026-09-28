# Modèle 3D du boîtier

Déposez ici un fichier nommé exactement `optispace.glb`.

Tant qu'il est absent, la page ne charge rien : le bloc 3D reste masqué et
seul le carrousel d'images s'affiche. Dès que le fichier est en ligne, la
visionneuse apparaît d'elle-même, sans aucune modification de `index.md`.

## Ce que le fichier doit respecter

| Point | Attendu |
|---|---|
| Format | glTF binaire, `.glb`, en une seule pièce (textures incluses) |
| Poids | 5 Mo au maximum, l'idéal étant sous 3 Mo |
| Orientation | Y vers le haut, objet posé sur le plan Y = 0, façade vers +Z |
| Centrage | Objet centré sur l'origine, sinon il tourne de travers |
| Échelle | 1 unité = 1 mètre |
| Matériaux | PBR standard (metallic/roughness), pas d'extension exotique |

## Comment le produire

- **Blender** : modéliser puis *Fichier > Exporter > glTF 2.0 (.glb)*,
  en cochant *+Y up* et *Compression Draco* pour alléger le fichier.
- **Depuis une image** : un générateur image vers 3D à partir de
  `assets/images/objet/optispace-01-face.png` donne un résultat rapide,
  mais approximatif sur les détails comme l'anneau LED ou les ports.

Vérifiez le rendu avant publication sur https://modelviewer.dev/editor/ :
c'est la même bibliothèque que celle utilisée par la page.
