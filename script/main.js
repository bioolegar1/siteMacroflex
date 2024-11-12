const carousel = document.querySelector('.carousel');

// Duplicar as logos para criar o efeito de loop contínuo
const logos = Array.from(carousel.children);
logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    carousel.appendChild(clone);
});
