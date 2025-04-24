// This file contains JavaScript code for the portfolio website.
// Add your interactive functionality here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Form validation for contact form
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            if (!name || !email) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});