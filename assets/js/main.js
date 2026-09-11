/**
 * LOTUS JEWELLERS — LUXURY COMMERCE & INTERACTIVE ENGINE
 * Architecture inspired by Alukas & Co
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // --- 1. Master Product Database ---
  const catalog = {
    // Trendy Collection (Matching Reference Screenshot)
    trendy: [
      {
        id: 501,
        title: 'Circle of Light Heart Earrings',
        category: 'Earrings',
        price: 12900,
        comparePrice: 15900,
        specs: '18K Rose Gold • 0.35 ct Lab-Grown Diamonds • Micro Pavé',
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
        badge: '-15% OFF',
        badgeType: 'discount'
      },
      {
        id: 502,
        title: 'Blue Stripes & Stone Classic Earrings',
        category: 'Earrings',
        price: 24900,
        comparePrice: null,
        specs: '22K Yellow Gold • Natural Sapphire Accents',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        badge: 'HOT',
        badgeType: 'hot'
      },
      {
        id: 503,
        title: 'Birds of Paradise Solitaire Pendant',
        category: 'Necklaces',
        price: 15900,
        comparePrice: 19900,
        specs: '0.50 ct GIA Diamond • 18K White Gold Chain',
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
        badge: '-20% OFF',
        badgeType: 'discount'
      },
      {
        id: 504,
        title: 'Kalveena Diamond Twig Ring',
        category: 'Rings',
        price: 39000,
        comparePrice: 59000,
        specs: '0.42 ct Trio Diamond • 18K Rose Gold Band',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
        badge: 'NEW',
        badgeType: 'new'
      }
    ],

    // Autumn / Bridal Collection
    autumn: [
      {
        id: 601,
        title: 'Aura Solitaire Diamond Ring',
        category: 'Rings',
        price: 185000,
        comparePrice: 210000,
        specs: '1.20 ct GIA Diamond • 18K Yellow Gold',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
        badge: '-15% OFF',
        badgeType: 'discount'
      },
      {
        id: 602,
        title: 'Venezia Diamond Tennis Bangle',
        category: 'Bangles',
        price: 340000,
        comparePrice: 375000,
        specs: '4.20 ct Natural Diamonds • 18K White Gold',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        badge: 'HOT',
        badgeType: 'hot'
      },
      {
        id: 603,
        title: 'Rajputana 22K Solid Gold Kada',
        category: 'Bangles',
        price: 215000,
        comparePrice: null,
        specs: '22K Hallmarked Gold • 32 Grams Hand-Carved',
        image: 'https://images.unsplash.com/photo-1611591478200-a612140bbd23?auto=format&fit=crop&w=600&q=80',
        badge: 'BESTSELLER',
        badgeType: 'new'
      },
      {
        id: 604,
        title: 'Maharani Polki Emerald Choker',
        category: 'Necklaces',
        price: 520000,
        comparePrice: null,
        specs: 'Uncut Diamonds • Zambian Emeralds • 22K Gold',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        badge: 'EXCLUSIVE',
        badgeType: 'hot'
      }
    ],

    // Rings
    rings: [
      {
        id: 101,
        title: 'Aura Solitaire Diamond Ring',
        category: 'Rings',
        price: 185000,
        comparePrice: 210000,
        specs: '1.20 ct GIA Diamond • 18K Yellow Gold',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
        badge: '-15% OFF',
        badgeType: 'discount'
      },
      {
        id: 102,
        title: 'Celestial Halo Diamond Ring',
        category: 'Rings',
        price: 145000,
        comparePrice: null,
        specs: '0.85 ct Pavé Halo • 18K Rose Gold',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
        badge: 'HOT',
        badgeType: 'hot'
      },
      {
        id: 103,
        title: 'Eternal Classic 22K Gold Ring',
        category: 'Rings',
        price: 38000,
        comparePrice: 42000,
        specs: '22K BIS Hallmarked Solid Gold • 6.2g',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
        badge: 'NEW',
        badgeType: 'new'
      },
      {
        id: 104,
        title: 'Elysian Stackable Diamond Band',
        category: 'Rings',
        price: 52000,
        comparePrice: null,
        specs: '0.35 ct Diamonds • 18K White Gold',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
        badge: 'TRENDING',
        badgeType: 'new'
      },
      {
        id: 105,
        title: 'Noor Emerald & Solitaire Ring',
        category: 'Rings',
        price: 295000,
        comparePrice: 320000,
        specs: '2.10 ct Zambian Emerald • 18K Gold',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
        badge: '-10% OFF',
        badgeType: 'discount'
      },
      {
        id: 106,
        title: 'Verona Platinum Wedding Band',
        category: 'Rings',
        price: 88000,
        comparePrice: null,
        specs: '950 Pure Platinum • Comfort Fit',
        image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
        badge: 'CLASSIC',
        badgeType: 'hot'
      }
    ],

    // Bangles
    bangles: [
      {
        id: 201,
        title: 'Rajputana 22K Solid Gold Kada',
        category: 'Bangles',
        price: 215000,
        comparePrice: null,
        specs: '22K Hallmarked Gold • 32 Grams Hand-Carved',
        image: 'https://images.unsplash.com/photo-1611591478200-a612140bbd23?auto=format&fit=crop&w=600&q=80',
        badge: 'ROYAL KADA',
        badgeType: 'hot'
      },
      {
        id: 202,
        title: 'Venezia Diamond Tennis Bangle',
        category: 'Bangles',
        price: 340000,
        comparePrice: 375000,
        specs: '4.20 ct Natural Diamonds • 18K White Gold',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        badge: '-10% OFF',
        badgeType: 'discount'
      },
      {
        id: 203,
        title: 'Devi Bridal Polki Bangle Set (Pair)',
        category: 'Bangles',
        price: 490000,
        comparePrice: null,
        specs: 'Uncut Syndicate Polki • 22K Gold • Ruby Accents',
        image: 'https://images.unsplash.com/photo-1611591478200-a612140bbd23?auto=format&fit=crop&w=600&q=80',
        badge: 'BRIDAL SET',
        badgeType: 'hot'
      },
      {
        id: 204,
        title: 'Lina Sleek Daily Wear Gold Bangle',
        category: 'Bangles',
        price: 68000,
        comparePrice: 75000,
        specs: '18K Yellow Gold • Flexible Spring Hinge',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        badge: 'NEW',
        badgeType: 'new'
      }
    ],

    // Earrings
    earrings: [
      {
        id: 301,
        title: 'Circle of Light Heart Earrings',
        category: 'Earrings',
        price: 12900,
        comparePrice: 15900,
        specs: '18K Rose Gold • 0.35 ct Diamonds',
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
        badge: '-15% OFF',
        badgeType: 'discount'
      },
      {
        id: 302,
        title: 'Blue Stripes & Stone Classic Earrings',
        category: 'Earrings',
        price: 24900,
        comparePrice: null,
        specs: '22K Gold • Natural Blue Sapphire',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        badge: 'HOT',
        badgeType: 'hot'
      },
      {
        id: 303,
        title: 'Celeste Diamond Waterfall Drops',
        category: 'Earrings',
        price: 125000,
        comparePrice: 140000,
        specs: '0.90 ct Diamonds • 18K Rose Gold',
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
        badge: 'NEW',
        badgeType: 'new'
      },
      {
        id: 304,
        title: 'Solitaire Diamond Studs (1.00 ct TW)',
        category: 'Earrings',
        price: 165000,
        comparePrice: 180000,
        specs: '1.00 ct Total • 18K White Gold • Screw Back',
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
        badge: 'BESTSELLER',
        badgeType: 'hot'
      }
    ],

    // Necklaces
    necklaces: [
      {
        id: 401,
        title: 'Birds of Paradise Solitaire Pendant',
        category: 'Necklaces',
        price: 15900,
        comparePrice: 19900,
        specs: '0.50 ct GIA Diamond • 18K White Gold',
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
        badge: '-20% OFF',
        badgeType: 'discount'
      },
      {
        id: 402,
        title: 'Maharani Polki & Emerald Choker',
        category: 'Necklaces',
        price: 520000,
        comparePrice: null,
        specs: 'Uncut Diamonds • Zambian Emeralds • 22K Gold',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        badge: 'ROYAL POLKI',
        badgeType: 'hot'
      },
      {
        id: 403,
        title: 'Lumière Diamond Teardrop Pendant',
        category: 'Necklaces',
        price: 95000,
        comparePrice: 110000,
        specs: '0.65 ct Pear Cut • 18K Yellow Gold Chain',
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
        badge: 'EVERYDAY',
        badgeType: 'new'
      },
      {
        id: 404,
        title: 'Aura Diamond Rivière Necklace',
        category: 'Necklaces',
        price: 680000,
        comparePrice: null,
        specs: '7.50 ct Diamonds • Platinum & 18K White Gold',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        badge: 'HIGH JEWELLERY',
        badgeType: 'hot'
      }
    ]
  };

  // State
  let cart = [];
  let wishlist = new Set();

  function formatMoney(num) {
    return '₹ ' + num.toLocaleString('en-IN');
  }

  // Toast Notification
  function showToast(msg) {
    let toast = document.getElementById('GlobalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'GlobalToast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-active');
    setTimeout(() => toast.classList.remove('is-active'), 2800);
  }

  // --- 2. Render Alukas Style Product Card ---
  function createProductCardHTML(p) {
    const isWl = wishlist.has(p.id);
    let badgeClass = 'badge-discount';
    if (p.badgeType === 'hot') badgeClass = 'badge-hot';
    if (p.badgeType === 'new') badgeClass = 'badge-new';
    if (p.badgeType === 'sale') badgeClass = 'badge-sale';

    return `
      <div class="product-card-alukas" data-product-id="${p.id}">
        <div class="product-card-media">
          ${p.badge ? `<span class="product-badge-pill ${badgeClass}">${p.badge}</span>` : ''}
          
          <button type="button" class="product-wishlist-btn ${isWl ? 'is-active' : ''}" data-action="toggle-wishlist" data-id="${p.id}" aria-label="Save to Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <img src="${p.image}" alt="${p.title}" class="product-card-img" loading="lazy" width="400" height="400">
          
          <!-- Hover Quick Action Bar -->
          <div class="product-card-actions">
            <button type="button" class="card-action-btn" data-action="quick-view" data-id="${p.id}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Quick View
            </button>
            <button type="button" class="card-action-btn" data-action="quick-add" data-id="${p.id}" style="background-color: var(--color-primary); color: #FFF;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
              Add To Bag
            </button>
          </div>
        </div>

        <div class="product-card-meta">
          <span class="product-card-cat">${p.category}</span>
          <h3 class="product-card-title">
            <a href="#" data-action="quick-view" data-id="${p.id}">${p.title}</a>
          </h3>
          <div class="product-card-prices">
            <span class="product-price-current">${formatMoney(p.price)}</span>
            ${p.comparePrice ? `<span class="product-price-old">${formatMoney(p.comparePrice)}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // --- 3. Render Initial Product Grids ---
  // A. Trendy Collection (4 Items)
  const trendyGrid = document.getElementById('TrendyGrid');
  if (trendyGrid) {
    trendyGrid.innerHTML = catalog.trendy.map(createProductCardHTML).join('');
  }

  // B. Autumn Collection (4 Items)
  const autumnGrid = document.getElementById('AutumnGrid');
  if (autumnGrid) {
    autumnGrid.innerHTML = catalog.autumn.map(createProductCardHTML).join('');
  }

  // C. Rings Section
  const ringsGrid = document.getElementById('FeaturedRingsGrid');
  if (ringsGrid) {
    ringsGrid.innerHTML = catalog.rings.map(createProductCardHTML).join('');
  }

  // D. Bangles Section
  const banglesGrid = document.getElementById('FeaturedBanglesGrid');
  if (banglesGrid) {
    banglesGrid.innerHTML = catalog.bangles.map(createProductCardHTML).join('');
  }

  // E. Best Sellers (Interactive Tabs)
  const bestSellersGrid = document.getElementById('BestSellersGrid');
  function renderBestSellers(tab = 'rings') {
    if (!bestSellersGrid) return;
    const items = catalog[tab] || catalog.rings;
    bestSellersGrid.innerHTML = items.map(createProductCardHTML).join('');
  }
  renderBestSellers('rings');

  // Tab switcher
  const bsTabs = document.querySelectorAll('.bs-tab-btn');
  bsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      bsTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const cat = tab.getAttribute('data-category');
      renderBestSellers(cat);
    });
  });

  // --- 4. Cart Drawer Management ---
  const cartDrawer = document.getElementById('CartDrawer');
  const drawerBackdrop = document.getElementById('DrawerBackdrop');
  const cartOpenBtns = document.querySelectorAll('[data-action="open-cart"]');
  const cartCloseBtns = document.querySelectorAll('[data-action="close-cart"]');
  const cartBadge = document.getElementById('HeaderCartBadge');
  const cartMiniVal = document.getElementById('HeaderCartMiniVal');
  const cartItemsContainer = document.getElementById('CartDrawerItems');
  const cartSubtotal = document.getElementById('CartDrawerSubtotal');
  const shippingMeter = document.getElementById('FreeShippingMeter');

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeAllDrawers() {
    if (cartDrawer) cartDrawer.classList.remove('is-open');
    const mobileMenu = document.getElementById('MobileMenuDrawer');
    if (mobileMenu) mobileMenu.classList.remove('is-open');
    const searchModal = document.getElementById('SearchModal');
    if (searchModal) searchModal.classList.remove('is-open');
    const quickView = document.getElementById('QuickViewModal');
    if (quickView) quickView.classList.remove('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  cartOpenBtns.forEach(btn => btn.addEventListener('click', openCart));
  cartCloseBtns.forEach(btn => btn.addEventListener('click', closeAllDrawers));
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeAllDrawers);

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartMiniVal) cartMiniVal.textContent = formatMoney(totalAmount);
    if (cartSubtotal) cartSubtotal.textContent = formatMoney(totalAmount);

    if (shippingMeter) {
      const pct = Math.min(100, (totalAmount / 50000) * 100);
      shippingMeter.style.width = pct + '%';
    }

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="margin: 0 auto 1rem auto; color: var(--color-gold);">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p style="font-family: var(--font-display); font-size: 20px; color: var(--color-text-primary); margin-bottom: 0.4rem;">Your Shopping Bag is Empty</p>
          <p style="font-size: 13px;">Explore our rings, bangles, and bridal collections.</p>
        </div>
      `;
      return;
    }

    let html = '';
    cart.forEach(item => {
      html += `
        <div style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--color-border-subtle);">
          <img src="${item.image}" alt="${item.title}" style="width: 72px; height: 72px; object-fit: contain; background: var(--color-bg-card); border-radius: 2px;">
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h4 style="font-family: var(--font-sans); font-size: 13px; font-weight: 500; color: var(--color-text-primary); line-height: 1.3;">${item.title}</h4>
              <div style="font-weight: 600; font-size: 13px; color: var(--color-primary-dark); margin-top: 3px;">${formatMoney(item.price)}</div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
              <div style="display: flex; align-items: center; border: 1px solid var(--color-border); border-radius: 2px;">
                <button type="button" style="padding: 2px 7px; border: none; background: none; cursor: pointer;" data-action="cart-minus" data-id="${item.id}">−</button>
                <span style="padding: 0 6px; font-size: 12px; font-weight: 600;">${item.qty}</span>
                <button type="button" style="padding: 2px 7px; border: none; background: none; cursor: pointer;" data-action="cart-plus" data-id="${item.id}">+</button>
              </div>
              <button type="button" style="background: none; border: none; font-size: 11.5px; color: var(--color-text-muted); text-decoration: underline; cursor: pointer;" data-action="cart-remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });
    cartItemsContainer.innerHTML = html;
  }

  function addToCart(id) {
    let itemData = null;
    Object.values(catalog).forEach(arr => {
      const found = arr.find(p => p.id === parseInt(id, 10));
      if (found) itemData = found;
    });
    if (!itemData) return;

    const exist = cart.find(i => i.id === itemData.id);
    if (exist) {
      exist.qty += 1;
    } else {
      cart.push({
        id: itemData.id,
        title: itemData.title,
        price: itemData.price,
        image: itemData.image,
        qty: 1
      });
    }

    updateCartUI();
    openCart();
    showToast(`Added "${itemData.title}" to bag`);
  }

  // --- 5. Quick View Modal ---
  const quickViewModal = document.getElementById('QuickViewModal');
  const quickViewBody = document.getElementById('QuickViewBody');
  const modalCloseBtn = document.getElementById('ModalCloseBtn');

  function openQuickView(id) {
    let p = null;
    Object.values(catalog).forEach(arr => {
      const found = arr.find(item => item.id === parseInt(id, 10));
      if (found) p = found;
    });
    if (!p || !quickViewBody) return;

    quickViewBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 2.5rem; padding: 2.5rem;">
        <div style="background: var(--color-bg-card); display: flex; align-items: center; justify-content: center; padding: 2rem; border-radius: 4px;">
          <img src="${p.image}" alt="${p.title}" style="max-width: 90%; max-height: 320px; object-fit: contain;">
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            ${p.badge ? `<span class="product-badge-pill badge-discount" style="position: static; display: inline-block; margin-bottom: 0.5rem;">${p.badge}</span>` : ''}
            <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: var(--color-text-muted);">${p.category}</div>
            <h2 style="font-size: 26px; margin: 0.4rem 0 0.6rem 0;">${p.title}</h2>
            <div style="font-size: 20px; font-weight: 600; color: var(--color-primary-dark); margin-bottom: 0.85rem;">
              ${formatMoney(p.price)}
              ${p.comparePrice ? `<span style="font-size: 14px; color: var(--color-text-muted); text-decoration: line-through; margin-left: 8px;">${formatMoney(p.comparePrice)}</span>` : ''}
            </div>
            
            <div style="padding: 1rem; background: var(--color-bg-pale-green); border-radius: 4px; border: 1px solid var(--color-border); font-size: 12.5px; margin-bottom: 1.5rem;">
              <strong>Hallmark & Specification:</strong><br>
              ${p.specs}
            </div>

            <div style="margin-bottom: 1.5rem;">
              <label style="font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Select Metal Purity:</label>
              <select style="width: 100%; padding: 0.65rem; border: 1px solid var(--color-border); border-radius: 2px; font-size: 13px;">
                <option>18K Yellow Gold (Standard)</option>
                <option>18K Rose Gold</option>
                <option>18K White Gold / 950 Platinum</option>
                <option>22K BIS 916 Hallmarked Gold</option>
              </select>
            </div>
          </div>

          <button type="button" class="btn btn-primary" id="ModalAddBtn" data-id="${p.id}" style="width: 100%; padding: 1.1rem;">
            Add to Shopping Bag
          </button>
        </div>
      </div>
    `;

    if (quickViewModal) quickViewModal.classList.add('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';

    const addBtn = document.getElementById('ModalAddBtn');
    if (addBtn) {
      addBtn.addEventListener('click', function() {
        closeAllDrawers();
        addToCart(p.id);
      });
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAllDrawers);

  // --- 6. Search Modal ---
  const searchModal = document.getElementById('SearchModal');
  const searchOpenBtns = document.querySelectorAll('[data-action="open-search"]');
  const searchCloseBtn = document.getElementById('SearchCloseBtn');

  searchOpenBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (searchModal) searchModal.classList.add('is-open');
      if (drawerBackdrop) drawerBackdrop.classList.add('is-visible');
      const input = document.getElementById('SearchInput');
      if (input) setTimeout(() => input.focus(), 150);
    });
  });
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeAllDrawers);

  // --- 7. Mobile Navigation Drawer ---
  const mobileNavToggle = document.getElementById('MobileNavToggle');
  const mobileMenuDrawer = document.getElementById('MobileMenuDrawer');
  const mobileMenuClose = document.getElementById('MobileMenuClose');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function() {
      if (mobileMenuDrawer) mobileMenuDrawer.classList.add('is-open');
      if (drawerBackdrop) drawerBackdrop.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeAllDrawers);

  // --- 8. Global Click Delegation (Wishlist, Quick View, Quick Add, Cart Qty) ---
  document.addEventListener('click', function(e) {
    // Quick View Click
    const qvBtn = e.target.closest('[data-action="quick-view"]');
    if (qvBtn) {
      e.preventDefault();
      const id = qvBtn.getAttribute('data-id');
      openQuickView(id);
      return;
    }

    // Quick Add to Bag
    const qaBtn = e.target.closest('[data-action="quick-add"]');
    if (qaBtn) {
      e.preventDefault();
      const id = qaBtn.getAttribute('data-id');
      addToCart(id);
      return;
    }

    // Wishlist Toggle
    const wlBtn = e.target.closest('[data-action="toggle-wishlist"]');
    if (wlBtn) {
      e.preventDefault();
      const id = parseInt(wlBtn.getAttribute('data-id'), 10);
      if (wishlist.has(id)) {
        wishlist.delete(id);
        wlBtn.classList.remove('is-active');
        showToast('Removed from Wishlist');
      } else {
        wishlist.add(id);
        wlBtn.classList.add('is-active');
        showToast('Saved to Wishlist');
      }
      const badge = document.getElementById('HeaderWishlistBadge');
      if (badge) badge.textContent = wishlist.size;
      return;
    }

    // Cart Plus
    const plusBtn = e.target.closest('[data-action="cart-plus"]');
    if (plusBtn) {
      const id = parseInt(plusBtn.getAttribute('data-id'), 10);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.qty += 1;
        updateCartUI();
      }
      return;
    }

    // Cart Minus
    const minusBtn = e.target.closest('[data-action="cart-minus"]');
    if (minusBtn) {
      const id = parseInt(minusBtn.getAttribute('data-id'), 10);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
      }
      return;
    }

    // Cart Remove
    const remBtn = e.target.closest('[data-action="cart-remove"]');
    if (remBtn) {
      const id = parseInt(remBtn.getAttribute('data-id'), 10);
      cart = cart.filter(i => i.id !== id);
      updateCartUI();
      return;
    }
  });

  // Initial cart UI
  updateCartUI();
});
