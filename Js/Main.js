// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  if (!window.SITE) return;

  // header items
  const brandTitle = document.querySelectorAll(".site-title");
  brandTitle.forEach(el => el.textContent = window.SITE.title);

  const phoneEls = document.querySelectorAll(".site-phone");
  phoneEls.forEach(el => el.textContent = window.SITE.phone);

  const taglineEls = document.querySelectorAll(".site-tagline");
  taglineEls.forEach(el => el.textContent = window.SITE.tagline);

  const emailEls = document.querySelectorAll(".site-email");
  emailEls.forEach(el => el.textContent = window.SITE.email);

  // populate services list (if element exists)
  const servicesContainer = document.getElementById("services-list");
  if (servicesContainer && window.SITE.services) {
    servicesContainer.innerHTML = window.SITE.services.map(s => `
      <div class="card">
        <h3>${s.title} — $${s.price}</h3>
        <p class="muted">${s.desc}</p>
        <p><strong>Estimated:</strong> ${s.est}</p>
        <button class="select-service" data-id="${s.id}">Select</button>
      </div>
    `).join("");
  }

  // populate booking select options
  const bookingSelect = document.getElementById("booking-service");
  if (bookingSelect && window.SITE.services) {
    bookingSelect.innerHTML = window.SITE.services.map(s => `<option value="${s.title}">${s.title} — $${s.price}</option>`).join("");
  }

  // populate gallery
  const galleryEl = document.getElementById("gallery-grid");
  if (galleryEl && window.SITE.gallery) {
    galleryEl.innerHTML = window.SITE.gallery.map(item => {
      if (item.type === "image") {
        return `<div class="gallery-item"><img src="${item.src}" alt="${item.alt}"></div>`;
      } else if (item.type === "video") {
        return `<div class="gallery-item"><video controls poster="${item.poster || ''}" preload="metadata" playsinline><source src="${item.src}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
      }
      return "";
    }).join("");
  }

  // update footer contact
  const footerContact = document.querySelectorAll(".footer-contact");
  footerContact.forEach(el => el.textContent = `Phone: ${window.SITE.phone} • ${window.SITE.serviceArea}`);
});
