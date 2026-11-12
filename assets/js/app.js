/* =========================================================
   澳門慈幼中學 · 活動照片 — app
   Vanilla JS, hash router, bilingual (ZH / EN)
   ========================================================= */

const UI = {
  zh: {
    siteName: "澳門慈幼中學",
    siteSub: "活動照片",
    skip: "跳至主要內容",
    nav: { home: "首頁", gallery: "相簿" },
    langSwitch: "Switch to English",
    langButton: "EN",
    menu: "開啟選單",
    home: "首頁",
    heroKicker: "校園活動影像 · 持續更新",
    heroTitle1: "把校園的每一刻，",
    heroTitle2: "好好收藏。",
    heroLead: "澳門慈幼中學活動照片庫，記錄課堂以外的學習、文化與成長。",
    heroCta1: "探索相簿",
    heroCta2: "所有照片",
    statEvents: "個活動",
    statPhotos: "張照片",
    statThemes: "個主題",
    heroNote: "由校園媒體小組整理 · 持續更新",
    marquee: ["數學週", "選科講解會", "搭棚工藝", "生涯規劃", "中華文化", "音樂週", "體育週", "班際競賽", "跳繩比賽", "復活節祈禱會", "航海講座", "填海講座", "初中數學比賽"],
    featuredKicker: "精選活動 FEATURED",
    featuredTitle: "最近在校園發生的事",
    featuredLead: "從禮堂到操場，從課室到工藝室，看看同學最近經歷了什麼。",
    viewAll: "查看全部",
    view: "查看活動",
    catKicker: "探索類別 CATEGORIES",
    catTitle: "用一個主題，找回那一天",
    catLead: "七個主題，七種校園風景。點進去，重溫當天的笑聲與專注。",
    allActivitiesTitle: "所有相簿",
    allActivitiesTagline: "一次看遍所有校園片段",
    photoKicker: "相簿快照 SNAPSHOTS",
    photoTitle: "鏡頭下的片段",
    photoLead: "點擊照片，進入該活動的完整相簿。",
    openGallery: "打開完整相簿",
    aboutKicker: "關於平台 ABOUT",
    aboutTitle: "不只是一個相簿，\n而是校園的共同記憶。",
    aboutBody: "這裡收藏的，不只是活動照片，而是同學在校園裡真實走過的痕跡。從數學週的驚喜、選科講解會的認真，到搭棚工作坊的專注，每一張影像背後，都有一群人一起經歷過的時刻。",
    aboutPoint1: "記錄",
    aboutPoint1Body: "用鏡頭留下活動的溫度，讓細節不被時間帶走。",
    aboutPoint2: "整理",
    aboutPoint2Body: "按活動與主題分類，讓每次回看都容易找到當天的感動。",
    aboutPoint3: "分享",
    aboutPoint3Body: "把校園的故事分享給家長、校友與每一位關心慈幼的人。",
    aboutMore: "認識更多",
    aboutBadge: "校園影像",
    ctaKicker: "持續更新 UPDATED REGULARLY",
    ctaTitle: "下一個精彩瞬間，\n我們繼續拍下。",
    ctaLead: "活動陸續有來，相簿也會一直長大。記得回來看看，說不定下一張照片裡就有你。",
    ctaButton: "瀏覽所有相簿",
    footerTagline: "記錄校園裡的光影、笑聲與成長，讓每個精彩瞬間都有地方停留。",
    footerExplore: "探索",
    footerCategories: "類別",
    footerRights: "© 2026 澳門慈幼中學 · 活動照片",
    footerMade: "以鏡頭記錄校園",
    pageActivitiesKicker: "活動總覽 ALL ACTIVITIES",
    pageActivitiesTitle: "每一場活動，\n都值得被記得。",
    pageActivitiesLead: "按年度或類別篩選，也可用關鍵字搜尋。找到那天你也在場的活動。",
    filterAll: "全部",
    searchActivities: "搜尋活動名稱、內容…",
    searchPhotos: "搜尋照片、活動或類別…",
    searchLabel: "搜尋",
    yearLabel: "年度",
    yearGrouping: "年度分組",
    yearEmptyTitle: "活動照片準備中",
    yearEmptyBody: "這一年度的活動照片會陸續上傳，敬請期待。",
    yearEmptyCta: "先回顧",
    resultActivities: "個活動",
    resultAlbums: "個相簿",
    resultPhotos: "張照片",
    noActivityTitle: "找不到符合的相簿",
    noActivityBody: "試試其他關鍵字，或清除篩選條件。",
    noPhotoTitle: "找不到符合的照片",
    noPhotoBody: "換個關鍵字，或看看其他類別。",
    reset: "清除篩選",
    pageGalleryKicker: "完整相簿 FULL GALLERY",
    pageGalleryTitle: "活動相簿",
    pageGalleryLead: "按年份或分類瀏覽相簿，選擇一本相簿。",
    galleryViewLabel: "檢視方式",
    viewActivity: "按活動",
    viewCategory: "按分類",
    viewPhotos: "所有照片",
    pageAboutKicker: "關於 ABOUT",
    pageAboutTitle: "把校園的故事，\n好好說下去。",
    pageAboutLead: "一個由校園媒體小組整理的活動照片平台，為同學、家長與校友保存共同的記憶。",
    storyTitle: "由一班喜歡記錄的同學開始",
    storyP1: "平台的起點很簡單：活動結束後，照片總是散落在不同的相簿與群組裡。於是，校園媒體小組決定把它們整理起來，建立一個屬於慈幼的活動照片庫。",
    storyP2: "我們按活動與主題分類，為照片寫下簡單的說明，也保留拍攝當天的日期與地點。希望無論是剛參加完活動的同學，還是畢業多年的校友，都能在這裡找回熟悉的校園。",
    valueKicker: "我們相信 WHAT WE BELIEVE",
    valuesTitle: "記錄的三個步驟",
    value1t: "記錄 Record",
    value1b: "用鏡頭留下活動的溫度，讓細節不被時間帶走。",
    value2t: "整理 Curate",
    value2b: "按活動與主題分類，讓每次回看都容易找到當天的感動。",
    value3t: "分享 Share",
    value3b: "把校園的故事分享給家長、校友與每一位關心慈幼的人。",
    numbersKicker: "平台一覽 AT A GLANCE",
    numActivities: "個活動",
    numPhotos: "張照片",
    numCategories: "個主題",
    numCampus: "個校園",
    contactKicker: "聯絡我們 CONTACT",
    contactTitle: "照片授權與合作",
    contactBody: "如欲索取照片原檔、授權使用或合作拍攝，歡迎經校務處聯絡校園媒體小組。",
    contactNote: "澳門慈幼中學 · 澳門",
    contactButton: "學校官方網站",
    detailHome: "首頁",
    detailActivities: "相簿",
    aboutEvent: "關於活動",
    albumTitle: "活動相簿",
    albumHint: "點擊照片放大 · Click to enlarge",
    date: "日期",
    location: "地點",
    photosLabel: "照片",
    photoCount: "張照片",
    prevActivity: "上一個相簿",
    nextActivity: "下一個相簿",
    backActivities: "返回相簿列表",
    albumEnd: "已看完整個相簿",
    notFoundTitle: "找不到這個頁面",
    notFoundBody: "它可能已經移動，或連結有誤。",
    notFoundCta: "回到首頁",
    lightboxClose: "關閉",
    lightboxPrev: "上一張",
    lightboxNext: "下一張",
    downloadPhoto: "下載照片",
    lightboxLabel: "照片檢視"
  },
  en: {
    siteName: "Salesian School Macau",
    siteSub: "Activity Gallery",
    skip: "Skip to main content",
    nav: { home: "Home", gallery: "Gallery" },
    langSwitch: "切換至中文",
    langButton: "中",
    menu: "Open menu",
    home: "Home",
    heroKicker: "CAMPUS MOMENTS · UPDATED REGULARLY",
    heroTitle1: "Every bright moment,",
    heroTitle2: "kept forever.",
    heroLead: "The activity photo gallery of Salesian School Macau — capturing learning, culture and growth beyond the classroom.",
    heroCta1: "Browse albums",
    heroCta2: "All photos",
    statEvents: "events",
    statPhotos: "photos",
    statThemes: "themes",
    heroNote: "Curated by the Campus Media Team · Updated regularly",
    marquee: ["Maths Week", "Subject Selection", "Bamboo Craft", "Career Planning", "Chinese Culture", "Music Week", "Sports Week", "Inter-class Games", "Jump Rope", "Easter Prayer", "Maritime Talk", "Reclamation Talk", "Maths Competition"],
    featuredKicker: "FEATURED",
    featuredTitle: "What happened on campus lately",
    featuredLead: "From the hall to the playground, from classrooms to the craft room — a look at what students have been up to.",
    viewAll: "View all",
    view: "View event",
    catKicker: "BROWSE BY THEME",
    catTitle: "Pick a theme, find that day",
    catLead: "Seven themes, seven sides of campus life. Step in and relive the laughter and focus.",
    allActivitiesTitle: "All albums",
    allActivitiesTagline: "Every moment in one place",
    photoKicker: "SNAPSHOTS",
    photoTitle: "Fragments through the lens",
    photoLead: "Click a photo to open the event's album.",
    openGallery: "Open full gallery",
    aboutKicker: "ABOUT",
    aboutTitle: "More than an album —\na shared campus memory.",
    aboutBody: "What lives here is more than event photos. It is the trace of students moving through their school days — the surprise of Maths Week, the seriousness of subject selection, the focus of the bamboo workshop. Behind every frame is a moment shared by a group of people.",
    aboutPoint1: "Record",
    aboutPoint1Body: "Keeping the warmth of each event, so the details don't slip away with time.",
    aboutPoint2: "Curate",
    aboutPoint2Body: "Sorting by event and theme, so every memory is easy to find again.",
    aboutPoint3: "Share",
    aboutPoint3Body: "Sharing campus stories with parents, alumni and everyone who cares about Salesian.",
    aboutMore: "Read more",
    aboutBadge: "CAMPUS",
    ctaKicker: "UPDATED REGULARLY",
    ctaTitle: "The next bright moment?\nWe'll keep shooting.",
    ctaLead: "More activities are on the way, and the gallery keeps growing. Come back soon — you might be in the next photo.",
    ctaButton: "Browse all albums",
    footerTagline: "Light, laughter and growth on campus — a place for every bright moment to stay.",
    footerExplore: "Explore",
    footerCategories: "Themes",
    footerRights: "© 2026 Salesian School Macau · Activity Gallery",
    footerMade: "Documenting campus life",
    pageActivitiesKicker: "ALL ACTIVITIES",
    pageActivitiesTitle: "Every event deserves\nto be remembered.",
    pageActivitiesLead: "Filter by year or theme, or search by keyword. Find the day you were part of.",
    filterAll: "All",
    searchActivities: "Search activities…",
    searchPhotos: "Search photos, events or themes…",
    searchLabel: "Search",
    yearLabel: "Year",
    yearGrouping: "Grouped by year",
    yearEmptyTitle: "Photos on the way",
    yearEmptyBody: "Photos from this year will be added as activities happen. Stay tuned.",
    yearEmptyCta: "Browse",
    resultActivities: "activities",
    resultAlbums: "albums",
    resultPhotos: "photos",
    noActivityTitle: "No matching albums",
    noActivityBody: "Try another keyword, or clear the filters.",
    noPhotoTitle: "No matching photos",
    noPhotoBody: "Try another keyword, or explore a different theme.",
    reset: "Clear filters",
    pageGalleryKicker: "FULL GALLERY",
    pageGalleryTitle: "Activity Albums",
    pageGalleryLead: "Browse albums by year or theme, then open one.",
    galleryViewLabel: "View by",
    viewActivity: "By activity",
    viewCategory: "By theme",
    viewPhotos: "All photos",
    pageAboutKicker: "ABOUT",
    pageAboutTitle: "Keeping the campus story\nalive.",
    pageAboutLead: "An activity gallery curated by the Campus Media Team, preserving shared memories for students, parents and alumni.",
    storyTitle: "Started by students who love to document",
    storyP1: "The idea began simply: after every event, photos ended up scattered across different albums and group chats. So the Campus Media Team decided to bring them together in one activity archive for Salesian.",
    storyP2: "We sort by event and theme, add short captions, and keep the date and place of each shoot. Whether you have just joined an activity or graduated years ago, we hope you can find a familiar corner of campus here.",
    valueKicker: "WHAT WE BELIEVE",
    valuesTitle: "Three steps of remembering",
    value1t: "Record",
    value1b: "Keeping the warmth of each event, so the details don't slip away with time.",
    value2t: "Curate",
    value2b: "Sorting by event and theme, so every memory is easy to find again.",
    value3t: "Share",
    value3b: "Sharing campus stories with parents, alumni and everyone who cares about Salesian.",
    numbersKicker: "AT A GLANCE",
    numActivities: "events",
    numPhotos: "photos",
    numCategories: "themes",
    numCampus: "campus",
    contactKicker: "CONTACT",
    contactTitle: "Photo requests & collaborations",
    contactBody: "For original files, usage permission or a photo collaboration, please contact the Campus Media Team through the school office.",
    contactNote: "Salesian School Macau · Macau",
    contactButton: "School website",
    detailHome: "Home",
    detailActivities: "Gallery",
    aboutEvent: "About the event",
    albumTitle: "Event album",
    albumHint: "Click a photo to enlarge",
    date: "Date",
    location: "Location",
    photosLabel: "Photos",
    photoCount: "photos",
    prevActivity: "Previous album",
    nextActivity: "Next album",
    backActivities: "Back to albums",
    albumEnd: "You've reached the end of the album",
    notFoundTitle: "Page not found",
    notFoundBody: "It may have moved, or the link might be wrong.",
    notFoundCta: "Back home",
    lightboxClose: "Close",
    lightboxPrev: "Previous photo",
    lightboxNext: "Next photo",
    downloadPhoto: "Download photo",
    lightboxLabel: "Photo viewer"
  }
};

