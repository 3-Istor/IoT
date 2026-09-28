/* Visionneuse 3D du boîtier.
   Le modèle n'est chargé que s'il est réellement présent sur le serveur :
   tant que optispace.glb n'est pas déposé, le bloc reste masqué et seul le
   carrousel d'images s'affiche. Rien ne casse pendant l'attente. */
(function () {
  var box = document.querySelector('[data-viewer3d]');
  if (!box || !window.fetch) return;

  var viewer = box.querySelector('model-viewer');
  if (!viewer) return;

  var src = viewer.getAttribute('src');

  fetch(src, { method: 'HEAD' })
    .then(function (res) {
      if (!res.ok) throw new Error('modèle absent');

      var lib = document.createElement('script');
      lib.type = 'module';
      lib.src = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4/dist/model-viewer.min.js';
      document.head.appendChild(lib);

      box.hidden = false;
      document.querySelectorAll('[data-if-model]').forEach(function (el) {
        el.hidden = false;
      });
      document.querySelectorAll('[data-unless-model]').forEach(function (el) {
        el.hidden = true;
      });
    })
    .catch(function () {
      /* Pas de modèle : on ne charge rien et le carrousel reste seul. */
    });
})();
