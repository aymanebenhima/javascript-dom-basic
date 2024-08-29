// Sélectionner les éléments nécessaires

// Ajouter un événement à chaque miniature pour changer l'image principale

// Vous pouvez utiliser la propriété `src` pour changer l'image

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});
