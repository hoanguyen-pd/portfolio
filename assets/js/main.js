/* =====================================================================
   MAIN.JS — renders the homepage using the data in config.js.
   You should not need to edit this file to change content — edit
   config.js instead. Only touch this file to change HOW things
   are laid out or how the lightbox/timeline interactions behave.
   ===================================================================== */

const ICONS = {
  users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  layers: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  "bar-chart": '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  search: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  "share-2": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  "pen-tool": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  "bar-chart-2": '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  tool: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  arrow: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  external: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
};

function icon(name) { return ICONS[name] || ""; }

/* ---------------- Header ---------------- */
function renderHeader() {
  const nav = SITE.nav.map((n, i) => `<a href="${n.href}" class="${i === 0 ? "active" : ""}">${n.label}</a>`).join("");
  document.getElementById("site-header").innerHTML = `
    <div class="wrap">
      <a href="index.html" class="logo">${SITE.profile.logoText}</a>
      <nav class="main-nav" id="main-nav">${nav}</nav>
      <div class="header-actions">
        <a class="btn btn-primary" href="${SITE.profile.cvFile}" download>
          <span class="btn-text-full">Download CV</span> ${icon('arrow')}
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>`;
  document.getElementById("nav-toggle").addEventListener("click", () => {
    document.getElementById("main-nav").classList.toggle("open");
  });
}

/* ---------------- Hero ---------------- */
function renderHero() {
  const target = document.getElementById("hero");
  if (!target) return;
  const p = SITE.profile;
  target.innerHTML = `
    <div class="wrap hero-grid">
      <div>
        <div class="kicker">${p.heroKicker}</div>
        <h1>Hi, I'm <span class="accent">${p.name}</span><br>${p.tagline}<br>${p.taglineHighlight}</h1>
        <p class="hero-desc">${p.heroDescription}</p>
        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary">View My Work ${icon('arrow')}</a>
          <a href="#contact" class="btn btn-outline">Get in Touch</a>
        </div>
        <div class="hero-stats">
          ${p.stats.map(s => `<div><div class="stat-num">${s.number}</div><div class="stat-label">${s.label}</div></div>`).join("")}
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-portrait-wrap">
          <div class="hero-portrait-blob"></div>
          <img class="hero-portrait" src="${p.portrait}" alt="${p.fullName}">
          ${p.floatingBadges.map((b, i) => `
            <div class="floating-badge badge-${i+1}">${icon(b.icon)}<span>${b.text}</span></div>
          `).join("")}
        </div>
      </div>
    </div>`;
}

/* ---------------- Projects ---------------- */
function projectCard(pj) {
  const thumbInner = pj.thumbnail
    ? `<img src="${pj.thumbnail}" alt="${pj.title}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback'); this.parentElement.textContent=this.alt; ">`
    : `<span>${pj.title}</span>`;
  return `
    <a class="project-card" href="${pj.link}" target="_blank" rel="noopener">
      <span class="project-tag-cat">${pj.category}</span>
      <h3>${pj.title}</h3>
      <p class="desc">${pj.description}</p>
      <div class="project-thumb">${thumbInner}</div>
      <div class="project-tags">${pj.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <span class="case-link">View Project ${icon('arrowRight')}</span>
    </a>`;
}

function renderProjects() {
  if (!document.getElementById("projects-grid")) return;
  document.getElementById("projects-grid").innerHTML =
    SITE.featuredProjects.map(projectCard).join("");

  const tileGradients = [
    "linear-gradient(135deg,#6c5ce7,#8b6bf5)",
    "linear-gradient(135deg,#7c6bf0,#a78bfa)",
    "linear-gradient(135deg,#5b3fe0,#7c6bf0)",
    "linear-gradient(135deg,#8b6bf5,#c4b5fd)",
  ];
  document.getElementById("more-projects-grid").innerHTML = SITE.moreProjects.map((m, i) => {
    const bg = tileGradients[i % tileGradients.length];
    return `
      <a class="more-card" href="${m.link}" target="_blank" rel="noopener" style="background:${bg}">
        <img src="${m.thumbnail}" alt="${m.title}" loading="lazy" onerror="this.remove(); this.parentElement.classList.add('img-fallback');">
        <span class="label">${m.title}</span>
      </a>`;
  }).join("");
}

