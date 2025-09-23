# MediShop Uganda

## Project Purpose
MediShop Uganda is an online store for medical equipment and supplies, designed to provide healthcare professionals and individuals in Uganda with high-quality products. Modeled after Jumia Uganda, the website features a responsive, interactive multi-page design with a medical theme.

## Structure
- **index.html**: Home page with a hero section and featured products.
- **products.html**: Displays all medical equipment with filters and search functionality.
- **product-details.html**: Shows detailed information for a selected product.
- **about.html**: Information about MediShop Uganda.
- **contact.html**: Contact form with validation.
- **faq.html**: Frequently asked questions.
- **gallery.html**: Visual gallery of all products.
- **css/styles.css**: Styles for responsive design and medical theme (blues, whites, greens).
- **js/scripts.js**: JavaScript for interactivity (menu toggle, search, filters, cart, form validation).
- **images/**: Placeholder images referenced via Unsplash URLs.

## Features
- **Responsive Design**: Mobile-friendly layout with a toggle menu for small screens.
- **Interactivity**: Search bar, category filters, cart system, and form validation.
- **Medical Equipment**: 20 items across categories (Diagnostic, Surgical, Monitoring, Therapeutic, Mobility, Furniture) with placeholder images.
- **Navigation**: Consistent header and footer across all pages.

## Deployment
The website is deployed on GitHub Pages. To deploy:
1. Create a GitHub repository.
2. Push the project files to the repository.
3. Enable GitHub Pages in the repository settings, selecting the `main` branch and `/ (root)` folder.
4. Access the live site at `https://<username>.github.io/<repository-name>`.

## Live URL
(Replace with actual URL after deployment)

## How to Run Locally
1. Clone the repository.
2. Open `index.html` in a web browser.
3. Ensure all files are in the correct folder structure (`css/`, `js/`, `images/`).

## Technologies Used
- HTML5: Semantic structure.
- CSS: Responsive styling with a medical theme.
- JavaScript: Interactivity and dynamic content.
- GitHub Pages: Hosting.

## Notes
- Placeholder images are used from Unsplash due to the inability to include local images.
- The cart system is basic and stores data in memory (resets on page refresh).
- The contact form uses client-side validation and displays alerts (no backend integration).
```

**Deployment Instructions for GitHub Pages**

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository named `MediShopUganda`.
   - Initialize it with a README if not already included.

2. **Push the Project Files**:
   - Clone the repository to your local machine: `git clone https://github.com/<username>/MediShopUganda.git`.
   - Copy the project files (`index.html`, `products.html`, etc., and folders `css/`, `js/`) into the repository folder.
   - Commit and push the files:
     ```bash
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```

3. **Enable GitHub Pages**:
   - Go to the repository on GitHub.
   - Navigate to **Settings** > **Pages**.
   - Under **Branch**, select `main` and the `/ (root)` folder, then click **Save**.
   - GitHub Pages will provide a URL (e.g., `https://<username>.github.io/MediShopUganda`).

4. **Verify Deployment**:
   - Visit the provided URL to ensure all pages, links, and scripts work.
   - Test on mobile and desktop devices to confirm responsiveness.

**Notes**:
- The website includes seven pages: Home, Products, Product Details, About, Contact, FAQ, and Gallery.
- The medical equipment list includes 20 items across six categories (Diagnostic, Surgical, Monitoring, Therapeutic, Mobility, Furniture) with placeholder images from Unsplash.
- Interactive features include a toggle menu, search bar, category filters, a basic cart system, and contact form validation.
- The design uses a medical theme with colors #005566 (dark teal), #00a1a7 (teal), and #f4f7fa (light blue-gray).
- The codebase is organized with separate folders for CSS and JavaScript, using relative paths and meaningful file names.
- The README.md provides a clear overview for setup and deployment.
- The site is validated for HTML/CSS and tested for responsiveness across devices.

Please let me know if you need further modifications, additional features, or assistance with deployment! You can access the live site after following the GitHub Pages setup, and the repository will contain all necessary files.