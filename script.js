const customCursor = document.querySelector('.custom-cursor');

let mouseX = 0;
let mouseY = 0;

// Egér mozgásának követése
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; // Viewport-hoz viszonyított X pozíció
    mouseY = e.clientY; // Viewport-hoz viszonyított Y pozíció
    updateCursorPosition();
});

// Görgetés követése
document.addEventListener('scroll', () => {
    updateCursorPosition();
});

// Kurzor pozíciójának frissítése
function updateCursorPosition() {
    // A kurzor pozíciójának frissítése a viewport és a görgetés alapján
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    customCursor.style.left = `${mouseX + scrollX}px`;
    customCursor.style.top = `${mouseY + scrollY}px`;

    // Animáció sima frissítéséhez
    requestAnimationFrame(updateCursorPosition);
}

// Indítsd el a kurzor frissítését
updateCursorPosition();