/* ---------------- Process ---------------- */
function renderProcess() {
  if (!document.getElementById("process-head")) return;
  const p = SITE.process;
  document.getElementById("process-head").innerHTML = `
    <div class="kicker">${p.kicker}</div><h2>${p.title}</h2><p class="subtitle">${p.subtitle}</p>`;
  document.getElementById("process-steps").innerHTML = p.steps.map(s => `
    <div class="process-step">
      <div class="process-icon">${icon(s.icon)}</div>
      <div class="step-label"><span class="num">${s.number}</span>${s.title}</div>
      <p>${s.description}</p>
      <span class="arrow">${icon('arrowRight')}</span>
    </div>`).join("");
}

/* ---------------- Behind the interface (+ lightbox) ---------------- */
function renderBehind() {
  if (!document.getElementById("behind-grid")) return;
  const b = SITE.behindInterface;
  document.getElementById("behind-grid").innerHTML = b.steps.map((s, i) => `
    <button class="behind-card" data-step="${i}" aria-label="Open ${s.title} gallery">
      <div class="behind-head-row">
        <span class="behind-step-num">${s.number}</span>
        <h4>${s.title}</h4>
      </div>
      <div class="behind-thumb"><img src="${s.image}" alt="${s.title}" loading="lazy"></div>
      <div class="behind-body"><p>${s.caption}</p></div>
    </button>`).join("");

  document.querySelectorAll(".behind-card").forEach(card => {
    card.addEventListener("click", () => {
      const stepIndex = parseInt(card.dataset.step, 10);
      openLightboxForStep(stepIndex);
    });
  });

  const viewMore = document.getElementById("view-more-details");
  if (viewMore) {
    viewMore.addEventListener("click", (e) => {
      e.preventDefault();
      openLightboxAll();
    });
  }
}

/* ---------------- Lightbox ---------------- */
let LIGHTBOX_IMAGES = []; // flat list of {src, caption}
let LIGHTBOX_INDEX = 0;

function buildAllGalleryImages() {
  const all = [];
  SITE.behindInterface.steps.forEach(step => {
    (step.gallery || []).forEach(img => all.push({ src: img.src, caption: `${step.title} — ${img.caption}` }));
  });
  return all;
}

function openLightboxForStep(stepIndex) {
  const step = SITE.behindInterface.steps[stepIndex];
  LIGHTBOX_IMAGES = (step.gallery || []).map(img => ({ src: img.src, caption: `${step.title} — ${img.caption}` }));
  LIGHTBOX_INDEX = 0;
  showLightbox();
}

function openLightboxAll() {
  LIGHTBOX_IMAGES = buildAllGalleryImages();
  LIGHTBOX_INDEX = 0;
  showLightbox();
}

function showLightbox() {
  if (!LIGHTBOX_IMAGES.length) return;
  const overlay = document.getElementById("lightbox");
  overlay.classList.remove("hidden");
  renderLightboxFrame();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.style.overflow = "";
}

function renderLightboxFrame() {
  const img = LIGHTBOX_IMAGES[LIGHTBOX_INDEX];
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-img").alt = img.caption;
  document.getElementById("lightbox-caption").textContent = img.caption;
  document.getElementById("lightbox-counter").textContent =
    `${LIGHTBOX_INDEX + 1} / ${LIGHTBOX_IMAGES.length}`;
}

function lightboxNext() {
  LIGHTBOX_INDEX = (LIGHTBOX_INDEX + 1) % LIGHTBOX_IMAGES.length;
  renderLightboxFrame();
}
function lightboxPrev() {
  LIGHTBOX_INDEX = (LIGHTBOX_INDEX - 1 + LIGHTBOX_IMAGES.length) % LIGHTBOX_IMAGES.length;
  renderLightboxFrame();
}

