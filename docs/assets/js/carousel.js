/* Carrousel des visuels produit.
   La piste est un simple conteneur défilable à aimantation CSS : ce script
   ajoute les flèches, les pastilles, le compteur et le lien de téléchargement.
   Sans JavaScript, la piste reste défilable à la main. */
(function () {
  function init(root) {
    var viewport = root.querySelector('.carousel-viewport');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.carousel-slide'));
    if (!viewport || slides.length < 2) return;

    var prev = root.querySelector('.carousel-nav.prev');
    var next = root.querySelector('.carousel-nav.next');
    var dotsBox = root.querySelector('.carousel-dots');
    var caption = root.querySelector('.carousel-caption');
    var download = root.querySelector('.carousel-dl');
    var count = root.querySelector('.carousel-count');
    var index = 0;

    var dots = slides.map(function (slide, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Visuel ' + (i + 1) + ' sur ' + slides.length);
      dot.addEventListener('click', function () { go(i); });
      if (dotsBox) dotsBox.appendChild(dot);
      return dot;
    });

    function go(i) {
      index = Math.max(0, Math.min(slides.length - 1, i));
      viewport.scrollTo({ left: slides[index].offsetLeft - slides[0].offsetLeft, behavior: 'smooth' });
      render();
    }

    function render() {
      var slide = slides[index];
      var img = slide.querySelector('img');

      dots.forEach(function (dot, i) {
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
      if (count) count.textContent = (index + 1) + ' / ' + slides.length;
      if (caption) caption.textContent = slide.getAttribute('data-caption') || '';
      if (download && img) {
        download.href = img.getAttribute('src');
        download.setAttribute('download', '');
      }
    }

    // Suit aussi le défilement au doigt ou au trackpad.
    var pending;
    viewport.addEventListener('scroll', function () {
      clearTimeout(pending);
      pending = setTimeout(function () {
        var middle = viewport.scrollLeft + viewport.clientWidth / 2;
        var origin = slides[0].offsetLeft;
        var closest = 0;
        var best = Infinity;
        slides.forEach(function (slide, i) {
          var center = slide.offsetLeft - origin + slide.offsetWidth / 2;
          var gap = Math.abs(center - middle);
          if (gap < best) { best = gap; closest = i; }
        });
        index = closest;
        render();
      }, 90);
    }, { passive: true });

    if (prev) prev.addEventListener('click', function () { go(index - 1); });
    if (next) next.addEventListener('click', function () { go(index + 1); });

    root.setAttribute('tabindex', '0');
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    });

    root.classList.add('is-ready');
    render();
  }

  document.querySelectorAll('[data-carousel]').forEach(init);
})();
