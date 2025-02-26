// Replace your geo-language.js file with this improved version

// Check if there's already a language preference saved
const savedLanguage = localStorage.getItem('language');

// Function to apply language change
function applyLanguageSettings(languageToUse) {
    // Save the language preference
    localStorage.setItem('language', languageToUse);
    
    // Apply the language
    changeLanguage(languageToUse);
    
    // Get language buttons
    const langHu = document.getElementById('lang-hu');
    const langEn = document.getElementById('lang-en');
    
    // Update active state on language buttons
    if (langHu && langEn) {
        if (languageToUse === 'hu') {
            langHu.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langEn.classList.add('active');
            langHu.classList.remove('active');
        }
    }
}

// Only run detection if no language preference has been saved yet
if (!savedLanguage) {
    // First check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const isHungarianBrowser = browserLang.startsWith('hu');
    
    if (isHungarianBrowser) {
        // If browser is set to Hungarian, use that
        applyLanguageSettings('hu');
    } else {
        // Otherwise try IP geolocation
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                // Check if user is in Hungary
                const isHungary = data.country_code === 'HU';
                
                // Set language based on location
                const languageToUse = isHungary ? 'hu' : 'en';
                applyLanguageSettings(languageToUse);
            })
            .catch(error => {
                // If there's an error, default to English
                console.error('Error detecting location:', error);
                applyLanguageSettings('en');
            });
    }
} else {
    // Use the saved language preference
    applyLanguageSettings(savedLanguage);
}


