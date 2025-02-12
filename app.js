// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.nav-list');
    
    navBtn.addEventListener('click', function() {
        navList.classList.toggle("active");
    });

    // Smooth scrolling for links
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const navLinks = document.querySelectorAll('.nav-list a, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});
