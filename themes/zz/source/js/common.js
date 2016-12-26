(function () {
  smoothScroll.init({
    speed: 400,
    offset: 0
  });
  // drop down
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns = Array.prototype.slice.call(dropdowns);
  dropdowns.forEach(function (button) {
    button.addEventListener('click', function () {
      button.parentElement.classList.toggle('open');
    });
  });
})();
