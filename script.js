const STUDIO = {
  phoneWa: "38344822399",
  openMin: 10 * 60,
  closeMin: 19 * 60,
  closedDays: [0],
  slots: ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"],
};

const SERVICES = [
  { id: "makeup", min: 90, en: "Makeup", sq: "Make-up" },
  { id: "hair", min: 75, en: "Hair", sq: "Flokë" },
  { id: "both", min: 150, en: "Hair & makeup", sq: "Flokë dhe make-up" },
  { id: "brows", min: 60, en: "Brows", sq: "Vetulla" },
  { id: "micro", min: 150, en: "Microblading", sq: "Microblading" },
  { id: "lashes", min: 120, en: "Lashes", sq: "Qerpikë" },
  { id: "lips", min: 120, en: "Lip blush", sq: "Lip blush" },
  { id: "facial", min: 60, en: "Facial", sq: "Trajtim fytyre" },
  { id: "training", min: 180, en: "Training", sq: "Trajnim" },
];

const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  sq: ["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"],
};

const WEEK_SHORT = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  sq: ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Die"],
};

const WEEK_LONG = {
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  sq: ["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"],
};

const I18N = {
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.book": "Book",
    "nav.studio": "Studio",
    "nav.bookCta": "Book a termin",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "lang.label": "Language",
    "hero.kicker": "Makeup · Hair · Brows · Lashes",
    "hero.title": "A little glam, a lot of confidence.",
    "hero.sub": "Makeup, hair, brows, and lashes in Prishtina — and wherever you need us.",
    "hero.book": "Book a termin",
    "about.eyebrow": "The studio",
    "about.title": "Beauty, booked simply.",
    "about.text": "Studio Agona is a beauty studio on Bill Klinton in Prishtina. Clients come for makeup, hair, brows, and lashes. Agona also teaches microblading and travels for weddings and events — in Kosovo and abroad.",
    "about.s1k": "Studio",
    "about.s1v": "Prishtinë",
    "about.s2k": "Travels",
    "about.s2v": "Kosovo & worldwide",
    "about.s3k": "Trainings",
    "about.s3v": "Microblading",
    "svc.eyebrow": "Services",
    "svc.title": "What we do",
    "svc.lead": "Makeup, hair, brows, lashes, lips, and skin — plus training and travel. Prices are confirmed on WhatsApp.",
    "svc.makeup.t": "Makeup",
    "svc.makeup.d": "Full glam, soft glam, and bridal. Skin, eyes, and lips finished for photos, weddings, and events.",
    "svc.makeup.m": "about 1.5 hr · price on WhatsApp",
    "svc.hair.t": "Hair",
    "svc.hair.d": "Blowouts, soft waves, and event styling, finished so the hair sits with the makeup.",
    "svc.hair.m": "about 75 min · price on WhatsApp",
    "svc.brows.t": "Brows",
    "svc.brows.d": "Shaping, combo brows, and microblading. A cleaner frame that still looks like your own brows.",
    "svc.brows.m": "about 1 hr · microblading about 2.5 hr",
    "svc.lashes.t": "Lashes",
    "svc.lashes.d": "Sets that open the eye — fuller for a night out, or lighter for every day.",
    "svc.lashes.m": "about 2 hr · price on WhatsApp",
    "svc.lips.t": "Lip blush",
    "svc.lips.d": "A soft stained color and a more even lip shape that stays after lipstick comes off.",
    "svc.lips.m": "about 2 hr · price on WhatsApp",
    "svc.facial.t": "Facial",
    "svc.facial.d": "A studio facial so skin looks calm and fresh before makeup or an event. We will tell you which treatment fits.",
    "svc.facial.m": "about 1 hr · price on WhatsApp",
    "svc.training.t": "Microblading training",
    "svc.training.d": "For artists who want mapping, technique, and a clean studio standard. Ask on WhatsApp for the next date.",
    "svc.training.m": "about 3 hr · dates on WhatsApp",
    "svc.travel.t": "Traveling artist",
    "svc.travel.d": "Prishtina, the rest of Kosovo, and worldwide. Weddings and events outside the studio.",
    "svc.travel.m": "Book the date on WhatsApp",
    "svc.book": "Book this",
    "svc.ask": "Ask on WhatsApp",
    "looks.eyebrow": "Selected work",
    "looks.title": "Recent looks",
    "looks.lead": "Makeup, hair, brows, and lips from the studio.",
    "looks.event": "Event glam",
    "looks.film": "Studio film",
    "looks.portrait": "Glam portrait",
    "looks.hair": "Soft waves",
    "looks.ig": "See @studioagona",
    "book.eyebrow": "Calendar",
    "book.title": "Book a termin",
    "book.lead": "Pick a service, a day, and a time. Your request opens in WhatsApp and we confirm it there.",
    "book.hours": "Monday–Saturday, 10:00–19:00. Sunday closed.",
    "book.waDirect": "Message without a time",
    "book.service": "Service",
    "book.time": "Time",
    "book.name": "Name",
    "book.phone": "Phone",
    "book.note": "Note",
    "book.namePh": "Your name",
    "book.notePh": "Preferred shade, event, questions…",
    "book.send": "Send on WhatsApp",
    "book.legendOpen": "Open",
    "book.legendTaken": "Taken",
    "book.legendClosed": "Closed",
    "book.prev": "Previous month",
    "book.next": "Next month",
    "book.pickService": "Choose a service to see open times.",
    "book.pickDay": "Choose a day.",
    "book.closed": "Sunday — the studio is closed.",
    "book.none": "No times left this day. Try another date.",
    "book.taken": "Taken",
    "book.past": "Past",
    "book.summaryEmpty": "Choose a service, day, and time.",
    "book.sent": "Opening WhatsApp with your termin.",
    "book.needSlot": "Please choose a service, day, and time.",
    "book.need": "Please add your name and phone.",
    "book.badPhone": "Please add a phone number.",
    "book.today": "Today",
    "studio.eyebrow": "Visit",
    "studio.title": "The studio",
    "studio.lead": "Bill Klinton 302, Prishtina. Message us, or pick a termin above.",
    "studio.address": "Address",
    "studio.phone": "Phone",
    "studio.hours": "Hours",
    "studio.hoursV": "Monday–Saturday 10:00–19:00",
    "studio.sun": "Sunday closed",
    "studio.map": "Open in Maps",
    "studio.before": "Before you come",
    "studio.p1": "Come with clean skin for makeup or a facial.",
    "studio.p2": "Brow and lip work starts with a short consult.",
    "studio.p3": "Travel dates are confirmed on WhatsApp.",
    "footer.line": "Makeup · Hair · Brows · Lashes",
    "wa.float": "WhatsApp Studio Agona",
    "wa.hello": "Hello Studio Agona, I would like to book a termin.",
    "wa.travel": "Hello Studio Agona, I would like to ask about a travel date for makeup and hair.",
    "meta.title": "Studio Agona — Makeup, Hair & Brows in Prishtina",
    "meta.desc": "Studio Agona is a beauty studio in Prishtina. Makeup, hair, brows, lashes, lip blush, and microblading training. Book a termin on WhatsApp.",
    "alt.makeup": "Glam makeup in the studio",
    "alt.hair": "Soft wavy hair",
    "alt.brows": "Natural brows and combo brows",
    "alt.lashes": "Glam makeup with defined lashes",
    "alt.lips": "Natural lips and lip blush",
    "alt.facial": "Facial treatment",
    "alt.event": "Event makeup and hair",
    "alt.portrait": "Glam portrait",
    "status.open": "Open now · until 19:00",
    "status.sunday": "Closed today · Sunday",
    "status.soon": "Opens today at 10:00",
    "status.later": "Closed now",
    "status.opens": "Opens {day} at 10:00",
  },
  sq: {
    "nav.services": "Shërbimet",
    "nav.work": "Puna",
    "nav.book": "Termini",
    "nav.studio": "Studio",
    "nav.bookCta": "Rezervo termin",
    "nav.menu": "Meny",
    "nav.close": "Mbyll",
    "lang.label": "Gjuha",
    "hero.kicker": "Make-up · Flokë · Vetulla · Qerpikë",
    "hero.title": "Pak glam, shumë vetëbesim.",
    "hero.sub": "Make-up, flokë, vetulla dhe qerpikë në Prishtinë — dhe kudo ku ju nevojitemi.",
    "hero.book": "Rezervo termin",
    "about.eyebrow": "Studioja",
    "about.title": "Rezervohet lehtë.",
    "about.text": "Studio Agona është studio bukurie në rrugën Bill Klinton, në Prishtinë. Klientët vijnë për make-up, flokë, vetulla dhe qerpikë. Agona jep edhe trajnime microblading dhe udhëton për dasma e evente — në Kosovë dhe jashtë.",
    "about.s1k": "Studio",
    "about.s1v": "Prishtinë",
    "about.s2k": "Udhëton",
    "about.s2v": "Kosovë dhe botë",
    "about.s3k": "Trajnime",
    "about.s3v": "Microblading",
    "svc.eyebrow": "Shërbimet",
    "svc.title": "Çfarë bëjmë",
    "svc.lead": "Make-up, flokë, vetulla, qerpikë, buzë dhe lëkurë — plus trajnime dhe udhëtime. Çmimet konfirmohen në WhatsApp.",
    "svc.makeup.t": "Make-up",
    "svc.makeup.d": "Glam i plotë, glam i butë dhe nusëri. Lëkura, sytë dhe buzët përgatiten për foto, dasma dhe evente.",
    "svc.makeup.m": "rreth 1.5 orë · çmimi në WhatsApp",
    "svc.hair.t": "Flokë",
    "svc.hair.d": "Tharje, valë të buta dhe stilim për evente, që flokët të shkojnë me make-up-in.",
    "svc.hair.m": "rreth 75 min · çmimi në WhatsApp",
    "svc.brows.t": "Vetulla",
    "svc.brows.d": "Formësim, combo brows dhe microblading. Një kornizë më e pastër që duket si vetullat tuaja.",
    "svc.brows.m": "rreth 1 orë · microblading rreth 2.5 orë",
    "svc.lashes.t": "Qerpikë",
    "svc.lashes.d": "Sete që e hapin syrin — më të plota për mbrëmje, ose më të lehta për çdo ditë.",
    "svc.lashes.m": "rreth 2 orë · çmimi në WhatsApp",
    "svc.lips.t": "Lip blush",
    "svc.lips.d": "Ngjyrë e butë dhe formë më e barabartë, që mbetet edhe kur hiqet buzëkuqi.",
    "svc.lips.m": "rreth 2 orë · çmimi në WhatsApp",
    "svc.facial.t": "Trajtim fytyre",
    "svc.facial.d": "Trajtim fytyre në studio, që lëkura të duket e qetë dhe e freskët para make-up-it ose një eventi. Ju themi cili trajtim ju përshtatet.",
    "svc.facial.m": "rreth 1 orë · çmimi në WhatsApp",
    "svc.training.t": "Trajnim microblading",
    "svc.training.d": "Për artiste që duan hartim, teknikë dhe një standard të pastër studioje. Pyesni në WhatsApp për datën tjetër.",
    "svc.training.m": "rreth 3 orë · datat në WhatsApp",
    "svc.travel.t": "Artiste në lëvizje",
    "svc.travel.d": "Prishtinë, Kosovë dhe kudo në botë. Dasma dhe evente jashtë studios.",
    "svc.travel.m": "Datën e rezervoni në WhatsApp",
    "svc.book": "Rezervo",
    "svc.ask": "Pyet në WhatsApp",
    "looks.eyebrow": "Punë të zgjedhura",
    "looks.title": "Look-et e fundit",
    "looks.lead": "Make-up, flokë, vetulla dhe buzë nga studioja.",
    "looks.event": "Glam eventi",
    "looks.film": "Film nga studioja",
    "looks.portrait": "Portret glam",
    "looks.hair": "Valë të buta",
    "looks.ig": "Shiko @studioagona",
    "book.eyebrow": "Kalendari",
    "book.title": "Rezervo termin",
    "book.lead": "Zgjidhni shërbimin, ditën dhe orën. Kërkesa hapet në WhatsApp dhe e konfirmojmë aty.",
    "book.hours": "E hënë–e shtunë, 10:00–19:00. E diel mbyllur.",
    "book.waDirect": "Shkruaj pa orë",
    "book.service": "Shërbimi",
    "book.time": "Ora",
    "book.name": "Emri",
    "book.phone": "Telefoni",
    "book.note": "Shënim",
    "book.namePh": "Emri juaj",
    "book.notePh": "Ngjyra, eventi, pyetje…",
    "book.send": "Dërgo në WhatsApp",
    "book.legendOpen": "Lirë",
    "book.legendTaken": "Zënë",
    "book.legendClosed": "Mbyllur",
    "book.prev": "Muaji para",
    "book.next": "Muaji tjetër",
    "book.pickService": "Zgjidhni shërbimin që të shihni orët e lira.",
    "book.pickDay": "Zgjidhni një ditë.",
    "book.closed": "E diel — studioja është mbyllur.",
    "book.none": "Nuk ka orë të lira këtë ditë. Provoni një datë tjetër.",
    "book.taken": "Zënë",
    "book.past": "Kaluar",
    "book.summaryEmpty": "Zgjidhni shërbimin, ditën dhe orën.",
    "book.sent": "Po hapet WhatsApp me terminin tuaj.",
    "book.needSlot": "Ju lutem zgjidhni shërbimin, ditën dhe orën.",
    "book.need": "Ju lutem shkruani emrin dhe telefonin.",
    "book.badPhone": "Ju lutem shkruani një numër telefoni.",
    "book.today": "Sot",
    "studio.eyebrow": "Na vizitoni",
    "studio.title": "Studioja",
    "studio.lead": "Bill Klinton 302, Prishtinë. Na shkruani, ose zgjidhni një termin më sipër.",
    "studio.address": "Adresa",
    "studio.phone": "Telefoni",
    "studio.hours": "Orari",
    "studio.hoursV": "E hënë–e shtunë 10:00–19:00",
    "studio.sun": "E diel mbyllur",
    "studio.map": "Hape në Maps",
    "studio.before": "Para se të vini",
    "studio.p1": "Ejani me lëkurë të pastër për make-up ose trajtim fytyre.",
    "studio.p2": "Puna e vetullave dhe buzëve fillon me një konsultë të shkurtër.",
    "studio.p3": "Datat jashtë studios konfirmohen në WhatsApp.",
    "footer.line": "Make-up · Flokë · Vetulla · Qerpikë",
    "wa.float": "WhatsApp Studio Agona",
    "wa.hello": "Përshëndetje Studio Agona, dëshiroj të rezervoj një termin.",
    "wa.travel": "Përshëndetje Studio Agona, dëshiroj të pyes për një datë jashtë studios për make-up dhe flokë.",
    "meta.title": "Studio Agona — Make-up, Flokë dhe Vetulla në Prishtinë",
    "meta.desc": "Studio Agona është studio bukurie në Prishtinë. Make-up, flokë, vetulla, qerpikë, lip blush dhe trajnim microblading. Rezervo termin në WhatsApp.",
    "alt.makeup": "Make-up glam në studio",
    "alt.hair": "Flokë me valë të buta",
    "alt.brows": "Vetulla natyrale dhe combo brows",
    "alt.lashes": "Make-up glam me qerpikë të theksuar",
    "alt.lips": "Buzë natyrale dhe lip blush",
    "alt.facial": "Trajtim fytyre",
    "alt.event": "Make-up dhe flokë për event",
    "alt.portrait": "Portret glam",
    "status.open": "Hapur tani · deri në 19:00",
    "status.sunday": "Mbyllur sot · e diel",
    "status.soon": "Hapet sot në 10:00",
    "status.later": "Mbyllur tani",
    "status.opens": "Hapet {day} në 10:00",
  },
};

