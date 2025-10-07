// script.js

/* ============== Data ============== */
const servicesCategories = [
  { id: 'websites', title: 'Сайты' },
  { id: 'support', title: 'Поддержка и администрирование' },
  { id: 'bots', title: 'Создание ботов' },
  { id: 'tech', title: 'Техническое сопровождение' }
];

const services = [
  {
    category: 'websites',
    emoji: "🛒", 
    title: "Интернет-магазин",
    when: "есть линейка товаров и цель — продажи онлайн с приемом оплат и доставкой",
    what: "каталог с фильтрами, карточки товаров, корзина и заказ, оплата (карта/PIX), личный кабинет, статусы заказа, уведомления, базовая аналитика"
  },
  {
    category: 'websites',
    emoji: "📄", 
    title: "Лендинг (одностраничник)",
    when: "один продукт/услуга/акция; важны скорость запуска и конверсии из рекламы",
    what: "воронка по блокам (проблема → решение → оффер → доказательства), акценты на CTA, формы заявок, подключенные метрики, быстрый A/B-тест контента"
  },
  {
    category: 'websites',
    emoji: "👤", 
    title: "Сайт-визитка",
    when: "эксперт/мастер/небольшая компания; задача — быть в поиске и удобно получать заявки",
    what: "краткая структура (главная, услуги, контакты), галерея/портфолио, форма связи/WhatsApp, современный минималистичный дизайн"
  },
  {
    category: 'websites',
    emoji: "🏢", 
    title: "Корпоративный сайт",
    when: "несколько направлений или подразделений; важны структура и доверие",
    what: "разделы о компании/услугах/кейсы/новости, удобные формы лидов, карта филиалов, масштабируемая архитектура под рост"
  },
  {
    category: 'websites',
    emoji: "🎯", 
    title: "Промо-сайт",
    when: "запуск продукта/мероприятия/коллаборации; цель — вау-эффект и запоминаемость",
    what: "креативный визуал, анимации, интерактив, медиа-блоки, сценарий вовлечения и социальные доказательства",
  },
  {
    category: 'websites',
    emoji: "📚", 
    title: "Образовательный сайт / курс-платформа",
    when: "курсы, уроки, доступы, домашки, тесты",
    what: "структура модулей и уроков, выдача доступов, прогресс, тестирование/сертификаты, прием оплат за доступ",
  },
  {
    category: 'websites',
    emoji: "🗂️", 
    title: "Каталог / портал",
    when: "база специалистов/объявлений/материалов с удобным поиском и фильтрами",
    what: "многоуровневые рубрики, карточки объектов, поиск/фильтры, анкеты и модерация контента",
  },
  {
    category: 'websites',
    emoji: "🗓️", 
    title: "Сайт с онлайн-записью и бронированием",
    when: "услуги по расписанию (салоны, студии, мероприятия)",
    what: "календарь слотов, запись и предоплата, напоминания, управление расписанием",
  },
  {
    category: 'support',
    emoji: "☁️", 
    title: "Хостинг и домен",
    when: "стабильная работа сайта и быстрый доступ",
    what: "подбор тарифа, регистрация/привязка домена, DNS, SSL, почта на домене, перенос на новый хостинг при необходимости, базовый мониторинг",
  },
  {
    category: 'support',
    emoji: "🛡️", 
    title: "Безопасность",
    when: "защита данных, репутации и трафика",
    what: "SSL, регулярные бэкапы, антиспам/капча на формах, ограничение доступа к админке, 2FA для админов, обновления движка/зависимостей",
  },
  {
    category: 'support',
    emoji: "🔧", 
    title: "Техническая поддержка и администрирование",
    when: "сайт живёт и развивается, мелкие задачи не копятся",
    what: "оперативные правки контента и интерфейса, обновления, устранение ошибок, контроль форм/заявок, мелкие улучшения UX. Формат — по подписке или почасово",
  },
  {
    category: 'support',
    emoji: "⚡", 
    title: "Оптимизация скорости (Core Web Vitals)",
    when: "конверсия, SEO и качество рекламы напрямую зависят от быстроты",
    what: "оптимизация изображений и шрифтов, кэширование, lazy-load, критический CSS/JS, настройка CDN, аудит и план улучшений",
  },
  {
    category: 'support',
    emoji: "🔍", 
    title: "SEO-база (технический фундамент)",
    when: "чтобы страницы индексировались и правильно понимались поиском",
    what: "корректные теги title/description, заголовки H1–H3, чистые URL, sitemap.xml и robots.txt, микроразметка schema.org, перелинковка, подготовка к выдаче сниппетов",
  },
  {
    category: 'support',
    emoji: "📈", 
    title: "Аналитика и отслеживание конверсий",
    when: "видеть, откуда идут заявки и что реально работает",
    what: "установка и базовая настройка GA4, пиксели рекламы, цели/события, e-commerce (для магазинов), UTM-метки, понятные отчёты «что приносит деньги»",
  },
  {
    category: 'support',
    emoji: "📝", 
    title: "Контент-поддержка и копирайтинг",
    when: "текст и визуал продают, если говорят языком клиента",
    what: "структура страниц, продающие тексты, редактура, отрисовка баннеров и иконок, подготовка медиа, мультиязычность (RU/PT/EN) при необходимости",
  },
  {
    category: 'support',
    emoji: "💬", 
    title: "Интеграции и коммуникации",
    when: "чтобы заявки не терялись и процессы были автоматизированы",
    what: "формы → почта/CRM/мессенджеры, чат-виджеты (WhatsApp/Telegram), уведомления, интеграции оплаты (карта/PIX) и доставки — по согласованию",
  },
  {
    category: 'support',
    emoji: "♿", 
    title: "Доступность (A11y)",
    when: "удобство для всех пользователей и соответствие лучшим практикам",
    what: "контраст, альтернативные тексты, клавиатурная навигация, корректные роли и метки, тестирование критичных сценариев",
  },
  {
    category: 'support',
    emoji: "⚖️", 
    title: "Юридические страницы и политика данных",
    when: "доверие и соблюдение требований (cookies, приватность, согласия)",
    what: "страницы Политики конфиденциальности/Cookies, баннер согласия, тексты для форм (consent), базовые настройки под LGPD/GDPR совместно с юристом/шаблонами",
  },
  {
    category: 'support',
    emoji: "📲", 
    title: "PWA и «как приложение»",
    when: "быстрый доступ с телефона и офлайн-режим базовых страниц",
    what: "web-manifest, иконки, splash-экраны, настройка «Добавить на главный экран», базовый офлайн-кеш",
  },
  {
    category: 'support',
    emoji: "🔁", 
    title: "Миграция и редизайн",
    when: "перенести существующий сайт на новую платформу/дизайн без потери позиций и контента",
    what: "аудит текущего проекта, экспорт/импорт контента, переезды URL с редиректами, контроль качества после запуска",
  },
  {
    category: 'tech',
    emoji: "🔄", 
    title: "Доработка и развитие существующих сайтов",
    when: "если сайт уже есть, но нужно улучшить функционал, дизайн или производительность",
    what: "редизайн отдельных страниц и блоков, добавление новых разделов и функционала, исправление ошибок и багов, адаптация под новые задачи (акции, кампании), оптимизация структуры для удобства пользователей",
  },
  {
    category: 'tech',
    emoji: "💳", 
    title: "Интеграция и настройка платёжных систем",
    when: "чтобы клиенты могли оплачивать онлайн без лишних шагов",
    what: "подключение эквайринга и платёжных шлюзов, настройка формы оплаты на сайте, безопасное хранение и передача данных (SSL, PCI DSS-ready решения), тестирование сценариев оплаты и возвратов, подготовка к аналитике (отслеживание успешных/отменённых платежей)",
  },
  {
    category: 'tech',
    emoji: "📊", 
    title: "Интеграция и настройка CRM",
    when: "чтобы все заявки и клиенты были в одном месте",
    what: "подбор подходящей CRM под задачу, интеграция сайта с CRM (заявки, заказы, лиды), автоматическая передача данных из форм и корзины, настройка уведомлений и статусов, базовые воронки продаж и отчёты",
  },
  {
    category: 'bots',
    emoji: "🤖", 
    title: "Telegram-боты",
    when: "автоматизировать общение и продажи, упростить поддержку клиентов",
    what: "создание и настройка бота под задачу (заявки, запись, каталог, FAQ), подключение к сайту или CRM, настройка уведомлений в канал/чат, сценарии диалогов и меню, интеграция с оплатой и базовыми сервисами",
  },
  {
    category: 'bots',
    emoji: "💬", 
    title: "WhatsApp-боты",
    when: "быстрые ответы и автоматизация коммуникаций в самом популярном мессенджере",
    what: "настройка чат-бота для приёма заявок и заказов, интеграция с CRM или формами сайта, автоматические ответы, меню, кнопки, уведомления о заказах/заявках для администратора, сценарии: подтверждение бронирования, опросы, рассылки",
  }
];

