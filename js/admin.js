// Admin Dashboard JavaScript

// Simple password for demo (in production, use proper authentication)
const ADMIN_PASSWORD = 'admin123';

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAdminAccess();
    loadProducts();
    setupEventListeners();
});

function checkAdminAccess() {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
        showLoginPrompt();
    }
}

function showLoginPrompt() {
    const password = prompt('Enter Admin Password:');
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminAuthenticated', 'true');
    } else {
        alert('Invalid password. Redirecting to home page.');
        window.location.href = 'index.html';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(item);
        });
    });

    // Modal handling
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('closeModal');
    const addProductBtn = document.getElementById('addProductBtn');
    
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => openProductModal());
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeProductModal());
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => closeProductModal());
    }

    // Form submission
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }

    // Price range filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('change', (e) => {
            document.getElementById('priceValue').textContent = e.target.value;
        });
    }
}

// Navigation handling
function handleNavigation(item) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
    });
    
    // Add active class to clicked item
    item.classList.add('active');

    // Get the section to show
    const section = item.getAttribute('data-section');
    
    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        products: 'Manage Products',
        categories: 'Manage Categories',
        orders: 'Recent Orders',
        settings: 'Settings'
    };
    
    document.getElementById('pageTitle').textContent = titles[section] || 'Dashboard';

    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    // Show selected section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.classList.add('active');
        
        // Reload data if needed
        if (section === 'products') {
            loadProducts();
        }
    }
}

// Product Management
let products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        category: "men",
        price: 29.99,
        inStock: true
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        category: "men",
        price: 79.99,
        inStock: true
    },
    {
        id: 3,
        name: "Women's Summer Dress",
        category: "women",
        price: 59.99,
        inStock: true
    },
    {
        id: 4,
        name: "Elegant Blouse",
        category: "women",
        price: 49.99,
        inStock: true
    },
    {
        id: 5,
        name: "Kids Adventure Shirt",
        category: "kids",
        price: 24.99,
        inStock: true
    },
    {
        id: 6,
        name: "Kids Colorful Shorts",
        category: "kids",
        price: 19.99,
        inStock: true
    },
    {
        id: 7,
        name: "Designer Leather Belt",
        category: "accessories",
        price: 39.99,
        inStock: true
    },
    {
        id: 8,
        name: "Stylish Sunglasses",
        category: "accessories",
        price: 89.99,
        inStock: true
    },
    {
        id: 9,
        name: "Comfortable Sneakers",
        category: "footwear",
        price: 99.99,
        inStock: false
    },
    {
        id: 10,
        name: "Classic Loafers",
        category: "footwear",
        price: 84.99,
        inStock: true
    }
];

function loadProducts() {
    const tableBody = document.getElementById('productsTable');
    if (!tableBody) return;

    tableBody.innerHTML = products.map(product => `
        <tr>
            <td>#${product.id}</td>
            <td>${product.name}</td>
            <td>${capitalizeCategory(product.category)}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <span class="status-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </td>
            <td>
                <div class="table-actions">
                    <button class="btn-icon" onclick="editProduct(${product.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete" onclick="deleteProduct(${product.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function capitalizeCategory(category) {
    const categories = {
        men: "Men's Clothing",
        women: "Women's Clothing",
        kids: "Kids' Clothing",
        accessories: "Accessories",
        footwear: "Footwear"
    };
    return categories[category] || category;
}

function openProductModal(productId = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');

    if (productId) {
        // Edit mode
        const product = products.find(p => p.id === productId);
        if (product) {
            document.getElementById('productName').value = product.name;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productStock').value = product.inStock;
        }
    } else {
        // Add mode
        form.reset();
    }

    modal.classList.add('active');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.getElementById('productForm').reset();
}

function handleProductSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const inStock = document.getElementById('productStock').value === 'true';

    // Generate new ID for new products
    const newId = Math.max(...products.map(p => p.id), 0) + 1;

    const newProduct = {
        id: newId,
        name: name,
        category: category,
        price: price,
        inStock: inStock
    };

    products.push(newProduct);
    alert('Product added successfully!');
    closeProductModal();
    loadProducts();
}

function editProduct(productId) {
    openProductModal(productId);
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        alert('Product deleted successfully!');
        loadProducts();
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.classList.remove('active');
    }
});

// Logout functionality
document.addEventListener('keydown', function(e) {
    // Press Ctrl+L to logout (optional)
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        sessionStorage.removeItem('adminAuthenticated');
        window.location.href = 'index.html';
    }
});
