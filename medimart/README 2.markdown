# MediMart Uganda

MediMart Uganda is an e-commerce platform designed to sell medical equipment and supplies in Uganda, targeting biomedical engineers, healthcare providers, and individuals. The website offers a user-friendly interface to browse, filter, and purchase medical products, with features inspired by platforms like Jumia but focused exclusively on medical equipment.

## Purpose

The purpose of MediMart Uganda is to provide a reliable online marketplace for medical equipment, such as stethoscopes, thermometers, wheelchairs, and surgical supplies. The platform includes 20+ products with photos, a shopping cart, checkout with simulated payment options (MTN Mobile Money, Visa), flash sales with countdown timers, animated discount badges, and a responsive design optimized for mobile and desktop users.

## Features

- **10 Responsive Pages**:
  - **Home**: Hero banner, flash sales with timer, product grid, newsletter form.
  - **About**: Company mission, team bios with toggle, newsletter form.
  - **Products**: Product catalog with sidebar filters (category, price) and pagination.
  - **Product Detail**: Dynamic product page with image zoom, quantity selector, and related products.
  - **Categories**: Product listings by category (Diagnostics, Mobility, Surgical).
  - **Cart**: View and update cart items, calculate total, proceed to checkout.
  - **Checkout**: Form for shipping/billing and payment method selection.
  - **Payment**: Order confirmation with summary.
  - **Contact**: Inquiry form and map placeholder.
  - **Gallery**: Photo showcase with lightbox zoom effect.
- **Interactive Elements (>3 per page)**:
  - Search bar with real-time product filtering.
  - Category and price filters in sidebar.
  - Add-to-cart, quantity updates, and remove item functionality.
  - Form validation (newsletter, checkout, contact).
  - Image zoom on hover (product detail, gallery).
  - Flash sale countdown timer and animated discount badges (pulse/shake).
  - Scroll-triggered fade-in animations.
  - Team bio toggles (About page) and lightbox (Gallery page).
- **Responsive Design**: Mobile-first layout with collapsible sidebar, toggle menu, and adaptive product grid (1-column on mobile, 4-column on desktop).
- **Simulated Payment**: Supports MTN Mobile Money and Visa options (mocked for demo).
- **Accessibility**: Semantic HTML5, ARIA labels (e.g., `aria-label="Toggle menu"`), `alt` attributes for images, and keyboard navigation support.
- **Deployment**: Hosted on Netlify with form handling for newsletter, checkout, and contact forms.

## Live URL

