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

  revealOnScroll();

  const splash = document.getElementById("splash");

  setTimeout(() => {
    splash.remove(); // 🔥 remove da tela de vez
  }, 500);

});