const now = new Date();
const state = {
  lang: localStorage.getItem("studioagona-lang") === "sq" ? "sq" : "en",
  viewYear: now.getFullYear(),
  viewMonth: now.getMonth(),
  serviceId: null,
  iso: null,
  time: null,
};

const BOOK_KEY = "studioagona-bookings";

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}

function waLink(text) {
  return `https://wa.me/${STUDIO.phoneWa}?text=${encodeURIComponent(text)}`;
}

function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function serviceById(id) {
  return SERVICES.find((item) => item.id === id);
}

function formatDuration(min, lang) {
  const hours = Math.floor(min / 60);
  const rem = min % 60;
  if (!hours) return lang === "sq" ? `rreth ${min} min` : `about ${min} min`;
  if (!rem) return lang === "sq" ? `rreth ${hours} orë` : hours === 1 ? "about 1 hr" : `about ${hours} hr`;
  if (rem === 30) return lang === "sq" ? `rreth ${hours}.5 orë` : `about ${hours}.5 hr`;
  return lang === "sq" ? `rreth ${hours} orë ${rem} min` : `about ${hours} hr ${rem} min`;
}

function formatLong(date) {
  const month = MONTHS[state.lang][date.getMonth()];
  const week = WEEK_LONG[state.lang][date.getDay()];
  const prettyMonth = state.lang === "sq" ? month : month;
  return `${week}, ${date.getDate()} ${prettyMonth} ${date.getFullYear()}`;
}

function loadBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOK_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function minutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function fittingSlots(serviceId) {
  const service = serviceById(serviceId);
  if (!service) return STUDIO.slots.slice();
  return STUDIO.slots.filter((time) => minutes(time) + service.min <= STUDIO.closeMin);
}

function isPastSlot(iso, time) {
  const when = parseISO(iso);
  const [h, m] = time.split(":").map(Number);
  when.setHours(h, m, 0, 0);
  return when.getTime() < Date.now();
}

function hashTaken(iso, time) {
  const key = `${iso}|${time}|agona`;
  let h = 2166136261;
  for (let i = 0; i < key.length; i += 1) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const today = startOfDay(new Date());
  const diff = (startOfDay(parseISO(iso)) - today) / 86400000;
  if (diff < 0 || diff > 21) return false;
  return (h >>> 0) % 6 === 0;
}

function slotState(iso, time, serviceId) {
  const key = `${iso}|${time}`;
  if (loadBookings()[key]) return "user";
  if (hashTaken(iso, time)) return "seed";
  return "open";
}

function daySlots(iso, serviceId) {
  const slots = fittingSlots(serviceId).filter((time) => !isPastSlot(iso, time));
  const rows = slots.map((time) => ({ time, state: slotState(iso, time, serviceId) }));
  const open = rows.filter((row) => row.state === "open");
  if (!open.length) {
    const seed = [...rows].reverse().find((row) => row.state === "seed");
    if (seed) seed.state = "open";
  }
  return rows;
}

