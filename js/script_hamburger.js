var menuOpen = false;

function toggleMenu() {
  $('header').toggleClass('nav-global-active');
  menuOpen = !menuOpen;
}

$('.header-hamburger').on('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

$('#nav-global-side a').on('click', function(e) {
  if (menuOpen) {
    e.preventDefault();
    toggleMenu();
  }
});