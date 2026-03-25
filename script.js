function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

function toggleBraganca() {
  const info = document.getElementById("braganca-info");
  info.classList.toggle("show");
}

/* LOAD ÚNICO */
window.addEventListener("load", () => {

  // ativa animações iniciais
  revealOnScroll();

  // SPLASH
  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      splash.remove(); // melhor que display:none
    }, 500);

  }, 1000);

});