function applyI18n() {
  document.documentElement.lang = state.lang === "sq" ? "sq" : "en";
  document.title = t("meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang ? "true" : "false");
  });

  const hello = waLink(t("wa.hello"));
  ["whatsapp-float", "hero-wa", "menu-wa", "book-wa"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = hello;
  });
  const travel = document.getElementById("travel-wa");
  if (travel) travel.href = waLink(t(travel.dataset.waKey));

  const menuBtn = document.querySelector(".menu-toggle");
  if (menuBtn) {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", open ? t("nav.close") : t("nav.menu"));
  }
}

function renderStatus() {
  const dot = document.getElementById("live-dot");
  const label = document.getElementById("live-status");
  if (!label) return;
  const current = new Date();
  const day = current.getDay();
  const mins = current.getHours() * 60 + current.getMinutes();
  let text = t("status.later");
  let open = false;

  if (STUDIO.closedDays.includes(day)) {
    text = t("status.sunday");
  } else if (mins >= STUDIO.openMin && mins < STUDIO.closeMin) {
    text = t("status.open");
    open = true;
  } else if (mins < STUDIO.openMin) {
    text = t("status.soon");
  } else {
    const next = new Date(current);
    next.setDate(next.getDate() + 1);
    while (STUDIO.closedDays.includes(next.getDay())) next.setDate(next.getDate() + 1);
    text = t("status.opens").replace("{day}", WEEK_LONG[state.lang][next.getDay()]);
  }

  label.textContent = text;
  dot?.classList.toggle("is-open", open);
}

