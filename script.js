const translations = {
  sq: {
    "nav.services": "Shërbimet",
    "nav.gallery": "Galeria",
    "nav.about": "Rreth nesh",
    "nav.contact": "Kontakt",
    "cta.book": "Rezervo",
    "cta.bookCall": "Rezervo tani",
    "hero.title": "Shërbime profesionale të heqjes së qimeve me laser",
    "hero.sub": "Teknologji moderne. Ambient luksoz. Rezultate të dukshme.",
    "services.eyebrow": "Çfarë ofrojmë",
    "services.title": "Shërbimet tona",
    "services.lead": "Trajtime estetike me standard klinik — nga laseri deri te spa japoneze.",
    "services.laser": "Heqja e qimeve me laser",
    "services.laserDesc": "Epilim i saktë dhe i qëndrueshëm me teknologji Ice Titanium.",
    "services.bioreDesc": "Peeling kimik për lëkurë më të ndritshme dhe uniforme.",
    "services.weight": "Humbja e peshës",
    "services.weightDesc": "Programe formuese për siluetë më të tonifikuar.",
    "services.emsDesc": "Ndërtim muskulor dhe reduktim yndyre pa kirurgji.",
    "services.iceDesc": "Laser i ftohtë për trajtime të rehatshme dhe efikase.",
    "services.facials": "Trajtime fytyre",
    "services.facialsDesc": "Kujdes profesional për shkëlqim dhe rinovim të lëkurës.",
    "services.spa": "Spa japoneze",
    "services.spaDesc": "Rituale relaksi me frymëzim nga tradita japoneze.",
    "gallery.eyebrow": "Momentet tona",
    "gallery.title": "Galeria",
    "gallery.lead": "Një vështrim brenda klinikës — teknologji, kujdes dhe ambient i qetë.",
    "about.eyebrow": "Pse Viola",
    "about.title": "Rreth nesh",
    "about.p1":
      "Viola Laser Clinic në Shkup ofron trajtime estetike me standard të lartë — nga heqja e qimeve me laser deri te kujdesi i specializuar i lëkurës.",
    "about.p2":
      "Ekipi ynë punon me pajisje moderne në një ambient të pastër dhe të qetë, ku rehatia dhe rezultatet janë prioritet.",
    "about.point1": "Teknologji Ice Titanium",
    "about.point2": "Specialistë të përvojshëm",
    "about.point3": "Ambient klinik luksoz",
    "contact.eyebrow": "Na vizitoni",
    "contact.title": "Kontakt & vendndodhja",
    "contact.lead": "Rezervoni terminim tuaj — jemi këtu për t'ju ndihmuar.",
    "contact.addressLabel": "Adresa",
    "contact.phoneLabel": "Telefon",
    "contact.hoursLabel": "Orari",
    "contact.hours": "Hën–Prem 10:00–18:00 · Shtunë 10:00–16:00",
  },
  mk: {
    "nav.services": "Услуги",
    "nav.gallery": "Галерија",
    "nav.about": "За нас",
    "nav.contact": "Контакт",
    "cta.book": "Резервирај",
    "cta.bookCall": "Резервирај сега",
    "hero.title": "Професионални услуги за ласерска епилација",
    "hero.sub": "Модерна технологија. Луксузен амбиент. Видливи резултати.",
    "services.eyebrow": "Што нудиме",
    "services.title": "Нашите услуги",
    "services.lead": "Естетски третмани со клинички стандард — од лазер до јапонско спа.",
    "services.laser": "Ласерска епилација",
    "services.laserDesc": "Прецизна и трајна епилација со Ice Titanium технологија.",
    "services.bioreDesc": "Хемиски пилинг за посветла и порамномерна кожа.",
    "services.weight": "Слабеење",
    "services.weightDesc": "Програми за обликување за позатегната силуета.",
    "services.emsDesc": "Градење мускули и намалување на масти без хирургија.",
    "services.iceDesc": "Ладен лазер за удобни и ефикасни третмани.",
    "services.facials": "Третмани за лице",
    "services.facialsDesc": "Професионална нега за сјај и обновување на кожата.",
    "services.spa": "Јапонско спа",
    "services.spaDesc": "Ритуали на релаксација инспирирани од јапонската традиција.",
    "gallery.eyebrow": "Нашите моменти",
    "gallery.title": "Галерија",
    "gallery.lead": "Поглед во клиниката — технологија, нега и мирен амбиент.",
    "about.eyebrow": "Зошто Viola",
    "about.title": "За нас",
    "about.p1":
      "Viola Laser Clinic во Скопје нуди естетски третмани со висок стандард — од ласерска епилација до специјализирана нега на кожата.",
    "about.p2":
      "Нашиот тим работи со модерна опрема во чист и мирен амбиент, каде удобноста и резултатите се приоритет.",
    "about.point1": "Ice Titanium технологија",
    "about.point2": "Искусни специјалисти",
    "about.point3": "Луксузен клинички амбиент",
    "contact.eyebrow": "Посетете нè",
    "contact.title": "Контакт и локација",
    "contact.lead": "Резервирајте термин — тука сме да ви помогнеме.",
    "contact.addressLabel": "Адреса",
    "contact.phoneLabel": "Телефон",
    "contact.hoursLabel": "Работно време",
    "contact.hours": "Пон–Пет 10:00–18:00 · Саб 10:00–16:00",
  },
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.sq;
  document.documentElement.lang = lang === "mk" ? "mk" : "sq";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    localStorage.setItem("viola-lang", lang);
  } catch (_) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

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

let saved = "sq";
try {
  saved = localStorage.getItem("viola-lang") || "sq";
} catch (_) {}
setLanguage(saved === "mk" ? "mk" : "sq");
