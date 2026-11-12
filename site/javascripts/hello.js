document.addEventListener('DOMContentLoaded', () => {
    // Cibler le seul élément dynamique
    const dynamicTextElement = document.querySelector('.dynamic-text');
    if (!dynamicTextElement) return;

    // Définissez vos phrases complètes ici
    const greetings = [
        "Hello World!",        // Anglais
        "Bonjour le monde !",  // Français
        "¡Hola Mundo!",        // Espagnol
        "Hallo Welt!",         // Allemand
        "Ciao Mondo!",         // Italien
        "Olá Mundo!"           // Portugais
    ];

    let currentIndex = 0;

    function changeText() {
        // 1. Démarre l'animation de sortie
        dynamicTextElement.classList.add('fade-out');

        // 2. Attend la fin de l'animation de sortie (500ms)
        setTimeout(() => {
            // Passe à la langue suivante
            currentIndex = (currentIndex + 1) % greetings.length;
            
            // Met à jour tout le texte
            dynamicTextElement.textContent = greetings[currentIndex];

            // 3. Démarre l'animation d'entrée
            dynamicTextElement.classList.remove('fade-out');
        }, 500); 
    }

    // Lance la rotation toutes les 3 secondes (3000 millisecondes)
    setInterval(changeText, 3000);
});