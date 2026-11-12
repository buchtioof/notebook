document.addEventListener('DOMContentLoaded', () => {
    const dynamicTextElement = document.querySelector('.dynamic-text');
    if (!dynamicTextElement) return;

    const greetings = [
        "hello world!",        // Anglais
        "bonjour le monde !",  // Français
        "¡hola mundo!",        // Espagnol
        "hallo welt!",         // Allemand
        "ciao mondo!",         // Italien
        "olá mundo!"           // Portugais
    ];

    let currentIndex = 0;

    function changeText() {
        dynamicTextElement.classList.add('fade-out');

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % greetings.length;
            dynamicTextElement.textContent = greetings[currentIndex];
            dynamicTextElement.classList.remove('fade-out');
        }, 500); 
    }

    setInterval(changeText, 3000);
});