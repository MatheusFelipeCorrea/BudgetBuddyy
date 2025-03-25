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
    "Ótima plataforma! Agora acompanho meus gastos com muito mais facilidade. - João, 2024",
    "O sistema de metas me ajudou a economizar e atingir meus objetivos financeiros! - Maria, 2025",
    "A melhor ferramenta para organizar minhas finanças pessoais e empresariais! - Pedro, 2025",
    "Acompanhar meus vencimentos nunca foi tão simples. Recomendo! - Ana, 2024",
    "Visualização clara e prática das despesas mensais. Excelente! - Lucas, 2024",
    "Gostei bastante das dicas financeiras, são realmente úteis! - Camila, 2024",
    "Agora sei exatamente onde estou gastando e como posso melhorar. - Rafael, 2025",
    "Muito intuitivo, facilitou meu planejamento financeiro. - Bianca, 2024",
    "Funcionalidades incríveis para manter minhas contas em dia! - Eduardo, 2024",
    "A organização por categorias me ajuda muito a entender meus gastos. - Vanessa, 2024",
  ];

  let index = 0;
  
  function updateTestimonial() {
    const testimonialElement = document.getElementById("testimonial");
    testimonialElement.textContent = testimonials[index];
    index = (index + 1) % testimonials.length;
  }

  setInterval(updateTestimonial, 15000);