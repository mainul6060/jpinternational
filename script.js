// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const heroSlider = document.getElementById('heroSlider');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');
const packageModal = document.getElementById('packageModal');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const closeSuccessBtn = document.querySelector('.close-success-btn');
const loadingSpinner = document.getElementById('loadingSpinner');

// WhatsApp Number - Updated
const whatsappNumber = '+8801866664606';
const whatsappUrl = `https://wa.me/8801866664606`;

// Package Details Data
const packageDetails = {
    bali: {
        title: "Bali Paradise Getaway - 7 Days",
        content: `
            <div class="package-modal-content">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Bali Paradise">
                <h3>Package Includes:</h3>
                <ul>
                    <li>Return economy class flights from major airports</li>
                    <li>6 nights at 5-star beachfront resort in Seminyak</li>
                    <li>Daily breakfast buffet & 3 special dinners</li>
                    <li>Airport transfers in private luxury vehicle</li>
                    <li>Full-day Ubud cultural tour with English guide</li>
                    <li>Half-day water sports at Tanjung Benoa</li>
                    <li>60-min traditional Balinese spa session</li>
                    <li>All applicable taxes and service charges</li>
                    <li>Travel insurance for duration of trip</li>
                </ul>
                <h3>Detailed Itinerary:</h3>
                <p><strong>Day 1:</strong> Arrival in Bali, meet & greet, transfer to resort, free time to relax</p>
                <p><strong>Day 2:</strong> Ubud tour - Monkey Forest, Tegallalang Rice Terrace, Ubud Palace</p>
                <p><strong>Day 3:</strong> Tanjung Benoa water sports (banana boat, parasailing, jet ski)</p>
                <p><strong>Day 4:</strong> Free day for relaxation or optional tours (additional cost)</p>
                <p><strong>Day 5:</strong> Ulun Danu Temple, Bedugul, Jatiluwih Rice Terraces</p>
                <p><strong>Day 6:</strong> Spa session, shopping at local markets</p>
                <p><strong>Day 7:</strong> Breakfast, check-out, departure transfer to airport</p>
                <h3>Package Price: $1,299 per person</h3>
                <p><em>Price based on double occupancy. Single supplement: $350 extra</em></p>
            </div>
        `
    },
    swiss: {
        title: "Swiss Alps Adventure - 10 Days",
        content: `
            <div class="package-modal-content">
                <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Swiss Alps">
                <h3>Package Includes:</h3>
                <ul>
                    <li>Return economy class flights to Zurich</li>
                    <li>3 nights in Zurich, 3 nights in Interlaken, 3 nights in Zermatt</li>
                    <li>All meals included (breakfast, lunch, dinner at hotels)</li>
                    <li>Jungfraujoch excursion with train tickets (Top of Europe)</li>
                    <li>Matterhorn Glacier Paradise cable car experience</li>
                    <li>Guided hiking tours (varying difficulty levels available)</li>
                    <li>Swiss Travel Pass for 8 days (unlimited train, bus, boat)</li>
                    <li>All transfers between destinations</li>
                    <li>Comprehensive travel insurance</li>
                </ul>
                <h3>Detailed Itinerary:</h3>
                <p><strong>Day 1-2:</strong> Zurich arrival, city tour, Rhine Falls excursion</p>
                <p><strong>Day 3:</strong> Travel to Lucerne, Chapel Bridge, Lion Monument</p>
                <p><strong>Day 4-6:</strong> Interlaken - Jungfraujoch, hiking in Grindelwald</p>
                <p><strong>Day 7-9:</strong> Zermatt - Matterhorn views, skiing options (seasonal)</p>
                <p><strong>Day 10:</strong> Departure from Zurich</p>
                <h3>Package Price: $2,499 per person</h3>
                <p><em>Price based on double occupancy. Single supplement: $500 extra</em></p>
            </div>
        `
    },
    umrah: {
        title: "Umrah Spiritual Journey - 14 Days",
        content: `
            <div class="package-modal-content">
                <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Umrah Package">
                <h3>Package Includes:</h3>
                <ul>
                    <li>Return economy class flights to Jeddah from selected airports</li>
                    <li>8 nights at 5-star hotel walking distance to Haram in Makkah</li>
                    <li>5 nights at 5-star hotel near Prophet's Mosque in Madinah</li>
                    <li>All meals (buffet style with variety of international cuisines)</li>
                    <li>Guided Umrah rituals with experienced religious scholar</li>
                    <li>Ziyarat tours to historical Islamic sites in Makkah & Madinah</li>
                    <li>24/7 mutawwif (guide) assistance throughout the journey</li>
                    <li>Private transportation for all transfers (airport-hotel-haram)</li>
                    <li>Umrah visa processing and all government fees</li>
                    <li>Ihram cloths for men and abayas for women</li>
                </ul>
                <h3>Detailed Itinerary:</h3>
                <p><strong>Day 1:</strong> Arrival in Jeddah, transfer to Makkah hotel</p>
                <p><strong>Day 2-5:</strong> Umrah performance, prayers at Haram, religious lectures</p>
                <p><strong>Day 6:</strong> Travel to Madinah, check-in, visit Prophet's Mosque</p>
                <p><strong>Day 7-12:</strong> Prayers in Madinah, ziyarat tours (Quba Mosque, Uhud Mountain)</p>
                <strong>Day 13:</strong> Return to Makkah for final prayers and Tawaf Al-Wida</p>
                <p><strong>Day 14:</strong> Departure from Jeddah</p>
                <h3>Package Price: $3,199 per person</h3>
                <p><em>Price based on triple occupancy. Double occupancy: $3,499 per person</em></p>
            </div>
        `
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initStickyHeader();
    initHeroSlider();
    initTestimonialSlider();
    initCounters();
    initPackageModals();
    initBookingForm();
    initContactForm();
    initSmoothScrolling();
    initScrollAnimations();
    setMinDateForTravel();
    initFormValidation();
    
    // Initialize analytics
    initAnalytics();
});

