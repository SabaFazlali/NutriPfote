// Cart Logic Module
export const initCart = () => {
    let cart = JSON.parse(localStorage.getItem('nutripfote_cart')) || [];
    
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartBtn = document.querySelector('.btn-icon[aria-label="Cart"]');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-amount');
    
    // Add badge to cart icon
    if (cartBtn) {
        cartBtn.style.position = 'relative';
        const badge = document.createElement('span');
        badge.className = 'cart-count-badge';
        badge.id = 'cart-badge';
        cartBtn.appendChild(badge);
        updateCartUI();
    }

    const openCart = () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('show');
        renderCartItems();
    };

    const closeCart = () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('show');
    };

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    function updateCartUI() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            const count = cart.reduce((acc, item) => acc + item.quantity, 0);
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
        localStorage.setItem('nutripfote_cart', JSON.stringify(cart));
    }

    function renderCartItems() {
        if (!cartItemsContainer) return;
        
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">Ihr Warenkorb ist leer.</p>';
            cartTotalElement.textContent = '€0.00';
            return;
        }

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.name}${item.variant ? ' (' + item.variant + ')' : ''}</span>
                    <span class="cart-item-price">€${item.price.toFixed(2)} x ${item.quantity}</span>
                </div>
                <button class="btn-remove" data-index="${index}" style="background:none; border:none; color:red; cursor:pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        cartTotalElement.textContent = `€${total.toFixed(2)}`;

        // Add event listeners to remove buttons
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.index;
                cart.splice(index, 1);
                updateCartUI();
                renderCartItems();
            });
        });
    }

    // Global function to add to cart
    window.addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id && item.variant === product.variant);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        openCart();
    };
};
