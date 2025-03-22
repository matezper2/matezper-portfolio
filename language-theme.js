
const langHu = document.getElementById('lang-hu');
const langEn = document.getElementById('lang-en');

const translations = {
    hu: {
        nav: {
            work: 'Munkáim',
            clients: 'Ügyfelek',
            about: 'Rólam',
            contact: 'Kapcsolat'
        },
        header: {
            tagline: 'Szenvedélyes fejlesztő Magyarországról.',
            techStack: 'Technológiák, amelyekkel dolgozom:',
            getInTouch: 'Kapcsolatfelvétel'
        },
        work: {
            title: 'Munkáim',
            project1: {
                title: 'Discord Bot Tervezés',
                desc: 'Tekints bele a Discord botok világába, ahol kreativitás és innováció találkozik. Fedezd fel, hogyan jönnek létre ezek az egyedülálló botok.',
                visitSite: 'Weboldal megtekintése'
                },
                project2: {
                title: 'ER:LC Jármű Festések',
                desc: 'Ismerj meg egy ER:LC livery design világot, ahol a kreativitás és az innováció ötvöződik. Fedezd fel, hogyan születnek meg ezek a különleges designok.',
                visitSite: 'Weboldal megtekintése'
                },
                project3: {
                title: 'Discord Szerver Építés',
                desc: 'Lépj be a Discord szerverek tervezésének világába, ahol minden szerepkör, csatorna és embed precízen megtervezve egy élénk és funkcionális közösség létrehozásáért.',
                visitSite: 'Weboldal megtekintése'
                },
                project4: {
                title: 'Egyenruha & Ruházat Tervezés',
                desc: 'Ismerj meg egy olyan világot, ahol a funkcionalitás találkozik a stílussal. Fedezd fel a kreativitást és a precíziót, amely az egyenruhák és ruházati terveim mögött áll.',
                visitSite: 'Weboldal megtekintése'
                },
                project5: {
                title: 'Roblox GFX Művészet',
                desc: 'Lépj be a Roblox GFX művészet világába, ahol a kreativitás és a technikai tudás találkozik. Fedezd fel, hogyan jönnek létre ezek a lenyűgöző vizuális alkotások.',
                visitSite: 'Weboldal megtekintése'
                },
                project6: {
                title: 'Logo és Banner Tervezés',
                desc: 'Ismerj meg egy olyan világot, ahol a kreativitás találkozik a márkaépítéssel. Fedezd fel a művészetet és az innovációt, amely a logo és banner terveim mögött áll.',
                visitSite: 'Weboldal megtekintése'
                },
                project7: {
                title: 'Fotózás & Fotó Szerkesztés',
                desc: 'Lépj be a fotózás és fotó szerkesztés világába, ahol a pillanatokat örökítjük meg és időtlen művészetté alakítjuk. Fedezd fel a kreativitást és a precíziót, amely a munkáim mögött áll.',
                visitSite: 'Weboldal megtekintése'
                }
        },
        clients: {
            title: 'Ügyfelek'
        },
        about: {
            title: 'Rólam',
            content: 'Helló, matezper2 vagyok, egy 16 éves srác Magyarországról. Inkább introvertált vagyok, de 8 éves korom óta szenvedélyesen foglalkozom játékok modolásával. Az utam a Minecraft modokkal kezdődött, és idővel eljutottam a Grand Theft Auto 5 roleplay szerverek tervezéséig. 2023 végén fedeztem fel a Discord fejlesztés világát, és azóta egyre mélyebbre ások benne. Ja, és említettem már? Fejlesztő vagyok - nos, bizonyos értelemben. Discord botokat készítek JavaScript használatával, és weboldalakat építek bárkinek, akinek szüksége van rá, HTML, CSS, JavaScript és TypeScript segítségével.',
        },
        contact: {
            title: 'Kapcsolatfelvétel',
            content: 'Ha szükséged van egy gyors, felhasználóbarát weboldalra, hogy bemutasd termékedet vagy vállalkozásodat? Konzultációra van szükséged, kérdéseid vannak, tanácsot szeretnél adni, vagy egyszerűen csak köszönni akarsz? Bármi is legyen, nyugodtan írj! Igyekszem mihamarabb válaszolni. 😊 A leggyorsabb módja az elérésemnek az email vagy a Discord.',
        },
        footer: {
            rights: 'Minden jog fenntartva -'
        }
    },
    en: {
        nav: {
            work: 'Work',
            clients: 'Clients',
            about: 'About',
            contact: 'Contact'
        },
        header: {
            tagline: 'A passionate developer based in Hungary.',
            techStack: 'Technologies I work with:',
            getInTouch: 'Get in touch'
        },
        work: {
            title: 'My Work',
            project1: {
                title: 'Discord Bot Designing',
                desc: 'Take a peek into my Discord bot paradise and discover the creativity and innovation behind them.',
                visitSite: 'Visit Site'
            },
            project2: {
                title: 'ER:LC Livery Design',
                desc: 'Take a peek into my ER:LC livery design paradise and discover the creativity and innovation behind them.',
                visitSite: 'Visit Site'
            },
            project3: {
                title: 'Discord Server Building',
                desc: 'Step into the world of Discord server creation, where every role, channel, and embed is crafted with precision to build a vibrant and functional community.',
                visitSite: 'Visit Site'
            },
            project4: {
                title: 'Uniforms & Clothing Design',
                desc: 'Step into the world of uniforms and clothing design, where functionality meets style. Discover the creativity and precision behind my designs.',
                visitSite: 'Visit Site'
            },
            project5: {
                title: 'Roblox GFX Art',
                desc: 'Step into the world of uniforms and clothing design, where functionality meets style. Discover the creativity and precision behind my designs.',
                visitSite: 'Visit Site'
            },
            project6: {
                title: 'Logo and Banner Design',
                desc: 'Step into the world of logo and banner design, where creativity meets branding. Discover the artistry and innovation behind my designs.',
                visitSite: 'Visit Site'
            },
            project7: {
                title: 'Photography & Photo Editing',
                desc: 'Step into the world of photography and photo editing, where moments are captured and transformed into timeless art. Discover the creativity and precision behind my work.',
                visitSite: 'Visit Site'
            }   
        },
        clients: {
            title: 'Clients'
        },
        about: {
            title: 'About Me',
            content: 'Hello, I\'m matezper2, a 16-year-old from Hungary. I\'m more of an introvert, but I\'ve been passionate about modding games since I was 8. My journey started with Minecraft mods, and over time, I expanded to designing roleplay servers for Grand Theft Auto 5. By late 2023, I discovered the world of Discord development and have been diving deeper into it ever since. Along the way, I\'ve met some incredible people on Discord. Oh, and did I mention? I\'m a developer—well, somewhat. I create Discord bots using JavaScript and build websites for anyone who needs them, working with HTML, CSS, JavaScript, and TypeScript.',

        },
        contact: {
            title: 'Get in Touch',
            content: 'Are you in need of a fast, user-friendly website to showcase your product or business? Looking for consultation, have questions, want to share advice, or simply want to say "Hi 👋"? Whatever it is, feel free to reach out! I\'ll do my best to get back to you. 😊 The fastest way to contact me is via email or Discord.',
        },
        footer: {
            rights: 'All rights served for'
        }
    }
};