function renderServices() {
  const wrap = document.getElementById("service-picks");
  if (!wrap) return;
  wrap.innerHTML = "";
  SERVICES.forEach((service) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.setAttribute("aria-pressed", service.id === state.serviceId ? "true" : "false");
    const name = document.createElement("span");
    name.textContent = service[state.lang] || service.en;
    const meta = document.createElement("small");
    meta.textContent = formatDuration(service.min, state.lang);
    btn.append(name, meta);
    btn.addEventListener("click", () => {
      state.serviceId = service.id;
      if (state.time && state.iso) {
        const allowed = daySlots(state.iso, state.serviceId).some((row) => row.time === state.time && row.state === "open");
        if (!allowed) state.time = null;
      }
      renderBook();
    });
    wrap.append(btn);
  });
}

function monthLimits() {
  const today = new Date();
  const max = new Date(today.getFullYear(), today.getMonth() + 2, 1);
  const view = new Date(state.viewYear, state.viewMonth, 1);
  const min = new Date(today.getFullYear(), today.getMonth(), 1);
  return {
    prev: view > min,
    next: view < max,
  };
}

function renderCalendar() {
  const title = document.getElementById("cal-title");
  const week = document.getElementById("cal-week");
  const grid = document.getElementById("cal-grid");
  const prev = document.getElementById("cal-prev");
  const next = document.getElementById("cal-next");
  if (!grid) return;

  const monthName = MONTHS[state.lang][state.viewMonth];
  const pretty = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  title.textContent = `${pretty} ${state.viewYear}`;
  week.innerHTML = WEEK_SHORT[state.lang].map((day) => `<span>${day}</span>`).join("");

  const limits = monthLimits();
  prev.disabled = !limits.prev;
  next.disabled = !limits.next;

  grid.innerHTML = "";
  const first = new Date(state.viewYear, state.viewMonth, 1);
  let lead = first.getDay();
  lead = lead === 0 ? 6 : lead - 1;
  const days = new Date(state.viewYear, state.viewMonth + 1, 0).getDate();
  const todayIso = toISO(new Date());

  for (let i = 0; i < lead; i += 1) {
    const blank = document.createElement("span");
    grid.append(blank);
  }

  for (let day = 1; day <= days; day += 1) {
    const date = new Date(state.viewYear, state.viewMonth, day);
    const iso = toISO(date);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = String(day);
    const past = startOfDay(date) < startOfDay(new Date());
    const closed = STUDIO.closedDays.includes(date.getDay());
    if (iso === todayIso) btn.classList.add("is-today");
    if (past || closed) {
      btn.disabled = true;
      btn.setAttribute("aria-label", `${formatLong(date)}, ${closed ? t("book.legendClosed") : t("book.past")}`);
    } else {
      btn.setAttribute("aria-pressed", iso === state.iso ? "true" : "false");
      btn.setAttribute("aria-label", `${formatLong(date)}${iso === todayIso ? `, ${t("book.today")}` : ""}`);
      btn.addEventListener("click", () => {
        state.iso = iso;
        if (state.time && state.serviceId) {
          const allowed = daySlots(iso, state.serviceId).some((row) => row.time === state.time && row.state === "open");
          if (!allowed) state.time = null;
        }
        renderBook();
      });
    }
    grid.append(btn);
  }
}

