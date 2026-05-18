/* ============================================================
   Top Car Shippers — Shared Components
   Nav and footer injected into every page.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const NAV = `
    <header class="header">
      <div class="wrap header-inner">
        <a href="/" class="logo">
          <span class="top">Top</span><span class="rest">Car Shippers</span><span class="dot"></span>
        </a>
        <nav class="primary">
          <div class="navitem" tabindex="0">
            <span>Our Lists</span>
            <span class="caret"></span>
            <div class="dropdown">
              <a href="/best-car-shipping-companies.html"><span>Best Car Shipping Companies</span><span class="arrow">→</span></a>
              <a href="/best-enclosed-car-shipping.html"><span>Best Enclosed Car Shipping</span><span class="arrow">→</span></a>
              <a href="/best-open-carrier-shipping.html"><span>Best Open Carrier Shipping</span><span class="arrow">→</span></a>
              <a href="/best-luxury-car-shipping.html"><span>Best for Luxury Vehicles</span><span class="arrow">→</span></a>
            </div>
          </div>
          <a href="/blog/" class="navitem"><span>Blog</span></a>
        </nav>
      </div>
    </header>
  `;

  const FOOTER = `
    <footer class="site">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-logo">
            <a href="/" class="logo" style="font-size:26px;">
              <span class="top">Top</span><span class="rest">Car Shippers</span><span class="dot"></span>
            </a>
            <p class="footer-tag">Independent editorial &middot; Est. 2026</p>
          </div>
          <div class="footer-disclosure">
            <span class="label">Disclosure</span>
            TopCarShippers.com is independently operated. We may earn a referral fee if you book through links on this site. This does not influence our rankings.
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 TopCarShippers.com</span>
          <nav class="footer-nav">
            <a href="/#our-lists">Our Lists</a>
            <a href="/blog/">Blog</a>
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms-of-use.html">Terms of Use</a>
          </nav>
        </div>
      </div>
    </footer>
  `;

  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV;
  if (footerEl) footerEl.outerHTML = FOOTER;

});
