document.addEventListener('DOMContentLoaded', function() {
    // Get language buttons
    const langHu = document.getElementById('lang-hu');
    const langEn = document.getElementById('lang-en');
    
    // Get current project ID from URL or some other method
    // For example, if your URL is project2.html, the project ID would be 'project2'
    const currentPath = window.location.pathname;
    const projectId = currentPath.includes('project') ? currentPath.match(/project(\d+)/)[0] : 'project1';
    
    // Function to update content based on language
    function updateContent(lang) {
        if (!projectTranslations[projectId] || !projectTranslations[projectId][lang]) {
            console.error('Translation not found for project:', projectId, 'language:', lang);
            return;
        }
        
        const translation = projectTranslations[projectId][lang];
        
        // Update page content
        document.querySelector('.project-title').textContent = translation.title;
        document.querySelector('.project-tagline').textContent = translation.tagline;
        document.querySelector('.project-overview-text').textContent = translation.overview;
        
        // Update features if they exist in the format you're using
        const featuresElements = document.querySelectorAll('.features-list li');
        if (featuresElements.length > 0 && translation.features) {
            for (let i = 0; i < Math.min(featuresElements.length, translation.features.length); i++) {
                featuresElements[i].innerHTML = translation.features[i];
            }
        }
        
        // Update technologies if they exist
        const technologiesElements = document.querySelectorAll('.technologies-list li');
        if (technologiesElements.length > 0 && translation.technologies) {
            for (let i = 0; i < Math.min(technologiesElements.length, translation.technologies.length); i++) {
                technologiesElements[i].innerHTML = translation.technologies[i];
            }
        }
        
        // Update categories if they exist
        const categoriesElements = document.querySelectorAll('.categories-list li');
        if (categoriesElements.length > 0 && translation.categories) {
            for (let i = 0; i < Math.min(categoriesElements.length, translation.categories.length); i++) {
                categoriesElements[i].innerHTML = translation.categories[i];
            }
        }
        
        // Update military uniforms if they exist
        const militaryUniformsElements = document.querySelectorAll('.military-uniforms-list li');
        if (militaryUniformsElements.length > 0 && translation.militaryUniforms) {
            for (let i = 0; i < Math.min(militaryUniformsElements.length, translation.militaryUniforms.length); i++) {
                militaryUniformsElements[i].innerHTML = translation.militaryUniforms[i];
            }
        }
        
        // Update section titles
        if (projectTranslations.sections && projectTranslations.sections[lang]) {
            // Update overview section title
            const overviewTitle = document.querySelector('.overview-title');
            if (overviewTitle) {
                overviewTitle.textContent = projectTranslations.sections[lang].overview;
            }
            
            // Update technologies section title
            const technologiesTitle = document.querySelector('.technologies-title');
            if (technologiesTitle) {
                technologiesTitle.textContent = projectTranslations.sections[lang].technologies;
            }
            
            // Update features section title
            const featuresTitle = document.querySelector('.features-title');
            if (featuresTitle) {
                featuresTitle.textContent = projectTranslations.sections[lang].features;
            }
            
            // Update categories section title
            const categoriesTitle = document.querySelector('.categories-title');
            if (categoriesTitle) {
                categoriesTitle.textContent = projectTranslations.sections[lang].categories;
            }
            
            // Update military uniforms section title
            const militaryUniformsTitle = document.querySelector('.military-uniforms-title');
            if (militaryUniformsTitle) {
                militaryUniformsTitle.textContent = projectTranslations.sections[lang].militaryUniforms;
            }
        }
        
        // Update button text
        const backToHomeBtn = document.querySelector('.btn--pink');
        if (backToHomeBtn) {
            backToHomeBtn.textContent = translation.backToHome;
        }
        
        // Update language button classes
        if (lang === 'hu') {
            langHu.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langEn.classList.add('active');
            langHu.classList.remove('active');
        }
        
        // Update navigation links
        const navLinks = document.querySelectorAll('.nav__link');
        if (projectTranslations.nav && projectTranslations.nav[lang]) {
            navLinks[0].textContent = projectTranslations.nav[lang].work;
            navLinks[1].textContent = projectTranslations.nav[lang].clients;
            navLinks[2].textContent = projectTranslations.nav[lang].about;
            navLinks[3].textContent = projectTranslations.nav[lang].contact;
        }
        
        // Update contact section
        const contactSection = document.querySelector('.contact');
        if (contactSection && projectTranslations.contact && projectTranslations.contact[lang]) {
            contactSection.querySelector('h2').textContent = projectTranslations.contact[lang].title;
            contactSection.querySelector('p').textContent = projectTranslations.contact[lang].content;
        }
        
        // Store the selected language in localStorage
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Add event listeners to language buttons
    langHu.addEventListener('click', function() {
        updateContent('hu');
    });
    
    langEn.addEventListener('click', function() {
        updateContent('en');
    });
    
    // Initialize with the saved language or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(savedLanguage);
});