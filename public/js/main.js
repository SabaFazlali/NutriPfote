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
                    <div class="action-buttons">
                        <button class="btn-compare" data-id="${product.id}" title="Zum Vergleich hinzufügen">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>
                        </button>
                        <button class="btn-add" aria-label="Add to cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Make the whole card clickable to navigate to product details
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent navigation if an action button was clicked
            if (!e.target.closest('.btn-add') && !e.target.closest('.btn-compare')) {
                window.location.href = `/product/${product.id}`;
            }
        });
        
        // Add interactive event listener to the add-to-cart button
        const btnAdd = card.querySelector('.btn-add');
        btnAdd.addEventListener('click', (e) => {
            e.stopPropagation();
            const price = product.variants && product.variants.length > 0 ? product.variants[0].price : 0;
            window.addToCart({
                id: product.id,
                name: product.name,
                price: price
            });
            btnAdd.classList.add('added');
            setTimeout(() => btnAdd.classList.remove('added'), 2000);
        });

        // Add interactive event listener to the compare button
        const btnCompare = card.querySelector('.btn-compare');
        btnCompare.addEventListener('click', (e) => {
            e.stopPropagation();
            let compareList = JSON.parse(localStorage.getItem('compare') || '[]');
            
            if (compareList.includes(product.id)) {
                compareList = compareList.filter(id => id !== product.id);
                btnCompare.classList.remove('active');
            } else {
                if (compareList.length >= 3) {
                    alert('Sie können maximal 3 Produkte vergleichen.');
                    return;
                }
                compareList.push(product.id);
                btnCompare.classList.add('active');
            }
            
            localStorage.setItem('compare', JSON.stringify(compareList));
        });

        // Check if already in compare list
        const compareList = JSON.parse(localStorage.getItem('compare') || '[]');
        if (compareList.includes(product.id)) {
            btnCompare.classList.add('active');
        }

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
        // Handle comparison button click to add IDs from localStorage
        const compareBtn = document.querySelector('a[href="/compare"]');
        if (compareBtn) {
            compareBtn.addEventListener('click', (e) => {
                const compareList = JSON.parse(localStorage.getItem('compare') || '[]');
                if (compareList.length > 0) {
                    e.preventDefault();
                    window.location.href = `/compare?ids=${compareList.join(',')}`;
                }
            });
        }
    }
});
