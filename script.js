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

   // fecha apenas cards que estão abertos
document.querySelectorAll(".card.clickable").forEach(c => {
  if (c !== card) {
    const otherContent = c.querySelector(".hidden-content");
    if (otherContent && otherContent.classList.contains("show")) {
      c.classList.remove("active");
      otherContent.classList.remove("show");
    }
  }
});

    // alterna o atual
    card.classList.toggle("active");
    content.classList.toggle("show");

  });

});
