const langHu = document.getElementById('lang-hu');
const langEn = document.getElementById('lang-en');

const projectTranslations = {
    nav: {
        hu: {
            work: 'Munkáim',
            clients: 'Ügyfelek',
            about: 'Rólam',
            contact: 'Kapcsolat'
        },
        en: {
            work: 'Work',
            clients: 'Clients',
            about: 'About',
            contact: 'Contact'
        }
    },
    sections: {
        hu: {
            overview: 'Áttekintés',
            technologies: 'Technológiák',
            features: 'Jellemzők',
            categories: 'Kategóriák',
            militaryUniforms: 'Katonai Egyenruhák',
            contact: 'Kapcsolatfelvétel'
        },
        en: {
            overview: 'Overview',
            technologies: 'Technologies',
            features: 'Features',
            categories: 'Categories',
            militaryUniforms: 'Military Uniforms',
            contact: 'Get in Touch'
        }
    },
'project1': {
    hu: {
        title: 'Discord Bot Tervezés',
        tagline: 'Fedezd fel a Discord botok kreatív világát, ahol az innováció találkozik a funkcionalitással.',
        overview: 'Ez a projekt három hasznos funckiót kínál a Discord szerverekhez. Az Üdvözlő Rendszer személyre szabott köszöntéssel fogadja az új tagokat. A Jegyrendszer hatékony megoldást biztosít a szervertámogatáshoz, kérdések kezeléséhez és visszajelzések gyűjtéséhez. A Bejelentő Rendszer segítségével a tagok jelenthetik a nem megfelelő viselkedést, ezzel elősegítve a biztonságos közösségi környezet fenntartását.',
        technologies: [
            'TypeScript: A botfejlesztés alapja, tiszta és típusbiztos kód biztosítása érdekében.',
            'JavaScript: Dinamikus funkciók és interakciók implementálására a botokban.'
        ],
        features: [
            'Üdvözlő Rendszer: Testreszabható üdvözlő üzenetek az új tagok számára.',
            'Jegyrendszer: Szervezett támogatási rendszer kérdések és problémák kezelésére.',
            'Bejelentő Rendszer: Hatékony moderációs eszköz a szerver biztonságának fenntartásához.',
            'Bot Integráció: Speciális botok moderációhoz és automatizáláshoz.',
            'Felhasználóbarát Design: Intuitív struktúra a könnyű navigáció érdekében.'
        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'Discord Bot Designing',
        tagline: 'Explore the creative world of Discord bots, where innovation meets functionality.',
        overview: 'This project offers three valuable features for Discord servers. The Welcomer System greets new members with personalized messages. The Ticket System provides an efficient solution for server support, handling questions, and collecting feedback. The Report System allows members to report inappropriate behavior, helping maintain a safe community environment.',
        technologies: [
            'TypeScript: The foundation of bot development, ensuring clean and type-safe code.',
            'JavaScript: Used for implementing dynamic features and interactions within the bots.'
        ],
        features: [
            'Welcomer System: Customizable greeting feature for new members.',
            'Ticket System: Streamlined support tool for handling inquiries and issues.',
            'Report System: Effective moderation tool for maintaining server safety.',
            'Bot Integration: Advanced bots for moderation and automation.',
            'User-Friendly Layout: Intuitive structure for easy navigation.'
        ],
        backToHome: 'Back to Home'
    }
},
'project2': {
    hu: {
        title: 'ER:LC Jármű Festések',
        tagline: 'Fedezd fel a Emergency Response: Liberty County jármű design világát, ahol a kreativitás és a funkcionalitás találkozik.',
        overview: 'Ez a projekt különböző Emergency Response: Liberty County járműfestéseket mutat be. Látható egy modern és figyelemfelkeltő mintázatú staff jármű, egy megbízhatóságot sugárzó rendőrségi festés, valamint egy tűzoltósági design, amely a bátorságot és az elhivatottságot tükrözi. A festések mindegyike ötvözi a praktikumot a stílussal, miközben megfelel a vészhelyzeti járművek láthatósági követelményeinek.',
        categories: [
            'Staff Festések: Egyedi designok adminisztratív járművekhez, professzionalizmust sugározva.',
            'Rendvédelmi Festések: Tekintélyt parancsoló és jól látható designok rendőrségi járművekhez.',
            'Tűzoltósági Festések: Merész és figyelemfelkeltő minták vészhelyzeti járművekhez.',
            'EMS Festések: Tiszta és bizalmat ébresztő designok mentőautókhoz.',
            'Közlekedési Osztály Festések: Funkcionalitást előtérbe helyező designok közlekedési járművekhez.'
        ],
        features: [
            'Testreszabható Designok: Az adott osztály identitásához illeszkedő egyedi festések.',
            'Figyelemfelkeltő Mintázatok: Jól látható designok vészhelyzetekben.',
            'Részletes Művészi Elemek: Egyedi részletek minden festés megkülönböztetésére.'
        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'ER:LC Liveries',
        tagline: 'Explore the world of Emergency Response: Liberty County vehicle design, where creativity meets functionality.',
        overview: 'This project showcases various Emergency Response: Liberty County vehicle liveries. Featured is a modern and eye-catching staff vehicle design, a police livery that conveys reliability, and a fire department design that reflects bravery and dedication. Each livery combines practicality with style while meeting the visibility requirements for emergency vehicles.',
        categories: [
            'Staff Liveries: Custom designs for administrative vehicles, conveying professionalism.',
            'Police Dept. Liveries: Authoritative and highly visible designs for law enforcement vehicles.',
            'Fire Dept. Liveries: Bold and striking patterns for emergency response vehicles.',
            'EMS Liveries: Clean and trust-inspiring designs for ambulances.',
            'Transportation Dept. Liveries: Functionality-focused designs for transportation vehicles.'
        ],
        features: [
            'Customizable Designs: Unique liveries that match each department\'s identity.',
            'High-Visibility Patterns: Easily recognizable designs for emergency situations.',
            'Detailed Artwork: Distinctive elements that make each livery unique.'
        ],
        backToHome: 'Back to Home'
    }
},
'project3': {
    hu: {
        title: 'Discord Szerver Építés',
        tagline: 'Fedezd fel a Discord szerverek tervezésének világát, ahol minden elem a közösség építését szolgálja.',
        overview: 'Ez a projekt a Discord szerverek három alapvető elemére összpontosít. Az egyedi szerepkörök létrehozása segít a tagok szervezésében és a jogosultságok kezelésében. A csatornák strukturálása és dekorálása optimalizálja a navigációt és a kommunikációt. A vizuálisan vonzó embedek hatékonyan jelenítik meg a fontos információkat, mint a szabályokat vagy bejelentéseket, így a szerver professzionális megjelenést kap.',
        categories: [
            'Szerepkör Létrehozás: Egyedi szerepkörök a tagok szervezéséhez és jogosultságok kezeléséhez.',
            'Csatorna Beállítás: Logikus szerkezetű és tematikus csatornák a kommunikáció optimalizálásához.',
            'Embed Fejlesztés: Informatív és vizuálisan vonzó üzenetek készítése.',
            'Szerver Konfiguráció: Jogosultságok és beállítások átgondolt rendszere.',
            'Közösségi Interakció: Funkciók a tagok bevonására és aktivitásuk növelésére.'
        ],
        features: [
            'Egyedi Szerepkörök: Speciális jogosultságokkal és színekkel ellátott szerepkörök.',
            'Tematikus Csatornák: Egyértelmű céllal rendelkező, dekorált csatornák.',
            'Professzionális Embedek: Informatív és vizuálisan vonzó üzenetek.',
            'Bot Integráció: Automatizált funkciók a szerver működésének támogatására.',
            'Átlátható Felépítés: Könnyen navigálható szerverstruktúra minden felhasználó számára.'
        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'Discord Server Building',
        tagline: 'Explore the world of Discord server design, where every element serves to build community.',
        overview: 'This project focuses on three essential elements of Discord servers. Creating custom roles helps organize members and manage permissions. Structuring and decorating channels optimizes navigation and communication. Visually appealing embeds effectively present important information such as rules or announcements, giving the server a professional appearance.',
        categories: [
            'Role Creation: Custom roles for organizing members and managing permissions.',
            'Channel Setup: Logically structured and themed channels to optimize communication.',
            'Embed Development: Creating informative and visually appealing messages.',
            'Server Configuration: Thoughtful system of permissions and settings.',
            'Community Engagement: Features to involve members and increase activity.'
        ],
        features: [
            'Custom Roles: Roles with specialized permissions and colors.',
            'Themed Channels: Decorated channels with clear purposes.',
            'Professional Embeds: Informative and visually appealing messages.',
            'Bot Integration: Automated functions to support server operations.',
            'Clear Structure: Easily navigable server layout for all users.'
        ],
        backToHome: 'Back to Home'
    }
},
'project4': {
    hu: {
        title: 'Egyenruha & Ruházat Tervezés',
        tagline: 'Fedezd fel a ruhatervezés világát, ahol a funkcionalitás találkozik a stílussal.',
        overview: 'Ez a projekt kettő területet mutat be a ruhatervezésből. A katonai egyenruhák tervezése egyesíti a funkcionalitást és a formaságot, tükrözve a hagyományokat és a modern követelményeket. A személyzeti egyenruhák praktikusak, mégis stílusosak. Az egyedi díszítések és részletek,  személyessé teszik az öltözékeket és kiemelik a viselőjük egyediségét.',
        features: [
            'Quartermaster Kézikönyve: <a href="https://docs.google.com/document/d/1d2ZOKxN2AyBy_r3rfIeW4IW-C4f9c8b9CEkY0W_7dvI/edit?usp=sharing" class="link">QMO | Kézikönyv</a>',
            'Formális egyenruhák: No.1, No.2, No.3, No.4, No.8, No.14, P.T.',
            'Regimentális egyenruhák: 3PARA, AAC, ETS, PFP, RGG, RMP, RTR, SAS, SRR',
            'Sokoldalúság: Különböző alkalmakra megfelelő ruhadarabok.'
        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'Uniforms & Clothing Design',
        tagline: 'Explore the world of clothing design, where functionality meets style.',
        overview: 'This project showcases two areas of clothing design. Military uniform design combines functionality and formality, reflecting traditions and modern requirements. Staff uniforms are practical yet stylish. Custom embellishments and details, personalize outfits and highlight the wearer\'s uniqueness.',
        militaryUniforms: [
            'Quartermaster\'s Manual Handbook: <a href="https://docs.google.com/document/d/1d2ZOKxN2AyBy_r3rfIeW4IW-C4f9c8b9CEkY0W_7dvI/edit?usp=sharing" class="link">QMO | Manual Handbook</a>',
            'Formals: No.1, No.2, No.3, No.4, No.8, No.14, P.T.',
            'Regimentals: 3PARA, AAC, ETS, PFP, RGG, RMP, RTR, SAS, SRR'
        ],
        features: [
            'Practical Design: Purpose-appropriate and comfortable outfits.',
            'Visual Appearance: Design reflecting brand identity and wearer personality.',
            'Custom Details: Personalized elements on each garment.',
            'Versatility: Appropriate garments for different occasions.'
        ],
        backToHome: 'Back to Home'
    }
},
'project5': {
    hu: {
        title: 'Roblox GFX Művészet',
        tagline: 'Fedezd fel a Roblox GFX művészet világát, ahol a kreativitás és a technikai tudás találkozik.',
        overview: 'Ez a projekt a Roblox GFX művészet kettő területét mutatja be. A karakterdesign során a Roblox avatarokat dinamikus pózokkal és kifejező részletekkel keltem életre. A környezeti művészetben részletes és atmoszferikus jeleneteket alkotok, amelyek a játék világába repítik a nézőt. A promóciós grafikákkal figyelemfelkeltő vizuális anyagokat készítek játékokhoz, eseményekhez és közösségi médiához, amelyek hatékonyan közvetítik az üzenetet.',

        categories: [
            'Karakterdesign: Egyedi avatárok létrehozása kifejező pózokkal és részletekkel.',
            'Környezeti Művészet: Élethű és hangulatos helyszínek megalkotása.',
            'Promóciós Grafikák: Figyelemfelkeltő anyagok marketingcélokra.',
            'Thumbnail Művészet: Kattintásra ösztönző miniatűr képek fejlesztése.',
            'Egyedi Megrendelések: Személyre szabott GFX alkotások specifikus igényekre.'
        ],
        features: [
            'Kifejező Karakterek: Egyéniséget és történetet tükröző avatárok.',
            'Részletes Környezetek: Aprólékosan kidolgozott, történetmesélő helyszínek.',
            'Hatásos Kompozíciók: Vizuálisan megragadó elrendezések.',
            'Magas Minőségű Renderelés: Éles és professzionális végeredmény.',
            'Egyedi Stílus: Felismerhető művészi megközelítés minden alkotáson.'
        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'Roblox GFX Art',
        tagline: 'Explore the world of Roblox GFX art, where creativity meets technical expertise.',
        overview: 'This project showcases two areas of Roblox GFX art. In character design, I bring Roblox avatars to life with dynamic poses and expressive details. In environmental art, I create detailed and atmospheric scenes that transport viewers into the game world. With promotional graphics, I craft eye-catching visual materials for games, events, and social media that effectively convey the message.',

        categories: [
            'Character Design: Creating unique avatars with expressive poses and details.',
            'Environmental Art: Crafting lifelike and atmospheric settings.',
            'Promotional Graphics: Eye-catching materials for marketing purposes.',
            'Thumbnail Art: Developing click-inducing miniature images.',
            'Custom Commissions: Personalized GFX creations for specific needs.'
        ],
        features: [
            'Expressive Characters: Avatars that reflect personality and story.',
            'Detailed Environments: Meticulously crafted, storytelling settings.',
            'Impactful Compositions: Visually striking arrangements.',
            'High-Quality Rendering: Crisp and professional results.',
            'Unique Style: Recognizable artistic approach in every creation.'
        ],
        backToHome: 'Back to Home'
    }
},
'project6': {
    hu: {
        title: 'Logo és Banner Design',
        tagline: 'Fedezd fel a vizuális márkaépítés világát, ahol a kreativitás meghatározza a márkaidentitást.',
        overview: 'Ez a projekt a vizuális márkaépítés kettő kulcsfontosságú elemét mutatja be. A logók tervezésénél egyedi és emlékezetes szimbólumokat alkotok, amelyek tökéletesen megragadják a márka lényegét. A bannerek készítésénél figyelemfelkeltő vizuális elemeket használok, amelyek azonnal megragadják a figyelmet weboldalakon és közösségi médiában. A teljes márkaidentitás fejlesztése során pedig következetes vizuális stílust alakítok ki, amely különböző platformokon is felismerhető marad.',
        technologies: [
            'Vektorgrafika: Adobe Illustrator használata skálázható és éles logók létrehozásához.',
            'Kompozíció: Vizuális elemek harmonikus elrendezése a maximális hatás érdekében.',
            'Színelmélet: Stratégiai színválasztás a márkaüzenet erősítésére.'
        ],
        categories: [
            'Logótervezés: Időtálló szimbólumok létrehozása, amelyek tükrözik a márka értékeit.',
            'Banner Design: Figyelemfelkeltő fejlécek és hirdetések különböző platformokra.',
            'Márkaidentitás: Következetes vizuális elemek kidolgozása az egységes megjelenés érdekében.',
            'Közösségi Média Grafikák: Platform-specifikus vizuális tartalmak optimalizálása.',
        ],
        features: [
            'Figyelemfelkeltő Kompozíciók: Stratégiai elrendezések a hatékony kommunikációért.',
            'Konzisztens Stílus: Egységes vizuális nyelv minden platformon.',
            'Célzott Üzenet: A márka értékeit és célközönségét tükröző vizuális kommunikáció.'
        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'Logo and Banner Design',
        tagline: 'Explore the world of visual branding, where creativity defines brand identity.',
        overview: 'This project showcases two key elements of visual branding. In logo design, I create unique and memorable symbols that perfectly capture the essence of a brand. When creating banners, I use eye-catching visual elements that immediately grab attention on websites and social media. In developing complete brand identity, I establish a consistent visual style that remains recognizable across different platforms.',
        technologies: [
            'Vector Graphics: Using Adobe Illustrator to create scalable and crisp logos.',
            'Composition: Arranging visual elements harmoniously for maximum impact.',
            'Color Theory: Strategic color choices to reinforce brand messaging.'
        ],
        categories: [
            'Logo Design: Creating timeless symbols that reflect brand values.',
            'Banner Design: Eye-catching headers and advertisements for various platforms.',
            'Brand Identity: Developing consistent visual elements for unified appearance.',
            'Social Media Graphics: Optimizing platform-specific visual content.',
        ],
        features: [
            'Attention-Grabbing Compositions: Strategic arrangements for effective communication.',
            'Consistent Style: Unified visual language across all platforms.',
            'Targeted Messaging: Visual communication reflecting brand values and audience.'
        ],
        backToHome: 'Back to Home'
    }
},
'project7': {
    hu: {
        title: 'Fotózás & Fotó Szerkesztés',
        tagline: 'Fedezd fel a vizuális történetmesélés világát, ahol a pillanatok művészetté válnak.',
        overview: 'Ez a projekt a fotográfia és képszerkesztés kettő fő területét mutatja be. A fotózás során a különböző szögekből beállított elemeket illetve embereket örökítem meg. A képszerkesztéssel pedig a nyers fotókat alakítom át, kiemelve a színeket, kontrasztokat és részleteket, hogy a végeredmény vizuálisan lenyűgöző legyen.',

        categories: [
            'Szerkesztési Technikák: Képek átalakítása a vizuális hatás fokozásáért.',
            'Eseményfotózás: Fontos pillanatok dokumentálása különleges alkalmakkor.',
            'Kreatív Koncepciók: Művészi megközelítésű, egyedi képalkotási projektek.'
        ],
        features: [

            'Kompozíciós Készség: Vizuálisan kiegyensúlyozott és hatásos képstruktúrák.',
            'Színkezelés: Harmonikus és hangulatteremtő színpaletta alkalmazása.',
            'Részletgazdagság: Aprólékos figyelem a kép minden elemére.',

        ],
        backToHome: 'Vissza a főoldalra'
    },
    en: {
        title: 'Photography & Photo Editing',
        tagline: 'Explore the world of visual storytelling, where moments transform into art.',
        overview: 'This project showcases two main areas of photography and image editing. During photography, I capture elements and people from different angles. With photo editing, I transform raw images, enhancing colors, contrasts, and details to make the final result visually stunning.',

        categories: [
            'Editing Techniques: Transforming images to enhance visual impact.',
            'Event Photography: Documenting important moments at special occasions.',
            'Creative Concepts: Artistic approach to unique image creation projects.'
        ],
        features: [
            'Compositional Skill: Visually balanced and impactful image structures.',
            'Color Management: Application of harmonious and mood-setting color palettes.',
            'Attention to Detail: Meticulous focus on every element of the image.',

        ],
        backToHome: 'Back to Home'
    }
},
    
    'contact': {
        hu: {
            title: 'Kapcsolatfelvétel',
            content: 'Ha szükséged van egy gyors, felhasználóbarát weboldalra, hogy bemutasd termékedet vagy vállalkozásodat? Konzultációra van szükséged, kérdéseid vannak, tanácsot szeretnél adni, vagy egyszerűen csak köszönni akarsz? Bármi is legyen, nyugodtan írj! Igyekszem mihamarabb válaszolni. 😊 A leggyorsabb módja az elérésemnek az email vagy a Discord.',
    },
    en: {
        title: 'Contact',
        content: 'Need a fast, user-friendly website to showcase your product or business? Looking for a consultation, have questions, want to give advice, or simply say hello? Whatever it is, feel free to reach out! I strive to respond as soon as possible. 😊 The quickest way to reach me is via email or Discord.',
    },
  },
};