function initLightboxControls() {
  const overlay = document.getElementById("lightbox");
  if (!overlay) return;
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-next").addEventListener("click", lightboxNext);
  document.getElementById("lightbox-prev").addEventListener("click", lightboxPrev);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (overlay.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "ArrowLeft") lightboxPrev();
  });
}

/* ---------------- About + Skills ---------------- */
function renderAbout() {
  if (!document.getElementById("about-col")) return;
  const a = SITE.about, p = SITE.profile;
  document.getElementById("about-col").innerHTML = `
    <div class="kicker">${a.kicker}</div>
    <h2>${a.title}</h2>
    <div class="about-text" style="margin-top:16px;">
      ${a.paragraphs.map(t => `<p>${t}</p>`).join("")}
    </div>
    <div class="about-links">
      <a class="btn btn-light" href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn ${icon('external')}</a>
      <a class="btn btn-light" href="${p.behance}" target="_blank" rel="noopener">Behance ${icon('external')}</a>
    </div>`;

  const sk = SITE.skills;
  document.getElementById("skills-col").innerHTML = `
    <div class="kicker">${sk.kicker}</div>
    <div class="skills-grid" style="margin-top:16px;">
      ${sk.groups.map(g => `
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">${icon(g.icon)}</div>
            <h4>${g.title}</h4>
          </div>
          <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>`;
}

/* ---------------- Experience (two-pane, interactive) ---------------- */
function renderExperience() {
  if (!document.getElementById("timeline")) return;
  const e = SITE.experience;
  document.getElementById("experience-head").innerHTML = `
    <div class="kicker">${e.kicker}</div><h2>${e.title}</h2>`;

  document.getElementById("timeline").innerHTML = e.roles.map((r, i) => `
    <button class="timeline-item ${r.current ? "active" : ""}" data-role="${i}">
      <div class="timeline-dot"></div>
      <h4>${r.company}</h4>
      <div class="role-period">${r.period}</div>
    </button>`).join("");

  function renderDetail(i) {
    const r = e.roles[i];
    document.getElementById("experience-detail").innerHTML = `
      <div class="role-period">${r.period}</div>
      <h3>${r.role}</h3>
      <div class="role-company">${r.company}${r.link ? ` <a href="${r.link}" target="_blank" rel="noopener">${icon('external')}</a>` : ""}</div>
      <ul>${r.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`;
  }

  const defaultIndex = Math.max(0, e.roles.findIndex(r => r.current));
  renderDetail(defaultIndex === -1 ? 0 : defaultIndex);

  document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".timeline-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      renderDetail(parseInt(item.dataset.role, 10));
    });
  });
}

/* ---------------- Contact / Footer ---------------- */
function renderContact() {
  const target = document.getElementById("contact");
  const c = SITE.contact, p = SITE.profile;
  if (target) {
    target.innerHTML = `
      <div class="wrap contact-section">
        <div class="kicker">${c.kicker}</div>
        <h2>${c.title}</h2>
        <p class="subtitle">${c.subtitle}</p>
        <form class="contact-form" onsubmit="event.preventDefault(); window.location.href='mailto:${p.email}?subject=Hello%20Hoa';">
          <input type="email" placeholder="${c.emailPlaceholder}" required>
          <button class="btn btn-light" type="submit">${c.ctaLabel} ${icon('arrow')}</button>
        </form>
        <div class="contact-links">
          <a href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="${p.behance}" target="_blank" rel="noopener">Behance</a>
          <a href="mailto:${p.email}">Email</a>
        </div>
      </div>`;
  }
  renderFooter();
}

function renderFooter() {
  const footerEl = document.getElementById("site-footer");
  if (!footerEl) return;
  const f = SITE.footer, p = SITE.profile;
  footerEl.innerHTML = `
    <div class="wrap footer-row">
      <div class="logo">${p.logoText}</div>
      <div>${f.role} &middot; ${f.location}</div>
      <div>&copy; ${f.year} ${p.name}. All rights reserved.</div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHero();
  renderProjects();
  renderProcess();
  renderBehind();
  renderAbout();
  renderExperience();
  renderContact();
  initLightboxControls();
});
