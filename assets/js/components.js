/**
 * Scouts & Gidsen Kramaai Mollem - Reusable Web Components
 * Vanilla JS Custom Elements voor navigatieheader en footer
 */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
      { href: 'index.html', label: 'Home' },
      { href: 'inschrijven.html', label: 'Inschrijven' },
      { href: 'lidgeld.html', label: 'Lidgeld' },
      { href: 'leiding.html', label: 'Leiding' },
      { href: 'takken.html', label: 'Takken' },
      { href: 'kramaai.html', label: 'Kramaai' },
      { href: 'fotos.html', label: "Foto's" },
      { href: 'verhuur.html', label: 'Verhuur' },
      { href: 'faq.html', label: 'FAQ' }
    ];

    const isCurrent = (href) => {
      if (href === currentPath) return true;
      if ((currentPath === '' || currentPath === 'index.html') && href === 'index.html') return true;
      return false;
    };

    const desktopNavHtml = navLinks.map(link => `
      <li>
        <a href="${link.href}" class="nav-link ${isCurrent(link.href) ? 'active' : ''}">${link.label}</a>
      </li>
    `).join('');

    const mobileNavLinks = [
      ...navLinks,
      { href: 'privacy.html', label: 'Privacy' }
    ];

    const mobileNavHtml = mobileNavLinks.map(link => `
      <li>
        <a href="${link.href}" class="mobile-nav-link ${isCurrent(link.href) ? 'active' : ''}">${link.label}</a>
      </li>
    `).join('');

    this.innerHTML = `
      <header class="site-header">
        <div class="container nav-wrapper">
          <a href="index.html" class="brand-link">
            <div class="brand-logo">
              <img src="assets/images/brand/favicon.png" alt="Kramaai Mollem Logo" />
            </div>
            <div class="brand-title">
              <span class="group-name">Scouts Mollem</span>
              <span class="group-tag">Kramaai 1730</span>
            </div>
          </a>

          <!-- Desktop Navigatie -->
          <nav class="main-nav" aria-label="Hoofdnavigatie">
            <ul class="nav-list">
              ${desktopNavHtml}
            </ul>
          </nav>

          <!-- Mobiele Knop -->
          <button class="mobile-toggle" id="mobileMenuToggle" aria-label="Open menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <!-- Mobiel Menu Drawer -->
      <div class="mobile-overlay" id="mobileOverlay"></div>
      <div class="mobile-drawer" id="mobileDrawer">
        <div>
          <div class="mobile-drawer-header">
            <div class="brand-title">
              <span class="group-name">Scouts Mollem</span>
              <span class="group-tag">Kramaai 1730</span>
            </div>
            <button class="mobile-close-btn" id="mobileMenuClose" aria-label="Sluit menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul class="mobile-nav-list">
            ${mobileNavHtml}
          </ul>
        </div>
        <div style="font-size:0.8rem; color:var(--color-text-muted); text-align:center; padding-top:1.5rem;">
          Scouts & Gidsen Kramaai Mollem
        </div>
      </div>
    `;

    this.initEvents();
  }

  initEvents() {
    const toggleBtn = this.querySelector('#mobileMenuToggle');
    const closeBtn = this.querySelector('#mobileMenuClose');
    const drawer = this.querySelector('#mobileDrawer');
    const overlay = this.querySelector('#mobileOverlay');

    if (!toggleBtn || !drawer || !overlay) return;
    if (toggleBtn.dataset.bound) return;
    toggleBtn.dataset.bound = 'true';

    const openMenu = () => {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-brand-title">Scouts & Gidsen Kramaai Mollem</div>
              <p class="footer-brand-desc">
                De gezelligste jeugdbeweging van Asse. Elke zondag openen wij onze deuren voor spel, vriendschap en
                grensverleggend avontuur voor jongens en meisjes vanaf 6 jaar.
              </p>
              <div class="footer-socials">
                <a href="https://www.facebook.com/groups/113217998689162/" target="_blank" rel="noopener noreferrer"
                  class="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/scoutskramaaimollem/" target="_blank" rel="noopener noreferrer"
                  class="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 class="footer-heading">Navigatie</h4>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="inschrijven.html">Inschrijven</a></li>
                <li><a href="lidgeld.html">Lidgeld</a></li>
                <li><a href="leiding.html">Leiding</a></li>
                <li><a href="takken.html">Takken</a></li>
                <li><a href="kramaai.html">Kramaai</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-heading">Praktisch</h4>
              <ul class="footer-links">
                <li><a href="fotos.html">Fotoalbums</a></li>
                <li><a href="verhuur.html">Verhuur</a></li>
                <li><a href="faq.html">Veelgestelde Vragen</a></li>
                <li><a href="privacy.html">Privacyverklaring</a></li>
                <li><a href="https://www.trooper.be/kramaai" target="_blank" rel="noopener">Trooper Kramaai</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-heading">Contact & Adres</h4>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kasteelstraat 47a, 1730 Mollem (naast GBS Mollem)</span>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:groepsleiding@kramaai.be">groepsleiding@kramaai.be</a>
              </div>
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M7 15h0M2 9.5h20"></path>
                </svg>
                <span>Rekening: BE45 7340 7340 7989</span>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div>
              &copy; <span id="currentYear">${currentYear}</span> Scouts & Gidsen Kramaai Mollem. Alle rechten voorbehouden.
            </div>
            <div>
              Ook zo'n website laten maken? Realisatie door <a href="https://backeit.be" target="_blank" rel="noopener">BackeIT &rarr;</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
