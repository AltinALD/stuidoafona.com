const IG_URL = "https://www.instagram.com/pmubygerta/";

/* —— Preloader —— */
const preloader = document.getElementById("preloader");
const MIN_PRELOAD_MS = 1800;
const preloadStarted = performance.now();

function hidePreloader() {
  const elapsed = performance.now() - preloadStarted;
  const wait = Math.max(0, MIN_PRELOAD_MS - elapsed);

  window.setTimeout(() => {
    preloader?.classList.add("is-done");
    document.body.classList.remove("is-loading");
    window.setTimeout(() => {
      preloader?.setAttribute("aria-hidden", "true");
      preloader?.remove();
    }, 750);
  }, wait);
}

function whenReady() {
  const heroVideoEl = document.querySelector(".hero-video");
  const logo = document.querySelector(".preloader-logo");

  const waits = [
    document.fonts?.ready ?? Promise.resolve(),
    logo?.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          if (!logo) return resolve();
          logo.addEventListener("load", resolve, { once: true });
          logo.addEventListener("error", resolve, { once: true });
        }),
  ];

  if (heroVideoEl) {
    waits.push(
      new Promise((resolve) => {
        if (heroVideoEl.readyState >= 2) return resolve();
        heroVideoEl.addEventListener("loadeddata", resolve, { once: true });
        heroVideoEl.addEventListener("error", resolve, { once: true });
        window.setTimeout(resolve, 4000);
      })
    );
  }

  Promise.all(waits).then(hidePreloader);
}

if (document.readyState === "complete") {
  whenReady();
} else {
  window.addEventListener("load", whenReady);
}

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileNav?.classList.remove("is-open");
  mobileNav?.setAttribute("aria-hidden", "true");
}

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", open ? "false" : "true");
  mobileNav?.classList.toggle("is-open", !open);
  mobileNav?.setAttribute("aria-hidden", open ? "true" : "false");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 40);
  },
  { passive: true }
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const bookForm = document.getElementById("book-form");
const formNote = document.getElementById("form-note");

bookForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookForm.checkValidity()) {
    bookForm.reportValidity();
    return;
  }

  const data = new FormData(bookForm);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const service = String(data.get("service") || "").trim();
  const city = String(data.get("city") || "").trim();
  const message = String(data.get("message") || "").trim();

  const lines = [
    "Booking request — PMU by Gerta",
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Service: ${service}`,
    `City: ${city}`,
  ];
  if (message) lines.push(`Notes: ${message}`);

  try {
    navigator.clipboard?.writeText(lines.join("\n"));
  } catch (_) {}

  if (formNote) {
    formNote.hidden = false;
    formNote.textContent = "Request copied — opening Instagram. Paste it in a DM.";
  }

  window.open(IG_URL, "_blank", "noopener,noreferrer");
});

const heroVideo = document.querySelector(".hero-video");
heroVideo?.addEventListener("loadeddata", () => {
  heroVideo.play().catch(() => {});
});

function processInstagramEmbeds() {
  if (window.instgrm?.Embeds?.process) {
    window.instgrm.Embeds.process();
  }
}

window.addEventListener("load", () => {
  processInstagramEmbeds();
  window.setTimeout(processInstagramEmbeds, 800);
});