const savedLanguage = localStorage.getItem('language') || 'en';
if (savedLanguage === 'hu') {
    changeLanguage('hu');
    langHu.classList.add('active');
    langEn.classList.remove('active');
} else {
    changeLanguage('en');
    langEn.classList.add('active');
    langHu.classList.remove('active');
}

langHu.addEventListener('click', () => {
    changeLanguage('hu');
    langHu.classList.add('active');
    langEn.classList.remove('active');
    localStorage.setItem('language', 'hu');
});

langEn.addEventListener('click', () => {
    changeLanguage('en');
    langEn.classList.add('active');
    langHu.classList.remove('active');
    localStorage.setItem('language', 'en');
});

function changeLanguage(lang) {
    const t = translations[lang];
    

    document.querySelectorAll('.nav__link').forEach((link, index) => {
        if (index === 0) link.textContent = t.nav.work;
        if (index === 1) link.textContent = t.nav.clients;
        if (index === 2) link.textContent = t.nav.about;
        if (index === 3) link.textContent = t.nav.contact;
    });
    

    document.querySelector('.header__text p').textContent = t.header.tagline;
    document.querySelector('.tech-stack p').textContent = t.header.techStack;
    document.querySelector('.header__text .btn').textContent = t.header.getInTouch;
    
    document.querySelector('.work h2').textContent = t.work.title;

    const workBoxes = document.querySelectorAll('.work__box');

// Projekt 1
workBoxes[0].querySelector('h3').textContent = t.work.project1.title;
workBoxes[0].querySelector('p').textContent = t.work.project1.desc;
workBoxes[0].querySelector('.link__text').textContent = t.work.project1.visitSite + ' ';

// Projekt 2
workBoxes[1].querySelector('h3').textContent = t.work.project2.title;
workBoxes[1].querySelector('p').textContent = t.work.project2.desc;
workBoxes[1].querySelector('.link__text').textContent = t.work.project2.visitSite + ' ';

// Projekt 3
workBoxes[2].querySelector('h3').textContent = t.work.project3.title;
workBoxes[2].querySelector('p').textContent = t.work.project3.desc;
workBoxes[2].querySelector('.link__text').textContent = t.work.project3.visitSite + ' ';

// Projekt 4
workBoxes[3].querySelector('h3').textContent = t.work.project4.title;
workBoxes[3].querySelector('p').textContent = t.work.project4.desc;
workBoxes[3].querySelector('.link__text').textContent = t.work.project4.visitSite + ' ';

// Projekt 5
workBoxes[4].querySelector('h3').textContent = t.work.project5.title;
workBoxes[4].querySelector('p').textContent = t.work.project5.desc;
workBoxes[4].querySelector('.link__text').textContent = t.work.project5.visitSite + ' ';

// Projekt 6
workBoxes[5].querySelector('h3').textContent = t.work.project6.title;
workBoxes[5].querySelector('p').textContent = t.work.project6.desc;
workBoxes[5].querySelector('.link__text').textContent = t.work.project6.visitSite + ' ';

// Projekt 7
workBoxes[6].querySelector('h3').textContent = t.work.project7.title;
workBoxes[6].querySelector('p').textContent = t.work.project7.desc;
workBoxes[6].querySelector('.link__text').textContent = t.work.project7.visitSite + ' ';
    

    document.querySelector('.client h2').textContent = t.clients.title;
    

    document.querySelector('.about h2').textContent = t.about.title;
    document.querySelector('.about__text p').textContent = t.about.content;
    

    document.querySelector('.contact h2').textContent = t.contact.title;
    document.querySelector('.contact__info p').innerHTML = t.contact.content;
    

    document.querySelector('.footer p').innerHTML = `&copy; 2025 - ${t.footer.rights} <a href="https://discord.com/users/662200412446654465" class="link">matezper2</a>.`;
}
