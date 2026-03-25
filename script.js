// animação ao rolar
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


// cards clicáveis
document.querySelectorAll(".card.clickable").forEach(card => {

  const title = card.querySelector("h3");
  const content = card.querySelector(".hidden-content");

  if (!content || content.innerHTML.trim() === "") {
    // se não tem conteúdo, não faz nada
    return;
  }

  title.addEventListener("click", (e) => {
    e.stopPropagation();

    // alterna apenas o card clicado
    card.classList.toggle("active");
    content.classList.toggle("show");
  });

});
});
