// script.js
/* ============== i18n ============== */
const i18n = {
  ru: {
    nav: { services:"Услуги", portfolio:"Портфолио", process:"Процесс", pricing:"Цены", faq:"FAQ", cta:"Обсудить проект" },
    hero: {
      title:"Студия разработки: сайты, Telegram-боты, поддержка, хостинг, приложения",
      subtitle:"Проекты под любой бюджет и сложность. От лендингов и WordPress до кастомных решений.",
      primary:"Смотреть портфолио",
      secondary:"Получить консультацию"
    },
    services: { title:"Услуги" },
    portfolio: {
      title:"Портфолио",
      filters:{ all:"Все", websites:"Сайты", bots:"Боты", apps:"Приложения" },
      modal:{ challenge:"Задача", solution:"Решение", result:"Результат" }
    },
    process:{ title:"Как мы работаем" },
    pricing:{ title:"Пакеты и цены" },
    faq:{ title:"Ответы на вопросы" },
    contacts:{
      title:"Контакты",
      steps:{ 1:"Напишите нам и кратко опишите задачу", 2:"Пришлите 2–3 референса", 3:"Получите смету в 1–2 вариантах" },
      policy:"Политика конфиденциальности"
    },
    policy:{
      title:"Политика конфиденциальности",
      p1:"Мы не собираем персональные данные на этом сайте. Контакты осуществляются через внешние каналы связи.",
      p2:"Файлы cookie могут использоваться для базовой аналитики посещений.",
      p3:"По вопросам напишите на email или в мессенджеры."
    }
  },
  pt: {
    nav: { services:"Serviços", portfolio:"Portfólio", process:"Processo", pricing:"Preços", faq:"FAQ", cta:"Discutir projeto" },
    hero: {
      title:"Estúdio de desenvolvimento: sites, bots no Telegram, suporte, hospedagem e apps",
      subtitle:"Projetos para todo orçamento e nível de complexidade. De landing pages e WordPress a soluções customizadas.",
      primary:"Ver portfólio",
      secondary:"Solicitar consultoria"
    },
    services: { title:"Serviços" },
    portfolio: {
      title:"Portfólio",
      filters:{ all:"Todos", websites:"Sites", bots:"Bots", apps:"Apps" },
      modal:{ challenge:"Desafio", solution:"Solução", result:"Resultado" }
    },
    process:{ title:"Como trabalhamos" },
    pricing:{ title:"Planos e preços" },
    faq:{ title:"Perguntas frequentes" },
    contacts:{
      title:"Contatos",
      steps:{ 1:"Envie uma mensagem e descreva a tarefa", 2:"Compartilhe 2–3 referências", 3:"Receba um orçamento em 1–2 opções" },
      policy:"Política de Privacidade"
    },
    policy:{
      title:"Política de Privacidade",
      p1:"Não coletamos dados pessoais neste site. O contato é feito por canais externos.",
      p2:"Cookies podem ser usados para análise básica de visitas.",
      p3:"Em caso de dúvidas, escreva por email ou mensageiros."
    }
  }
};

/* ============== Data ============== */
const services = [
  {
    emoji:"🧭", titleRU:"Сайты под ключ", titlePT:"Sites completos",
    pointsRU:["Лендинги и корпоративные сайты","Каталоги и блоги","Оптимизация скорости и SEO-база","Адаптив и доступность"],
    pointsPT:["Landings e sites institucionais","Catálogos e blogs","Performance e SEO básico","Responsivo e acessível"]
  },
  {
    emoji:"🧩", titleRU:"WordPress: темы/плагины", titlePT:"WordPress: temas/plugins",
    pointsRU:["Кастомные темы","Доработка плагинов","Миграции и импорт контента","Безопасность и кэш"],
    pointsPT:["Temas sob medida","Ajustes de plugins","Migrações e importação","Segurança e cache"]
  },
  {
    emoji:"🤖", titleRU:"Telegram-боты", titlePT:"Bots no Telegram",
    pointsRU:["Квизы и заявки","Запись и уведомления","Админ-панели в TG","Вебхуки (описание, без реализации)"],
    pointsPT:["Quizzes e leads","Agenda e notificações","Painéis no Telegram","Webhooks (descrição, sem implementar)"]
  },
  {
    emoji:"🛠️", titleRU:"Поддержка и администрирование", titlePT:"Suporte e administração",
    pointsRU:["SLA-пакеты (ежемесячно)","Резервные копии и обновления","Мониторинг","Мелкие доработки"],
    pointsPT:["Planos SLA (mensal)","Backups e updates","Monitoramento","Pequenos ajustes"]
  },
  {
    emoji:"🖥️", titleRU:"Хостинг и развёртывание", titlePT:"Hospedagem e deploy",
    pointsRU:["Подбор тарифа и домены/SSL","Базовая настройка сервера","CDN/кэш (по необходимости)","Миграции"],
    pointsPT:["Plano, domínios/SSL","Setup básico do servidor","CDN/cache (se precisar)","Migrações"]
  },
  {
    emoji:"📱", titleRU:"Создание приложений", titlePT:"Criação de apps",
    pointsRU:["PWA/SPA веб-приложения","Прототипы мобильных","Дизайн UI","Интеграция аналитики"],
    pointsPT:["Apps web PWA/SPA","Protótipos mobile","Design de UI","Integração de analytics"]
  }
];

