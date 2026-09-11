/**
 * LOTUS JEWELLERS — INTERACTIVE STOREFRONT ENGINE
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // --- 1. Product Catalog Data ---
  const products = [
    {
      id: 1,
      title: 'Aura Solitaire Diamond Ring',
      category: 'solitaire',
      price: 185000,
      comparePrice: 210000,
      specs: '1.20 ct Natural Diamond • 18K Yellow Gold • VVS1 / E Color',
      badge: 'Bestseller',
      imgPrimary: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      description: 'Handcrafted with an exceptional GIA-certified 1.20 carat round brilliant solitaire, held securely in our signature four-prong lotus basket.'
    },
    {
      id: 2,
      title: 'Maharani Polki Heritage Choker',
      category: 'bridal',
      price: 460000,
      comparePrice: null,
      specs: 'Uncut Diamonds • Natural Colombian Emeralds • 22K Hallmarked Gold',
      badge: 'Heritage Masterpiece',
      imgPrimary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1611591477858-a963212fb943?auto=format&fit=crop&w=800&q=80',
      description: 'An ode to royal Rajasthani court jewellery, featuring hand-strung natural emerald beads with open-set uncut syndicate polki diamonds.'
    },
    {
      id: 3,
      title: 'Celeste Diamond Drop Earrings',
      category: 'earrings',
      price: 125000,
      comparePrice: 140000,
      specs: '0.85 ct Diamonds • 18K Rose Gold • IGI Certified',
      badge: 'New Arrival',
      imgPrimary: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      description: 'Sculptural waterfall drops cascading with pavé and marquise diamonds, engineered for lightweight red-carpet movement.'
    },
    {
      id: 4,
      title: 'Venezia Tennis Bracelet',
      category: 'bracelets',
      price: 240000,
      comparePrice: 265000,
      specs: '3.50 ct Diamonds • Platinum & 18K White Gold',
      badge: 'Classic',
      imgPrimary: 'https://images.unsplash.com/photo-1611591478200-a612140bbd23?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      description: 'A timeless continuous line of perfectly matched D-F colour diamonds set in high-grade platinum with double-safety lock clasp.'
    },
    {
      id: 5,
      title: 'Noor Emerald & Diamond Ring',
      category: 'solitaire',
      price: 310000,
      comparePrice: null,
      specs: '2.40 ct Zambian Emerald • 0.60 ct Diamond Halo • 18K Gold',
      badge: 'High Jewellery',
      imgPrimary: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      description: 'A deep forest green vivid Zambian emerald framed by a stepped geometric diamond halo, crafted with vintage heirloom precision.'
    },
    {
      id: 6,
      title: 'Devi Bridal Polki Mathapatti',
      category: 'bridal',
      price: 285000,
      comparePrice: 320000,
      specs: 'Syndicate Polki • Basra Seed Pearls • 22K Gold',
      badge: 'Bridal Regalia',
      imgPrimary: 'https://images.unsplash.com/photo-1611591477858-a963212fb943?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      description: 'Traditional handcrafted bridal headpiece featuring delicate South Sea pearl fringes and floral uncut diamond motifs.'
    },
    {
      id: 7,
      title: 'Lumière Diamond Pendant Necklace',
      category: 'necklaces',
      price: 95000,
      comparePrice: 110000,
      specs: '0.65 ct Pear Diamond • 18K Yellow Gold Chain',
      badge: 'Everyday Luxury',
      imgPrimary: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      description: 'Effortless single teardrop pear cut diamond suspended on an adjustable micro-faceted diamond cut gold chain.'
    },
    {
      id: 8,
      title: 'Royal Kada Gold & Ruby Bangle',
      category: 'bracelets',
      price: 390000,
      comparePrice: null,
      specs: 'Burmese Pigeon Blood Rubies • 22K Solid Gold • 42 Grams',
      badge: 'Artisan Crafted',
      imgPrimary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      imgSecondary: 'https://images.unsplash.com/photo-1611591478200-a612140bbd23?auto=format&fit=crop&w=800&q=80',
      description: 'Intricate nakashi hand carving on solid 22 karat gold, punctuated with unheated natural Burmese rubies.'
    }
  ];

  // State
  let cart = [];
  let wishlist = new Set();
  let currentCategory = 'all';

  // --- Helper: Format Currency ---
  function formatMoney(amount) {
    return '₹ ' + amount.toLocaleString('en-IN');
  }

  // --- 2. Render Product Grid ---
  function renderProducts(categoryFilter = 'all') {
    const grid = document.getElementById('FeaturedProductGrid');
    if (!grid) return;

    const filtered = categoryFilter === 'all' 
      ? products 
      : products.filter(p => p.category === categoryFilter);

    let html = '';
    filtered.forEach(product => {
      const isWishlisted = wishlist.has(product.id);
      html += `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-media">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <button type="button" class="product-wishlist-btn ${isWishlisted ? 'is-active' : ''}" data-action="toggle-wishlist" data-id="${product.id}" aria-label="Add to wishlist">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <img src="${product.imgPrimary}" alt="${product.title}" class="product-img product-img-primary" loading="lazy">
            <img src="${product.imgSecondary}" alt="${product.title}" class="product-img product-img-secondary" loading="lazy">
            <div class="product-quick-view">
              <button type="button" class="quick-view-btn" data-action="quick-view" data-id="${product.id}">Quick View</button>
            </div>
          </div>
          <div class="product-info">
            <div class="product-metal-swatches">
              <span class="metal-dot yg" title="18K Yellow Gold"></span>
              <span class="metal-dot rg" title="18K Rose Gold"></span>
              <span class="metal-dot wg" title="18K White Gold / Platinum"></span>
            </div>
            <h3 class="product-title"><a href="#" data-action="quick-view" data-id="${product.id}">${product.title}</a></h3>
            <p class="product-specs">${product.specs}</p>
            <div class="product-price">
              <span>${formatMoney(product.price)}</span>
              ${product.comparePrice ? `<span class="product-price-compare">${formatMoney(product.comparePrice)}</span>` : ''}
            </div>
          </div>
        </article>
      `;
    });

    grid.innerHTML = html;
  }

  // --- 3. Category Tab Filtering ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentCategory = btn.getAttribute('data-tab');
      renderProducts(currentCategory);
    });
  });

  // --- 4. Sticky Header State on Scroll ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // --- 5. Cart Drawer Management ---
  const cartDrawer = document.getElementById('CartDrawer');
  const drawerOverlay = document.getElementById('DrawerOverlay');
  const cartOpenBtns = document.querySelectorAll('[data-action="open-cart"]');
  const cartCloseBtns = document.querySelectorAll('[data-action="close-cart"]');
  const cartBadge = document.getElementById('HeaderCartBadge');
  const cartItemsList = document.getElementById('CartDrawerItems');
  const cartSubtotalElem = document.getElementById('CartDrawerSubtotal');
  const freeShippingBar = document.getElementById('FreeShippingMeter');

  function openCartDrawer() {
    if (cartDrawer) cartDrawer.classList.add('is-open');
    if (drawerOverlay) drawerOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove('is-open');
    if (drawerOverlay) drawerOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  cartOpenBtns.forEach(b => b.addEventListener('click', openCartDrawer));
  cartCloseBtns.forEach(b => b.addEventListener('click', closeCartDrawer));
  if (drawerOverlay) drawerOverlay.addEventListener('click', () => {
    closeCartDrawer();
    closeMobileMenu();
    closeQuickView();
  });

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartSubtotalElem) cartSubtotalElem.textContent = formatMoney(subtotal);

    // Free shipping threshold: 50,000
    if (freeShippingBar) {
      const percent = Math.min(100, (subtotal / 50000) * 100);
      freeShippingBar.style.width = percent + '%';
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--color-muted);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="margin: 0 auto 1rem auto; color: var(--color-gold);">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p style="font-family: var(--font-serif); font-size: 18px; color: var(--color-primary-dark); margin-bottom: 0.5rem;">Your Shopping Bag is Empty</p>
          <p style="font-size: 13px;">Discover our handcrafted diamond and polki collections.</p>
        </div>
      `;
      return;
    }

    let itemsHtml = '';
    cart.forEach(item => {
      itemsHtml += `
        <div class="cart-item-row" style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--color-border-light);">
          <img src="${item.image}" alt="${item.title}" style="width: 72px; height: 96px; object-fit: cover; border-radius: 3px;">
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h4 style="font-family: var(--font-serif); font-size: 15px; color: var(--color-primary-dark); line-height: 1.3;">${item.title}</h4>
              <p style="font-size: 11.5px; color: var(--color-muted);">${item.metal || '18K Yellow Gold'}</p>
              <div style="font-weight: 600; font-size: 13.5px; margin-top: 4px;">${formatMoney(item.price)}</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
              <div style="display: flex; align-items: center; border: 1px solid var(--color-border); border-radius: 2px;">
                <button type="button" style="padding: 2px 8px; border: none; background: none; cursor: pointer;" data-action="cart-minus" data-id="${item.id}">−</button>
                <span style="padding: 0 6px; font-size: 12px; font-weight: 600;">${item.quantity}</span>
                <button type="button" style="padding: 2px 8px; border: none; background: none; cursor: pointer;" data-action="cart-plus" data-id="${item.id}">+</button>
              </div>
              <button type="button" style="background: none; border: none; font-size: 11.5px; color: var(--color-muted); text-decoration: underline; cursor: pointer;" data-action="cart-remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    cartItemsList.innerHTML = itemsHtml;
  }

  function addToCart(productId, metal = '18K Yellow Gold') {
    const product = products.find(p => p.id === parseInt(productId, 10));
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === product.id && item.metal === metal);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.imgPrimary,
        metal: metal,
        quantity: 1
      });
    }

    updateCartUI();
    openCartDrawer();
  }

  // --- 6. Quick View Modal ---
  const modalOverlay = document.getElementById('QuickViewModal');
  const modalCloseBtn = document.getElementById('ModalCloseBtn');
  const modalBody = document.getElementById('QuickViewBody');

  function openQuickView(productId) {
    const p = products.find(prod => prod.id === parseInt(productId, 10));
    if (!p || !modalBody) return;

    modalBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 2.5rem; padding: 2rem;">
        <div>
          <img src="${p.imgPrimary}" alt="${p.title}" style="width: 100%; aspect-ratio: 3/4; object-fit: cover; border-radius: 4px; box-shadow: var(--shadow-subtle);">
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            ${p.badge ? `<span style="font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-gold-dark);">${p.badge}</span>` : ''}
            <h2 style="font-size: 26px; margin: 0.35rem 0 0.5rem 0;">${p.title}</h2>
            <div style="font-size: 20px; font-weight: 600; color: var(--color-primary-dark); margin-bottom: 0.75rem;">
              ${formatMoney(p.price)}
              ${p.comparePrice ? `<span style="font-size: 14px; color: var(--color-subtle); text-decoration: line-through; margin-left: 8px;">${formatMoney(p.comparePrice)}</span>` : ''}
            </div>
            <p style="font-size: 13.5px; color: var(--color-muted); line-height: 1.6; margin-bottom: 1.25rem;">${p.description}</p>
            
            <div style="padding: 0.85rem; background: var(--color-bg-surface-subtle); border-radius: 4px; border: 1px solid var(--color-border); font-size: 12px; margin-bottom: 1.5rem;">
              <strong>Hallmark & Certification:</strong><br>
              ${p.specs}
            </div>

            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Select Metal Purity:</label>
              <select id="ModalMetalSelect" style="width: 100%; padding: 0.6rem; border: 1px solid var(--color-border); border-radius: 3px; font-size: 13px;">
                <option value="18K Yellow Gold">18K Yellow Gold (Standard)</option>
                <option value="18K Rose Gold">18K Rose Gold</option>
                <option value="18K White Gold / Platinum">18K White Gold / Platinum</option>
              </select>
            </div>
          </div>

          <button type="button" class="btn btn-gold" id="ModalAddToCartBtn" data-id="${p.id}" style="width: 100%; padding: 1rem;">
            Add to Shopping Bag
          </button>
        </div>
      </div>
    `;

    if (modalOverlay) modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const addBtn = document.getElementById('ModalAddToCartBtn');
    if (addBtn) {
      addBtn.addEventListener('click', function() {
        const metalSelect = document.getElementById('ModalMetalSelect');
        const metalVal = metalSelect ? metalSelect.value : '18K Yellow Gold';
        closeQuickView();
        addToCart(p.id, metalVal);
      });
    }
  }

  function closeQuickView() {
    if (modalOverlay) modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);

  // --- 7. Mobile Menu Drawer ---
  const mobileMenuDrawer = document.getElementById('MobileMenuDrawer');
  const mobileMenuOpenBtn = document.getElementById('MobileMenuOpenBtn');
  const mobileMenuCloseBtn = document.getElementById('MobileMenuCloseBtn');

  function openMobileMenu() {
    if (mobileMenuDrawer) mobileMenuDrawer.classList.add('is-open');
    if (drawerOverlay) drawerOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer) mobileMenuDrawer.classList.remove('is-open');
    if (drawerOverlay) drawerOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (mobileMenuOpenBtn) mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

  // --- 8. Global Event Delegation ---
  document.addEventListener('click', function(e) {
    // Quick View
    const qvBtn = e.target.closest('[data-action="quick-view"]');
    if (qvBtn) {
      e.preventDefault();
      const id = qvBtn.getAttribute('data-id');
      openQuickView(id);
      return;
    }

    // Toggle Wishlist
    const wlBtn = e.target.closest('[data-action="toggle-wishlist"]');
    if (wlBtn) {
      e.preventDefault();
      const id = parseInt(wlBtn.getAttribute('data-id'), 10);
      if (wishlist.has(id)) {
        wishlist.delete(id);
        wlBtn.classList.remove('is-active');
      } else {
        wishlist.add(id);
        wlBtn.classList.add('is-active');
      }
      const wlBadge = document.getElementById('HeaderWishlistBadge');
      if (wlBadge) wlBadge.textContent = wishlist.size;
      return;
    }

    // Cart Quantity Increment
    const plusBtn = e.target.closest('[data-action="cart-plus"]');
    if (plusBtn) {
      const id = parseInt(plusBtn.getAttribute('data-id'), 10);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        updateCartUI();
      }
      return;
    }

    // Cart Quantity Decrement
    const minusBtn = e.target.closest('[data-action="cart-minus"]');
    if (minusBtn) {
      const id = parseInt(minusBtn.getAttribute('data-id'), 10);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
      }
      return;
    }

    // Cart Remove
    const removeBtn = e.target.closest('[data-action="cart-remove"]');
    if (removeBtn) {
      const id = parseInt(removeBtn.getAttribute('data-id'), 10);
      cart = cart.filter(i => i.id !== id);
      updateCartUI();
      return;
    }
  });

  // Initial setup
  renderProducts('all');
  updateCartUI();
});
