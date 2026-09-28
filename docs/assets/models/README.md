# Modèle 3D du boîtier

`optispace.glb` est en place : glTF 2.0 binaire, 832 ko, 20 maillages,
9 matériaux, exporté par THREE.GLTFExporter r184.

Mesures relevées dans le modèle : 140 mm de côté au sol, 233 mm de haut
micro compris, base à Y = 0, objet centré sur X et Z, 1 unité = 1 mètre.

Le script `assets/js/viewer3d.js` teste la présence de ce fichier avant de
charger la bibliothèque. Si vous le retirez, la page revient d'elle-même au
carrousel seul, sans erreur.

## Ce qu'un remplacement doit respecter

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
