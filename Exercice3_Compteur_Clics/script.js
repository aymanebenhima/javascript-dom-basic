// Initialisez un compteur à 0
let count = 0;

// Écoutez le clic sur le bouton pour incrémenter le compteur
document.getElementById('clickMeBtn').addEventListener('click', function() {
    // Incrémentez le compteur
    count++;
    // Mettez à jour le texte pour afficher le nombre de clics
    document.getElementById('clickCount').textContent = 'Nombre de clics : ' + count;
});
