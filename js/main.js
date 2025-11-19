/**
 * Yoga x Rachel McCorry - Main JavaScript
 * Handles navigation, forms, animations, and interactive elements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ============================
    // Mobile Navigation Toggle
    // ============================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            body.classList.toggle('menu-open');

            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                body.classList.remove('menu-open');

                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                body.classList.remove('menu-open');

                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ============================
    // Sticky Navigation on Scroll
    // ============================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // ============================
    // Back to Top Button
    // ============================
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================
    // Smooth Scrolling for Anchor Links
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't preventDefault for links like "#privacy" or "#terms" that don't have targets
            if (href === '#' || href === '#privacy' || href === '#terms') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================
    // Testimonials Slider
    // ============================
    const testimonialTrack = document.querySelector('.testimonial-track');

    if (testimonialTrack) {
        const testimonialCards = testimonialTrack.querySelectorAll('.testimonial-card');

        // Clone testimonials for infinite scroll effect
        if (testimonialCards.length > 0) {
            testimonialCards.forEach(card => {
                const clone = card.cloneNode(true);
                testimonialTrack.appendChild(clone);
            });
        }

        // Pause animation on hover
        testimonialTrack.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        testimonialTrack.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    // ============================
    // Contact Form Handling
    // ============================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Add loading state
            contactForm.classList.add('loading');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Collect form data
            const formData = new FormData(contactForm);
            const data = {};

            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                if (key === 'times') {
                    if (!data[key]) {
                        data[key] = [];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            }

            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';

                // Log form data (in production, send to server)
                console.log('Form submitted:', data);

                // Reset form
                contactForm.classList.remove('loading');
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                contactForm.reset();

                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);

            // In production, replace the setTimeout with an actual fetch call:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                contactForm.classList.remove('loading');
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                contactForm.reset();
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(error => {
                alert('There was an error submitting your form. Please try again or contact us directly.');
                contactForm.classList.remove('loading');
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
            */
        });
    }

    // ============================
    // Newsletter Form Handling
    // ============================
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;

            // Simulate subscription (replace with actual API call)
            setTimeout(function() {
                submitButton.textContent = 'Subscribed!';
                emailInput.value = '';

                setTimeout(function() {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, 2000);
            }, 1000);

            // In production, replace with actual fetch call
        });
    });

    // ============================
    // Intersection Observer for Fade-in Animations
    // ============================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.service-card, .area-card, .testimonial-card, .credential-card, .offering-card');

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================
    // Video Lazy Loading & Mobile Optimization
    // ============================
    const heroVideo = document.querySelector('.hero-video');

    if (heroVideo) {
        // Check if device is mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isSlowConnection = navigator.connection && (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');

        // Only load video on desktop or fast connections
        if (!isMobile && !isSlowConnection) {
            // Pause video when not in viewport (performance optimization)
            const videoObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        heroVideo.play();
                    } else {
                        heroVideo.pause();
                    }
                });
            }, { threshold: 0.25 });

            videoObserver.observe(heroVideo);

            // Ensure video plays on load
            heroVideo.play().catch(error => {
                console.log('Video autoplay prevented:', error);
            });
        } else {
            // On mobile or slow connection, remove video to save bandwidth
            heroVideo.remove();
            console.log('Video disabled for mobile/slow connection optimization');
        }
    }

    // ============================
    // Responsive Image Loading
    // ============================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ============================
    // Active Page Highlighting in Navigation
    // ============================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // ============================
    // Prevent Form Resubmission on Page Refresh
    // ============================
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // ============================
    // Accessibility: Trap Focus in Mobile Menu
    // ============================
    if (mobileMenuToggle && navMenu) {
        const focusableElements = navMenu.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        navMenu.addEventListener('keydown', function(e) {
            if (!navMenu.classList.contains('active')) return;

            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }

            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                body.classList.remove('menu-open');
                mobileMenuToggle.focus();
            }
        });
    }

    // ============================
    // Performance: Debounce Scroll Events
    // ============================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll events if needed
    const debouncedScroll = debounce(function() {
        // Add any additional scroll-based functionality here
    }, 100);

    window.addEventListener('scroll', debouncedScroll);

    // ============================
    // Console Message
    // ============================
    console.log('%c🧘 Yoga x Rachel McCorry', 'font-size: 20px; color: #A8B5A0; font-weight: bold;');
    console.log('%cFind your flow in Miami\'s most beautiful neighborhoods', 'font-size: 12px; color: #9B9B9B;');
    console.log('%cWebsite built with ❤️ for mindful movement', 'font-size: 11px; color: #E09F7D;');
});

// ============================
// Service Worker Registration (Optional - for PWA)
// ============================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/