// Mobile Menu Toggle
function initMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Sticky Header
function initStickyHeader() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const heroSlides = document.querySelectorAll('.hero-bg-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }
    
    // Start slider after 1 second
    setTimeout(() => {
        setInterval(nextSlide, 5000);
    }, 1000);
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentTestimonial = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Hide all slides
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        testimonialSlides[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Dot click event
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
            
            // Reset autoplay interval
            clearInterval(slideInterval);
            slideInterval = setInterval(nextTestimonial, 8000);
        });
    });
    
    function nextTestimonial() {
        let nextIndex = (currentTestimonial + 1) % testimonialSlides.length;
        showSlide(nextIndex);
    }
    
    // Start autoplay
    slideInterval = setInterval(nextTestimonial, 8000);
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.trust-number');
    const speed = 200;
    
    const startCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const count = +counter.innerText.replace('+', '').replace('%', '');
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('%') ? '%' : '+');
            setTimeout(() => startCounter(counter), 10);
        } else {
            counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
        }
    };
    
    // Start counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                startCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Package Modals
function initPackageModals() {
    // View Details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const packageId = this.getAttribute('data-package');
            showPackageModal(packageId);
        });
    });
    
    // Book Now buttons on package cards
    document.querySelectorAll('.book-now-package').forEach(button => {
        button.addEventListener('click', function() {
            const packageId = this.getAttribute('data-package');
            
            // Set the destination in booking form
            document.getElementById('destination').value = packageId;
            
            // Scroll to booking form
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Close modal buttons
    closeModal.addEventListener('click', () => {
        packageModal.classList.remove('active');
    });
    
    closeSuccessModal.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
    
    closeSuccessBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === packageModal) {
            packageModal.classList.remove('active');
        }
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
    
    // Modal book button
    document.querySelector('.modal-book-btn').addEventListener('click', () => {
        packageModal.classList.remove('active');
        
        // Scroll to booking form after a short delay
        setTimeout(() => {
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
}

function showPackageModal(packageId) {
    const package = packageDetails[packageId];
    
    if (!package) return;
    
    document.getElementById('modalTitle').textContent = package.title;
    document.getElementById('modalContent').innerHTML = package.content;
    
    packageModal.classList.add('active');
}

// Booking Form
function initBookingForm() {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateBookingForm()) {
            return;
        }
        
        // Show loading spinner
        showLoading();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            destination: document.getElementById('destination').value,
            date: document.getElementById('date').value,
            travelers: document.getElementById('travelers').value,
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Simulate API call delay
        setTimeout(() => {
            // In a real application, you would send this data to a server
            console.log('Booking form submitted:', formData);
            
            // Simulate sending via email/WhatsApp
            simulateBookingSubmission(formData);
            
            // Hide loading spinner
            hideLoading();
            
            // Show success modal
            successModal.classList.add('active');
            
            // Reset form
            bookingForm.reset();
            
            // Track conversion
            trackConversion('booking_form_submit', formData.destination);
            
        }, 1500);
    });
    
    // WhatsApp contact buttons
    document.querySelectorAll('.whatsapp-contact').forEach(btn => {
        btn.addEventListener('click', function() {
            trackConversion('whatsapp_contact', 'hero_section');
        });
    });
    
    // Book Now navigation button
    document.querySelector('.book-now-nav').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        trackConversion('book_now_nav_click', 'header');
    });
    
    // Scroll to booking buttons
    document.querySelectorAll('.scroll-to-booking').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            trackConversion('scroll_to_booking', 'hero_section');
        });
    });
    
    // Service book buttons
    document.querySelectorAll('.service-book-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            trackConversion('service_book_click', 'services_section');
        });
    });
}