const portfolioData = [
  // category: website | bot | app
  { 
    id: 1, 
    title: "GOMANIC", 
    category: "website", 
    subtitle: "Разработка сайтов для международной образовательной платформы мастеров маникюра",
    description: "Система сайтов от лендинга до интернет-магазина с кастомными решениями",
    badge: "В работе",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
    image: "/media/gomanic/gomanic-main.jpeg",
    tags: ["Лендинг", "Интернет-магазин", "ERP"],
    details: { 
      challenge: "Создать современный сайт для логистической компании с акцентом на технологичность", 
      solution: "Разработали лендинг с 3D элементами, анимациями и интуитивной навигацией", 
      result: "Увеличение конверсии на 45% и время на сайте выросло в 2.3 раза" 
    } 
  },
  { 
    id: 2, 
    title: "ВОНДИГА ПАРК", 
    category: "website", 
    subtitle: "Лендинг базы отдыха в Подмосковье",
    description: "Сайт на Tilda с системой онлайн-бронирования",
    badge: "В работе",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
    image: "media/vondiga/vondiga-main.jpg",
    tags: ["Tilda", "Техподдержка", "Booking"],
    details: { 
      challenge: "Проведение техподдержки уже существующего сайта (разработан не нами)", 
      solution: "Еженедельная техподдержка, обновление информации по запросу клиента, добавление новых блоков", 
      result: "Стабильная работа сайта и высокая удовлетворенность клиентов" 
    } 
  },
  { 
    id: 3, 
    title: "Мастер карт", 
    category: "website", 
    subtitle: "Интернет-магазин ювелирных изделий",
    description: "E-commerce с 3D просмотром товаров и AR примеркой",
    badge: "В работе",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
    image: "media/mastercart/phone.jpg",
    tags: ["E-commerce", "3D", "AR"],
    details: { 
      challenge: "Создать премиальный интернет-магазин с инновационным UX", 
      solution: "Внедрили 3D модели украшений и AR примерку через камеру", 
      result: "Средний чек вырос на 180%, возвраты снизились на 60%" 
    } 
  },
  { 
    id: 4, 
    title: "ООО ВЕХА", 
    category: "website", 
    subtitle: "Информационный сайт управляющей компании ЖКХ",
    description: "",
    badge: "Завершен",
    gradient: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)",
    image: "media/veha/veha-main.jpg",
    tags: ["Education", "PWA", "Gamification"],
    details: { 
      challenge: "Редизайн сайта на более современный с сохранением всей документации и соблюдением требований регулятора", 
      solution: "Создали PWA с системой достижений, прогресс-бары и интерактивные задания", 
      result: "95% пользователей завершают курсы до конца" 
    } 
  },
  { 
    id: 5, 
    title: "ДЕЛЬТА", 
    category: "website", 
    subtitle: "Сайт компании аренды складских помещений",
    description: "Умный бот с AI-рекомендациями и отслеживанием заказов",
    badge: "Завершен",
    gradient: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)",
    image: "media/delta/storage.jpg",
    tags: ["Telegram", "AI", "Delivery"],
    details: { 
      challenge: "Автоматизировать процесс заказа еды в Telegram", 
      solution: "Разработали бота с AI, который предлагает блюда на основе предпочтений", 
      result: "Обрабатывает 1000+ заказов в день, время заказа сократилось в 3 раза" 
    } 
  },
  { 
    id: 6, 
    title: "HUMAN DESIGN", 
    category: "website", 
    subtitle: "Лендинг для услуг Human Design",
    description: "Современный лендинг для привлечения клиентов на консультации",
    badge: "Завершен",
    gradient: "linear-gradient(135deg, #0891b2 0%, #0ea5e9 50%, #38bdf8 100%)",
    image: "media/hd/8.jpg",
    tags: ["Лендинг"],
    details: { 
      challenge: "Создать доверительный лендинг для услуг Human Design с фокусом на экспертность", 
      solution: "Разработали лендинг с акцентом на отзывы, кейсы и простую форму заказа", 
      result: "Конверсия в заявку 12%, средняя стоимость лида снижена на 40%" 
    } 
  }
];

