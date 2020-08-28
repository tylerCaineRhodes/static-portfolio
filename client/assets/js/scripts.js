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


function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('#slyimage-chan');

const checkSlide = (e) => {
  sliderImages.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const isHalfShown = slideInAt > image.offsetTop;

    if (isHalfShown) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
