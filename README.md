# Lotus Jewellers — Shopify Storefront Design Reference

An ultra-premium, luxury fine jewellery design reference engineered for **Lotus Jewellers** (*Estd 1988*). This storefront reference embodies high-end elegance, bespoke bridal storytelling, certified natural diamond presentation, and royal heritage craftsmanship.

---

## ✦ Brand & Design Philosophy

Lotus Jewellers blends royal Indian heritage with modern Swiss micro-setting refinement:
- **Primary Aesthetics**: Deep onyx surfaces, royal gold accents, champagne warm creams, and minimal borders.
- **Typography**: 
  - **Headings & Accents**: `Cormorant Garamond` (Google Font) & `Cinzel`
  - **Body & UI**: `Montserrat` (300/400/500/600)
- **Palette**:
  - Onyx Black: `#111315` / `#16181A`
  - Royal Gold: `#C5A880` / `#DFCAAB` / `#9E7D52`
  - Pearl Background: `#FAF7F2` / `#F5EFEB`
  - Pure White: `#FFFFFF`
  - Subtle Border: `#E8E2D8`

---

## ✦ Key Sections Included

1. **Top Announcement Bar**: Insured worldwide delivery and lifetime buyback policy notice.
2. **Luxury Sticky Header**:
   - Lotus brand emblem & Estd 1988 subtitle
   - Desktop mega menu navigation
   - Wishlist counter & Slide-out Shopping Bag trigger
   - Responsive mobile menu drawer
3. **Hero Haute Joaillerie Showcase**: Editorial campaign imagery, gold CTA buttons, and floating hallmark trust pillars (BIS 916, GIA/IGI, Buyback, Insured Courier).
4. **Arched Category Visual Carousel**: Solitaire Rings, Bridal Regalia, Diamond Earrings, Royal Necklaces, Bangles & Kadas, Polki & Jadau.
5. **Interactive Filterable Masterpiece Gallery**:
   - Tab switching across categories (*All, Solitaires, Bridal, Earrings, Necklaces, Bangles*)
   - Dual-hover image transition cards
   - Floating hallmark badges & metal swatches (Yellow Gold, Rose Gold, Platinum)
   - Quick View button & Wishlist toggle
6. **The Atelier & 35-Year Craftsmanship Story**: Generational karigars, Kimberley Process certified diamonds, and micro-pavé inspection.
7. **Bespoke Bridal Concierge Banner**: Interactive consultation booking form with 3D CAD preview guarantee.
8. **Client Testimonials & Press Reviews**: Authentic patron collector feedback and ratings.
9. **Instagram & Social Editorial Gallery**: `@LotusJewellers` social shop-the-look feed.
10. **Comprehensive Luxury Footer**: VIP newsletter subscription, flagship boutique directory (Mumbai, Delhi, London), and quick links.
11. **Interactive Drawers & Modals**:
    - **Slide-out Cart Drawer**: Live subtotal calculations, free delivery progress meter, quantity controls, and item removal.
    - **Quick View Modal**: Metal selection (18K Yellow/Rose/White Gold), 4Cs diamond specifications, and one-click add-to-bag.
    - **Mobile Navigation Drawer**: Fluid full-height slide-in menu.

---

## ✦ File Structure

```
Lotus Jwellers/
├── index.html            # Master storefront showcase & design reference
├── assets/
│   ├── css/
│   │   └── main.css      # Luxury design tokens, animations, and responsive styles
│   └── js/
│       └── main.js       # Dynamic product filtering, cart drawer, modals, wishlist
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

---

## ✦ Local Preview

To preview the storefront locally:

```bash
# Using Python built-in server
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000
```

---

## ✦ Shopify Theme Integration Notes

When translating this reference into a Shopify Liquid theme:
- Map the product grid to `collection.products` with dynamic filters.
- Connect the Cart Drawer to Shopify's `/cart/add.js`, `/cart/change.js`, and `/cart.js` AJAX APIs.
- Utilize Shopify Metafields for diamond specs (`4Cs`, `certificate_number`, `gold_weight_grams`, `hallmark_code`).