const processSteps = [
  { title:"Бриф и диагностика", bullets:["Цели, аудитория","Требования и сроки"] },
  { title:"Смета и варианты", bullets:["2–3 пакета","Прозрачная стоимость"] },
  { title:"Дизайн и прототип", bullets:["UI-сборник","Кликабельный макет"] },
  { title:"Разработка и тесты", bullets:["Адаптивность","Доступность"] },
  { title:"Запуск и поддержка", bullets:["Миграция/хостинг","SLA-поддержка"] }
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
function renderServices(){
  servicesCategories.forEach(category => {
    const categoryServices = services.filter(s => s.category === category.id);
    const container = $(`#${category.id}Services`);
    if (!container) return;
    
    container.innerHTML = "";
    
    categoryServices.forEach(s => {
      const el = document.createElement('article');
      el.className = 'card service';
      el.innerHTML = `
        <div class="service-header">
          <div class="service-emoji">${s.emoji}</div>
          <h4 class="service-title">${s.title}</h4>
        </div>
        <div class="service-content">
          <div class="service-when">
            <strong>Когда нужен:</strong> ${s.when}
          </div>
          <div class="service-what">
            <strong>Что получаете:</strong> ${s.what}
          </div>
        </div>
        <div class="service-footer">
          <a href="#contacts" class="btn btn--small">Запросить оценку</a>
        </div>
      `;
      container.appendChild(el);
    });
  });
}

function initServicesTabs() {
  const tabButtons = $$('.tab-button');
  const tabPanels = $$('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Убираем активные классы со всех табов и панелей
      tabButtons.forEach(btn => {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(panel => {
        panel.classList.remove('is-active');
      });
      
      // Добавляем активные классы к выбранному табу и панели
      button.classList.add('is-active');
      button.setAttribute('aria-selected', 'true');
      
      const targetPanel = $(`[data-panel="${targetTab}"]`);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
      }
    });
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
    card.className = 'portfolio-showcase-item';
    card.style.background = p.gradient;
    
    card.innerHTML = `
      <div class="showcase-background">
        <img src="${p.image}" alt="${p.title}" loading="lazy" class="showcase-bg-image"/>
        <div class="showcase-overlay"></div>
      </div>
      
      <div class="showcase-content">
        <div class="showcase-header">
          ${p.badge ? `<span class="showcase-badge">${p.badge}</span>` : ''}
          <div class="showcase-controls">
            <button class="showcase-view" data-open="project" data-id="${p.id}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              СМОТРЕТЬ ПОДРОБНЕЕ
            </button>
          </div>
        </div>
        
        <div class="showcase-info">
          <h3 class="showcase-title">${p.title}</h3>
          <p class="showcase-subtitle">${p.subtitle}</p>
          <p class="showcase-description">${p.description}</p>
          
          <div class="showcase-tags">
            ${p.tags.map(tag => `<span class="showcase-tag">${tag}</span>`).join('')}
          </div>
        </div>
        
        <div class="showcase-footer">
          <button class="showcase-cta" data-open="project" data-id="${p.id}">
            ХОЧУ ТАКЖЕ
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderProcess(){
  const list = $('.process-grid');
  list.innerHTML = "";
  processSteps.forEach(s=>{
    const li = document.createElement('li');
    li.innerHTML = `<h3>${s.title}</h3><ul class="list">${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
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
      
      // Проект "Лендинг Human Design" (id 9) открывается на отдельной странице
      if (id === 9) {
        window.location.href = 'project.html';
        return;
      }
      
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

function reviewsSlider(){
  const slider = $('#reviewsSlider');
  const slides = [...slider.querySelectorAll('.review-slide')];
  const dots = [...document.querySelectorAll('.review-dot')];
  const prevBtn = $('.prev-btn');
  const nextBtn = $('.next-btn');
  
  let currentRotation = 0;
  let currentSlide = 0;
  let autoSlideInterval;
  
  function updateSlider() {
    slider.style.transform = `rotateY(${currentRotation}deg)`;
    
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  function nextSlide() {
    currentRotation -= 90;
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentRotation += 90;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
  
  function goToSlide(index) {
    const diff = index - currentSlide;
    currentRotation -= diff * 90;
    currentSlide = index;
    updateSlider();
  }
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }
  
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    setTimeout(startAutoSlide, 6000);
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    setTimeout(startAutoSlide, 6000);
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      stopAutoSlide();
      setTimeout(startAutoSlide, 6000);
    });
  });
  
  const reviewsSection = $('#reviews');
  if (reviewsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoSlide();
        } else {
          stopAutoSlide();
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(reviewsSection);
  }
  
  updateSlider();
}

