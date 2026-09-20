const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', function(evenement) {
    evenement.preventDefault();

    const nom = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs !");
    } 
    else if (!email.includes("@")) {
        alert("Veuillez entrer une adresse email valide !");
    } 
    else {
        alert("Merci " + nom + ", votre message a bien été envoyé !");
        formulaire.reset(); // Vide les champs du formulaire
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}