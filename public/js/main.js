// Vanilla JS Module
const fetchProducts = async () => {
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
                <p>Failed to load products. Please try again later.</p>
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
                <p>No products found at the moment.</p>
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

        // Choose icon based on animal type
        const animalIcon = product.animalType === 'dog' ? '🐶' : (product.animalType === 'cat' ? '🐱' : '🐾');

        card.innerHTML = `
            <div class="product-image-placeholder">
                <span class="animal-icon">${animalIcon}</span>
                <div class="product-badge">${product.animalType}</div>
            </div>
            <div class="product-content">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-tags">
                    ${product.allergyTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    ${product.ecoFriendly ? '<span class="tag eco">Eco-Friendly</span>' : ''}
                </div>
                <div class="product-footer">
                    <div class="price-container">
                        <span class="price-label">Starting at</span>
                        <span class="product-price">€${startingPrice}</span>
                    </div>
                    <button class="btn-add" aria-label="Add to cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        `;
        
        // Add interactive event listener to the button
        const btn = card.querySelector('.btn-add');
        btn.addEventListener('click', () => {
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
});
