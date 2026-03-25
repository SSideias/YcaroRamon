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
window.addEventListener('load', revealOnScroll);

function toggleBraganca() {
  const info = document.getElementById("braganca-info");
  info.classList.toggle("show");
}

// SPLASH SCREEN (1 segundo)
window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    splash.style.opacity = "0";
    splash.style.transition = "0.5s";

    setTimeout(() => {
      splash.style.display = "none";
    }, 500);

  }, 1000);
});
