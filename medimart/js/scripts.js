// Sample list of 20 medical equipment items
const medicalEquipment = [
  { id: 1, name: "Stethoscope", category: "Diagnostic", price: 50, image: "https://images.unsplash.com/photo-1619192336272-a66a0aab3f2a", description: "High-quality stethoscope for accurate diagnostics." },
  { id: 2, name: "Blood Pressure Monitor", category: "Diagnostic", price: 40, image: "https://images.unsplash.com/photo-1607619052226-7e90d07c7b1c", description: "Digital blood pressure monitor for home use." },
  { id: 3, name: "Thermometer", category: "Diagnostic", price: 15, image: "https://images.unsplash.com/photo-1586278732029-7f7a4b3e6a50", description: "Infrared thermometer for quick temperature readings." },
  { id: 4, name: "Pulse Oximeter", category: "Diagnostic", price: 25, image: "https://images.unsplash.com/photo-1607619052226-7e90d07c7b1c", description: "Portable pulse oximeter for oxygen saturation." },
  { id: 5, name: "Surgical Scissors", category: "Surgical", price: 20, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", description: "Stainless steel surgical scissors for precision cutting." },
  { id: 6, name: "Forceps", category: "Surgical", price: 15, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", description: "Sterile forceps for surgical procedures." },
  { id: 7, name: "Scalpel", category: "Surgical", price: 10, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", description: "Disposable scalpel for surgical use." },
  { id: 8, name: "Suture Kit", category: "Surgical", price: 30, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", description: "Complete suture kit for wound closure." },
  { id: 9, name: "ECG Machine", category: "Monitoring", price: 500, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", description: "Portable ECG machine for heart monitoring." },
  { id: 10, name: "Patient Monitor", category: "Monitoring", price: 800, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", description: "Multi-parameter patient monitor for hospitals." },
  { id: 11, name: "Defibrillator", category: "Monitoring", price: 1200, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", description: "Automated external defibrillator for emergencies." },
  { id: 12, name: "Ventilator", category: "Monitoring", price: 5000, image: "https://images.unsplash.com/photo-1586500036706-41963ae3b5f6", description: "Medical ventilator for respiratory support." },
  { id: 13, name: "Nebulizer", category: "Therapeutic", price: 60, image: "https://images.unsplash.com/photo-1607619052226-7e90d07c7b1c", description: "Portable nebulizer for respiratory therapy." },
  { id: 14, name: "TENS Unit", category: "Therapeutic", price: 45, image: "https://images.unsplash.com/photo-1607619052226-7e90d07c7b1c", description: "Transcutaneous electrical nerve stimulation unit." },
  { id: 15, name: "Infusion Pump", category: "Therapeutic", price: 600, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", description: "Precise infusion pump for IV therapy." },
  { id: 16, name: "Syringe Pump", category: "Therapeutic", price: 400, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118", description: "Syringe pump for controlled medication delivery." },
  { id: 17, name: "Wheelchair", category: "Mobility", price: 150, image: "https://images.unsplash.com/photo-1592853625597-7d17e7d80c51", description: "Lightweight wheelchair for mobility support." },
  { id: 18, name: "Walker", category: "Mobility", price: 80, image: "https://images.unsplash.com/photo-1592853625597-7d17e7d80c51", description: "Adjustable walker for elderly patients." },
  { id: 19, name: "Crutches", category: "Mobility", price: 40, image: "https://images.unsplash.com/photo-1592853625597-7d17e7d80c51", description: "Ergonomic crutches for temporary mobility aid." },
  { id: 20, name: "Hospital Bed", category: "Furniture", price: 1000, image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f", description: "Adjustable hospital bed for patient comfort." }
];

// Cart array
let cart = [];

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Load cart count
  updateCartCount();

  // Initialize pages
  if (document.getElementById('featuredProducts')) {
    displayFeaturedProducts();
  }
  if (document.getElementById('productGrid')) {
    displayProducts(medicalEquipment);
    setupFilters();
  }
  if (document.getElementById('productDetails')) {
    displayProductDetails();
  }
  if (document.getElementById('galleryGrid')) {
    displayGallery();
  }
  if (document.getElementById('contactForm')) {
    setupContactForm();
  }
  setupSearch();
});

// Display featured products (Home page)
function displayFeaturedProducts() {
  const featuredProducts = medicalEquipment.slice(0, 4); // Show first 4 items
  const container = document.getElementById('featuredProducts');
  container.innerHTML = featuredProducts.map(item => `
    <div class="product-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <a href="product-details.html?id=${item.id}" class="btn">View Details</a>
      <button onclick="addToCart(${item.id})" class="btn">Add to Cart</button>
    </div>
  `).join('');
}

// Display all products (Products page)
function displayProducts(products) {
  const container = document.getElementById('productGrid');
  container.innerHTML = products.map(item => `
    <div class="product-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <a href="product-details.html?id=${item.id}" class="btn">View Details</a>
      <button onclick="addToCart(${item.id})" class="btn">Add to Cart</button>
    </div>
  `).join('');
}

// Setup product filters
function setupFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', () => {
    const category = categoryFilter.value;
    const filteredProducts = category === 'all' ? medicalEquipment : medicalEquipment.filter(item => item.category === category);
    displayProducts(filteredProducts);
  });
}

// Display product details
function displayProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const item = medicalEquipment.find(item => item.id === id);
  const container = document.getElementById('productDetails');
  if (item) {
    container.innerHTML = `
      <h2>${item.name}</h2>
      <img src="${item.image}" alt="${item.name}">
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <button onclick="addToCart(${item.id})" class="btn">Add to Cart</button>
    `;
  } else {
    container.innerHTML = '<p>Product not found.</p>';
  }
}

// Display gallery
function displayGallery() {
  const container = document.getElementById('galleryGrid');
  container.innerHTML = medicalEquipment.map(item => `
    <div class="gallery-item">
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}</p>
    </div>
  `).join('');
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = medicalEquipment.filter(item => item.name.toLowerCase().includes(query));
    if (document.getElementById('productGrid')) {
      displayProducts(filteredProducts);
    }
  });
}

// Setup contact form
function setupContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Add to cart
function addToCart(id) {
  const item = medicalEquipment.find(item => item.id === id);
  cart.push(item);
  updateCartCount();
  alert(`${item.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = cart.length;
}
