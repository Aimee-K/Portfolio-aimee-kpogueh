// ==========================================
// 1. GESTION DU MENU MOBILE (HAMBURGER)
// ==========================================
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('nav a');

// Ouvrir / Fermer le menu au clic sur l'icône hamburger
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Fermer automatiquement le menu quand on clique sur un lien de navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// ==========================================
// 2. CARROUSEL AUTOMATIQUE DE TÉMOIGNAGES
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let currentIndex = 0;

    if (testimonials.length > 0) {
        setInterval(() => {
            // Masque le témoignage actuel
            testimonials[currentIndex].classList.remove("active");

            // Passe au suivant (ou revient au premier si on est à la fin)
            currentIndex = (currentIndex + 1) % testimonials.length;

            // Affiche le nouveau témoignage
            testimonials[currentIndex].classList.add("active");
        }, 4000); // Défilement toutes les 4 secondes
    }
});