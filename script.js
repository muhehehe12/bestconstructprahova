document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Loading Screen ---
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 600);
    }, 1000);

    // --- 2. Hamburger Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // --- 3. Scroll Reveal Animations ---
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load

    // --- 4. Language Translation Logic (EN / RO) ---
    const translations = {
        ro: {
            "loading": "Se încarcă...",
            "nav-home": "Acasă",
            "nav-services": "Servicii",
            "nav-contact": "Contact",
            "hero-title": "Construcție și Reparații Acoperișuri Premium",
            "hero-subtitle": "Soluții complete de dulgherie, montaj și hidroizolații la cele mai înalte standarde.",
            "hero-cta": "Sună Acum: 075 909 5086",
            "hero-secondary": "Află mai multe",
            "services-title": "Serviciile Noastre",
            "srv-1-title": "Construcție & Înlocuire",
            "srv-1-desc": "Acoperișuri noi, înlocuire acoperiș existent, montaj tablă și țiglă metalică sau ceramică.",
            "srv-2-title": "Reparații & Izolații",
            "srv-2-desc": "Remediere infiltrații, hidroizolații, izolații termice/fonice și reparații acoperișuri monumente istorice.",
            "srv-3-title": "Sisteme Pluviale",
            "srv-3-desc": "Montaj jgheaburi, burlane, parazăpezi, accesorii și execuție coșuri de fum.",
            "srv-4-title": "Dulgherie & Mansardări",
            "srv-4-desc": "Șarpante, astereală, execuție terase și foișoare din lemn.",
            "srv-5-title": "Întreținere",
            "srv-5-desc": "Curățare acoperiș, vopsitorie acoperișuri și structuri metalice.",
            "srv-6-title": "Ferestre de Mansardă",
            "srv-6-desc": "Montaj și reparații profesionale pentru ferestre tip Velux.",
            "contact-title": "Cere o Ofertă",
            "contact-desc": "Lucrările se pot realiza cu materialele noastre sau cu cele furnizate de client. Oferim garanție pentru lucrările efectuate.",
            "contact-name": "Adip",
            "contact-availability": "Disponibil pentru consultanță și intervenții rapide.",
            "footer-rights": "Toate drepturile rezervate."
        },
        en: {
            "loading": "Loading...",
            "nav-home": "Home",
            "nav-services": "Services",
            "nav-contact": "Contact",
            "hero-title": "Premium Roof Construction & Repair",
            "hero-subtitle": "Complete carpentry, installation, and waterproofing solutions at the highest standards.",
            "hero-cta": "Call Now: 075 909 5086",
            "hero-secondary": "Learn More",
            "services-title": "Our Services",
            "srv-1-title": "Construction & Replacement",
            "srv-1-desc": "New roofs, roof replacement, installation of metal sheet, and metal or ceramic tiles.",
            "srv-2-title": "Repairs & Insulation",
            "srv-2-desc": "Leak remediation, waterproofing, thermal/acoustic insulation, and historic monument restorations.",
            "srv-3-title": "Rainwater Systems",
            "srv-3-desc": "Installation of gutters, downspouts, snow guards, accessories, and chimney execution.",
            "srv-4-title": "Carpentry & Attics",
            "srv-4-desc": "Framing, boarding, execution of wooden terraces and gazebos.",
            "srv-5-title": "Maintenance",
            "srv-5-desc": "Roof cleaning, painting for roofs and metallic structures.",
            "srv-6-title": "Attic Windows",
            "srv-6-desc": "Professional installation and repair for Velux type windows.",
            "contact-title": "Request a Quote",
            "contact-desc": "Works can be done with our materials or the client's. We offer a warranty for all executed works.",
            "contact-name": "Adip",
            "contact-availability": "Available for consultation and rapid interventions.",
            "footer-rights": "All rights reserved."
        }
    };

    const btnEn = document.getElementById("lang-en");
    const btnRo = document.getElementById("lang-ro");
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    const setLanguage = (lang) => {
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        if (lang === 'en') {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
            document.documentElement.lang = "en";
        } else {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.lang = "ro";
        }
    };

    btnEn.addEventListener("click", () => setLanguage('en'));
    btnRo.addEventListener("click", () => setLanguage('ro'));
});
