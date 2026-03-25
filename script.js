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



document.querySelectorAll(".card.clickable").forEach(card => {
  card.addEventListener("click", () => {

    const content = card.querySelector(".hidden-content");

    // fecha todos
    document.querySelectorAll(".hidden-content").forEach(el => {
      if (el !== content) {
        el.classList.remove("show");
      }
    });

    // abre o clicado
    content.classList.toggle("show");

  });
});
