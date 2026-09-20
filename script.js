// Sélection des éléments HTML
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('nav a');

// 1. Ouvrir / Fermer le menu au clic sur l'icône hamburger
hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// 2. Fermer automatiquement le menu quand on clique sur un lien (À propos, Contact, etc.)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});