// Sélectionner les éléments nécessaires

// Ajouter un événement au bouton pour afficher ou masquer le texte

// Vous pouvez utiliser la propriété `display` pour masquer ou afficher le texte

const toggleButton = document.getElementById('toggleButton');
const textToToggle = document.getElementById('textToToggle');

toggleButton.addEventListener('click', () => {
    if (textToToggle.style.display === 'none') {
        textToToggle.style.display = 'block';
    } else {
        textToToggle.style.display = 'none';
    }
});
