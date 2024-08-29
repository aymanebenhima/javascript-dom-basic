// Sélectionner les éléments nécessaires

// Ajouter un événement de saisie pour filtrer les éléments de la liste

// Vous pouvez utiliser la méthode `includes` pour vérifier si le texte correspond

const filterInput = document.getElementById('filterInput');
const filterList = document.getElementById('filterList');
const items = filterList.getElementsByTagName('li');

filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent.toLowerCase();

        if (text.includes(filterValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
});
