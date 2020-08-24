document.addEventListener('DOMContentLoaded', () => {
  const parallaxElems = document.querySelectorAll('.parallax');
  const sideNavElems = document.querySelectorAll('.sidenav');
  const scrollspyElems = document.querySelectorAll('.scrollspy')
  const imageBoxElems = document.querySelectorAll('.materialboxed');

  M.Parallax.init(parallaxElems);
  M.Sidenav.init(sideNavElems);
  M.ScrollSpy.init(scrollspyElems);
  M.Materialbox.init(imageBoxElems);
});

document.addEventListener('DOMContentLoaded', function () {
  const modalElems = document.querySelectorAll('.modal');
  M.Modal.init(modalElems);
});

const musicResumeButton = document.querySelector('#musicResume');
musicResumeButton.addEventListener('click', () => alert('Sorry, my latest resume isn\'t updated!'));
