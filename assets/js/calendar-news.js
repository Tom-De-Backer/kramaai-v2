/**
 * Scouts & Gidsen Kramaai Mollem - Live Kalender & Nieuws Loader
 * Gebruikt calendarPromise en newsPromise zoals gespecificeerd
 */

document.addEventListener('DOMContentLoaded', () => {
  loadNews();
  loadCalendar();
});

/**
 * Nieuwsberichten inladen en renderen
 */
/**
 * Nieuwsberichten inladen en renderen met mooie lege toestand
 */
function loadNews() {
  const newsContainer = document.getElementById('newsFeedContainer');
  if (!newsContainer) return;

  if (typeof newsPromise === 'undefined') {
    renderNewsEmpty(newsContainer, 'Nieuwsfeed kon niet geladen worden.');
    return;
  }

  newsPromise.then((newsItems) => {
    if (!Array.isArray(newsItems) || newsItems.length === 0) {
      renderNewsEmpty(newsContainer);
      return;
    }

    // Filter actuele berichten
    const now = new Date();
    const activeNews = newsItems.filter(item => {
      if (item.testing) return false;
      const validFrom = !item.from || Date.parse(item.from.replace(/\//g, '-')) <= now;
      const validUntil = !item.until || Date.parse(item.until.replace(/\//g, '-')) >= now;
      return validFrom && validUntil;
    });

    const archivedNews = newsItems.filter(item => !item.testing && !activeNews.includes(item));

    if (activeNews.length === 0) {
      renderNewsEmpty(newsContainer, null, archivedNews);
      return;
    }

    const html = activeNews.map(item => renderNewsCard(item, false)).join('');
    newsContainer.innerHTML = html;
  }).catch(err => {
    console.error('Fout bij ophalen nieuws:', err);
    renderNewsEmpty(newsContainer, 'Er is een probleem opgetreden bij het laden van het nieuws.');
  });
}

/**
 * Render één individueel nieuwskartje
 */
function renderNewsCard(item, isArchived = false) {
  const imgHtml = item.imageURL ? `
    <div class="news-card-img-wrap">
      ${item.imageLink ? `<a href="${item.imageLink}" target="_blank" rel="noopener">` : ''}
        <img src="${item.imageURL}" alt="${item.title}" class="news-card-img" onerror="this.parentElement.style.display='none'" loading="lazy" />
      ${item.imageLink ? `</a>` : ''}
    </div>
  ` : '';

  const tagLabel = isArchived ? 'Eerder bericht' : 'Aankondiging';
  const tagClass = isArchived ? 'news-card-tag archived' : 'news-card-tag';
  const cardClass = isArchived ? 'news-card archived' : 'news-card';

  return `
    <article class="${cardClass}">
      ${imgHtml}
      <div class="news-card-body">
        <span class="${tagClass}">${tagLabel}</span>
        <h3 class="news-card-title">${item.title}</h3>
        <div class="news-card-content">
          ${item.text}
        </div>
      </div>
    </article>
  `;
}

/**
 * Render aantrekkelijke lege toestand wanneer er geen actuele berichten zijn
 */
function renderNewsEmpty(container, customMessage = null, archivedNews = []) {
  const hasArchive = Array.isArray(archivedNews) && archivedNews.length > 0;

  container.innerHTML = `
    <div class="news-empty-card">
      <div class="news-empty-icon">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
          <line x1="7" y1="9" x2="13" y2="9"></line>
          <line x1="7" y1="13" x2="11" y2="13"></line>
        </svg>
      </div>
      <h3 class="news-empty-title">Geen nieuwe berichten op dit moment</h3>
      <p class="news-empty-text">
        ${customMessage || 'Er zijn momenteel geen actuele mededelingen. Belangrijke updates, foto\'s en uitnodigingen voor onze activiteiten verschijnen hier zodra ze bekend zijn.'}
      </p>
      <div class="news-empty-actions">
        <a href="#kalender" class="btn btn-sm btn-primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Bekijk de kalender
        </a>
        <a href="https://www.facebook.com/groups/113217998689162/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          Facebook Groep
        </a>
        <a href="https://www.instagram.com/scoutskramaaimollem/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          Instagram
        </a>
      </div>

      ${hasArchive ? `
        <div class="news-archive-wrap">
          <button type="button" class="news-archive-toggle" id="toggleNewsArchive" aria-expanded="false">
            <span>Toon eerdere berichten (${archivedNews.length})</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="news-archive-list" id="newsArchiveList" style="display:none;">
            ${archivedNews.slice(0, 5).map(item => renderNewsCard(item, true)).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  if (hasArchive) {
    const toggleBtn = container.querySelector('#toggleNewsArchive');
    const archiveList = container.querySelector('#newsArchiveList');
    if (toggleBtn && archiveList) {
      toggleBtn.addEventListener('click', () => {
        const isHidden = archiveList.style.display === 'none';
        archiveList.style.display = isHidden ? 'block' : 'none';
        toggleBtn.classList.toggle('open', isHidden);
        toggleBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        const labelSpan = toggleBtn.querySelector('span');
        if (labelSpan) {
          labelSpan.textContent = isHidden ? 'Verberg eerdere berichten' : `Toon eerdere berichten (${archivedNews.length})`;
        }
      });
    }
  }
}

/**
 * Helper om datums van kalenderevenementen te parsen
 */
function parseCalendarDate(dateStr, isEndOfDay = false) {
  if (!dateStr) return null;
  const s = String(dateStr).trim().replace(/\//g, '-');
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    const [y, m, d] = s.split('-').map(Number);
    if (isEndOfDay) {
      return new Date(y, m - 1, d, 23, 59, 59, 999);
    }
    return new Date(y, m - 1, d, 0, 0, 0, 0);
  }
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Bepaal de effectieve startdatum van een kalenderitem (corrigeert eventuele maand-typo's t.o.v. until)
 */
function getEffectiveCalendarStartDate(item) {
  if (!item) return new Date(0);
  let dStart = parseCalendarDate(item.start);
  const dUntil = parseCalendarDate(item.until);
  const dEnd = parseCalendarDate(item.end);

  if (dStart && dUntil) {
    // Corrigeer inconsistenties wanneer start per ongeluk 1 maand verschilt van until met dezelfde dag
    if (dStart.getDate() === dUntil.getDate() && dStart.getMonth() !== dUntil.getMonth() && Math.abs(dUntil - dStart) < 35 * 86400000) {
      dStart = new Date(dUntil.getFullYear(), dUntil.getMonth(), dUntil.getDate(), dStart.getHours(), dStart.getMinutes(), dStart.getSeconds());
    }
  } else if (!dStart) {
    dStart = dUntil || dEnd || new Date(0);
  }
  return dStart;
}

/**
 * Kalenderagenda inladen en renderen
 */
function loadCalendar() {
  const calContainer = document.getElementById('calendarListContainer');
  if (!calContainer) return;

  if (typeof calendarPromise === 'undefined') {
    calContainer.innerHTML = '<p>Kalender kon niet geladen worden.</p>';
    return;
  }

  calendarPromise.then((items) => {
    if (!Array.isArray(items) || items.length === 0) {
      calContainer.innerHTML = '<p style="color:var(--color-text-muted); padding:1rem 0;">Er zijn momenteel geen evenementen gepland.</p>';
      return;
    }

    // Filter enkel evenementen van vandaag of later (verleden verbergen)
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const activeItems = items.filter(item => {
      const dUntil = parseCalendarDate(item.until, true);
      const dEnd = parseCalendarDate(item.end, true);
      const dStart = getEffectiveCalendarStartDate(item);

      const dates = [dUntil, dEnd, dStart].filter(Boolean);
      if (dates.length === 0) return false;

      const maxDate = dates.reduce((max, d) => (d > max ? d : max), new Date(0));
      return maxDate >= today;
    });

    if (activeItems.length === 0) {
      calContainer.innerHTML = `
        <div style="text-align:center; padding:2.5rem 1rem; color:var(--color-text-muted);">
          <div style="width:48px; height:48px; border-radius:50%; background:var(--color-primary-subtle); color:var(--color-primary-dark); display:inline-flex; align-items:center; justify-content:center; margin-bottom:0.85rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div style="font-weight:700; color:var(--color-primary-dark); font-size:1rem; margin-bottom:0.35rem;">Geen geplande evenementen</div>
          <p style="font-size:0.88rem; margin:0; line-height:1.5;">Nieuwe activiteiten worden binnenkort aan de kalender toegevoegd.</p>
        </div>
      `;
      return;
    }

    // Sorteer chronologisch op datum
    const sortedItems = [...activeItems].sort((a, b) => {
      return getEffectiveCalendarStartDate(a) - getEffectiveCalendarStartDate(b);
    });

    const html = sortedItems.map(item => {
      // Datum badge formatting
      let dayName = 'DAG';
      let dateNum = '••';

      const dStart = getEffectiveCalendarStartDate(item);
      if (dStart && !isNaN(dStart.getTime()) && dStart.getTime() > 0) {
        dayName = dStart.toLocaleDateString('nl-BE', { weekday: 'short' });
        dateNum = dStart.getDate();
      }

      // Tijd weergave
      let timeText = item.date || '';
      if (item.start && item.end) {
        const dEnd = parseCalendarDate(item.end);
        if (dStart && dEnd && !isNaN(dStart.getTime()) && !isNaN(dEnd.getTime()) && dStart.getHours() > 0) {
          const startTime = dStart.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' });
          const endTime = dEnd.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' });
          timeText += ` (${startTime} - ${endTime})`;
        }
      }

      return `
        <div class="calendar-item">
          <div class="calendar-date-badge">
            <span class="day-text">${dayName}</span>
            <span class="date-num">${dateNum}</span>
          </div>
          <div class="calendar-event-info">
            <div class="calendar-event-title">${item.event}</div>
            <div class="calendar-event-time">${timeText}</div>
          </div>
        </div>
      `;
    }).join('');

    calContainer.innerHTML = html;
  }).catch(err => {
    console.error('Fout bij ophalen kalender:', err);
    calContainer.innerHTML = '<p>Er is een probleem opgetreden bij het laden van de kalender.</p>';
  });
}
