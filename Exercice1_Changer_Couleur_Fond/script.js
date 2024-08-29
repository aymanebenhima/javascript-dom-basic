// Écoutez le clic sur le bouton pour changer la couleur de fond
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
    // Appelez la fonction pour générer une couleur aléatoire
    document.body.style.backgroundColor = getRandomColor();
});

// Fonction pour générer une couleur hexadécimale aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


