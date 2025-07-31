// SKU Watch Landing Page JavaScript

function scheduleCall() {
    // Replace with your actual Calendly or scheduling link
    // Example: window.open('https://calendly.com/pamelaireri/15min-sku-watch-interview', '_blank');
    
    alert('This would redirect to your Calendly link for 15-minute interviews.\n\nExample: https://calendly.com/pamelaireri/15min-sku-watch-interview');
}

function expressInterest() {
    // Replace with your actual collaboration form link
    // Example: window.open('https://tally.so/r/yourform', '_blank');
    
    alert('This would redirect to your collaboration interest form.\n\nExample: Tally form, Google Form, or TypeForm');
}

// Smooth scrolling for any internal links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Add any additional initialization code here
    console.log('SKU Watch landing page loaded successfully');
});

// Optional: Add analytics tracking
function trackEvent(eventName, eventData = {}) {
    // Add your analytics tracking code here
    // Example for Google Analytics:
    // gtag('event', eventName, eventData);
    
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('button')) {
        const buttonText = e.target.textContent.trim();
        trackEvent('button_click', {
            button_text: buttonText,
            section: e.target.closest('.section') ? 'main_content' : 'header'
        });
    }
});

// Track email link clicks
document.addEventListener('click', function(e) {
    if (e.target.href && e.target.href.includes('mailto:')) {
        trackEvent('email_click', {
            email: e.target.href.replace('mailto:', '')
        });
    }
});

// Track external link clicks
document.addEventListener('click', function(e) {
    if (e.target.href && e.target.target === '_blank') {
        trackEvent('external_link_click', {
            url: e.target.href,
            text: e.target.textContent.trim()
        });
    }
});