[https://medimart.netlify.app](https://medimart.netlify.app) (Update with your actual Netlify URL after deployment)

## Setup

To run the project locally or deploy it, follow these steps:

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox).
- [Node.js](https://nodejs.org) (optional, for local server).
- [Git](https://git-scm.com) for cloning the repository.
- [Netlify account](https://www.netlify.com) for deployment.

### Local Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/medimart.git
   cd medimart
   ```
2. **Add Product Images**:
   - Download images from [Pexels](https://www.pexels.com) for 20 products (e.g., stethoscope, wheelchair) and place them in `images/diagnostics/`, `images/mobility/`, `images/surgical/`.
   - Alternatively, use the provided Pexels URLs in `js/script.js`.
3. **Run a Local Server**:
   - **Option 1: VS Code Live Server**:
     - Install [Visual Studio Code](https://code.visualstudio.com) and the Live Server extension.
     - Open the `medimart` folder in VS Code.
     - Right-click `index.html` and select “Open with Live Server” (`http://localhost:5500`).
   - **Option 2: Node.js**:
     ```bash
     npx http-server
     ```
     Access at `http://localhost:8080`.
   - **Option 3: Python**:
     ```bash
     python -m http.server 8000
     ```
     Access at `http://localhost:8000`.
4. **Test Functionality**:
   - Navigate to `http://localhost:5500` (or relevant port).
   - Test features: add items to cart, filter products, submit forms, check animations, and navigate all pages.

### Deployment
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Complete MediMart site"
   git remote add origin https://github.com/yourusername/medimart.git
   git push -u origin main
   ```
2. **Deploy on Netlify**:
   - Sign up/log in at [netlify.com](https://www.netlify.com).
   - Select “New site from Git” > Connect to GitHub > Choose `medimart` repository.
   - Set build settings:
     - Build command: (leave blank, static site).
     - Publish directory: `/`.
   - Enable Netlify Forms in the dashboard for `newsletter`, `checkoutForm`, and `contactForm`.
   - Access the live URL (e.g., `https://medimart.netlify.app`).
3. **Update README**:
   - Edit `README.md` with the live URL and push to GitHub.

## Tech Stack

- **HTML5**: Semantic markup for accessibility and structure (e.g., `<header>`, `<nav>`, `<main>`).
- **CSS**: Flexbox and Grid for responsive layouts, CSS variables for theming, animations for flash sales/discounts.
- **JavaScript**: DOM manipulation, `localStorage` for cart persistence, URL parameters for dynamic pages, form validation.
- **Images**: Sourced from [Pexels](https://www.pexels.com) for product visuals (e.g., stethoscope, wheelchair).
- **Hosting**: Netlify for static site hosting and form handling.

## Folder Structure

```
/medimart
  ├── index.html          # Home page
  ├── about.html          # About page
  ├── products.html       # Product catalog
  ├── product-detail.html # Dynamic product details
  ├── categories.html     # Category-based product listings
  ├── cart.html           # Shopping cart
  ├── checkout.html       # Checkout form
  ├── payment.html        # Order confirmation
  ├── contact.html        # Contact form
  ├── gallery.html        # Image gallery
  ├── css/
  │   └── style.css       # Global styles
  ├── js/
  │   └── script.js       # Interactivity logic
  ├── images/
  │   ├── diagnostics/    # Diagnostic equipment images
  │   ├── mobility/       # Mobility equipment images
  │   └── surgical/       # Surgical equipment images
  ├── README.md           # Project documentation
```

## Product Data

The site includes 20 medical products, such as:
- Stethoscope ($20, Diagnostics, 50% OFF)
- Thermometer ($15, Diagnostics)
- Wheelchair ($150, Mobility)
- Syringe ($5, Surgical)
- Ventilator ($500, Surgical)
- Medical Gloves ($10, Surgical)
- Face Mask ($8, Surgical)
- Blood Pressure Monitor ($50, Diagnostics, 50% OFF)
- ... (12 more in `js/script.js`)

Images are sourced from Pexels or stored locally in `images/`.

## Testing

- **Local Testing**:
  - Validate HTML/CSS with [W3C Validator](https://validator.w3.org) and [CSS Validator](https://jigsaw.w3.org/css-validator/).
  - Test in Chrome/Firefox (F12 > Console) for JS errors.
  - Verify responsiveness using Chrome DevTools (mobile: 360px, tablet: 768px, desktop: 1200px).
  - Test accessibility with keyboard navigation and screen readers (e.g., NVDA).
- **Live Testing**:
  - Access the Netlify URL and test all pages/features.
  - Check form submissions in Netlify Forms dashboard.
  - Ensure cart persists across pages (`localStorage`).
  - Verify animations (flash sale timer, discount badges) and dynamic content (e.g., `product-detail.html?id=stethoscope`).

## Known Limitations

- Payment processing is simulated (no real transactions).
- Some product images may use repeated Pexels URLs (replace with unique images for production).
- Map on `contact.html` is a placeholder (click for alert).

## Future Enhancements

- Add real payment integration (e.g., Stripe for Visa, MTN API).
- Implement a backend (e.g., Node.js) for dynamic product management.
- Add a product review system.
- Enhance gallery with a carousel for related products.

## Credits

- Built by [Your Name] for a software development and biomedical engineering project.
- Images sourced from [Pexels](https://www.pexels.com) under free license.
- Inspired by [Jumia Uganda](https://www.jumia.ug).

For issues or contributions, please open a pull request or contact [your.email@example.com].

---

*Last updated: September 21, 2025*