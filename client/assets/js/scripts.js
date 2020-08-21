document.addEventListener('DOMContentLoaded', () => {
  const parallaxElems = document.querySelectorAll('.parallax');
  const sideNavElems = document.querySelectorAll('.sidenav');
  const scrollspyElems = document.querySelectorAll('.scrollspy')

  M.Parallax.init(parallaxElems);
  M.Sidenav.init(sideNavElems);
  M.ScrollSpy.init(scrollspyElems);
});
