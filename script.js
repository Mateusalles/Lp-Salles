document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    let currentIndex = 0;

    // Função para avançar para a próxima imagem
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const offset = -currentIndex * 750; // Largura da imagem
        carousel.style.transition = "transform 0.5s ease"; // Adicionando transição suave
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Remover a transição após a animação para evitar que a imagem volte
    carousel.addEventListener("transitionend", function() {
        if (currentIndex === totalImages - 1) {
            carousel.style.transition = "none";
        }
    });

    // Iniciar o carrossel automaticamente
    setInterval(nextSlide, 3000); // Alterar a cada 3 segundos
});
