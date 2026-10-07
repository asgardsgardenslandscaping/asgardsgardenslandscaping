/* Asgard's Gardens Landscaping — main.js
   Mobile nav, portfolio lightbox, SMS quote form. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-links");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
    navList.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });
  }

  /* ---------- Portfolio lightbox ---------- */
  var gallery = document.querySelector(".gallery");
  var lightbox = document.getElementById("lightbox");
  if (gallery && lightbox) {
    var items = Array.prototype.slice.call(gallery.querySelectorAll("figure"));
    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector("figcaption");
    var current = 0;

    function show(i) {
      current = (i + items.length) % items.length;
      var img = items[current].querySelector("img");
      var cap = items[current].querySelector("figcaption");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = cap ? cap.textContent : img.alt;
    }
    function openLb(i) {
      show(i);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox-close").focus();
    }
    function closeLb() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    items.forEach(function (fig, i) {
      fig.addEventListener("click", function () { openLb(i); });
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", "View larger: " + fig.querySelector("img").alt);
      fig.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLb(i); }
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLb);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", function (e) {
      e.stopPropagation(); show(current - 1);
    });
    lightbox.querySelector(".lightbox-next").addEventListener("click", function (e) {
      e.stopPropagation(); show(current + 1);
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ---------- SMS quote form (no backend — opens the visitor's SMS app) ---------- */
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      var service = form.querySelector('[name="service"]').value;
      var details = form.querySelector('[name="details"]').value.trim();

      var lines = ["Hi Asgard's Gardens Landscaping, I'd like a quote."];
      if (name) lines.push("Name: " + name);
      if (phone) lines.push("My number: " + phone);
      if (service) lines.push("Service: " + service);
      if (details) lines.push("Details: " + details);

      var smsUrl = "sms:+15875459896?body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = smsUrl;
    });
  }
})();
