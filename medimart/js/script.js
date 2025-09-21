// Product Data (20 items)
const products = [
    { id: 'stethoscope', name: 'Stethoscope', price: 20, category: 'diagnostics', img: 'https://images.pexels.com/photos/6770484/pexels-photo-6770484.jpeg', discount: true },
    { id: 'thermometer', name: 'Thermometer', price: 15, category: 'diagnostics', img: 'https://images.pexels.com/photos/209657/pexels-photo-209657.jpeg' },
    { id: 'wheelchair', name: 'Wheelchair', price: 150, category: 'mobility', img: 'https://images.pexels.com/photos/4164922/pexels-photo-4164922.jpeg' },
    { id: 'syringe', name: 'Syringe', price: 5, category: 'surgical', img: 'https://images.pexels.com/photos/208515/pexels-photo-208515.jpeg' },
    { id: 'ventilator', name: 'Ventilator', price: 500, category: 'surgical', img: 'https://images.pexels.com/photos/3926332/pexels-photo-3926332.jpeg' },
    { id: 'gloves', name: 'Medical Gloves', price: 10, category: 'surgical', img: 'https://images.pexels.com/photos/5991602/pexels-photo-5991602.jpeg' },
    { id: 'mask', name: 'Face Mask', price: 8, category: 'surgical', img: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg' },
    { id: 'blood_pressure_monitor', name: 'Blood Pressure Monitor', price: 50, category: 'diagnostics', img: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg', discount: true },
    { id: 'oxygen_concentrator', name: 'Oxygen Concentrator', price: 300, category: 'surgical', img: 'https://images.pexels.com/photos/3926332/pexels-photo-3926332.jpeg' },
    { id: 'crutches', name: 'Crutches', price: 40, category: 'mobility', img: 'https://images.pexels.com/photos/4164922/pexels-photo-4164922.jpeg' },
    { id: 'pulse_oximeter', name: 'Pulse Oximeter', price: 25, category: 'diagnostics', img: 'https://images.pexels.com/photos/209657/pexels-photo-209657.jpeg' },
    { id: 'surgical_scissors', name: 'Surgical Scissors', price: 15, category: 'surgical', img: 'https://images.pexels.com/photos/208515/pexels-photo-208515.jpeg' },
    { id: 'walker', name: 'Walker', price: 80, category: 'mobility', img: 'https://images.pexels.com/photos/4164922/pexels-photo-4164922.jpeg' },
    { id: 'defibrillator', name: 'Defibrillator', price: 450, category: 'surgical', img: 'https://images.pexels.com/photos/3926332/pexels-photo-3926332.jpeg' },
    { id: 'thermometer_infrared', name: 'Infrared Thermometer', price: 30, category: 'diagnostics', img: 'https://images.pexels.com/photos/209657/pexels-photo-209657.jpeg' },
    { id: 'surgical_gown', name: 'Surgical Gown', price: 12, category: 'surgical', img: 'https://images.pexels.com/photos/5991602/pexels-photo-5991602.jpeg' },
    { id: 'mobility_scooter', name: 'Mobility Scooter', price: 200, category: 'mobility', img: 'https://images.pexels.com/photos/4164922/pexels-photo-4164922.jpeg' },
    { id: 'ecg_machine', name: 'ECG Machine', price: 400, category: 'diagnostics', img: 'https://images.pexels.com/photos/3926332/pexels-photo-3926332.jpeg' },
    { id: 'bandages', name: 'Bandages', price: 6, category: 'surgical', img: 'https://images.pexels.com/photos/208515/pexels-photo-208515.jpeg' },
    { id: 'hospital_bed', name: 'Hospital Bed', price: 600, category: 'mobility', img: 'https://images.pexels.com/photos/4164922/pexels-photo-4164922.jpeg' }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(id, price) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`${product.name} added to cart`);
}
function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) badge.textContent = count;
}
function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(id);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartBadge();
    }
}
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

// Render Cart
function renderCart() {
    const cartContainer = document.querySelector('#cartItems');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            cartContainer.innerHTML += `
                <tr>
                    <td><img src="${item.img}" alt="${item.name}" style="width:50px"></td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td>
                        <button onclick="updateQuantity('${item.id}', -1)">-</button>
                        ${item.quantity}
                        <button onclick="updateQuantity('${item.id}', 1)">+</button>
                    </td>
                    <td><button onclick="removeFromCart('${item.id}')">Remove</button></td>
                </tr>`;
        });
        cartContainer.innerHTML += `<tr><td colspan="4">Total</td><td>$${total.toFixed(2)}</td></tr>`;
    }
}

