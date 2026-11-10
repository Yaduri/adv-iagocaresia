const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const WA = "5515988198826";

/* WhatsApp: monta o link com a mensagem de cada botão */
$$("[data-wa]").forEach((a) => {
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent(a.dataset.wa)}`;
});

/* Header: esconde ao rolar para baixo, volta ao rolar para cima */
const nav = $("#nav");
const progress = $("#progress");
let lastY = 0;
function onScroll() {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > 30);
  nav.classList.toggle("hidden", y > lastY && y > 400 && !menu.classList.contains("open"));
  lastY = y;
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  updateSteps();
}

/* Menu mobile */
const menu = $("#menu");
const burger = $("#burger");
function toggleMenu(open) {
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-hidden", String(!open));
  burger.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () => toggleMenu(true));
$("#close").addEventListener("click", () => toggleMenu(false));
$$("#menu a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
addEventListener("keydown", (e) => e.key === "Escape" && toggleMenu(false));

/* Scroll-spy */
const links = $$(".nav-links a");
const spy = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("main section[id]").forEach((s) => spy.observe(s));

/* Reveal */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
$$(".reveal").forEach((el) => io.observe(el));

/* Abas (ARIA) */
const tabs = $$('[role="tab"]');
function selectTab(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    const p = $(`#${t.getAttribute("aria-controls")}`);
    p.hidden = !on;
    p.classList.toggle("active", on);
  });
  tab.focus();
}
tabs.forEach((t, i) => {
  t.addEventListener("click", () => selectTab(t));
  t.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") selectTab(tabs[(i + 1) % tabs.length]);
    if (e.key === "ArrowLeft") selectTab(tabs[(i - 1 + tabs.length) % tabs.length]);
  });
});

/* Toggle Pessoa / Empresa */
$$(".toggle button").forEach((b) =>
  b.addEventListener("click", () => {
    $$(".toggle button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    $$(".sit-grid").forEach((g) => g.classList.toggle("active", g.id === b.dataset.target));
  })
);

/* Carrossel de avaliações */
const track = $("#track");
const step = () => Math.min(track.clientWidth * 0.84, 384) + 19;
$("#prev").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
$("#next").addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));

/* Linha de progresso da seção "Como funciona" */
const steps = $("#steps");
function updateSteps() {
  const r = steps.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
  steps.style.setProperty("--p", p.toFixed(3));
}

/* Atendimento: aberto agora? (seg–sex, 11h–17h, horário de Brasília) */
function tick() {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  const wd = get("weekday").toLowerCase().replace(".", "");
  const h = parseInt(get("hour"), 10) % 24;
  const m = get("minute");
  const open = !["sáb", "dom"].includes(wd) && h >= 11 && h < 17;
  $("#clock").textContent = `${String(h).padStart(2, "0")}:${m}`;
  $("#status").classList.toggle("open", open);
  $("#status-txt").textContent = open ? "Atendimento aberto agora" : "Fora do horário de atendimento";
}
tick();
setInterval(tick, 30000);

addEventListener("scroll", onScroll, { passive: true });
onScroll();
