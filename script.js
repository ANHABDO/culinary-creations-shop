// JavaScript for interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeNavigation();
    initializeHeroButtons();
    initializeCategoryCards();
    initializeProductCards();
    initializeFooterInteractions();
    initializeToast();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const searchBtn = document.getElementById('searchBtn');
    const userBtn = document.getElementById('userBtn');
    const cartBtn = document.getElementById('cartBtn');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Search button
    searchBtn.addEventListener('click', function() {
        showToast('success', 'ميزة البحث ستكون متاحة قريباً!');
    });

    // User button
    userBtn.addEventListener('click', function() {
        showToast('info', 'صفحة تسجيل الدخول ستكون متاحة قريباً!');
    });

    // Cart button
    cartBtn.addEventListener('click', function() {
        showToast('info', 'سلة التسوق تحتوي على 3 عناصر');
    });

    // Navigation links smooth scroll
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Remove active class from all links
            navLinksAll.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            if (href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'hsla(30, 8%, 97%, 0.98)';
            navbar.style.boxShadow = 'var(--shadow-elegant)';
        } else {
            navbar.style.background = 'hsla(30, 8%, 97%, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Hero section buttons
function initializeHeroButtons() {
    const shopBtn = document.getElementById('shopBtn');
    const catalogBtn = document.getElementById('catalogBtn');

    shopBtn.addEventListener('click', function() {
        // Scroll to products section
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        showToast('success', 'مرحباً بك في مجموعة منتجاتنا!');
    });

    catalogBtn.addEventListener('click', function() {
        // Scroll to categories section
        document.getElementById('categories').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        showToast('info', 'استكشف فئات منتجاتنا');
    });
}

// Category cards interactions
function initializeCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showToast('info', `استكشاف فئة: ${getCategoryName(category)}`);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Hover effect for icons
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.category-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.category-icon');
            icon.style.transform = 'scale(1)';
        });
    });
}

// Product cards interactions
function initializeProductCards() {
    const wishlistBtns = document.querySelectorAll('.product-wishlist');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    // Wishlist functionality
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-product');
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#e11d48';
                showToast('success', 'تم إضافة المنتج لقائمة المفضلة!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
                showToast('info', 'تم إزالة المنتج من قائمة المفضلة');
            }
        });
    });

    // Add to cart functionality
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const productName = getProductName(productId);
            
            // Animation effect
            this.style.transform = 'scale(0.95)';
            this.textContent = 'تم الإضافة!';
            this.style.background = 'var(--accent)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> أضف للسلة';
                this.style.background = '';
            }, 1500);
            
            // Update cart count
            updateCartCount();
            showToast('success', `تم إضافة "${productName}" للسلة`);
        });
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
}

// Footer interactions
function initializeFooterInteractions() {
    const socialLinks = document.querySelectorAll('.social-link');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');

    // Social media links
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('data-social');
            showToast('info', `فتح ${getSocialPlatformName(platform)}`);
        });
    });

    // Newsletter subscription
    subscribeBtn.addEventListener('click', function() {
        const email = newsletterEmail.value.trim();
        
        if (!email) {
            showToast('error', 'يرجى إدخال بريدك الإلكتروني');
            return;
        }
        
        if (!isValidEmail(email)) {
            showToast('error', 'يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        // Simulate subscription
        this.textContent = 'جاري الاشتراك...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = 'تم الاشتراك!';
            this.style.background = 'var(--accent)';
            newsletterEmail.value = '';
            showToast('success', 'تم الاشتراك في النشرة البريدية بنجاح!');
            
            setTimeout(() => {
                this.textContent = 'اشتراك';
                this.style.background = '';
                this.disabled = false;
            }, 2000);
        }, 1500);
    });

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            showToast('info', `صفحة "${linkText}" ستكون متاحة قريباً`);
        });
    });
}

// Toast notification system
function initializeToast() {
    // Toast will be controlled by showToast function
}

function showToast(type, message) {
    const toast = document.getElementById('toast');
    const icon = toast.querySelector('.toast-icon');
    const messageEl = toast.querySelector('.toast-message');
    
    // Set icon based on type
    switch(type) {
        case 'success':
            icon.className = 'toast-icon fas fa-check-circle';
            icon.style.color = 'var(--accent)';
            break;
        case 'error':
            icon.className = 'toast-icon fas fa-exclamation-circle';
            icon.style.color = 'var(--destructive)';
            break;
        case 'info':
        default:
            icon.className = 'toast-icon fas fa-info-circle';
            icon.style.color = 'var(--primary)';
            break;
    }
    
    messageEl.textContent = message;
    toast.classList.add('show');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Utility functions
function getCategoryName(category) {
    const names = {
        'cookware': 'أواني الطهي',
        'knives': 'السكاكين والأدوات',
        'utensils': 'الأدوات'
    };
    return names[category] || category;
}

function getProductName(productId) {
    const names = {
        '1': 'مقلاة طباخ نحاسية متميزة',
        '2': 'طقم أدوات خشبية',
        '3': 'سكين طباخ احترافي'
    };
    return names[productId] || 'منتج';
}

function getSocialPlatformName(platform) {
    const names = {
        'facebook': 'فيسبوك',
        'instagram': 'انستغرام',
        'twitter': 'تويتر',
        'email': 'البريد الإلكتروني'
    };
    return names[platform] || platform;
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
    
    // Animation effect
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for anchor links
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

// Add loading animation to buttons
function addButtonLoadingAnimation() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });
}

// Initialize loading animations
addButtonLoadingAnimation();

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.category-card, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});