// Product Filtering
function filterProducts(category, maxPrice, searchTerm = '') {
    const container = document.querySelector('#productGrid, #categoryProducts');
    if (container) {
        container.innerHTML = '';
        products
            .filter(p => (category === 'all' || p.category === category) && p.price <= maxPrice && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .forEach(p => {
                container.innerHTML += `
                    <div class="product-card" data-category="${p.category}" data-price="${p.price}">
                        <img src="${p.img}" alt="${p.name}" loading="lazy">
                        <h3>${p.name}</h3>
                        <p>$${p.price}${p.discount ? ' <span class="discount-badge">50% OFF</span>' : ''}</p>
                        <button onclick="addToCart('${p.id}', ${p.price})">Add to Cart</button>
                    </div>`;
            });
    }
}

// Flash Sales Timer
function startTimer() {
    const countdown = document.getElementById('countdown');
    if (countdown) {
        let timeLeft = 24 * 60 * 60; // 24 hours
        const interval = setInterval(() => {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            countdown.textContent = `${hours}h ${minutes}m ${seconds}s`;
            timeLeft--;
            if (timeLeft < 0) clearInterval(interval);
        }, 1000);
    }
}

// Scroll Animations
function handleScroll() {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add('visible');
        }
    });
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            const email = form.querySelector('input[type="email"]');
            if (email && !email.value.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email');
            }
        });
    }
}

// Contact Form Validation
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            const email = form.querySelector('#email').value;
            const message = form.querySelector('#message').value;
            if (!email.includes('@') || message.length < 10) {
                e.preventDefault();
                alert('Please enter a valid email and a message with at least 10 characters.');
            }
        });
    }
}

// Product Detail Page
function renderProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const product = products.find(p => p.id === id);
    const productInfo = document.getElementById('productInfo');
    if (product && productInfo) {
        productInfo.innerHTML = `
            <img src="${product.img}" alt="${product.name}" style="max-width:300px;">
            <h2>${product.name}</h2>
            <p>$${product.price}${product.discount ? ' <span class="discount-badge">50% OFF</span>' : ''}</p>
            <p>${product.category.charAt(0).toUpperCase() + product.category.slice(1)} Equipment</p>
        `;
        document.getElementById('addToCart').onclick = () => {
            const qty = parseInt(document.getElementById('quantity').textContent);
            for (let i = 0; i < qty; i++) addToCart(product.id, product.price);
        };
        const relatedContainer = document.getElementById('relatedProducts');
        if (relatedContainer) {
            const related = products.filter(p => p.category === product.category && p.id !== id).slice(0, 3);
            related.forEach(p => {
                relatedContainer.innerHTML += `
                    <div class="product-card" data-category="${p.category}" data-price="${p.price}">
                        <img src="${p.img}" alt="${p.name}">
                        <h3>${p.name}</h3>
                        <p>$${p.price}</p>
                        <button onclick="addToCart('${p.id}', ${p.price})">Add to Cart</button>
                    </div>`;
            });
        }
    }
}

// Quantity Selector for Product Detail
let detailQty = 1;
function updateDetailQuantity(change) {
    detailQty = Math.max(1, detailQty + change);
    const qtyElement = document.getElementById('quantity');
    if (qtyElement) qtyElement.textContent = detailQty;
}

// Lightbox for Gallery
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (lightbox && img) {
        img.src = src;
        img.alt = alt;
        lightbox.style.display = 'block';
    }
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.style.display = 'none';
}

// Team Bio Toggle for About
function toggleBio(id) {
    const bio = document.getElementById(id);
    if (bio) bio.style.display = bio.style.display === 'none' ? 'block' : 'none';
}

// Render Categories Page
function renderCategories() {
    const container = document.getElementById('categoryProducts');
    if (container) filterProducts('all', 500);
}

// Order Summary for Payment Page
function renderOrderSummary() {
    const summary = document.getElementById('orderSummary');
    if (summary && new URLSearchParams(window.location.search).get('order') === 'success') {
        summary.innerHTML = '<h3>Order Details</h3><p>Your order has been placed successfully!</p>';
    }
}

// Payment Simulation
function processPayment() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = checkoutForm.querySelector('#phone').value;
            if (!/^\d{10}$/.test(phone)) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'payment.html?order=success';
        });
    }
}

// Search Functionality
function handleSearch() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const category = document.querySelector('.sidebar a.active')?.dataset.filter || 'all';
            const maxPrice = document.getElementById('priceRange')?.value || 500;
            filterProducts(category, maxPrice, e.target.value);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    startTimer();
    validateForm('newsletter');
    validateForm('checkoutForm');
    validateContactForm();
    renderCart();
    renderProductDetail();
    renderCategories();
    renderOrderSummary();
    processPayment();
    handleSearch();
    window.addEventListener('scroll', handleScroll);
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            document.getElementById('priceValue').textContent = `0-${e.target.value}`;
            const category = document.querySelector('.sidebar a.active')?.dataset.filter || 'all';
            filterProducts(category, e.target.value, document.getElementById('search')?.value || '');
        });
    }
    document.querySelectorAll('.sidebar a[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const maxPrice = document.getElementById('priceRange')?.value || 500;
            filterProducts(link.dataset.filter, maxPrice, document.getElementById('search')?.value || '');
        });
    });
    document.getElementById('sortPrice')?.addEventListener('click', () => {
        products.sort((a, b) => a.price - b.price);
        const category = document.querySelector('.sidebar a.active')?.dataset.filter || 'all';
        const maxPrice = document.getElementById('priceRange')?.value || 500;
        filterProducts(category, maxPrice, document.getElementById('search')?.value || '');
    });
    document.querySelector('.menu-toggle')?.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
        document.querySelector('.sidebar').classList.toggle('active');
    });
    // Render products on home and categories pages
    if (document.getElementById('productGrid') || document.getElementById('categoryProducts')) {
        filterProducts('all', 500);
    }
});