function renderSlots() {
  const grid = document.getElementById("slot-grid");
  const summary = document.getElementById("book-summary");
  if (!grid) return;
  grid.innerHTML = "";

  const note = document.createElement("p");
  note.className = "slot-empty";

  if (!state.serviceId) {
    note.textContent = t("book.pickService");
    grid.append(note);
  } else if (!state.iso) {
    note.textContent = t("book.pickDay");
    grid.append(note);
  } else if (STUDIO.closedDays.includes(parseISO(state.iso).getDay())) {
    note.textContent = t("book.closed");
    grid.append(note);
  } else {
    const rows = daySlots(state.iso, state.serviceId);
    if (!rows.length) {
      note.textContent = t("book.none");
      grid.append(note);
    } else {
      rows.forEach((row) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "slot";
        btn.textContent = row.time;
        const open = row.state === "open";
        btn.disabled = !open;
        btn.setAttribute("aria-pressed", open && row.time === state.time ? "true" : "false");
        if (!open) btn.setAttribute("aria-label", `${row.time} ${t("book.taken")}`);
        btn.addEventListener("click", () => {
          state.time = row.time;
          renderBook();
        });
        grid.append(btn);
      });
    }
  }

  const service = serviceById(state.serviceId);
  if (service && state.iso && state.time) {
    const name = service[state.lang] || service.en;
    summary.textContent = `${name} · ${formatLong(parseISO(state.iso))} · ${state.time}`;
  } else {
    summary.textContent = t("book.summaryEmpty");
  }
}

function renderBook() {
  renderServices();
  renderCalendar();
  renderSlots();
}

function setLang(lang) {
  state.lang = lang === "sq" ? "sq" : "en";
  localStorage.setItem("studioagona-lang", state.lang);
  applyI18n();
  renderStatus();
  renderBook();
}

