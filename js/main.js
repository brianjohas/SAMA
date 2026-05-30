// Sample product data - In production, this would come from a database/API
const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        category: "men",
        price: 29.99,
        image: "https://via.placeholder.com/250x250?text=Men+T-Shirt",
        inStock: true,
        isNew: true
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        category: "men",
        price: 79.99,
        image: "https://via.placeholder.com/250x250?text=Denim+Jeans",
        inStock: true,
        isNew: true
    },
    {
        id: 3,
        name: "Women's Summer Dress",
        category: "women",
        price: 59.99,
        image: "https://via.placeholder.com/250x250?text=Summer+Dress",
        inStock: true,
        isNew: true
    },
    {
        id: 4,
        name: "Elegant Blouse",
        category: "women",
        price: 49.99,
        image: "https://via.placeholder.com/250x250?text=Elegant+Blouse",
        inStock: true,
        isNew: true
    },
    {
        id: 5,
        name: "Kids Adventure Shirt",
        category: "kids",
        price: 24.99,
        image: "https://via.placeholder.com/250x250?text=Kids+Shirt",
        inStock: true,
        isNew: true
    },
    {
        id: 6,
        name: "Kids Colorful Shorts",
        category: "kids",
        price: 19.99,
        image: "https://via.placeholder.com/250x250?text=Kids+Shorts",
        inStock: true,
        isNew: true
    },
    {
        id: 7,
        name: "Designer Leather Belt",
        category: "accessories",
        price: 39.99,
        image: "https://via.placeholder.com/250x250?text=Leather+Belt",
        inStock: true,
        isNew: false
    },
    {
        id: 8,
        name: "Stylish Sunglasses",
        category: "accessories",
        price: 89.99,
        image: "https://via.placeholder.com/250x250?text=Sunglasses",
        inStock: true,
        isNew: true
    },
    {
        id: 9,
        name: "Comfortable Sneakers",
        category: "footwear",
        price: 99.99,
        image: "https://via.placeholder.com/250x250?text=Sneakers",
        inStock: false,
        isNew: true
    },
    {
        id: 10,
        name: "Classic Loafers",
        category: "footwear",
        price: 84.99,
        image: "https://via.placeholder.com/250x250?text=Loafers",
        inStock: true,
        isNew: true
    }
];

// Initialize slider
let currentSlide = 1;

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[currentSlide - 1]) {
        slides[currentSlide - 1].classList.add('active');
    }
    if (dots[currentSlide - 1]) {
        dots[currentSlide - 1].classList.add('active');
    }
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function currentSlideFunc(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Auto-rotate slider every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize on page load
showSlide(currentSlide);

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Render new arrivals on homepage
    renderNewArrivals();
    
    // Render shop products
    renderShopProducts();
    
    // Render new arrivals page
    renderNewArrivalsPage();
});

// Render new arrivals on homepage
function renderNewArrivals() {
    const grid = document.getElementById('newArrivalsGrid');
    if (!grid) return;
    
    const newProducts = products.filter(p => p.isNew).slice(0, 10);
    grid.innerHTML = newProducts.map(product => createProductCard(product)).join('');
}

// Render shop products
function renderShopProducts() {
    const grid = document.getElementById('shopProductsGrid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add filter functionality
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

// Render new arrivals page
function renderNewArrivalsPage() {
    const grid = document.getElementById('newArrivalsPageGrid');
    if (!grid) return;
    
    const newProducts = products.filter(p => p.isNew).slice(0, 10);
    grid.innerHTML = newProducts.map(product => createProductCard(product)).join('');
    
    // Add category filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const filtered = category === 'all' 
                ? newProducts 
                : newProducts.filter(p => p.category === category);
            
            grid.innerHTML = filtered.map(product => createProductCard(product)).join('');
        });
    });
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badge ${!product.inStock ? 'out-of-stock' : ''}">
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" ${!product.inStock ? 'disabled' : ''}>Add to Cart</button>
                    <button class="btn btn-secondary">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Filter products by category
function filterProducts() {
    const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]:checked');
    const selectedCategories = Array.from(checkboxes).map(cb => cb.value);
    
    const filteredProducts = selectedCategories.length === 0 
        ? products 
        : products.filter(p => selectedCategories.includes(p.category));
    
    const grid = document.getElementById('shopProductsGrid');
    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Category tabs filtering on homepage
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            const filtered = category === 'all' 
                ? products.filter(p => p.isNew) 
                : products.filter(p => p.isNew && p.category === category);
            
            const grid = document.getElementById('newArrivalsGrid');
            if (grid) {
                grid.innerHTML = filtered.map(product => createProductCard(product)).join('');
            }
        });
    });
});

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
});

// Mobile menu close on outside click
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navbar && !navbar.contains(event.target) && navMenu) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
