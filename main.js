 /* ==================== Scroll Reveal Animation ==================== */
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true // Har bar scroll karne par animation dubara chalega
});

// Top Entry Animations
sr.reveal('.header, .home-content h3, .heading', { origin: 'top' });

// Bottom Entry Animations
sr.reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });

// Left Entry Animations
sr.reveal('.home-content h1, .about-img', { origin: 'left' });

// Right Entry Animations
sr.reveal('.home-content p, .social-media, .btn, .about-content', { origin: 'right' });


/* ==================== Auto Typing Effect (Optional) ==================== */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Coder'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});