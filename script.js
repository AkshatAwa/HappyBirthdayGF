/*
  Vanilla JS for:
  - Reveal-on-scroll animations (fade + slide).
  - Gentle tap interaction on gallery items for touch devices.
  Edit nothing here unless you want to change behavior or timings.
*/

(function () {
  // IntersectionObserver: add 'in-view' when elements enter viewport
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show immediately
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Gallery: add 'active' class on tap (touch) for subtle zoom/shadow
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) {
    items.forEach(function (item) {
      item.addEventListener('touchstart', function () {
        item.classList.add('active');
        // Remove after a short delay to keep it subtle
        window.setTimeout(function () {
          item.classList.remove('active');
        }, 450);
      }, { passive: true });
    });
  }
})();
