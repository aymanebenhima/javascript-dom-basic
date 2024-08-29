// Écoutez le clic sur le bouton pour afficher le message de bienvenue
document.getElementById('showMessageBtn').addEventListener('click', function() {
    // Récupérez le nom entré par l'utilisateur
    const name = document.getElementById('nameInput').value;
    // Affichez un message de bienvenue personnalisé
    document.getElementById('message').textContent = 'Bienvenue, ' + name + '!';
});
