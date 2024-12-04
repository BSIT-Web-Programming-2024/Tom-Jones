document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !message) {
            showStatus('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showStatus('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        showStatus('Sending message...', 'pending');
        
        // Simulate API call with setTimeout
        setTimeout(() => {
            showStatus('Message sent successfully!', 'success');
            contactForm.reset();
        }, 1500);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Helper functions
    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = 'form-status';
        formStatus.classList.add(type);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add scroll-based animations for nav
    let lastScroll = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            return;
        }

        if (currentScroll > lastScroll) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        }

        lastScroll = currentScroll;
    });
});