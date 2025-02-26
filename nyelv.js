const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    // Itt frissítheted a szövegeket a kiválasztott nyelv szerint
    if (selectedLanguage === 'hu') {
        // Magyar szövegek
    } else {
        // Angol szövegek
    }
});