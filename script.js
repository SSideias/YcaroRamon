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

  const title = card.querySelector("h3");

  title.addEventListener("click", (e) => {

    e.stopPropagation();

    const content = card.querySelector(".hidden-content");

    if (!content) return;

    // fecha todos
    document.querySelectorAll(".card").forEach(c => {
      if (c !== card) {
        c.classList.remove("active");
        c.querySelector(".hidden-content")?.classList.remove("show");
      }
    });

    // alterna o atual
    card.classList.toggle("active");
    content.classList.toggle("show");

  });

});