function bookingMessage() {
  const service = serviceById(state.serviceId);
  const name = document.getElementById("guest-name").value.trim();
  const phone = document.getElementById("guest-phone").value.trim();
  const note = document.getElementById("guest-note").value.trim();
  const date = formatLong(parseISO(state.iso));
  const duration = formatDuration(service.min, state.lang);
  const serviceName = service[state.lang] || service.en;

  const lines = state.lang === "sq"
    ? [
      "Përshëndetje Studio Agona,",
      "dëshiroj të rezervoj një termin.",
      "",
      `Shërbimi: ${serviceName} (${duration})`,
      `Data: ${date}`,
      `Ora: ${state.time}`,
      `Emri: ${name}`,
      `Telefoni: ${phone}`,
    ]
    : [
      "Hello Studio Agona,",
      "I would like to book a termin.",
      "",
      `Service: ${serviceName} (${duration})`,
      `Date: ${date}`,
      `Time: ${state.time}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
    ];
  if (note) lines.push(state.lang === "sq" ? `Shënim: ${note}` : `Note: ${note}`);
  return lines.join("\n");
}

function initForm() {
  const form = document.getElementById("book-form");
  const note = document.getElementById("form-note");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    note.classList.remove("is-error");
    if (!state.serviceId || !state.iso || !state.time) {
      note.textContent = t("book.needSlot");
      note.classList.add("is-error");
      return;
    }
    const guest = document.getElementById("guest-name").value.trim();
    const phone = document.getElementById("guest-phone").value.trim();
    if (guest.length < 2 || phone.length < 6) {
      note.textContent = t("book.need");
      note.classList.add("is-error");
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      note.textContent = t("book.badPhone");
      note.classList.add("is-error");
      return;
    }

    const all = loadBookings();
    all[`${state.iso}|${state.time}`] = {
      serviceId: state.serviceId,
      name: guest,
      at: Date.now(),
    };
    localStorage.setItem(BOOK_KEY, JSON.stringify(all));
    note.textContent = t("book.sent");
    const message = bookingMessage();
    state.time = null;
    renderBook();
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  });
}

function initChrome() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.querySelector(".mobile-nav");
  const floatEl = document.getElementById("whatsapp-float");

  const closeMenu = () => {
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", t("nav.menu"));
    mobile?.classList.remove("is-open");
    mobile?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", open ? "false" : "true");
    toggle.setAttribute("aria-label", open ? t("nav.menu") : t("nav.close"));
    mobile?.classList.toggle("is-open", !open);
    mobile?.setAttribute("aria-hidden", open ? "true" : "false");
    document.body.classList.toggle("menu-open", !open);
  });

  mobile?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  document.querySelectorAll("[data-book]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.serviceId = btn.dataset.book;
      state.time = null;
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
      renderBook();
    });
  });

  document.getElementById("cal-prev")?.addEventListener("click", () => {
    if (!monthLimits().prev) return;
    const date = new Date(state.viewYear, state.viewMonth - 1, 1);
    state.viewYear = date.getFullYear();
    state.viewMonth = date.getMonth();
    renderCalendar();
  });

  document.getElementById("cal-next")?.addEventListener("click", () => {
    if (!monthLimits().next) return;
    const date = new Date(state.viewYear, state.viewMonth + 1, 1);
    state.viewYear = date.getFullYear();
    state.viewMonth = date.getMonth();
    renderCalendar();
  });

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  }, { passive: true });

  const sections = ["services", "looks", "book", "studio"];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) link?.setAttribute("aria-current", "true");
      else link?.removeAttribute("aria-current");
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 });
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  const bookObserver = new IntersectionObserver(([entry]) => {
    floatEl?.classList.toggle("is-hidden", Boolean(entry?.isIntersecting));
  }, { threshold: 0.2 });
  const bookForm = document.getElementById("book-form");
  if (bookForm) bookObserver.observe(bookForm);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const started = performance.now();
  const video = document.querySelector(".hero-video");
  const logo = document.querySelector(".preloader-logo");
  const waits = [
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((resolve) => {
      if (!logo || logo.complete) return resolve();
      logo.addEventListener("load", resolve, { once: true });
      logo.addEventListener("error", resolve, { once: true });
    }),
    new Promise((resolve) => {
      if (!video || video.readyState >= 2) return resolve();
      video.addEventListener("loadeddata", resolve, { once: true });
      video.addEventListener("error", resolve, { once: true });
      window.setTimeout(resolve, 2200);
    }),
  ];

  Promise.all(waits).then(() => {
    const wait = Math.max(0, 900 - (performance.now() - started));
    window.setTimeout(() => {
      preloader?.classList.add("is-done");
      document.body.classList.remove("is-loading");
      window.setTimeout(() => preloader?.remove(), 700);
    }, wait);
  });
}

applyI18n();
renderStatus();
renderBook();
initForm();
initChrome();
initPreloader();
window.setInterval(renderStatus, 30000);
