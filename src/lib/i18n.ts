export type Lang = "uk" | "ru" | "en" | "cs" | "fr";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "cs", label: "Čeština", flag: "🇨🇿" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

type Dict = {
  nav: { services: string; contact: string; cta: string };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  stats: { years: string; projects: string; growth: string };
  services: {
    tag: string;
    title: string;
    sub: string;
    cards: { icon: string; title: string; items: string[] }[];
  };
  contact: {
    tag: string;
    title: string;
    sub: string;
    phone: string;
    email: string;
    location: string;
    locationValue: string;
    name: string;
    namePh: string;
    tg: string;
    tgPh: string;
    emailLabel: string;
    type: string;
    typeChoose: string;
    types: string[];
    task: string;
    taskPh: string;
    submit: string;
    sent: string;
  };
  footer: { services: string; contact: string; email: string };
  modal: {
    title: string;
    sub: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    tg: string;
    tgPh: string;
    type: string;
    typeChoose: string;
    types: string[];
    message: string;
    messagePh: string;
    submit: string;
    sending: string;
    success: string;
    successSub: string;
    error: string;
    close: string;
  };
};

export const dicts: Record<Lang, Dict> = {
  uk: {
    nav: { services: "Послуги", contact: "Контакти", cta: "Замовити сайт" },
    hero: {
      badge: "Веб-студія · Україна",
      titleA: "Створюємо сайти,",
      titleB: "які працюють",
      sub: "Розробка, дизайн та запуск сучасних веб-проєктів. Від лендингу до корпоративного порталу — під ключ.",
      cta1: "Обговорити проєкт",
      cta2: "Наші послуги",
    },
    stats: { years: "Років досвіду", projects: "Успішних проєктів", growth: "Зростання студії" },
    services: {
      tag: "Що ми пропонуємо",
      title: "Повний цикл веб-розробки",
      sub: "Все що потрібно для запуску вашого сайту — в одному місці.",
      cards: [
        { icon: "🌐", title: "Розробка сайтів", items: ["Лендинги (Landing Pages)", "Багатосторінкові сайти", "Корпоративні сайти", "Інтернет-магазини (базовий функціонал)"] },
        { icon: "🎨", title: "Дизайн", items: ["UI/UX дизайн сайтів", "Адаптивний дизайн (телефон / планшет)", "Редизайн існуючих сайтів"] },
        { icon: "⚙️", title: "Frontend-розробка", items: ["Верстка сайтів (HTML, CSS, JavaScript)", "Анімації та інтерактив", "Оптимізація швидкості завантаження"] },
        { icon: "🔧", title: "Базовий Backend", items: ["Підключення форм (заявки, зворотний зв'язок)", "Робота з базами даних", "Інтеграція API (Telegram-бот, форми)"] },
      ],
    },
    contact: {
      tag: "Зв'язатися з нами",
      title: "Готові обговорити ваш проєкт?",
      sub: "Напишіть нам — відповімо швидко та обговоримо деталі без зайвої води.",
      phone: "Телефон",
      email: "Email",
      location: "Локація",
      locationValue: "Україна · Працюємо віддалено",
      name: "Ваше ім'я",
      namePh: "Іван",
      tg: "Телефон / Telegram",
      tgPh: "@username",
      emailLabel: "Email",
      type: "Тип проєкту",
      typeChoose: "Оберіть тип",
      types: ["Лендинг", "Багатосторінковий сайт", "Корпоративний сайт", "Інтернет-магазин", "Інше"],
      task: "Опишіть задачу",
      taskPh: "Розкажіть про ваш проєкт...",
      submit: "Надіслати заявку →",
      sent: "✓ Заявку надіслано!",
    },
    footer: { services: "Послуги", contact: "Контакти", email: "Email" },
    modal: {
      title: "Замовити сайт",
      sub: "Заповніть форму — ми зв'яжемося з вами найближчим часом.",
      name: "Ваше ім'я", namePh: "Іван",
      email: "Email", emailPh: "you@example.com",
      tg: "Телефон / Telegram", tgPh: "@username або +380...",
      type: "Тип проєкту", typeChoose: "Оберіть тип",
      types: ["Лендинг", "Багатосторінковий сайт", "Корпоративний сайт", "Інтернет-магазин", "Інше"],
      message: "Опишіть проєкт", messagePh: "Розкажіть про вашу ідею...",
      submit: "Надіслати заявку", sending: "Надсилання...",
      success: "Дякуємо!", successSub: "Заявку отримано. Ми зв'яжемося з вами найближчим часом.",
      error: "Помилка надсилання. Спробуйте ще раз.",
      close: "Закрити",
    },
  },
  ru: {
    nav: { services: "Услуги", contact: "Контакты", cta: "Заказать сайт" },
    hero: {
      badge: "Веб-студия · Украина",
      titleA: "Создаём сайты,",
      titleB: "которые работают",
      sub: "Разработка, дизайн и запуск современных веб-проектов. От лендинга до корпоративного портала — под ключ.",
      cta1: "Обсудить проект",
      cta2: "Наши услуги",
    },
    stats: { years: "Лет опыта", projects: "Успешных проектов", growth: "Рост студии" },
    services: {
      tag: "Что мы предлагаем",
      title: "Полный цикл веб-разработки",
      sub: "Всё что нужно для запуска вашего сайта — в одном месте.",
      cards: [
        { icon: "🌐", title: "Разработка сайтов", items: ["Лендинги (Landing Pages)", "Многостраничные сайты", "Корпоративные сайты", "Интернет-магазины (базовый функционал)"] },
        { icon: "🎨", title: "Дизайн", items: ["UI/UX дизайн сайтов", "Адаптивный дизайн (телефон / планшет)", "Редизайн существующих сайтов"] },
        { icon: "⚙️", title: "Frontend-разработка", items: ["Верстка сайтов (HTML, CSS, JavaScript)", "Анимации и интерактив", "Оптимизация скорости загрузки"] },
        { icon: "🔧", title: "Базовый Backend", items: ["Подключение форм (заявки, обратная связь)", "Работа с базами данных", "Интеграция API (Telegram-бот, формы)"] },
      ],
    },
    contact: {
      tag: "Связаться с нами",
      title: "Готовы обсудить ваш проект?",
      sub: "Напишите нам — ответим быстро и обсудим детали без лишней воды.",
      phone: "Телефон",
      email: "Email",
      location: "Локация",
      locationValue: "Украина · Работаем удалённо",
      name: "Ваше имя",
      namePh: "Иван",
      tg: "Телефон / Telegram",
      tgPh: "@username",
      emailLabel: "Email",
      type: "Тип проекта",
      typeChoose: "Выберите тип",
      types: ["Лендинг", "Многостраничный сайт", "Корпоративный сайт", "Интернет-магазин", "Другое"],
      task: "Опишите задачу",
      taskPh: "Расскажите о вашем проекте...",
      submit: "Отправить заявку →",
      sent: "✓ Заявка отправлена!",
    },
    footer: { services: "Услуги", contact: "Контакты", email: "Email" },
    modal: {
      title: "Заказать сайт",
      sub: "Заполните форму — мы свяжемся с вами в ближайшее время.",
      name: "Ваше имя", namePh: "Иван",
      email: "Email", emailPh: "you@example.com",
      tg: "Телефон / Telegram", tgPh: "@username или +380...",
      type: "Тип проекта", typeChoose: "Выберите тип",
      types: ["Лендинг", "Многостраничный сайт", "Корпоративный сайт", "Интернет-магазин", "Другое"],
      message: "Опишите проект", messagePh: "Расскажите о вашей идее...",
      submit: "Отправить заявку", sending: "Отправка...",
      success: "Спасибо!", successSub: "Заявка получена. Мы свяжемся с вами в ближайшее время.",
      error: "Ошибка отправки. Попробуйте ещё раз.",
      close: "Закрыть",
    },
  },
  en: {
    nav: { services: "Services", contact: "Contact", cta: "Order a site" },
    hero: {
      badge: "Web Studio · Ukraine",
      titleA: "We build websites",
      titleB: "that work",
      sub: "Development, design and launch of modern web projects. From landing pages to corporate portals — turnkey.",
      cta1: "Discuss a project",
      cta2: "Our services",
    },
    stats: { years: "Years of experience", projects: "Successful projects", growth: "Studio growth" },
    services: {
      tag: "What we offer",
      title: "Full-cycle web development",
      sub: "Everything you need to launch your site — in one place.",
      cards: [
        { icon: "🌐", title: "Website development", items: ["Landing Pages", "Multi-page websites", "Corporate websites", "E-commerce (basic features)"] },
        { icon: "🎨", title: "Design", items: ["UI/UX website design", "Responsive design (mobile / tablet)", "Redesign of existing sites"] },
        { icon: "⚙️", title: "Frontend development", items: ["Markup (HTML, CSS, JavaScript)", "Animations & interactivity", "Loading speed optimization"] },
        { icon: "🔧", title: "Basic Backend", items: ["Forms (requests, feedback)", "Working with databases", "API integration (Telegram bot, forms)"] },
      ],
    },
    contact: {
      tag: "Get in touch",
      title: "Ready to discuss your project?",
      sub: "Write to us — we'll reply quickly and discuss details without fluff.",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationValue: "Ukraine · Working remotely",
      name: "Your name",
      namePh: "John",
      tg: "Phone / Telegram",
      tgPh: "@username",
      emailLabel: "Email",
      type: "Project type",
      typeChoose: "Choose a type",
      types: ["Landing", "Multi-page site", "Corporate site", "E-commerce", "Other"],
      task: "Describe the task",
      taskPh: "Tell us about your project...",
      submit: "Send request →",
      sent: "✓ Request sent!",
    },
    footer: { services: "Services", contact: "Contact", email: "Email" },
    modal: {
      title: "Order a website",
      sub: "Fill in the form — we'll get back to you shortly.",
      name: "Your name", namePh: "John",
      email: "Email", emailPh: "you@example.com",
      tg: "Phone / Telegram", tgPh: "@username or +1...",
      type: "Project type", typeChoose: "Choose a type",
      types: ["Landing", "Multi-page site", "Corporate site", "E-commerce", "Other"],
      message: "Describe the project", messagePh: "Tell us about your idea...",
      submit: "Send request", sending: "Sending...",
      success: "Thank you!", successSub: "Request received. We'll get back to you shortly.",
      error: "Sending failed. Please try again.",
      close: "Close",
    },
  },
  cs: {
    nav: { services: "Služby", contact: "Kontakt", cta: "Objednat web" },
    hero: {
      badge: "Webové studio · Ukrajina",
      titleA: "Tvoříme weby,",
      titleB: "které fungují",
      sub: "Vývoj, design a spuštění moderních webových projektů. Od landing page po firemní portál — na klíč.",
      cta1: "Probrat projekt",
      cta2: "Naše služby",
    },
    stats: { years: "Let zkušeností", projects: "Úspěšných projektů", growth: "Růst studia" },
    services: {
      tag: "Co nabízíme",
      title: "Kompletní webový vývoj",
      sub: "Vše, co potřebujete ke spuštění webu — na jednom místě.",
      cards: [
        { icon: "🌐", title: "Vývoj webů", items: ["Landing Pages", "Vícestránkové weby", "Firemní weby", "E-shopy (základní funkce)"] },
        { icon: "🎨", title: "Design", items: ["UI/UX design webů", "Responzivní design (mobil / tablet)", "Redesign existujících webů"] },
        { icon: "⚙️", title: "Frontend vývoj", items: ["Kódování (HTML, CSS, JavaScript)", "Animace a interakce", "Optimalizace rychlosti"] },
        { icon: "🔧", title: "Základní Backend", items: ["Formuláře (žádosti, zpětná vazba)", "Práce s databázemi", "Integrace API (Telegram bot, formuláře)"] },
      ],
    },
    contact: {
      tag: "Spojte se s námi",
      title: "Připraveni probrat váš projekt?",
      sub: "Napište nám — odpovíme rychle a probereme detaily bez zbytečností.",
      phone: "Telefon",
      email: "Email",
      location: "Lokace",
      locationValue: "Ukrajina · Pracujeme vzdáleně",
      name: "Vaše jméno",
      namePh: "Jan",
      tg: "Telefon / Telegram",
      tgPh: "@username",
      emailLabel: "Email",
      type: "Typ projektu",
      typeChoose: "Vyberte typ",
      types: ["Landing", "Vícestránkový web", "Firemní web", "E-shop", "Jiné"],
      task: "Popište úkol",
      taskPh: "Řekněte nám o vašem projektu...",
      submit: "Odeslat poptávku →",
      sent: "✓ Poptávka odeslána!",
    },
    footer: { services: "Služby", contact: "Kontakt", email: "Email" },
    modal: {
      title: "Objednat web",
      sub: "Vyplňte formulář — brzy se vám ozveme.",
      name: "Vaše jméno", namePh: "Jan",
      email: "Email", emailPh: "you@example.com",
      tg: "Telefon / Telegram", tgPh: "@username nebo +420...",
      type: "Typ projektu", typeChoose: "Vyberte typ",
      types: ["Landing", "Vícestránkový web", "Firemní web", "E-shop", "Jiné"],
      message: "Popište projekt", messagePh: "Řekněte nám o vašem nápadu...",
      submit: "Odeslat poptávku", sending: "Odesílání...",
      success: "Děkujeme!", successSub: "Poptávka přijata. Brzy se vám ozveme.",
      error: "Odeslání se nezdařilo. Zkuste to znovu.",
      close: "Zavřít",
    },
  },
  fr: {
    nav: { services: "Services", contact: "Contact", cta: "Commander un site" },
    hero: {
      badge: "Studio Web · Ukraine",
      titleA: "Nous créons des sites",
      titleB: "qui fonctionnent",
      sub: "Développement, design et lancement de projets web modernes. Du landing au portail d'entreprise — clé en main.",
      cta1: "Discuter d'un projet",
      cta2: "Nos services",
    },
    stats: { years: "Années d'expérience", projects: "Projets réussis", growth: "Croissance du studio" },
    services: {
      tag: "Ce que nous offrons",
      title: "Développement web complet",
      sub: "Tout ce dont vous avez besoin pour lancer votre site — au même endroit.",
      cards: [
        { icon: "🌐", title: "Développement de sites", items: ["Landing Pages", "Sites multi-pages", "Sites corporatifs", "E-commerce (fonctions de base)"] },
        { icon: "🎨", title: "Design", items: ["Design UI/UX des sites", "Design responsive (mobile / tablette)", "Refonte de sites existants"] },
        { icon: "⚙️", title: "Développement Frontend", items: ["Intégration (HTML, CSS, JavaScript)", "Animations & interactivité", "Optimisation de la vitesse"] },
        { icon: "🔧", title: "Backend basique", items: ["Formulaires (demandes, retours)", "Travail avec les bases de données", "Intégration API (bot Telegram, formulaires)"] },
      ],
    },
    contact: {
      tag: "Contactez-nous",
      title: "Prêt à discuter de votre projet ?",
      sub: "Écrivez-nous — nous répondrons vite et discuterons des détails sans bla-bla.",
      phone: "Téléphone",
      email: "Email",
      location: "Localisation",
      locationValue: "Ukraine · Travail à distance",
      name: "Votre nom",
      namePh: "Jean",
      tg: "Téléphone / Telegram",
      tgPh: "@username",
      emailLabel: "Email",
      type: "Type de projet",
      typeChoose: "Choisir un type",
      types: ["Landing", "Site multi-pages", "Site corporatif", "E-commerce", "Autre"],
      task: "Décrivez la tâche",
      taskPh: "Parlez-nous de votre projet...",
      submit: "Envoyer la demande →",
      sent: "✓ Demande envoyée !",
    },
    footer: { services: "Services", contact: "Contact", email: "Email" },
    modal: {
      title: "Commander un site",
      sub: "Remplissez le formulaire — nous vous recontacterons rapidement.",
      name: "Votre nom", namePh: "Jean",
      email: "Email", emailPh: "you@example.com",
      tg: "Téléphone / Telegram", tgPh: "@username ou +33...",
      type: "Type de projet", typeChoose: "Choisir un type",
      types: ["Landing", "Site multi-pages", "Site corporatif", "E-commerce", "Autre"],
      message: "Décrivez le projet", messagePh: "Parlez-nous de votre idée...",
      submit: "Envoyer la demande", sending: "Envoi...",
      success: "Merci !", successSub: "Demande reçue. Nous vous recontacterons rapidement.",
      error: "L'envoi a échoué. Réessayez.",
      close: "Fermer",
    },
  },
};