const portfolioData = [
  // category: website | bot | app
  { id:1, title:"WordPress магазин", category:"website", short:"Тема + каталог, импорт товаров", tags:["WP","Catalog","SEO"],
    details:{ challenge:"Запустить каталог с импортом", solution:"Кастомная тема + импортер CSV", result:"+35% органики за 2 месяца" } },
  { id:2, title:"Лендинг курса", category:"website", short:"Чистый HTML/CSS/JS, быстрый", tags:["Landing","A11y","Perf"],
    details:{ challenge:"Высокий CR и скорость", solution:"Лёгкая сетка, lazyload", result:"Lighthouse 98/100" } },
  { id:3, title:"TG-бот записи", category:"bot", short:"Запись на услуги, уведомления", tags:["Telegram","Booking"],
    details:{ challenge:"Автозапись и алерты", solution:"Структура сценариев, вебхуки", result:"Сокращение ручной рутины на 70%" } },
  { id:4, title:"Корпоративный сайт", category:"website", short:"Разделы, блог, вакансии", tags:["CMS","Blog"],
    details:{ challenge:"Единый стиль и редактура", solution:"Компоненты и гайдлайн", result:"Рост вовлеченности х2" } },
  { id:5, title:"PWA каталог", category:"app", short:"Оффлайн-просмотр, инсталляция", tags:["PWA","SPA"],
    details:{ challenge:"Работа оффлайн", solution:"Service Worker + cache", result:"Доступность 99% на моб." } },
  { id:6, title:"TG-бот-квиз", category:"bot", short:"Лиды с сегментацией", tags:["Quiz","Leads"],
    details:{ challenge:"Квалификация лидов", solution:"Ветки логики и теги", result:"CR лид-форма → 21%" } },
  { id:7, title:"Каталог услуг", category:"website", short:"Фильтры и теги", tags:["Filters","UX"],
    details:{ challenge:"Быстрые фильтры", solution:"Клиентский фильтр без бэка", result:"Время поиска ↓ в 3 раза" } },
  { id:8, title:"Дашборд-прототип", category:"app", short:"Просмотр метрик", tags:["Prototype","Charts"],
    details:{ challenge:"Собрать MVP", solution:"Чистый JS + mock", result:"Утверждён за 1 спринт" } },
  { id:9, title:"Сайт события", category:"website", short:"Программа, карта, спикеры", tags:["Event","Map"],
    details:{ challenge:"Простая навигация", solution:"Секции и якоря", result:"Позитивный фидбек гостей" } }
];

const processSteps = [
  { titleRU:"Бриф и диагностика", titlePT:"Brief e diagnóstico", bulletsRU:["Цели, аудитория","Требования и сроки"], bulletsPT:["Objetivos, público","Requisitos e prazos"] },
  { titleRU:"Смета и варианты", titlePT:"Orçamento e opções", bulletsRU:["2–3 пакета","Прозрачная стоимость"], bulletsPT:["2–3 pacotes","Custos claros"] },
  { titleRU:"Дизайн и прототип", titlePT:"Design e protótipo", bulletsRU:["UI-сборник","Кликабельный макет"], bulletsPT:["UI kit","Protótipo clicável"] },
  { titleRU:"Разработка и тесты", titlePT:"Desenvolvimento e testes", bulletsRU:["Адаптивность","Доступность"], bulletsPT:["Responsivo","Acessibilidade"] },
  { titleRU:"Запуск и поддержка", titlePT:"Lançamento e suporte", bulletsRU:["Миграция/хостинг","SLA-поддержка"], bulletsPT:["Migração/hospedagem","Suporte SLA"] }
];

