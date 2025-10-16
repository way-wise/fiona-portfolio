// Simple Sticky Header JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-component');
    
    if (!header) {
        console.log('Header not found');
        return;
    }
    
    let ticking = false;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 200) {
            // Add sticky class when scrolled past 200px
            header.classList.add('sticky-active');
        } else {
            // Remove sticky class when at top
            header.classList.remove('sticky-active');
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', requestTick);
    
    // Initialize header state
    updateHeader();
});