function teamSlider(){
  const slider = $('#teamSlider');
  const slides = [...slider.querySelectorAll('.team-slide')];
  const indicators = [...document.querySelectorAll('.team-indicator')];
  const prevBtn = $('.prev-team');
  const nextBtn = $('.next-team');
  
  let currentSlide = 0;
  let autoSlideInterval;
  
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev');
      
      if (index === currentSlide) {
        slide.classList.add('active');
      } else if (index < currentSlide) {
        slide.classList.add('prev');
      }
    });
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
  
  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    setTimeout(startAutoSlide, 8000);
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    setTimeout(startAutoSlide, 8000);
  });
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
      stopAutoSlide();
      setTimeout(startAutoSlide, 8000);
    });
  });
  
  const teamSection = $('#team');
  if (teamSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoSlide();
        } else {
          stopAutoSlide();
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(teamSection);
  }
  
  updateSlider();
}

/* ============== Init ============== */
document.addEventListener('DOMContentLoaded', ()=>{
  $('#year').textContent = new Date().getFullYear();
  
  renderServices();
  initServicesTabs();
  renderPortfolio('all');
  renderProcess();
  renderPricing();
  renderFAQ();
  attachProjectOpen();

  smoothAnchors();
  mobileMenu();
  chipsFilter();
  modals();
  faq();
  toTop();
  reviewsSlider();
  teamSlider();
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
});