// Contact Form
function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateContactForm()) {
            return;
        }
        
        // Show loading spinner
        showLoading();
        
        // Get form data
        const formData = {
            name: this.querySelector('input[type="text"]').value.trim(),
            email: this.querySelector('input[type="email"]').value.trim(),
            subject: this.querySelectorAll('input[type="text"]')[1].value.trim(),
            message: this.querySelector('textarea').value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Simulate API call delay
        setTimeout(() => {
            // In a real application, you would send this data to a server
            console.log('Contact form submitted:', formData);
            
            // Show success message
            showNotification('Thank you for your message! We will contact you soon.', 'success');
            
            // Hide loading spinner
            hideLoading();
            
            // Reset form
            contactForm.reset();
            
            // Track conversion
            trackConversion('contact_form_submit', 'contact_section');
            
        }, 1500);
    });
    
    // Contact submit button
    document.querySelector('.contact-submit-btn').addEventListener('click', function() {
        trackConversion('contact_button_click', 'contact_section');
    });
}

// Form Validation
function initFormValidation() {
    // Phone number validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(this.value) && this.value.length > 0) {
                showError(this, 'Please enter a valid phone number');
            } else {
                clearError(this);
            }
        });
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value) && this.value.length > 0) {
                showError(this, 'Please enter a valid email address');
            } else {
                clearError(this);
            }
        });
    }
}

function validateBookingForm() {
    let isValid = true;
    
    // Required fields
    const requiredFields = ['name', 'phone', 'email', 'destination', 'date', 'travelers'];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            showError(field, 'This field is required');
            isValid = false;
        } else {
            clearError(field);
        }
    });
    
    // Validate email format
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailRegex.test(emailField.value)) {
        showError(emailField, 'Please enter a valid email address');
        isValid = false;
    }
    
    return isValid;
}

function validateContactForm() {
    let isValid = true;
    
    // Check all required fields
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else {
            clearError(input);
        }
    });
    
    return isValid;
}

function showError(input, message) {
    input.classList.add('error');
    
    // Check if error message already exists
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
    
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(input) {
    input.classList.remove('error');
    
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.classList.remove('show');
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.service-card, .package-card, .feature-item, .trust-item, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Set min date for travel date input
function setMinDateForTravel() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.value = ''; // Clear default value
    }
}

// Show/Hide Loading Spinner
function showLoading() {
    loadingSpinner.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    loadingSpinner.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show Notification
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add close button event
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Add keyframe animations
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Simulate booking submission - Updated with your WhatsApp number
function simulateBookingSubmission(formData) {
    // In a real application, this would make an API call to your backend
    console.log('Simulating booking submission:', formData);
    
    // Simulate sending email
    console.log(`Email sent to bookings@jpinternational.com:
        New Booking Request:
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Destination: ${formData.destination}
        Travel Date: ${formData.date}
        Travelers: ${formData.travelers}
        Message: ${formData.message || 'None'}
        Submitted at: ${formData.timestamp}
    `);
    
    // Simulate WhatsApp message (in reality, you would use WhatsApp Business API)
    const whatsappMessage = `Hello JP INTERNATIONAL, I just submitted a booking request:
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Destination: ${formData.destination}
    Travel Date: ${formData.date}
    Travelers: ${formData.travelers}
    ${formData.message ? `Message: ${formData.message}` : ''}
    Please contact me at ${formData.phone}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/8801866664606?text=${encodedMessage}`;
    
    console.log('WhatsApp message prepared:', whatsappMessage);
    console.log('WhatsApp link:', whatsappLink);
    
    // In a real implementation, you would send this data to your backend
    // which would then forward it to your WhatsApp Business account
}

// Analytics & Conversion Tracking
function initAnalytics() {
    // Facebook Pixel simulation
    console.log('Facebook Pixel initialized for JP INTERNATIONAL');
    
    // Google Analytics simulation
    console.log('Google Analytics initialized for JP INTERNATIONAL');
    
    // Track page view
    trackPageView();
}

function trackPageView() {
    console.log(`Page view tracked: ${window.location.pathname || 'home'}`);
    
    // In real implementation, you would call:
    // fbq('track', 'PageView');
    // gtag('event', 'page_view');
}

function trackConversion(action, location) {
    console.log(`Conversion tracked: ${action} from ${location}`);
    
    // In real implementation, you would call:
    // fbq('track', 'Lead', {content_name: action});
    // gtag('event', 'conversion', {send_to: 'AW-XXXXXXXX/YYYYYYYY'});
}

// WhatsApp click tracking
document.querySelectorAll('.whatsapp-float, .whatsapp-contact, .whatsapp-success-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        trackConversion('whatsapp_click', this.className.includes('float') ? 'floating_button' : 'inline_button');
    });
});

// Initialize datepicker if needed
function initDatePicker() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Add datepicker functionality if needed
        // In a real implementation, you might use a datepicker library
    }
}

// Initialize on window load
window.addEventListener('load', function() {
    // Set current year in footer (if needed)
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        if (el.textContent.includes('2023')) {
            el.textContent = el.textContent.replace('2023', currentYear);
        }
    });
    
    // Initialize any additional plugins
    initDatePicker();
});

// Handle browser resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reinitialize any responsive elements if needed
    }, 250);
});