const state = {
  lang: (() => {
    try {
      return localStorage.getItem("salesian-lang") === "en" ? "en" : "zh";
    } catch (error) {
      return "zh";
    }
  })(),
  filters: {
    activities: { cat: "all", q: "", year: "all" },
    gallery: { cat: "all", q: "", year: "all" }
  }
};

let currentRoute = { name: "home" };
let lastRouteName = "";
let photoSets = Object.create(null);
let revealObserver = null;
let lb = { list: [], index: 0, lastFocus: null };
let lbTimer = null;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const app = $("#app");
const t = () => UI[state.lang];
const L = (obj) => (obj && obj[state.lang]) || "";
const O = (obj) => (obj && obj[state.lang === "zh" ? "en" : "zh"]) || "";

function esc(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function nl2br(value) {
  return esc(value).replace(/\n/g, "<br>");
}

const ICONS = {
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17L17 7M8 7h9v9"/>',
  arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  pin: '<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  chevronLeft: '<path d="M15 18l-6-6 6-6"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  lantern: '<path d="M9 4h6M12 4v2M7 9c0-2 2-3 5-3s5 1 5 3v5c0 2-2 3-5 3s-5-1-5-3z"/><path d="M12 17v3M9 21h6"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
  sparkle: '<path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/>',
  expand: '<path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5M3 16l9 5 9-5"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/>',
  school: '<path d="M3 10l9-6 9 6M5 10v10h14V10M9 20v-6h6v6"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M12 13v4M8 21h8M10 17h4"/>',
  music: '<path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
  heart: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>'
};

function icon(name, className = "") {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

const catById = (id) => CATEGORIES.find((c) => c.id === id);
const activityById = (id) => ACTIVITIES.find((a) => a.id === id);
const sortedActivities = () => ACTIVITIES.slice().sort((a, b) => b.date.localeCompare(a.date));
const totalPhotos = () => ACTIVITIES.reduce((sum, a) => sum + a.photos.length, 0);

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat(state.lang === "zh" ? "zh-Hant-HK" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(d);
}

function photoCount(n) {
  if (state.lang === "zh") return `${n} ${t().photoCount}`;
  return `${n} ${n === 1 ? "photo" : "photos"}`;
}

function activityCount(n) {
  if (state.lang === "zh") return `${n} ${t().resultActivities}`;
  return `${n} ${n === 1 ? "activity" : "activities"}`;
}

function haystack(...values) {
  const flat = [];
  const walk = (v) => {
    if (v == null) return;
    if (typeof v === "string" || typeof v === "number") flat.push(String(v));
    else if (Array.isArray(v)) v.forEach(walk);
    else if (typeof v === "object") Object.values(v).forEach(walk);
  };
  values.forEach(walk);
  return flat.join(" ").toLowerCase();
}

function matches(query, ...values) {
  const q = query.trim().toLowerCase();
  return !q || haystack(...values).includes(q);
}

function allPhotos() {
  return sortedActivities().flatMap((activity) =>
    activity.photos.map((photo) => ({ ...photo, activity }))
  );
}

/* ---------------- routing ---------------- */

function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, "");
  const [pathPart, queryPart] = raw.split("?");
  const segments = pathPart.split("/").filter(Boolean).map(decodeURIComponent);
  const params = new URLSearchParams(queryPart || "");
  if (!segments.length) return { name: "home", params, key: "home" };
  if (segments[0] === "activities") return { name: "gallery", params, key: "gallery" };
  if (segments[0] === "gallery") return { name: "gallery", params, key: "gallery" };
  if (segments[0] === "activity" && segments[1]) {
    return { name: "activity", id: segments[1], params, key: "activity/" + segments[1] };
  }
  return { name: "notfound", params, key: "notfound" };
}

