// Sélectionner les éléments nécessaires

// Ajouter des événements aux boutons pour agrandir ou réduire la taille du texte

// Vous pouvez utiliser la propriété `fontSize` pour modifier la taille du texte

const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const textToResize = document.getElementById('textToResize');

increaseButton.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(textToResize).fontSize);
    textToResize.style.fontSize = (currentSize + 2) + 'px';
});

decreaseButton.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(textToResize).fontSize);
    textToResize.style.fontSize = (currentSize - 2) + 'px';
});
