// Sélectionner les éléments nécessaires

// Ajouter un événement de saisie pour compter le nombre de caractères

// Mettre à jour le texte avec le nombre de caractères

const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    charCount.textContent = textInput.value.length;
});
