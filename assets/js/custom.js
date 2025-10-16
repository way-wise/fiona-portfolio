/**
 * Custom JavaScript for Component-Based Portfolio
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    // Initialize all components
    initScrollAnimations();
    initProjectFiltering();
    initNewsletterForm();
    initSmoothScrolling();
    initMobileMenu();
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Project filtering functionality
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.aux-iso-item');
    
    if (!filterButtons.length || !projectItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects with animation
            projectItems.forEach((item, index) => {
                setTimeout(() => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                    } else {
                        const category = item.querySelector('.entry-tax a');
                        if (category) {
                            const categoryText = category.textContent.toLowerCase().replace(/\s+/g, '-');
                            if (categoryText === filter) {
                                item.style.display = 'block';
                                item.style.opacity = '1';
                            } else {
                                item.style.opacity = '0';
                                setTimeout(() => {
                                    item.style.display = 'none';
                                }, 300);
                            }
                        }
                    }
                }, index * 50); // Staggered animation
            });
        });
    });
}

// Newsletter form handling
function initNewsletterForm() {
    const newsletterForm = document.getElementById('mc4wp-form-1');
    
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[name="EMAIL"]');
        const submitButton = this.querySelector('input[type="submit"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        submitButton.value = 'Subscribing...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            showMessage('Thank you for subscribing! We\'ll be in touch soon.', 'success');
            this.reset();
            submitButton.value = 'Get In Touch';
            submitButton.disabled = false;
        }, 1500);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.aux-elementor-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const burgerButton = document.querySelector('.aux-burger-box');
    const mobileMenu = document.querySelector('.aux-fs-popup');
    const closeButton = document.querySelector('.aux-panel-close');
    
    if (!burgerButton || !mobileMenu) return;

    burgerButton.addEventListener('click', function() {
        mobileMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.custom-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `custom-message custom-message-${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;

    // Set background color based on type
    switch (type) {
        case 'success':
            messageDiv.style.backgroundColor = '#28a745';
            break;
        case 'error':
            messageDiv.style.backgroundColor = '#dc3545';
            break;
        default:
            messageDiv.style.backgroundColor = '#007bff';
    }

    document.body.appendChild(messageDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .aux-iso-item {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// Export functions for potential external use
window.PortfolioJS = {
    showMessage,
    isValidEmail,
    initScrollAnimations,
    initProjectFiltering
};
