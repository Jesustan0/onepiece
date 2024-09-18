// Sélectionner toutes les cartes dans les sections .rules et .carte-3
const cartes = document.querySelectorAll('.card');

// Appliquer l'effet 3D à chaque carte
cartes.forEach(carte => {
    carte.addEventListener('mousemove', (e) => {
        const rect = carte.getBoundingClientRect();
        const xAxis = (e.clientX - rect.left - rect.width / 2) / 8;
        const yAxis = -(e.clientY - rect.top - rect.height / 2) / 8;

        // Appliquer la transformation 3D
        carte.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`;
        carte.style.boxShadow = `${-xAxis * 2}px ${yAxis * 2}px 30px rgba(0, 0, 0, 0.3)`;
    });

    carte.addEventListener('mouseenter', () => {
        carte.style.transition = "none";
    });

    carte.addEventListener('mouseleave', () => {
        carte.style.transition = "transform 0.6s ease, box-shadow 0.6s ease";
        carte.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        carte.style.boxShadow = "0 20px 30px rgba(0, 0, 0, 0.2)";
    });
});
