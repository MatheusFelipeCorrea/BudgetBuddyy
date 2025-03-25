document.addEventListener("DOMContentLoaded", function () {
    function expandImage() {
        const images = document.querySelectorAll(".image");

        images.forEach((image) => {
            image.addEventListener("click", () => {
                if (!image.classList.contains("active")) {
                    document.querySelector(".image.active")?.classList.remove("active");
                    image.classList.add("active");
                }
            });
        });
    }

    expandImage();
});




const testimonials = [
    "Ótima plataforma! Agora acompanho meus gastos com muito mais facilidade. - João.",
    "O sistema de metas me ajudou a economizar e atingir meus objetivos financeiros! - Maria.",
    "A melhor ferramenta para organizar minhas finanças pessoais e empresariais! - Pedro.",
    "Acompanhar meus vencimentos nunca foi tão simples. Recomendo! - Ana.",
    "Visualização clara e prática das despesas mensais. Excelente! - Lucas.",
    "Gostei bastante das dicas financeiras, são realmente úteis! - Camila.",
    "Agora sei exatamente onde estou gastando e como posso melhorar. - Rafael.",
    "Muito intuitivo, facilitou meu planejamento financeiro. - Bianca.",
    "Funcionalidades incríveis para manter minhas contas em dia! - Eduardo.",
    "A organização por categorias me ajuda muito a entender meus gastos. - Vanessa.",
  ];

  let index = 0;
  
  function updateTestimonial() {
    const testimonialElement = document.getElementById("testimonial");
    testimonialElement.textContent = testimonials[index];
    index = (index + 1) % testimonials.length;
  }

  setInterval(updateTestimonial, 15000);
