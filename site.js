// ===== Magnum CPA — shared nav behavior =====
(function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
  // dropdown: on mobile, tap the parent to expand the submenu
  document.querySelectorAll('.has-sub > .sub-toggle').forEach(function(a){
    a.addEventListener('click', function(e){
      if (window.matchMedia('(max-width:860px)').matches){
        e.preventDefault();
        a.parentNode.classList.toggle('open');
      }
    });
  });
  // current year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
