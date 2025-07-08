// Global variables
let currentTestimonialIndex = 0;
let testimonialInterval;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    setupHeader();
    setupMobileMenu();
    setupSmoothScrolling();
    setupTestimonials();
    setupFAQ();
    setupContactForm();
    setupScrollAnimations();
    setupFileUpload();
}

// Header functionality
function setupHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Smooth scrolling functionality
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Testimonials functionality
function setupTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0) return;
    
    // Auto-rotate testimonials
    testimonialInterval = setInterval(function() {
        changeTestimonial(1);
    }, 5000);
    
    // Pause auto-rotation on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', function() {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', function() {
            testimonialInterval = setInterval(function() {
                changeTestimonial(1);
            }, 5000);
        });
    }
}

// Change testimonial function
function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0) return;
    
    // Remove active class from current testimonial and dot
    testimonials[currentTestimonialIndex].classList.remove('active');
    dots[currentTestimonialIndex].classList.remove('active');
    
    // Calculate new index
    currentTestimonialIndex += direction;
    
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    
    // Add active class to new testimonial and dot
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

// Set current testimonial function
function currentTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0) return;
    
    // Remove active class from current testimonial and dot
    testimonials[currentTestimonialIndex].classList.remove('active');
    dots[currentTestimonialIndex].classList.remove('active');
    
    // Set new index
    currentTestimonialIndex = index - 1;
    
    // Add active class to new testimonial and dot
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

// FAQ functionality
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
}

// Toggle FAQ function
function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            submitForm(e);
        });
    }
}

// Submit form function
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(function() {
        alert('Thank you for your message! We\'ll get back to you soon.');
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Reset file upload display
        const fileLabel = document.querySelector('.file-upload-label span');
        if (fileLabel) {
            fileLabel.textContent = 'Choose a file or drag and drop';
        }
    }, 2000);
}

// File upload functionality
function setupFileUpload() {
    const fileInput = document.getElementById('file');
    const fileLabel = document.querySelector('.file-upload-label span');
    
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                fileLabel.textContent = this.files[0].name;
            } else {
                fileLabel.textContent = 'Choose a file or drag and drop';
            }
        });
        
        // Drag and drop functionality
        const fileUpload = document.querySelector('.file-upload');
        
        if (fileUpload) {
            fileUpload.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('dragover');
            });
            
            fileUpload.addEventListener('dragleave', function(e) {
                e.preventDefault();
                this.classList.remove('dragover');
            });
            
            fileUpload.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('dragover');
                
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    fileInput.files = files;
                    fileLabel.textContent = files[0].name;
                }
            });
        }
    }
}

// Scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Service page functionality
function openServicePage(serviceId) {
    // In a real application, this would navigate to a separate page
    // For this demo, we'll show an alert
    const serviceNames = {
        'personal-memory-archiving': 'Personal Memory Archiving',
        'audio-recording': 'Audio Recording of Life Stories',
        'photo-scanning': 'Old Photo & Letter Scanning',
        'legacy-video-interviews': 'Legacy Video Interviews',
        'family-tree-documentation': 'Family Tree Documentation',
        'tribute-page-creation': 'Tribute Page Creation'
    };
    
    const serviceName = serviceNames[serviceId] || 'Unknown Service';
    
    // Create a simple modal or redirect
    if (confirm(`Would you like to learn more about our ${serviceName} service? This would normally take you to a dedicated service page.`)) {
        // In a real app, this would be: window.location.href = `/services/${serviceId}`;
        scrollToSection('contact');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedScroll = debounce(function() {
    // Handle scroll events that don't need to run on every scroll
}, 100);

const throttledScroll = throttle(function() {
    // Handle scroll events that need to run more frequently
}, 16);

window.addEventListener('scroll', function() {
    debouncedScroll();
    throttledScroll();
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Handle keyboard navigation
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const navMenu = document.getElementById('nav-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }
});

// Focus management for better accessibility
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Initialize lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Call lazy loading setup
setupLazyLoading();

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    // In production, this would send data to your analytics service
    console.log('Analytics Event:', eventName, eventData);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
}

// Track important user interactions
document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Track button clicks
    if (target.classList.contains('btn')) {
        trackEvent('button_click', {
            button_text: target.textContent.trim(),
            button_location: target.closest('section')?.id || 'unknown'
        });
    }
    
    // Track service card clicks
    if (target.closest('.service-card')) {
        const serviceCard = target.closest('.service-card');
        const serviceName = serviceCard.querySelector('h3')?.textContent || 'unknown';
        trackEvent('service_click', {
            service_name: serviceName
        });
    }
    
    // Track navigation clicks
    if (target.classList.contains('nav-link')) {
        trackEvent('navigation_click', {
            nav_item: target.textContent.trim()
        });
    }
});

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contact-form') {
        trackEvent('form_submit', {
            form_name: 'contact_form'
        });
    }
});

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                
                trackEvent('page_performance', {
                    load_time: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                    dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
                    first_paint: Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0)
                });
            }, 0);
        });
    }
}

measurePerformance();