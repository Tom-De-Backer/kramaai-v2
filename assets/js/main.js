/**
 * Scouts & Gidsen Kramaai Mollem - Main Application Script
 * Vanilla JS (ES6) - Zero dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initHashRoutingFallback();
  initMobileMenu();
  initActiveNavLink();
  initSponsorsTrack();
  initFaqAccordion();
  initLeidingFilter();
  initTakkenLeiders();
});

/**
 * 1. Hash-routing fallback voor backwards compatibility met de oude website
 * E.g.: https://kramaai.be/#/inschrijven -> inschrijven.html
 */
function initHashRoutingFallback() {
  const hash = window.location.hash.toLowerCase().replace('#/', '').replace('#', '');
  if (!hash) return;

  const routeMap = {
    'inschrijven': 'inschrijven.html',
    'lidgeld': 'lidgeld.html',
    'leiding': 'leiding.html',
    'takken': 'takken.html',
    'kramaai': 'kramaai.html',
    'fotos': 'fotos.html',
    'verhuur': 'verhuur.html',
    'faq': 'faq.html',
    'privacy': 'privacy.html',
    'kapoenen': 'takken.html#kapoenen',
    'welpen': 'takken.html#welpen',
    'bevers': 'takken.html#bevers',
    'jonggivers': 'takken.html#jonggivers',
    'givers': 'takken.html#givers',
    'jins': 'takken.html#jins',
    'groepsleiding': 'takken.html#groepsleiding'
  };

  if (routeMap[hash]) {
    window.location.replace(routeMap[hash]);
  }
}

/**
 * 2. Mobiel menu drawer openen en sluiten
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');

  if (!toggleBtn || !drawer || !overlay) return;
  if (toggleBtn.dataset.bound) return;
  toggleBtn.dataset.bound = 'true';

  function openMenu() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
}

/**
 * 3. Actieve link in navigatie markeren
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 4. Sponsor track / carrousel vullen met data uit data.js
 */
function initSponsorsTrack() {
  const track = document.getElementById('sponsorsTrack');
  if (!track || typeof SPONSORS_DATA === 'undefined') return;

  let sponsors = SPONSORS_DATA.head;
  if (new Date(2026, 9, 3, 0, 0, 0, 0) > new Date()) sponsors = sponsors.concat(SPONSORS_DATA.platinum);
  if (new Date(2026, 6, 3, 0, 0, 0, 0) > new Date()) sponsors = sponsors.concat(SPONSORS_DATA.golden);

  // Render items tweemaal voor een naadloze oneindige marquee loop
  const logos = [...sponsors, ...sponsors].map(sponsor => {
    const linkStart = sponsor.site ? `<a href="${sponsor.site}" target="_blank" rel="noopener noreferrer" title="${sponsor.name}">` : `<div title="${sponsor.name}">`;
    const linkEnd = sponsor.site ? `</a>` : `</div>`;
    return `
      <div class="sponsor-logo-item">
        ${linkStart}
          <img src="${sponsor.logo}" alt="${sponsor.name}" loading="lazy" />
        ${linkEnd}
      </div>
    `;
  }).join('');

  track.innerHTML = logos;
}

/**
 * 5. FAQ Accordeon functionaliteit
 */
function initFaqAccordion() {
  const faqContainer = document.getElementById('faqContainer');
  if (!faqContainer || typeof FAQS_DATA === 'undefined') return;

  faqContainer.innerHTML = FAQS_DATA.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button class="faq-question" type="button" aria-expanded="${idx === 0}">
        <span>${faq.q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  faqContainer.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Sluit eventueel andere open items
      faqContainer.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        const qBtn = el.querySelector('.faq-question');
        if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/**
 * 6. Leiding filter per tak (op leiding.html)
 */
function initLeidingFilter() {
  const tableBody = document.getElementById('leidingTableBody');
  const filterTabs = document.getElementById('leidingFilterTabs');
  if (!tableBody || typeof TAKKEN_DATA === 'undefined') return;

  function renderLeiding(filterTak = 'all') {
    let html = '';
    TAKKEN_DATA.forEach(tak => {
      if (filterTak !== 'all' && tak.id !== filterTak) return;

      tak.leaders.forEach((leader, idx) => {
        const isHead = leader.isHead ? '<span style="color:var(--color-accent); font-weight:bold; margin-left:6px;" title="Takleiding">★ Takleiding</span>' : '';

        html += `
          <tr data-tak="${tak.id}">
            <td class="leader-name">
              ${leader.name} ${isHead}
              <div style="font-size:0.75rem; color:var(--color-accent); font-weight:600; text-transform:uppercase;">${tak.name}</div>
            </td>
            <td class="leader-totem">${leader.totem || '-'}</td>
            <td class="leader-email"><a href="mailto:${leader.email}">${leader.email}</a></td>
          </tr>
        `;
      });
    });

    tableBody.innerHTML = html;
  }

  const initialActive = filterTabs ? filterTabs.querySelector('.filter-btn.active') : null;
  const initialFilter = initialActive ? initialActive.dataset.filter : 'kapoenen';
  renderLeiding(initialFilter);

  if (filterTabs) {
    filterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      document.querySelectorAll('#leidingFilterTabs .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      renderLeiding(filter);
    });
  }
}

/**
 * 7. Takken leiders dynamisch renderen (op takken.html)
 * Haalt de leiding per tak rechtstreeks uit TAKKEN_DATA in data.js
 */
function initTakkenLeiders() {
  const takLists = document.querySelectorAll('.tak-leaders-list');
  if (!takLists.length || typeof TAKKEN_DATA === 'undefined') return;

  TAKKEN_DATA.forEach(tak => {
    const container = document.querySelector(`#${tak.id} .tak-leaders-list`);
    if (!container || !Array.isArray(tak.leaders)) return;

    container.innerHTML = tak.leaders.map(leader => {
      const isHead = leader.isHead;
      const headClass = isHead ? ' head' : '';
      const star = isHead ? '<span class="leader-star" title="Takleiding">★</span> ' : '';
      const totem = leader.totem ? `<span class="leader-totem">${leader.totem}</span>` : '';
      return `
        <div class="leader-tag${headClass}">
          <span class="leader-name-group">
            ${star}<span class="leader-name">${leader.name}</span>
          </span>
          ${totem}
        </div>
      `;
    }).join('');
  });
}
