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
window.addEventListener('load', revealOnScroll); // 👈 ESSA LINHA RESOLVE

// cards clicáveis
document.querySelectorAll(".card.clickable").forEach(card => {
  const title = card.querySelector("h3");
  const content = card.querySelector(".hidden-content");

  // ignora cards sem conteúdo
  if (!content || content.innerHTML.trim() === "") return;

  title.addEventListener("click", (e) => {
    e.stopPropagation();

    // fecha apenas cards que estão abertos
    document.querySelectorAll(".card.clickable").forEach(c => {
      const cContent = c.querySelector(".hidden-content");
      if (c !== card && cContent && cContent.classList.contains("show")) {
        c.classList.remove("active");
        cContent.classList.remove("show");
      }
    });

    // abre/fecha apenas o card clicado
    card.classList.toggle("active");
    content.classList.toggle("show");
  });
});

const logo = document.querySelector(".logo-fixa");

window.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-fixa");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      logo.classList.add("show");
    } else {
      logo.classList.remove("show");
    }
  });
});