const pricingData = [
  { tier:"Start", price:"от R$ 1.500 / ₽ 25.000", term:"7–10 дней",
    includes:["Лендинг 1-3 секции","Адаптив + базовый SEO","Установка на хостинг"],
    excludes:["Сложные интеграции","Мультиюзер CMS","Инд. анимации"] },
  { tier:"Business", price:"от R$ 4.500 / ₽ 75.000", term:"2–4 недели",
    includes:["Корпоративный сайт","Каталог/блог","Оптимизация скорости"],
    excludes:["Сложная CRM","Онлайн-оплаты","Синхронизации складов"] },
  { tier:"Pro", price:"от R$ 9.000 / ₽ 150.000", term:"4–8 недель",
    includes:["Кастомные модули","Боты/мини-приложения","Дизайн-система"],
    excludes:["Платёжные интеграции","Моб. натив","Серверная часть"] },
  { tier:"Support SLA", price:"R$ 400–1.600 / мес", term:"Месяц+",
    includes:["N часов работ","Обновления и бэкапы","Мониторинг"],
    excludes:["Новые большие фичи","Редизайн целиком","Маркетинговый бюджет"] }
];

const faqData = [
  ["Сколько стоит и от чего зависит?", "Стоимость зависит от объёма, сроков и сложности. Мы даём 2–3 ценовых варианта."],
  ["Можно ли работать с уже существующим WordPress?", "Да, делаем аудит, оптимизацию и доработки без боли."],
  ["Сроки запуска?", "От 7–10 дней для простых лендингов, сложнее — 2–8 недель."],
  ["Дизайн с нуля или по вашему макету?", "И так, и так — подберём оптимальный путь."],
  ["Передача доступов и безопасность?", "Работаем по best-practice, доступы передаются безопасно."],
  ["Поддержка после запуска?", "Есть SLA-пакеты на ежемесячной основе."],
  ["Хостинг и домены?", "Поможем выбрать тариф, подключим SSL и настроим."],
  ["Импорт контента и миграция?", "Да, переносим страницы/товары/медиа с проверкой."],
  ["Аналитика и SEO-база?", "Ставим счётчики и делаем базовую оптимизацию."],
  ["Гарантии качества?", "Тесты, чек-листы и прозрачные этапы проекта."]
];

/* ============== Helpers ============== */
const $ = (sel, root=document)=>root.querySelector(sel);
const $$ = (sel, root=document)=>Array.from(root.querySelectorAll(sel));

/* ============== Renderers ============== */
function renderServices(lang="ru"){
  const wrap = $('.services-grid');
  wrap.innerHTML = "";
  services.forEach(s=>{
    const title = lang==="ru" ? s.titleRU : s.titlePT;
    const points = lang==="ru" ? s.pointsRU : s.pointsPT;
    const el = document.createElement('article');
    el.className = 'card service';
    el.innerHTML = `
      <div class="mini">${s.emoji}</div>
      <h3>${title}</h3>
      <ul class="list">${points.map(li=>`<li>${li}</li>`).join('')}</ul>
      <a href="#contacts" class="btn btn--small" data-i18n="services.cta">Запросить оценку</a>
    `;
    wrap.appendChild(el);
  });
}

function placeholderThumb(text){
  // SVG заглушка через data URI
  const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='%230EA5E9' stop-opacity='.18'/><stop offset='1' stop-color='%230EA5E9' stop-opacity='.05'/></linearGradient></defs><rect width='800' height='500' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Manrope, sans-serif' font-size='36' fill='%230369a1'>${text}</text></svg>`);
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

function renderPortfolio(filter='all'){
  const grid = $('#portfolioGrid');
  grid.innerHTML = "";
  const items = portfolioData.filter(p=> filter==='all' ? true : p.category===filter);
  items.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card portfolio-item';
    card.innerHTML = `
      <div class="thumb"><img src="${placeholderThumb(p.title)}" alt="${p.title}" loading="lazy"/></div>
      <h3>${p.title}</h3>
      <p class="mini">${p.short}</p>
      <ul class="tags">${p.tags.map(t=>`<li class="tag">${t}</li>`).join('')}</ul>
      <div><button class="btn btn--small" data-open="project" data-id="${p.id}" data-i18n="portfolio.open">Детали</button></div>
    `;
    grid.appendChild(card);
  });
}

