// Sélectionner les éléments nécessaires

// Ajouter un événement au bouton pour ajouter un nouvel élément à la liste

// Créer un nouvel élément `li` et l'ajouter à la liste

const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = itemInput.value;
    itemList.appendChild(newItem);
    itemInput.value = ''; // Réinitialiser le champ de saisie
});
