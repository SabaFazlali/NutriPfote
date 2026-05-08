// Vanilla JS Module
import { initCart } from './cart.js';

const fetchProducts = async () => {
    const container = document.getElementById('products-container');
    if (!container) return;
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Could not fetch products:", error);
        document.getElementById('products-container').innerHTML = `
            <div class="error-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <p>Produkte konnten nicht geladen werden. Bitte versuchen Sie es später noch einmal.</p>
            </div>
        `;
    }
};

const renderProducts = (products) => {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Clear loading text

    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Zur Zeit wurden keine Produkte gefunden.</p>
            </div>
        `;
        return;
    }

    products.forEach((product, index) => {
        // Create product card element
        const card = document.createElement('article');
        card.classList.add('product-card');
        card.style.animationDelay = `${index * 0.1}s`;

        // Extracting smallest price as starting price
        const startingPrice = product.variants && product.variants.length > 0 
            ? Math.min(...product.variants.map(v => v.price)).toFixed(2)
            : 'N/A';

        // Logic for icon placeholder (only if no image exists)
        const animalLabel = product.animalType === 'dog' ? 'Hund' : (product.animalType === 'cat' ? 'Katze' : product.animalType);

        card.innerHTML = `
            <div class="product-image">
                ${product.image 
                    ? `<img src="${product.image}" alt="${product.name}" class="product-img">` 
                    : `<div class="product-image-placeholder">
                        <span class="animal-type-label">${animalLabel}</span>
                       </div>`
                }
                <div class="product-badge">${animalLabel}</div>
            </div>
            <div class="product-content">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-tags">
                    ${product.allergyTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    ${product.ecoFriendly ? '<span class="tag eco">Umweltfreundlich</span>' : ''}
                </div>
                <div class="product-footer">
                    <div class="price-container">
                        <span class="price-label">Ab</span>
                        <span class="product-price">€${startingPrice}</span>
                    </div>
                    <button class="btn-add" aria-label="Add to cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        `;
        
        // Make the whole card clickable to navigate to product details
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent navigation if the Add to Cart button was clicked
            if (!e.target.closest('.btn-add')) {
                window.location.href = `/product/${product.id}`;
            }
        });
        
        // Add interactive event listener to the button
        const btn = card.querySelector('.btn-add');
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop event from bubbling up to card
            
            // Add to cart logic
            const price = product.variants && product.variants.length > 0 ? product.variants[0].price : 0;
            window.addToCart({
                id: product.id,
                name: product.name,
                price: price
            });

            btn.classList.add('added');
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            setTimeout(() => {
                btn.classList.remove('added');
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
            }, 2000);
        });

        container.appendChild(card);
    });
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    fetchProducts();
    
    // Add simple scroll effect for header
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
            
            // Toggle icon
            const isOpened = mainNav.classList.contains('active');
            menuToggle.innerHTML = isOpened 
                ? '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                : '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && e.target !== menuToggle) {
                mainNav.classList.remove('active');
                document.body.classList.remove('overflow-hidden');
                menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });

        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                document.body.classList.remove('overflow-hidden');
                menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }
});