function renderProcess(lang="ru"){
  const list = $('.process-grid');
  list.innerHTML = "";
  processSteps.forEach(s=>{
    const title = lang==="ru" ? s.titleRU : s.titlePT;
    const bullets = lang==="ru" ? s.bulletsRU : s.bulletsPT;
    const li = document.createElement('li');
    li.innerHTML = `<h3>${title}</h3><ul class="list">${bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
    list.appendChild(li);
  });
}

function renderPricing(){
  const grid = $('.pricing-grid');
  grid.innerHTML = "";
  pricingData.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card pricing';
    card.innerHTML = `
      <h3>${p.tier}</h3>
      <div class="price">${p.price}</div>
      <div class="muted">${p.term}</div>
      <h4>Включено</h4>
      <ul class="features">${p.includes.map(i=>`<li>• ${i}</li>`).join('')}</ul>
      <h4>Не включено</h4>
      <ul class="features">${p.excludes.map(i=>`<li>• ${i}</li>`).join('')}</ul>
      <a href="#contacts" class="btn btn--small">Обсудить</a>
    `;
    grid.appendChild(card);
  });
}

function renderFAQ(){
  const wrap = $('#faqList');
  wrap.innerHTML = "";
  faqData.forEach(([q,a], idx)=>{
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <button aria-expanded="false" aria-controls="faq${idx}">${q}</button>
      <div id="faq${idx}" class="panel"><p>${a}</p></div>
    `;
    wrap.appendChild(item);
  });
}

/* ============== Language switch ============== */
function applyI18n(lang){
  // статические надписи
  $$('[data-i18n]').forEach(node=>{
    const path = node.getAttribute('data-i18n').split('.');
    let cur = i18n[lang];
    for (const key of path) cur = cur?.[key];
    if (typeof cur === "string") node.textContent = cur;
  });
  renderServices(lang);
  renderProcess(lang);
}

/* ============== UI behaviors ============== */
function smoothAnchors(){
  $$('.nav a, .hero-actions a, .footer-inner nav a').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href') || "";
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
        $('.nav ul')?.classList.remove('is-open');
        $('.nav-toggle')?.setAttribute('aria-expanded','false');
      }
    });
  });
}

function mobileMenu(){
  const btn = $('.nav-toggle');
  const list = $('.nav ul');
  btn.addEventListener('click', ()=>{
    const open = list.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

function chipsFilter(){
  $$('.chip').forEach(ch=>{
    ch.addEventListener('click', ()=>{
      $$('.chip').forEach(x=>x.classList.remove('is-active'));
      ch.classList.add('is-active');
      renderPortfolio(ch.dataset.filter);
      attachProjectOpen();
    });
  });
}

function attachProjectOpen(){
  $$('button[data-open="project"]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = Number(btn.dataset.id);
      const p = portfolioData.find(x=>x.id===id);
      if(!p) return;
      $('#projectTitle').textContent = p.title;
      $('#projectShort').textContent = p.short;
      $('#projectChallenge').textContent = p.details.challenge;
      $('#projectSolution').textContent = p.details.solution;
      $('#projectResult').textContent = p.details.result;
      const tags = $('#projectTags'); tags.innerHTML = p.tags.map(t=>`<li class="tag">${t}</li>`).join('');
      $('#projectModal').showModal();
    });
  });
}

function modals(){
  $$('[data-open="policy"]').forEach(b=>b.addEventListener('click', ()=>$('#policyModal').showModal()));
  $$('[data-close]').forEach(b=>b.addEventListener('click', e=>e.target.closest('dialog')?.close()));
  // Закрытие по ESC — нативно, по клику на фон:
  ['projectModal','policyModal'].forEach(id=>{
    const dlg = document.getElementById(id);
    dlg?.addEventListener('click', e=>{
      const r = dlg.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom){
        dlg.close();
      }
    });
  });
}

function faq(){
  $('#faqList').addEventListener('click', e=>{
    const btn = e.target.closest('button'); if(!btn) return;
    const item = btn.parentElement;
    const open = item.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

function toTop(){
  const btn = $('.to-top');
  window.addEventListener('scroll', ()=>{
    if (window.scrollY > 600) btn.classList.add('is-show'); else btn.classList.remove('is-show');
  });
  btn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ============== Init ============== */
document.addEventListener('DOMContentLoaded', ()=>{
  // год в футере
  $('#year').textContent = new Date().getFullYear();
  // первичный рендер
  renderServices('ru');
  renderPortfolio('all');
  attachProjectOpen();
  renderProcess('ru');
  renderPricing();
  renderFAQ();
  applyI18n('ru');

  // поведение
  smoothAnchors();
  mobileMenu();
  chipsFilter();
  modals();
  faq();
  toTop();

  // переключение языков
  $$('.lang').forEach(b=>{
    b.addEventListener('click', ()=>{
      $$('.lang').forEach(x=>x.classList.remove('is-active'));
      b.classList.add('is-active');
      const lang = b.dataset.lang;
      applyI18n(lang);
    });
  });
});
