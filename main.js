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
const servicesCategories = [
  { id: 'websites', titleRU: 'Сайты', titlePT: 'Sites' },
  { id: 'support', titleRU: 'Поддержка и администрирование', titlePT: 'Suporte e administração' },
  { id: 'bots', titleRU: 'Создание ботов', titlePT: 'Criação de bots' },
  { id: 'tech', titleRU: 'Техническое сопровождение', titlePT: 'Suporte técnico' }
];

const services = [
  {
    category: 'websites',
    emoji: "🛒", 
    titleRU: "Интернет-магазин",
    titlePT: "Loja online",
    whenRU: "есть линейка товаров и цель — продажи онлайн с приемом оплат и доставкой",
    whenPT: "há linha de produtos e objetivo — vendas online com pagamentos e entrega",
    whatRU: "каталог с фильтрами, карточки товаров, корзина и заказ, оплата (карта/PIX), личный кабинет, статусы заказа, уведомления, базовая аналитика",
    whatPT: "catálogo com filtros, fichas de produtos, carrinho e pedido, pagamento (cartão/PIX), conta pessoal, status do pedido, notificações, análise básica"
  },
  {
    category: 'websites',
    emoji: "📄", 
    titleRU: "Лендинг (одностраничник)",
    titlePT: "Landing page",
    whenRU: "один продукт/услуга/акция; важны скорость запуска и конверсии из рекламы",
    whenPT: "um produto/serviço/promoção; importante velocidade de lançamento e conversões de anúncios",
    whatRU: "воронка по блокам (проблема → решение → оффер → доказательства), акценты на CTA, формы заявок, подключенные метрики, быстрый A/B-тест контента",
    whatPT: "funil por blocos (problema → solução → oferta → provas), acentos em CTA, formulários de solicitações, métricas conectadas, teste A/B rápido de conteúdo"
  },
  {
    category: 'websites',
    emoji: "👤", 
    titleRU: "Сайт-визитка",
    titlePT: "Site de apresentação",
    whenRU: "эксперт/мастер/небольшая компания; задача — быть в поиске и удобно получать заявки",
    whenPT: "especialista/mestre/pequena empresa; tarefa — estar na busca e receber convenientemente solicitações",
    whatRU: "краткая структура (главная, услуги, контакты), галерея/портфолио, форма связи/WhatsApp, современный минималистичный дизайн",
    whatPT: "estrutura resumida (principal, serviços, contatos), galeria/portfólio, formulário de contato/WhatsApp, design moderno minimalista"
  },
  {
    category: 'websites',
    emoji: "🏢", 
    titleRU: "Корпоративный сайт",
    titlePT: "Site corporativo",
    whenRU: "несколько направлений или подразделений; важны структура и доверие",
    whenPT: "várias direções ou divisões; importantes estrutura e confiança",
    whatRU: "разделы о компании/услугах/кейсы/новости, удобные формы лидов, карта филиалов, масштабируемая архитектура под рост",
    whatPT: "seções sobre empresa/serviços/casos/notícias, formulários convenientes de leads, mapa de filiais, arquitetura escalável para crescimento"
  },
  {
    category: 'websites',
    emoji: "🎯", 
    titleRU: "Промо-сайт",
    titlePT: "Site promocional",
    whenRU: "запуск продукта/мероприятия/коллаборации; цель — вау-эффект и запоминаемость",
    whenPT: "lançamento de produto/evento/colaboração; objetivo — efeito wow e memorabilidade",
    whatRU: "креативный визуал, анимации, интерактив, медиа-блоки, сценарий вовлечения и социальные доказательства",
    whatPT: "visual criativo, animações, interatividade, blocos de mídia, cenário de engajamento e provas sociais"
  },
  {
    category: 'websites',
    emoji: "📚", 
    titleRU: "Образовательный сайт / курс-платформа",
    titlePT: "Site educacional / plataforma de curso",
    whenRU: "курсы, уроки, доступы, домашки, тесты",
    whenPT: "cursos, aulas, acessos, tarefas, testes",
    whatRU: "структура модулей и уроков, выдача доступов, прогресс, тестирование/сертификаты, прием оплат за доступ",
    whatPT: "estrutura de módulos e lições, emissão de acessos, progresso, testes/certificados, recebimento de pagamentos pelo acesso"
  },
  {
    category: 'websites',
    emoji: "🗂️", 
    titleRU: "Каталог / портал",
    titlePT: "Catálogo / portal",
    whenRU: "база специалистов/объявлений/материалов с удобным поиском и фильтрами",
    whenPT: "base de especialistas/anúncios/materiais com busca conveniente e filtros",
    whatRU: "многоуровневые рубрики, карточки объектов, поиск/фильтры, анкеты и модерация контента",
    whatPT: "rubricas de vários níveis, fichas de objetos, busca/filtros, questionários e moderação de conteúdo"
  },
  {
    category: 'websites',
    emoji: "🗓️", 
    titleRU: "Сайт с онлайн-записью и бронированием",
    titlePT: "Site com agendamento e reserva online",
    whenRU: "услуги по расписанию (салоны, студии, мероприятия)",
    whenPT: "serviços por horário (salões, estúdios, eventos)",
    whatRU: "календарь слотов, запись и предоплата, напоминания, управление расписанием",
    whatPT: "calendário de slots, agendamento e pré-pagamento, lembretes, gerenciamento de horários"
  },
  {
    category: 'support',
    emoji: "☁️", 
    titleRU: "Хостинг и домен",
    titlePT: "Hospedagem e domínio",
    whenRU: "стабильная работа сайта и быстрый доступ",
    whenPT: "funcionamento estável do site e acesso rápido",
    whatRU: "подбор тарифа, регистрация/привязка домена, DNS, SSL, почта на домене, перенос на новый хостинг при необходимости, базовый мониторинг",
    whatPT: "seleção de plano, registro/vinculação de domínio, DNS, SSL, e-mail no domínio, transferência para nova hospedagem se necessário, monitoramento básico"
  },
  {
    category: 'support',
    emoji: "🛡️", 
    titleRU: "Безопасность",
    titlePT: "Segurança",
    whenRU: "защита данных, репутации и трафика",
    whenPT: "proteção de dados, reputação e tráfego",
    whatRU: "SSL, регулярные бэкапы, антиспам/капча на формах, ограничение доступа к админке, 2FA для админов, обновления движка/зависимостей",
    whatPT: "SSL, backups regulares, antispam/captcha em formulários, limitação de acesso ao admin, 2FA para admins, atualizações de motor/dependências"
  },
  {
    category: 'support',
    emoji: "🔧", 
    titleRU: "Техническая поддержка и администрирование",
    titlePT: "Suporte técnico e administração",
    whenRU: "сайт живёт и развивается, мелкие задачи не копятся",
    whenPT: "site vive e se desenvolve, pequenas tarefas não se acumulam",
    whatRU: "оперативные правки контента и интерфейса, обновления, устранение ошибок, контроль форм/заявок, мелкие улучшения UX. Формат — по подписке или почасово",
    whatPT: "correções operacionais de conteúdo e interface, atualizações, correção de erros, controle de formulários/solicitações, pequenas melhorias de UX. Formato — por assinatura ou por hora"
  },
  {
    category: 'support',
    emoji: "⚡", 
    titleRU: "Оптимизация скорости (Core Web Vitals)",
    titlePT: "Otimização de velocidade (Core Web Vitals)",
    whenRU: "конверсия, SEO и качество рекламы напрямую зависят от быстроты",
    whenPT: "conversão, SEO e qualidade de anúncios dependem diretamente da velocidade",
    whatRU: "оптимизация изображений и шрифтов, кэширование, lazy-load, критический CSS/JS, настройка CDN, аудит и план улучшений",
    whatPT: "otimização de imagens e fontes, cache, lazy-load, CSS/JS crítico, configuração de CDN, auditoria e plano de melhorias"
  },
  {
    category: 'support',
    emoji: "🔍", 
    titleRU: "SEO-база (технический фундамент)",
    titlePT: "Base SEO (fundamento técnico)",
    whenRU: "чтобы страницы индексировались и правильно понимались поиском",
    whenPT: "para que as páginas sejam indexadas e corretamente compreendidas pela busca",
    whatRU: "корректные теги title/description, заголовки H1–H3, чистые URL, sitemap.xml и robots.txt, микроразметка schema.org, перелинковка, подготовка к выдаче сниппетов",
    whatPT: "tags title/description corretas, títulos H1–H3, URLs limpos, sitemap.xml e robots.txt, micro marcação schema.org, interligação, preparação para exibição de snippets"
  },
  {
    category: 'support',
    emoji: "📈", 
    titleRU: "Аналитика и отслеживание конверсий",
    titlePT: "Análise e rastreamento de conversões",
    whenRU: "видеть, откуда идут заявки и что реально работает",
    whenPT: "ver de onde vêm as solicitações e o que realmente funciona",
    whatRU: "установка и базовая настройка GA4, пиксели рекламы, цели/события, e-commerce (для магазинов), UTM-метки, понятные отчёты «что приносит деньги»",
    whatPT: "instalação e configuração básica do GA4, pixels de anúncio, objetivos/eventos, e-commerce (para lojas), tags UTM, relatórios claros 'o que traz dinheiro'"
  },
  {
    category: 'support',
    emoji: "📝", 
    titleRU: "Контент-поддержка и копирайтинг",
    titlePT: "Suporte de conteúdo e copywriting",
    whenRU: "текст и визуал продают, если говорят языком клиента",
    whenPT: "texto e visual vendem, se falam a linguagem do cliente",
    whatRU: "структура страниц, продающие тексты, редактура, отрисовка баннеров и иконок, подготовка медиа, мультиязычность (RU/PT/EN) при необходимости",
    whatPT: "estrutura de páginas, textos vendedores, edição, criação de banners e ícones, preparação de mídia, multilíngue (RU/PT/EN) se necessário"
  },
  {
    category: 'support',
    emoji: "💬", 
    titleRU: "Интеграции и коммуникации",
    titlePT: "Integrações e comunicações",
    whenRU: "чтобы заявки не терялись и процессы были автоматизированы",
    whenPT: "para que as solicitações não se percam e os processos sejam automatizados",
    whatRU: "формы → почта/CRM/мессенджеры, чат-виджеты (WhatsApp/Telegram), уведомления, интеграции оплаты (карта/PIX) и доставки — по согласованию",
    whatPT: "formulários → e-mail/CRM/mensageiros, widgets de chat (WhatsApp/Telegram), notificações, integrações de pagamento (cartão/PIX) e entrega — por acordo"
  },
  {
    category: 'support',
    emoji: "♿", 
    titleRU: "Доступность (A11y)",
    titlePT: "Acessibilidade (A11y)",
    whenRU: "удобство для всех пользователей и соответствие лучшим практикам",
    whenPT: "conveniência para todos os usuários e conformidade com melhores práticas",
    whatRU: "контраст, альтернативные тексты, клавиатурная навигация, корректные роли и метки, тестирование критичных сценариев",
    whatPT: "contraste, textos alternativos, navegação por teclado, funções e rótulos corretos, teste de cenários críticos"
  },
  {
    category: 'support',
    emoji: "⚖️", 
    titleRU: "Юридические страницы и политика данных",
    titlePT: "Páginas legais e política de dados",
    whenRU: "доверие и соблюдение требований (cookies, приватность, согласия)",
    whenPT: "confiança e conformidade com requisitos (cookies, privacidade, consentimentos)",
    whatRU: "страницы Политики конфиденциальности/Cookies, баннер согласия, тексты для форм (consent), базовые настройки под LGPD/GDPR совместно с юристом/шаблонами",
    whatPT: "páginas de Política de Privacidade/Cookies, banner de consentimento, textos para formulários (consent), configurações básicas para LGPD/GDPR junto com advogado/modelos"
  },
  {
    category: 'support',
    emoji: "📲", 
    titleRU: "PWA и «как приложение»",
    titlePT: "PWA e 'como aplicativo'",
    whenRU: "быстрый доступ с телефона и офлайн-режим базовых страниц",
    whenPT: "acesso rápido do telefone e modo offline de páginas básicas",
    whatRU: "web-manifest, иконки, splash-экраны, настройка «Добавить на главный экран», базовый офлайн-кеш",
    whatPT: "web-manifest, ícones, telas de splash, configuração 'Adicionar à tela inicial', cache offline básico"
  },
  {
    category: 'support',
    emoji: "🔁", 
    titleRU: "Миграция и редизайн",
    titlePT: "Migração e redesign",
    whenRU: "перенести существующий сайт на новую платформу/дизайн без потери позиций и контента",
    whenPT: "transferir site existente para nova plataforma/design sem perder posições e conteúdo",
    whatRU: "аудит текущего проекта, экспорт/импорт контента, переезды URL с редиректами, контроль качества после запуска",
    whatPT: "auditoria do projeto atual, exportação/importação de conteúdo, transferências de URL com redirecionamentos, controle de qualidade após lançamento"
  },
  {
    category: 'tech',
    emoji: "🔄", 
    titleRU: "Доработка и развитие существующих сайтов",
    titlePT: "Melhoria e desenvolvimento de sites existentes",
    whenRU: "если сайт уже есть, но нужно улучшить функционал, дизайн или производительность",
    whenPT: "se o site já existe, mas é necessário melhorar funcionalidade, design ou desempenho",
    whatRU: "редизайн отдельных страниц и блоков, добавление новых разделов и функционала, исправление ошибок и багов, адаптация под новые задачи (акции, кампании), оптимизация структуры для удобства пользователей",
    whatPT: "redesign de páginas e blocos individuais, adição de novas seções e funcionalidades, correção de erros e bugs, adaptação para novas tarefas (promoções, campanhas), otimização da estrutura para conveniência dos usuários"
  },
  {
    category: 'tech',
    emoji: "💳", 
    titleRU: "Интеграция и настройка платёжных систем",
    titlePT: "Integração e configuração de sistemas de pagamento",
    whenRU: "чтобы клиенты могли оплачивать онлайн без лишних шагов",
    whenPT: "para que os clientes possam pagar online sem passos desnecessários",
    whatRU: "подключение эквайринга и платёжных шлюзов, настройка формы оплаты на сайте, безопасное хранение и передача данных (SSL, PCI DSS-ready решения), тестирование сценариев оплаты и возвратов, подготовка к аналитике (отслеживание успешных/отменённых платежей)",
    whatPT: "conexão de acquiring e gateways de pagamento, configuração de formulário de pagamento no site, armazenamento e transmissão seguros de dados (SSL, soluções PCI DSS-ready), teste de cenários de pagamento e devoluções, preparação para análise (rastreamento de pagamentos bem-sucedidos/cancelados)"
  },
  {
    category: 'tech',
    emoji: "📊", 
    titleRU: "Интеграция и настройка CRM",
    titlePT: "Integração e configuração de CRM",
    whenRU: "чтобы все заявки и клиенты были в одном месте",
    whenPT: "para que todas as solicitações e clientes estejam em um lugar",
    whatRU: "подбор подходящей CRM под задачу, интеграция сайта с CRM (заявки, заказы, лиды), автоматическая передача данных из форм и корзины, настройка уведомлений и статусов, базовые воронки продаж и отчёты",
    whatPT: "seleção de CRM adequado para a tarefa, integração do site com CRM (solicitações, pedidos, leads), transmissão automática de dados de formulários e carrinho, configuração de notificações e status, funis de vendas básicos e relatórios"
  },
  {
    category: 'bots',
    emoji: "🤖", 
    titleRU: "Telegram-боты",
    titlePT: "Bots do Telegram",
    whenRU: "автоматизировать общение и продажи, упростить поддержку клиентов",
    whenPT: "automatizar comunicação e vendas, simplificar suporte ao cliente",
    whatRU: "создание и настройка бота под задачу (заявки, запись, каталог, FAQ), подключение к сайту или CRM, настройка уведомлений в канал/чат, сценарии диалогов и меню, интеграция с оплатой и базовыми сервисами",
    whatPT: "criação e configuração de bot para a tarefa (solicitações, agendamento, catálogo, FAQ), conexão ao site ou CRM, configuração de notificações no canal/chat, cenários de diálogos e menus, integração com pagamento e serviços básicos"
  },
  {
    category: 'bots',
    emoji: "💬", 
    titleRU: "WhatsApp-боты",
    titlePT: "Bots do WhatsApp",
    whenRU: "быстрые ответы и автоматизация коммуникаций в самом популярном мессенджере",
    whenPT: "respostas rápidas e automação de comunicações no mensageiro mais popular",
    whatRU: "настройка чат-бота для приёма заявок и заказов, интеграция с CRM или формами сайта, автоматические ответы, меню, кнопки, уведомления о заказах/заявках для администратора, сценарии: подтверждение бронирования, опросы, рассылки",
    whatPT: "configuração de chatbot para recebimento de solicitações e pedidos, integração com CRM ou formulários do site, respostas automáticas, menus, botões, notificações de pedidos/solicitações para administrador, cenários: confirmação de reserva, pesquisas, mailings"
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
  // Рендерим услуги для каждой категории
  servicesCategories.forEach(category => {
    const categoryServices = services.filter(s => s.category === category.id);
    const container = $(`#${category.id}Services`);
    if (!container) return;
    
    container.innerHTML = "";
    
    categoryServices.forEach(s => {
      const title = lang === "ru" ? s.titleRU : s.titlePT;
      const when = lang === "ru" ? s.whenRU : s.whenPT;
      const what = lang === "ru" ? s.whatRU : s.whatPT;
      
      const el = document.createElement('article');
      el.className = 'card service';
      el.innerHTML = `
        <div class="service-header">
          <div class="service-emoji">${s.emoji}</div>
          <h4 class="service-title">${title}</h4>
        </div>
        <div class="service-content">
          <div class="service-when">
            <strong>Когда нужен:</strong> ${when}
          </div>
          <div class="service-what">
            <strong>Что получаете:</strong> ${what}
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
  initServicesTabs();
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
