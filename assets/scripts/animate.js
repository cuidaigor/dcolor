const target = document.querySelectorAll('[data-animate]');
const animationClass = "animate";

function animeScroll() {

  const windowTop = window.pageYOffset + 750;

  target.forEach((element) => {

    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    }

  });
}

window.addEventListener('scroll', () => {
  animeScroll();
});
