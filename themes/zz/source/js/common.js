(function () {
  smoothScroll.init({
    speed: 400,
    offset: 0
  });
  sublemon.init();
  // bind all link
  var links = document.querySelectorAll('a[href]');
  for (var i = 0; i < links.length; i++) {
    var el = links[i];
    bindGA(el);
  }
  /** @param {HTMLElement} el */
  function bindGA(el) {
    if (typeof el.onclick === 'function') {
      return;
    }
    if (/license/i.test(el.href)) {
      el.onclick = function () {
        ga('send', 'event', 'click', 'license', 'md link');
      }
    } else {
      // Do nothing for now
    }
  }
})();
