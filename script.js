// Seleciona os elementos do carrossel
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

// Função para exibir o slide atual
function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0; // Volta ao primeiro slide
    if (index < 0) slideIndex = totalSlides - 1; // Vai para o último slide
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Função para mover o slide (próximo ou anterior)
function moveSlide(direction) {
    slideIndex += direction;
    showSlide(slideIndex);
}

// Rotação automática a cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);

// Inicializa o carrossel
showSlide(slideIndex);