function applyRouteParams(route) {
  if (route.name === "gallery" && lastRouteName !== "gallery") {
    state.filters.gallery = { cat: "all", q: "", year: "all" };
  }
  const cat = route.params.get("cat");
  if (cat && catById(cat) && route.name === "gallery") state.filters.gallery.cat = cat;
  const year = route.params.get("year");
  if (route.name === "gallery" && orderedYears().includes(year)) {
    state.filters.gallery.year = year;
  }
}

function handleRoute() {
  const route = parseRoute();
  applyRouteParams(route);
  const shouldScroll = route.key !== currentRoute.key;
  currentRoute = route;
  lastRouteName = route.name;
  renderRoute(route, { scroll: shouldScroll });
}

/* ---------------- chrome ---------------- */

function navLink(route, key, href, label) {
  const active = key === "gallery"
    ? route.name === "gallery" || route.name === "activity"
    : route.name === key;
  return `<a class="nav-link${active ? " is-active" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
}

function renderHeader(route) {
  const header = $("#site-header");
  const T = t();
  const skipLink = $(".skip-link");
  if (skipLink) skipLink.textContent = T.skip;
  header.innerHTML = `
    <div class="container header-inner">
      <a class="brand" href="#/" aria-label="${esc(T.siteName)}">
        <img src="assets/img/crest.png" alt="" width="46" height="46">
        <span class="brand-text">
          <strong>${esc(T.siteName)}<span class="brand-sep"> ·</span></strong>
          <span>${esc(T.siteSub)}</span>
        </span>
      </a>
      <nav class="site-nav" id="site-nav" aria-label="${state.lang === "zh" ? "主導航" : "Main navigation"}">
        ${navLink(route, "home", "#/", T.nav.home)}
        ${navLink(route, "gallery", "#/gallery", T.nav.gallery)}
      </nav>
      <div class="header-actions">
        <button class="lang-btn" id="lang-toggle" type="button" aria-label="${esc(T.langSwitch)}">${esc(T.langButton)}</button>
        <button class="menu-btn" id="menu-toggle" type="button" aria-label="${esc(T.menu)}" aria-expanded="false" aria-controls="site-nav">
          ${icon("menu")}
        </button>
      </div>
    </div>`;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
  bindChrome();
}

function renderFooter() {
  const T = t();
  $("#site-footer").innerHTML = `
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand brand-footer" href="#/">
          <img src="assets/img/crest.png" alt="" width="46" height="46">
          <span class="brand-text"><strong>${esc(T.siteName)}<span class="brand-sep"> ·</span></strong><span>${esc(T.siteSub)}</span></span>
        </a>
        <p>${esc(T.footerTagline)}</p>
      </div>
      <div class="footer-col">
        <h3>${esc(T.footerExplore)}</h3>
        <a href="#/">${esc(T.nav.home)}</a>
        <a href="#/gallery">${esc(T.nav.gallery)}</a>
      </div>
      <div class="footer-col">
        <h3>${esc(T.footerCategories)}</h3>
        ${CATEGORIES.map((cat) => `<a href="#/gallery?cat=${cat.id}">${esc(L(cat))}</a>`).join("")}
      </div>
    </div>
    <div class="container footer-bottom">
      <span>${esc(T.footerRights)}</span>
      <span class="footer-made">${icon("heart")} ${esc(T.footerMade)}</span>
    </div>`;
}

function closeMobileNav() {
  if (!document.body.classList.contains("nav-open")) return;
  document.body.classList.remove("nav-open");
  const btn = $("#menu-toggle");
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", t().menu);
    btn.innerHTML = icon("menu");
  }
}

function bindChrome() {
  const menuBtn = $("#menu-toggle");
  if (menuBtn) {
    menuBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = document.body.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.innerHTML = open ? icon("close") : icon("menu");
      menuBtn.setAttribute("aria-label", open ? t().lightboxClose : t().menu);
    });
  }
  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileNav();
    });
  });
  const langBtn = $("#lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLang(state.lang === "zh" ? "en" : "zh");
    });
  }
}

function setLang(lang) {
  state.lang = lang;
  try { localStorage.setItem("salesian-lang", lang); } catch (e) { /* private mode */ }
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.body.classList.remove("nav-open");
  renderRoute(currentRoute, { scroll: false, keepLightbox: true });
  if (!$("#lightbox").hidden) updateLightbox();
}

/* ---------------- render ---------------- */

function renderRoute(route, options = {}) {
  if (!options.keepLightbox) closeLightbox(false);
  document.body.classList.remove("nav-open");
  photoSets = Object.create(null);
  app.innerHTML = viewFor(route);
  renderHeader(route);
  renderFooter();
  setDocumentTitle(route);
  if (options.scroll) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  initPage(route);
  initReveals();
}

function setDocumentTitle(route) {
  const base = t().siteName;
  if (route.name === "home") {
    document.title = `${base} · ${state.lang === "zh" ? "活動照片" : "Activity Gallery"}`;
  } else if (route.name === "activity") {
    const activity = activityById(route.id);
    document.title = activity ? `${L(activity.title)} · ${base}` : `${t().notFoundTitle} · ${base}`;
  } else {
    const labels = {
      gallery: t().nav.gallery,
      notfound: t().notFoundTitle
    };
    document.title = `${labels[route.name] || ""} · ${base}`;
  }
}

function viewFor(route) {
  switch (route.name) {
    case "home": return pageHome();
    case "gallery": return pageGallery();
    case "activity": return pageActivity(route);
    default: return pageNotFound();
  }
}

function initPage(route) {
  if (route.name === "gallery") initGalleryPage();
}

/* ---------------- home ---------------- */

function pageHome() {
  const T = t();
  const events = sortedActivities();
  const featured = ["music-week", "sports-week", "class-competition", "chinese-culture"]
    .map(activityById)
    .filter(Boolean);
  const stripPhotos = ["music-week", "sports-week", "math-week", "chinese-culture", "bamboo-craft", "class-competition", "subject-selection", "maritime-talk"]
    .map((id) => {
      const activity = activityById(id);
      return activity ? { ...activity.photos[1] || activity.photos[0], activity } : null;
    })
    .filter(Boolean);

  const collage = [
    { id: "music-week", index: 0, cls: "c1" },
    { id: "sports-week", index: 0, cls: "c2" },
    { id: "chinese-culture", index: 1, cls: "c3" }
  ].map((item) => {
    const activity = activityById(item.id);
    const photo = activity.photos[item.index] || activity.photos[0];
    const cat = catById(activity.category);
    return `
      <figure class="collage-card ${item.cls}">
        <img src="${photo.src}" alt="${esc(L(photo.caption))}" width="900" height="1200">
        <figcaption class="collage-tag" style="--cat:${cat.color}">
          <span class="tag-dot" style="background:${cat.color}"></span>${esc(L(cat))}
        </figcaption>
      </figure>`;
  }).join("");

  return `
  <section class="hero">
    <div class="hero-dots" aria-hidden="true"></div>
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="hero-kicker"><span class="live-dot"></span>${esc(T.heroKicker)}</p>
        <h1 class="hero-title">${esc(T.heroTitle1)}<br><span class="mark">${esc(T.heroTitle2)}</span></h1>
        <p class="hero-lead">${esc(T.heroLead)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/gallery">${esc(T.heroCta1)} ${icon("arrowRight")}</a>
        </div>
        <div class="hero-stats" role="list">
          <div class="stat" role="listitem"><span class="stat-num">${events.length}</span><span class="stat-label">${esc(T.statEvents)}</span></div>
          <div class="stat" role="listitem"><span class="stat-num">${totalPhotos()}</span><span class="stat-label">${esc(T.statPhotos)}</span></div>
          <div class="stat" role="listitem"><span class="stat-num">${CATEGORIES.length}</span><span class="stat-label">${esc(T.statThemes)}</span></div>
        </div>
        <p class="hero-note">${icon("sparkle")} ${esc(T.heroNote)}</p>
      </div>
      <div class="hero-visual">
        <div class="sun-blob" aria-hidden="true"></div>
        <div class="orbit-badge" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <defs><path id="orbitPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/></defs>
            <text><textPath href="#orbitPath">SALESIAN SCHOOL MACAU · ACTIVITY GALLERY · </textPath></text>
          </svg>
          <span><img src="assets/img/crest.png" alt=""></span>
        </div>
        <div class="collage">
          ${collage}
          <span class="tape tape-a" aria-hidden="true"></span>
          <span class="tape tape-b" aria-hidden="true"></span>
        </div>
        <div class="photo-sticker" aria-hidden="true"><strong>${totalPhotos()}</strong><span>${esc(T.statPhotos)}</span></div>
      </div>
    </div>
  </section>

  <div class="marquee-wrap" aria-hidden="true">
    <div class="marquee">
      <div class="marquee-track">
        ${Array(2).fill(T.marquee).flat().map((item) => `<span class="marquee-item">${esc(item)}</span><span class="marquee-star">✦</span>`).join("")}
      </div>
    </div>
  </div>

  <section class="section featured-section">
    <div class="container">
      <div class="section-head split">
        <div>
          <p class="section-kicker">${esc(T.featuredKicker)}</p>
          <h2 class="section-title">${esc(T.featuredTitle)}</h2>
          <p class="section-lead">${esc(T.featuredLead)}</p>
        </div>
        <a class="text-link" href="#/gallery">${esc(T.viewAll)} ${icon("arrowUpRight")}</a>
      </div>
      <div class="featured-grid">
        ${featured.map((activity, index) => featureCard(activity, index)).join("")}
      </div>
    </div>
  </section>

  <section class="section categories-section">
    <div class="container">
      <div class="section-head">
        <p class="section-kicker">${esc(T.catKicker)}</p>
        <h2 class="section-title">${esc(T.catTitle)}</h2>
        <p class="section-lead">${esc(T.catLead)}</p>
      </div>
      <div class="category-grid">
        ${CATEGORIES.map((cat) => categoryCard(cat)).join("")}
        ${categoryAllCard()}
      </div>
    </div>
  </section>

  <section class="section strip-section">
    <div class="container">
      <div class="section-head split">
        <div>
          <p class="section-kicker">${esc(T.photoKicker)}</p>
          <h2 class="section-title">${esc(T.photoTitle)}</h2>
          <p class="section-lead">${esc(T.photoLead)}</p>
        </div>
        <a class="text-link" href="#/gallery">${esc(T.openGallery)} ${icon("arrowUpRight")}</a>
      </div>
    </div>
    <div class="container strip-container">
      <div class="photo-strip">
        ${stripPhotos.map((photo) => stripItem(photo)).join("")}
      </div>
    </div>
  </section>

  <section class="section cta-section">
    <div class="container">
      <div class="cta-panel">
        <span class="cta-star" aria-hidden="true">✦</span>
        <div class="cta-copy">
          <p class="section-kicker light">${esc(T.ctaKicker)}</p>
          <h2 class="cta-title">${nl2br(T.ctaTitle)}</h2>
          <p class="cta-lead">${esc(T.ctaLead)}</p>
          <a class="btn btn-sun" href="#/gallery">${esc(T.ctaButton)} ${icon("arrowRight")}</a>
        </div>
        <div class="cta-art" aria-hidden="true">
          ${featured.slice(0, 2).map((a) => `<img src="${a.photos[1] ? a.photos[1].src : a.photos[0].src}" alt="">`).join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function featureCard(activity, index) {
  return `
    <a class="feature-card reveal" href="#/activity/${encodeURIComponent(activity.id)}">
      <img class="feature-img" src="${activity.photos[0].src}" alt="${esc(L(activity.photos[0].caption))}" loading="${index === 0 ? "eager" : "lazy"}">
      <span class="feature-shade"></span>
      <span class="feature-top">
        <span class="feature-arrow">${icon("arrowUpRight")}</span>
      </span>
      <span class="feature-body">
        <strong class="feature-title">${esc(L(activity.title))}</strong>
      </span>
    </a>`;
}

function categoryCard(cat) {
  return `
    <a class="category-card reveal" href="#/gallery?cat=${cat.id}" style="--cat:${cat.color};--cat-soft:${cat.soft}">
      <span class="cat-icon">${icon(cat.icon)}</span>
      <span class="cat-name">${esc(L(cat))}</span>
      <span class="cat-arrow">${icon("arrowUpRight")}</span>
    </a>`;
}

function categoryAllCard() {
  const T = t();
  return `
    <a class="category-card category-all reveal" href="#/gallery" style="--cat:var(--yellow);--cat-soft:var(--ink)">
      <span class="cat-icon">${icon("layers")}</span>
      <span class="cat-name">${esc(T.allActivitiesTitle)}</span>
      <span class="cat-arrow">${icon("arrowUpRight")}</span>
    </a>`;
}

function stripItem(photo) {
  const activity = photo.activity;
  return `
    <a class="strip-item" href="#/activity/${encodeURIComponent(activity.id)}" aria-label="${esc(L(activity.title))}">
      <img src="${photo.src}" alt="${esc(L(photo.caption))}" loading="lazy">
      <span class="strip-overlay">
        <span class="strip-activity">${esc(L(activity.title))}</span>
        <span class="strip-icon">${icon("arrowRight")}</span>
      </span>
    </a>`;
}

/* ---------------- activities ---------------- */

function pageActivities() {
  const T = t();
  const f = state.filters.activities;
  return `
    <section class="page-hero">
      <div class="container page-hero-inner">
        <p class="section-kicker">${esc(T.pageActivitiesKicker)}</p>
        <h1 class="page-title">${nl2br(T.pageActivitiesTitle)}</h1>
        <p class="page-lead">${esc(T.pageActivitiesLead)}</p>
        <div class="year-switch">
          <span class="year-switch-label">${esc(T.yearLabel)}</span>
          <div class="year-tabs" id="year-tabs" role="group" aria-label="${esc(T.yearLabel)}">
            ${yearTabs(f.year)}
          </div>
        </div>
        <div class="toolbar">
          <label class="search-box">
            <span class="sr-only">${esc(T.searchLabel)}</span>
            ${icon("search")}
            <input type="search" id="activity-search" placeholder="${esc(T.searchActivities)}" autocomplete="off">
          </label>
        </div>
        <div class="filter-chips" id="activity-filters" role="group" aria-label="${esc(T.searchLabel)}">
          ${filterChips("activities", f.cat, f.year)}
        </div>
      </div>
    </section>
    <section class="section results-section">
      <div class="container">
        <div class="result-line">
          <span id="activity-count" aria-live="polite"></span>
          <span class="result-sort">${icon("layers")} ${esc(T.yearGrouping)}</span>
        </div>
        <div id="activity-results"></div>
      </div>
    </section>`;
}

function orderedYears() {
  const years = SCHOOL_YEARS.slice();
  ACTIVITIES.forEach((activity) => {
    if (activity.year && !years.includes(activity.year)) years.push(activity.year);
  });
  return years;
}

function yearTabs(activeYear) {
  const T = t();
  const years = orderedYears();
  const allCount = ACTIVITIES.length;
  const tabs = [
    `<button class="year-tab${activeYear === "all" ? " is-active" : ""}" type="button" data-year="all" aria-pressed="${activeYear === "all"}">
      ${esc(T.filterAll)}<span class="year-count">${allCount}</span>
    </button>`
  ];
  years.forEach((year) => {
    const count = ACTIVITIES.filter((activity) => activity.year === year).length;
    tabs.push(`
      <button class="year-tab${activeYear === year ? " is-active" : ""}" type="button" data-year="${esc(year)}" aria-pressed="${activeYear === year}">
        ${esc(year)}<span class="year-count">${count}</span>
      </button>`);
  });
  return tabs.join("");
}

function filterChips(scope, activeCat, activeYear = "all") {
  const T = t();
  const pool = scope === "activities"
    ? ACTIVITIES.filter((activity) => activeYear === "all" || activity.year === activeYear)
    : null;
  const counts = scope === "activities"
    ? CATEGORIES.map((cat) => pool.filter((activity) => activity.category === cat.id).length)
    : CATEGORIES.map((cat) => allPhotos().filter((photo) => photo.activity.category === cat.id).length);
  const total = scope === "activities" ? pool.length : counts.reduce((a, b) => a + b, 0);
  const chips = [
    `<button class="chip-filter${activeCat === "all" ? " is-active" : ""}" type="button" data-cat="all" aria-pressed="${activeCat === "all"}">
      <span>${esc(T.filterAll)}</span><span class="chip-count" data-count-all>${total}</span>
    </button>`
  ];
  CATEGORIES.forEach((cat, i) => {
    chips.push(`
      <button class="chip-filter${activeCat === cat.id ? " is-active" : ""}" type="button" data-cat="${cat.id}" aria-pressed="${activeCat === cat.id}">
        <span class="chip-dot" style="background:${cat.color}"></span>
        <span>${esc(L(cat))}</span><span class="chip-count" data-count-cat="${cat.id}">${counts[i]}</span>
      </button>`);
  });
  return chips.join("");
}

function filterActivities(f) {
  return sortedActivities().filter((activity) => {
    const cat = catById(activity.category);
    return (f.year === "all" || activity.year === f.year) &&
      (f.cat === "all" || activity.category === f.cat) &&
      matches(f.q, activity.title, activity.excerpt, activity.subtitle, activity.location, cat, activity.year);
  });
}

function initActivitiesPage() {
  const input = $("#activity-search");
  if (!input) return;
  const f = state.filters.activities;
  if (!f.year) f.year = "all";
  input.value = f.q;
  input.addEventListener("input", () => {
    f.q = input.value;
    updateActivitiesResults();
  });
  $$("#activity-filters [data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      f.cat = btn.dataset.cat;
      updateActivitiesResults();
    });
  });
  $$("#year-tabs [data-year]").forEach((btn) => {
    btn.addEventListener("click", () => {
      f.year = btn.dataset.year;
      updateActivitiesResults();
    });
  });
  $("#activity-results").addEventListener("click", (event) => {
    if (event.target.closest("[data-reset]")) {
      f.cat = "all";
      f.q = "";
      f.year = "all";
      $("#activity-search").value = "";
      updateActivitiesResults();
      $("#activity-search").focus();
      return;
    }
    const jump = event.target.closest("[data-jump-year]");
    if (jump) {
      f.year = jump.dataset.jumpYear;
      updateActivitiesResults();
      const target = $("#activity-results");
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  });
  updateActivitiesResults();
}

function updateActivitiesResults() {
  const T = t();
  const f = state.filters.activities;
  if (!f.year) f.year = "all";
  const activeFilters = f.cat !== "all" || f.q.trim() !== "";
  const years = f.year === "all" ? orderedYears() : [f.year];
  const groups = years.map((year) => ({
    year,
    list: filterActivities({ ...f, year })
  }));
  const visible = groups.filter((group) => group.list.length > 0 || !activeFilters);
  const results = $("#activity-results");
  if (!results) return;

  results.innerHTML = visible.length
    ? visible.map((group) => activityYearGroup(group)).join("")
    : emptyState("activities");

  const total = visible.reduce((sum, group) => sum + group.list.length, 0);
  const count = $("#activity-count");
  if (count) count.textContent = activityCount(total);

  $$("#year-tabs [data-year]").forEach((btn) => {
    const active = btn.dataset.year === f.year;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  $$("#activity-filters [data-cat]").forEach((btn) => {
    const active = btn.dataset.cat === f.cat;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  updateActivityChipCounts(f);
  initReveals();
}

function activityYearGroup(group) {
  const T = t();
  const body = group.list.length
    ? `<div class="activity-grid">${group.list.map(activityCard).join("")}</div>`
    : yearEmptyPanel(group.year);
  return `
    <section class="year-group" data-year-group="${esc(group.year)}">
      <div class="year-group-head">
        <h2>${esc(group.year)}</h2>
        <span>${activityCount(group.list.length)}</span>
        <span class="year-line" aria-hidden="true"></span>
      </div>
      ${body}
    </section>`;
}

function yearEmptyPanel(year) {
  const T = t();
  const fallback = orderedYears().find(
    (candidate) => candidate !== year && ACTIVITIES.some((activity) => activity.year === candidate)
  );
  return `
    <div class="year-empty reveal">
      <span class="year-empty-icon">${icon("sparkle")}</span>
      <div class="year-empty-copy">
        <h3>${esc(year)} · ${esc(T.yearEmptyTitle)}</h3>
        <p>${esc(T.yearEmptyBody)}</p>
      </div>
      ${fallback ? `<button class="btn btn-ghost" type="button" data-jump-year="${esc(fallback)}">${esc(T.yearEmptyCta)} ${esc(fallback)}</button>` : ""}
    </div>`;
}

function updateActivityChipCounts(f) {
  const pool = f.year === "all" ? ACTIVITIES : ACTIVITIES.filter((activity) => activity.year === f.year);
  const all = $("#activity-filters [data-count-all]");
  if (all) all.textContent = pool.length;
  CATEGORIES.forEach((cat) => {
    const el = $(`#activity-filters [data-count-cat="${cat.id}"]`);
    if (el) el.textContent = pool.filter((activity) => activity.category === cat.id).length;
  });
}

function activityCard(activity) {
  return `
    <article class="activity-card reveal">
      <a class="activity-link" href="#/activity/${encodeURIComponent(activity.id)}">
        <div class="activity-media">
          <img src="${activity.photos[0].src}" alt="${esc(L(activity.photos[0].caption))}" loading="lazy">
        </div>
        <div class="activity-body">
          <h3 class="activity-title">${esc(L(activity.title))}</h3>
          <span class="round-arrow">${icon("arrowRight")}</span>
        </div>
      </a>
    </article>`;
}

function emptyState(scope) {
  const T = t();
  const isPhotos = scope === "gallery";
  return `
    <div class="empty-state">
      <span class="empty-icon">${icon("search")}</span>
      <h3>${esc(isPhotos ? T.noPhotoTitle : T.noActivityTitle)}</h3>
      <p>${esc(isPhotos ? T.noPhotoBody : T.noActivityBody)}</p>
      <button class="btn btn-ghost" type="button" data-reset>${esc(T.reset)}</button>
    </div>`;
}

/* ---------------- gallery ---------------- */

function pageGallery() {
  const T = t();
  const f = state.filters.gallery;
  return `
    <section class="page-hero gallery-hero">
      <div class="container page-hero-inner">
        <p class="section-kicker">${esc(T.pageGalleryKicker)}</p>
        <h1 class="page-title">${esc(T.pageGalleryTitle)}</h1>
        <p class="page-lead">${esc(T.pageGalleryLead)}</p>
        <div class="year-switch">
          <span class="year-switch-label">${esc(T.yearLabel)}</span>
          <div class="year-tabs" id="gallery-years" role="group" aria-label="${esc(T.yearLabel)}">
            ${yearTabs(f.year || "all")}
          </div>
        </div>
        <div class="toolbar">
          <label class="search-box">
            <span class="sr-only">${esc(T.searchLabel)}</span>
            ${icon("search")}
            <input type="search" id="gallery-search" placeholder="${esc(T.searchPhotos)}" autocomplete="off">
          </label>
        </div>
        <div class="filter-chips" id="gallery-filters" role="group" aria-label="${esc(T.searchLabel)}">
          ${filterChips("gallery", f.cat)}
        </div>
      </div>
    </section>
    <section class="section results-section gallery-results-section">
      <div class="container">
        <div class="result-line">
          <span id="gallery-count" aria-live="polite"></span>
          <span class="result-sort">${icon("camera")} ${esc(T.nav.gallery)}</span>
        </div>
        <div id="gallery-results"></div>
      </div>
    </section>`;
}

function filterPhotos(f) {
  const photos = allPhotos();
  return photos.filter((photo) => {
    const cat = catById(photo.activity.category);
    return (f.year === "all" || photo.activity.year === f.year) &&
      (f.cat === "all" || photo.activity.category === f.cat) &&
      matches(f.q, photo.caption, photo.activity.title, photo.activity.excerpt, cat, photo.activity.year);
  });
}

function filterGalleryActivities(f) {
  return sortedActivities().filter((activity) => {
    const cat = catById(activity.category);
    return (f.year === "all" || activity.year === f.year) &&
      (f.cat === "all" || activity.category === f.cat) &&
      matches(f.q, activity.title, activity.excerpt, activity.subtitle, activity.location, cat, activity.year);
  });
}

function albumCount(n) {
  if (state.lang === "zh") return `${n} ${t().resultAlbums}`;
  return `${n} ${n === 1 ? "album" : "albums"}`;
}

function initGalleryPage() {
  const input = $("#gallery-search");
  if (!input) return;
  const f = state.filters.gallery;
  input.value = f.q;
  input.addEventListener("input", () => {
    f.q = input.value;
    updateGalleryResults();
  });
  $$("#gallery-filters [data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      f.cat = btn.dataset.cat;
      updateGalleryResults();
    });
  });
  $$("#gallery-years [data-year]").forEach((btn) => {
    btn.addEventListener("click", () => {
      f.year = btn.dataset.year;
      updateGalleryResults();
    });
  });
  $("#gallery-results").addEventListener("click", (event) => {
    if (event.target.closest("[data-reset]")) {
      f.cat = "all";
      f.q = "";
      f.year = "all";
      $("#gallery-search").value = "";
      updateGalleryResults();
      $("#gallery-search").focus();
      return;
    }
    const jump = event.target.closest("[data-jump-year]");
    if (jump) {
      f.year = jump.dataset.jumpYear;
      updateGalleryResults();
    }
  });
  updateGalleryResults();
}

function updateGalleryResults() {
  const f = state.filters.gallery;
  const results = $("#gallery-results");
  if (!results) return;

  const list = filterGalleryActivities(f);
  const activeFilters = f.cat !== "all" || f.q.trim() !== "";
  const years = f.year === "all" ? orderedYears() : [f.year];
  const groups = years
    .map((year) => ({ year, list: list.filter((activity) => activity.year === year) }))
    .filter((group) => group.list.length || (!activeFilters && f.year === "all") || (!activeFilters && f.year === group.year));

  if (!groups.length) {
    results.innerHTML = emptyState("albums");
  } else {
    results.innerHTML = groups.map((group) => `
      <section class="year-group">
        <div class="year-group-head">
          <h2>${esc(group.year)}</h2>
          <span>${albumCount(group.list.length)}</span>
          <span class="year-line" aria-hidden="true"></span>
        </div>
        ${group.list.length
          ? `<div class="activity-grid">${group.list.map(activityCard).join("")}</div>`
          : yearEmptyPanel(group.year)}
      </section>`).join("");
  }

  const count = $("#gallery-count");
  if (count) count.textContent = albumCount(list.length);
  $$("#gallery-years [data-year]").forEach((btn) => {
    const active = btn.dataset.year === f.year;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  $$("#gallery-filters [data-cat]").forEach((btn) => {
    const active = btn.dataset.cat === f.cat;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  updateGalleryChipCounts(f);
  initReveals();
}

function updateGalleryChipCounts(f) {
  const yearPool = f.year === "all" ? ACTIVITIES : ACTIVITIES.filter((activity) => activity.year === f.year);
  const all = $("#gallery-filters [data-count-all]");
  if (all) all.textContent = yearPool.length;
  CATEGORIES.forEach((cat) => {
    const el = $(`#gallery-filters [data-count-cat="${cat.id}"]`);
    if (el) el.textContent = yearPool.filter((activity) => activity.category === cat.id).length;
  });
}

function galleryItem(photo, index) {
  return `
    <button class="masonry-item" type="button" data-photo-set="gallery" data-photo-index="${index}" aria-label="${esc(L(photo.activity.title))}">
      <img src="${photo.src}" alt="${esc(L(photo.activity.title))}" loading="lazy">
      <span class="masonry-overlay">
        <span class="masonry-activity">${esc(L(photo.activity.title))}</span>
      </span>
    </button>`;
}

/* ---------------- activity detail ---------------- */

function pageActivity(route) {
  const activity = activityById(route.id);
  if (!activity) return pageNotFound();
  const T = t();
  const ordered = sortedActivities();
  const index = ordered.findIndex((a) => a.id === activity.id);
  const newer = ordered[index - 1];
  const older = ordered[index + 1];
  photoSets.detail = activity.photos.map((photo) => ({ ...photo, activity }));

  return `
    <section class="detail-hero-wrap">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="#/">${esc(T.detailHome)}</a>
          <span aria-hidden="true">/</span>
          <a href="#/gallery">${esc(T.detailActivities)}</a>
          <span aria-hidden="true">/</span>
          <span>${esc(L(activity.title))}</span>
        </nav>
        <h1 class="detail-title">${esc(L(activity.title))}</h1>
      </div>
    </section>

    <section class="album-section simple-album">
      <div class="container">
        <div class="photo-grid">
          ${activity.photos.map((photo, i) => `
            <button class="photo-tile" type="button" data-photo-set="detail" data-photo-index="${i}" aria-label="${esc(L(activity.title))}">
              <img src="${photo.src}" alt="${esc(L(photo.caption))}" loading="lazy">
              <span class="photo-tile-zoom">${icon("expand")}</span>
            </button>`).join("")}
        </div>
      </div>
    </section>

    <section class="section next-section">
      <div class="container">
        <div class="next-grid">
          ${newer ? `<a class="next-card" href="#/activity/${encodeURIComponent(newer.id)}">
            <span class="next-label">${icon("chevronLeft")} ${esc(T.prevActivity)}</span>
            <strong>${esc(L(newer.title))}</strong>
          </a>` : ""}
          ${older ? `<a class="next-card align-right" href="#/activity/${encodeURIComponent(older.id)}">
            <span class="next-label">${esc(T.nextActivity)} ${icon("chevronRight")}</span>
            <strong>${esc(L(older.title))}</strong>
          </a>` : ""}
        </div>
      </div>
    </section>`;
}

/* ---------------- about ---------------- */

function pageAbout() {
  const T = t();
  return `
    <section class="page-hero about-hero">
      <div class="container page-hero-inner">
        <p class="section-kicker">${esc(T.pageAboutKicker)}</p>
        <h1 class="page-title">${nl2br(T.pageAboutTitle)}</h1>
        <p class="page-lead">${esc(T.pageAboutLead)}</p>
      </div>
    </section>

    <section class="section story-section">
      <div class="container story-grid">
        <div class="story-collage" aria-hidden="true">
          ${["music-week", "sports-week", "chinese-culture"].map((id, i) => {
            const a = activityById(id);
            return `<figure class="story-photo sp-${i + 1}"><img src="${a.photos[(i + 1) % a.photos.length].src}" alt="" loading="lazy"></figure>`;
          }).join("")}
          <span class="story-star">✦</span>
        </div>
        <div class="story-copy">
          <p class="section-kicker">${esc(T.aboutKicker)}</p>
          <h2 class="section-title">${esc(T.storyTitle)}</h2>
          <p>${esc(T.storyP1)}</p>
          <p>${esc(T.storyP2)}</p>
          <div class="story-sign">
            <span class="sign-mark">${icon("camera")}</span>
            <span><strong>${esc(T.siteName)}</strong><small>${esc(T.footerMade)}</small></span>
          </div>
        </div>
      </div>
    </section>

    <section class="section values-section">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">${esc(T.valueKicker)}</p>
          <h2 class="section-title">${esc(T.valuesTitle)}</h2>
        </div>
        <div class="value-grid">
          ${[
            { icon: "camera", title: T.value1t, body: T.value1b },
            { icon: "layers", title: T.value2t, body: T.value2b },
            { icon: "share", title: T.value3t, body: T.value3b }
          ].map((v, i) => `
            <article class="value-card reveal">
              <span class="value-icon">${icon(v.icon)}</span>
              <span class="value-index">0${i + 1}</span>
              <h3>${esc(v.title)}</h3>
              <p>${esc(v.body)}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="numbers-section">
      <div class="container numbers-band">
        ${[
          { num: ACTIVITIES.length, label: T.numActivities },
          { num: totalPhotos(), label: T.numPhotos },
          { num: CATEGORIES.length, label: T.numCategories },
          { num: "1", label: T.numCampus }
        ].map((item) => `
          <div class="number-item">
            <strong>${item.num}</strong>
            <span>${esc(item.label)}</span>
          </div>`).join("")}
      </div>
    </section>

    <section class="section contact-section">
      <div class="container">
        <div class="contact-card">
          <div>
            <p class="section-kicker light">${esc(T.contactKicker)}</p>
            <h2>${esc(T.contactTitle)}</h2>
            <p>${esc(T.contactBody)}</p>
            <span class="contact-note">${icon("pin")} ${esc(T.contactNote)}</span>
          </div>
          <div class="contact-seal">
            <img src="assets/img/crest.png" alt="" width="64" height="64">
            <span><strong>${esc(T.siteName)}</strong><small>${esc(T.siteSub)}</small></span>
          </div>
        </div>
      </div>
    </section>`;
}

/* ---------------- not found ---------------- */

function pageNotFound() {
  const T = t();
  return `
    <section class="page-hero notfound">
      <div class="container page-hero-inner">
        <span class="notfound-star">✦</span>
        <p class="section-kicker">404</p>
        <h1 class="page-title">${esc(T.notFoundTitle)}</h1>
        <p class="page-lead">${esc(T.notFoundBody)}</p>
        <a class="btn btn-primary" href="#/">${esc(T.notFoundCta)} ${icon("arrowRight")}</a>
      </div>
    </section>`;
}

/* ---------------- lightbox ---------------- */

function openLightbox(list, index) {
  if (!list || !list.length) return;
  if (lbTimer) {
    clearTimeout(lbTimer);
    lbTimer = null;
  }
  lb.list = list;
  lb.index = Math.max(0, Math.min(index, list.length - 1));
  lb.lastFocus = document.activeElement;
  const el = $("#lightbox");
  el.hidden = false;
  el.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  updateLightbox();
  requestAnimationFrame(() => el.classList.add("is-open"));
  setTimeout(() => { const btn = $("#lb-close"); if (btn) btn.focus(); }, 60);
}

function closeLightbox(restoreFocus = true) {
  const el = $("#lightbox");
  if (!el || el.hidden) return;
  el.classList.remove("is-open");
  el.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  const lastFocus = lb.lastFocus;
  if (lbTimer) clearTimeout(lbTimer);
  lbTimer = setTimeout(() => {
    el.hidden = true;
    lbTimer = null;
    if (restoreFocus && lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }, 220);
}

function updateLightbox() {
  const T = t();
  const photo = lb.list[lb.index];
  if (!photo) return;
  const img = $("#lb-img");
  img.src = photo.src;
  img.alt = L(photo.caption);
  $("#lb-counter").textContent = `${lb.index + 1} / ${lb.list.length}`;
  $("#lb-caption").textContent = photo.activity ? L(photo.activity.title) : "";
  $("#lb-meta").textContent = "";
  const download = $("#lb-download");
  if (download) {
    const filename = photo.src.split("/").pop();
    const slug = photo.activity ? photo.activity.id : "photo";
    download.href = photo.src;
    download.setAttribute("download", `${slug}-${filename}`);
    download.setAttribute("aria-label", T.downloadPhoto);
    download.setAttribute("title", T.downloadPhoto);
  }
  const dialog = $("#lightbox .lb-dialog");
  dialog.setAttribute("aria-label", T.lightboxLabel);
  $("#lb-close").setAttribute("aria-label", T.lightboxClose);
  $("#lb-prev").setAttribute("aria-label", T.lightboxPrev);
  $("#lb-next").setAttribute("aria-label", T.lightboxNext);
}

function stepLightbox(delta) {
  if (!lb.list.length) return;
  lb.index = (lb.index + delta + lb.list.length) % lb.list.length;
  updateLightbox();
}

function initLightbox() {
  $$("[data-lb-close]").forEach((el) => el.addEventListener("click", () => closeLightbox()));
  $("#lb-prev").addEventListener("click", () => stepLightbox(-1));
  $("#lb-next").addEventListener("click", () => stepLightbox(1));

  document.addEventListener("keydown", (event) => {
    const lbEl = $("#lightbox");
    if (lbEl.hidden) {
      if (event.key === "Escape") document.body.classList.remove("nav-open");
      return;
    }
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  const stage = $(".lb-figure");
  let touchStartX = null;
  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", (event) => {
    if (touchStartX == null) return;
    const dx = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 55) stepLightbox(dx > 0 ? -1 : 1);
    touchStartX = null;
  }, { passive: true });
}

/* ---------------- helpers & boot ---------------- */

function initReveals() {
  const items = $$(".reveal:not(.is-in)");
  if (!items.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  }
  items.forEach((el) => revealObserver.observe(el));
}

function boot() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
  if (!location.hash) history.replaceState(null, "", "#/");
  initLightbox();

  app.addEventListener("click", (event) => {
    const photoBtn = event.target.closest("[data-photo-index]");
    if (!photoBtn) return;
    const set = photoSets[photoBtn.dataset.photoSet];
    openLightbox(set, Number(photoBtn.dataset.photoIndex));
  });

  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("scroll", () => {
    const header = $("#site-header");
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 940) {
      closeMobileNav();
    }
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("nav-open")) return;
    if (event.target.closest(".site-nav") || event.target.closest("#menu-toggle")) return;
    closeMobileNav();
  });

  handleRoute();
}

boot();
