/**
 * Lumina — Premium Novel Reading Platform
 * Single-page app: catalog, filters, reader, bookmarks, reviews
 */

const STORAGE_KEYS = {
  bookmarks: "lumina_bookmarks",
  progress: "lumina_progress",
  reviews: "lumina_reviews",
};

const TAGS = ["slow burn", "enemies to lovers", "found family", "magic system", "dual POV", "epic"];

const NOVELS = [
  {
    id: 1,
    title: "The Ember Gate",
    author: "Sera Voss",
    genre: "fantasy",
    rating: 4.9,
    status: "ongoing",
    premium: true,
    words: 124000,
    tags: ["magic system", "epic"],
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
    excerpt: "The gate had not opened in three hundred years, yet tonight the brass rings sang like struck bells. Elara pressed her palm to the seam and felt warmth bloom beneath the metal — not heat from fire, but memory.",
    chapters: [
      { title: "The Ember Gate", text: "The gate had not opened in three hundred years, yet tonight the brass rings sang like struck bells. Elara pressed her palm to the seam and felt warmth bloom beneath the metal — not heat from fire, but memory.\n\nShe had been told stories of the Ember Road since childhood: caravans of light crossing deserts that existed only in legend, scholars who traded years of life for a single sentence of truth. None of those tales prepared her for the hum that now filled her ribs, as if her body recognized a song her mind had forgotten." },
      { title: "Ashmarket", text: "Ashmarket never slept, but it pretended to. Lanterns guttered along rope bridges while merchants counted coins with the reverence of prayer. Elara pulled her hood lower and followed the map etched into her mother's ring — a spiral that ended, according to rumor, beneath the old observatory." },
      { title: "The Observatory", text: "Dust lay thick as snowfall on the lenses. When Elara spoke the first word of the binding, the domed ceiling turned transparent, revealing a sky crowded with stars that had no names in any atlas she knew." },
    ],
    trend: 98,
  },
  {
    id: 2,
    title: "Midnight Letters",
    author: "Jonah Hale",
    genre: "romance",
    rating: 4.7,
    status: "completed",
    premium: false,
    words: 82000,
    tags: ["slow burn", "dual POV"],
    cover: "https://images.unsplash.com/photo-1512820790812-7f9cadaa5d0e?w=400&q=80",
    excerpt: "Dear stranger, I am writing to you because the city is too quiet and my hands need something to do besides waiting.",
    chapters: [
      { title: "First Letter", text: "Dear stranger,\n\nI am writing to you because the city is too quiet and my hands need something to do besides waiting. They found another envelope in the canal today — not mine, but close enough that I stood on the bridge until my coat soaked through." },
    ],
    trend: 91,
  },
  {
    id: 3,
    title: "Glass Orchard",
    author: "Mira Chen",
    genre: "literary",
    rating: 4.8,
    status: "ongoing",
    premium: true,
    words: 156000,
    tags: ["found family"],
    cover: "https://images.unsplash.com/photo-1524995997942-a1c2e315a42f?w=400&q=80",
    excerpt: "In our village, fruit grew transparent as memory. You could see the seeds suspended like small dark stars.",
    chapters: [
      { title: "Harvest", text: "In our village, fruit grew transparent as memory. You could see the seeds suspended like small dark stars, and children learned early not to bite too deep lest they taste someone else's longing." },
    ],
    trend: 87,
  },
  {
    id: 4,
    title: "Station Epsilon",
    author: "Kai Mendez",
    genre: "sci-fi",
    rating: 4.6,
    status: "ongoing",
    premium: false,
    words: 210000,
    tags: ["epic", "dual POV"],
    cover: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&q=80",
    excerpt: "The station's artificial dawn arrived six minutes late, which was how we knew the sun had died a little more.",
    chapters: [
      { title: "Dawn Delay", text: "The station's artificial dawn arrived six minutes late, which was how we knew the sun had died a little more. Commander Vela didn't announce it. She simply opened the hydroponics bay and let us pretend we were gardeners instead of survivors." },
    ],
    trend: 94,
  },
  {
    id: 5,
    title: "The Pale Detective",
    author: "Rowan Ellis",
    genre: "mystery",
    rating: 4.5,
    status: "completed",
    premium: false,
    words: 95000,
    tags: ["slow burn"],
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    excerpt: "The victim left behind only a pocket watch and a smell like rain on hot stone.",
    chapters: [
      { title: "Case File One", text: "The victim left behind only a pocket watch and a smell like rain on hot stone. I noted both in my ledger and tried not to think about how the watch ticked backward." },
    ],
    trend: 82,
  },
  {
    id: 6,
    title: "Crown of Salt",
    author: "Amara Okoye",
    genre: "fantasy",
    rating: 4.9,
    status: "ongoing",
    premium: true,
    words: 178000,
    tags: ["enemies to lovers", "magic system"],
    cover: "https://images.unsplash.com/photo-1471107340929-a25ec2d6a1b5?w=400&q=80",
    excerpt: "They crowned her at low tide, when the sea could not protest.",
    chapters: [
      { title: "Coronation", text: "They crowned her at low tide, when the sea could not protest. The crown weighed nothing and everything — salt crystals grown in the shape of thorns, humming with the voices of drowned queens." },
    ],
    trend: 96,
  },
  {
    id: 7,
    title: "Velvet Circuit",
    author: "Theo Park",
    genre: "sci-fi",
    rating: 4.4,
    status: "completed",
    premium: false,
    words: 68000,
    tags: ["enemies to lovers"],
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    excerpt: "Love in the megacity was a subscription service with excellent customer retention.",
    chapters: [
      { title: "Trial Period", text: "Love in the megacity was a subscription service with excellent customer retention. I canceled mine on a Tuesday and met the person who would ruin me by Thursday." },
    ],
    trend: 79,
  },
  {
    id: 8,
    title: "Garden of Echoes",
    author: "Lila Frost",
    genre: "romance",
    rating: 4.8,
    status: "ongoing",
    premium: true,
    words: 112000,
    tags: ["slow burn", "found family"],
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    excerpt: "Every flower in the garden repeated a conversation I'd had and wished to forget.",
    chapters: [
      { title: "Petals", text: "Every flower in the garden repeated a conversation I'd had and wished to forget. I learned to wear gloves, then to listen anyway, because some apologies arrive pollen-soft and years too late." },
    ],
    trend: 88,
  },
  {
    id: 9,
    title: "The Last Cartographer",
    author: "Evan Wright",
    genre: "fantasy",
    rating: 4.7,
    status: "completed",
    premium: false,
    words: 142000,
    tags: ["epic"],
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    excerpt: "Maps, my mentor said, are arguments with the world. I intended to win.",
    chapters: [
      { title: "Blank Coasts", text: "Maps, my mentor said, are arguments with the world. I intended to win. The coast on my table refused to hold ink — a polite way of telling me some shores only exist for those who bleed onto them." },
    ],
    trend: 85,
  },
  {
    id: 10,
    title: "Hollow Choir",
    author: "Nadia Bloom",
    genre: "mystery",
    rating: 4.6,
    status: "ongoing",
    premium: true,
    words: 88000,
    tags: ["dual POV"],
    cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80",
    excerpt: "The choir sang in an empty cathedral, and every note left a bruise.",
    chapters: [
      { title: "Rehearsal", text: "The choir sang in an empty cathedral, and every note left a bruise. Detective Ruiz closed her eyes and counted harmonies like evidence." },
    ],
    trend: 83,
  },
  {
    id: 11,
    title: "Paper Suns",
    author: "Iris Navarro",
    genre: "literary",
    rating: 4.5,
    status: "completed",
    premium: false,
    words: 72000,
    tags: ["found family"],
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
    excerpt: "We folded the suns each morning so they would not scorch the curtains.",
    chapters: [
      { title: "Origami", text: "We folded the suns each morning so they would not scorch the curtains. My brother said light was only dangerous when you tried to keep it." },
    ],
    trend: 76,
  },
  {
    id: 12,
    title: "Iron & Orchid",
    author: "Yuki Tanaka",
    genre: "fantasy",
    rating: 4.8,
    status: "ongoing",
    premium: true,
    words: 198000,
    tags: ["magic system", "enemies to lovers"],
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80",
    excerpt: "The smithy smelled of rain and vengeance. She forged flowers from ore because softness, too, could be weaponized.",
    chapters: [
      { title: "First Bloom", text: "The smithy smelled of rain and vengeance. She forged flowers from ore because softness, too, could be weaponized. When the warlord's envoy arrived, he found an orchard of steel petals waiting." },
    ],
    trend: 92,
  },
];

const DISCUSSIONS = [
  { topic: "Theories for Chapter 12 — Ember Gate", preview: "What if the brass rings are actually a calendar and not a door at all?", replies: 142, active: "2m ago" },
  { topic: "Best slow-burn romance this year?", preview: "Midnight Letters destroyed me in the best way. No spoilers past ch.4!", replies: 89, active: "18m ago" },
  { topic: "Reading challenge: 7-day streak", preview: "Who else hit their streak? Share your current book!", replies: 234, active: "1h ago" },
  { topic: "Station Epsilon — timeline thread", preview: "Compiled all time dilation references for the wiki.", replies: 56, active: "3h ago" },
];

const SEED_REVIEWS = [
  { user: "Morgan K.", stars: 5, text: "The Ember Gate reads like film — every chapter ends on a breath you can't exhale.", novel: "The Ember Gate" },
  { user: "Alex P.", stars: 4, text: "Glass Orchard is devastating and beautiful. Perfect for a rainy weekend.", novel: "Glass Orchard" },
  { user: "Jordan Lee", stars: 5, text: "Crown of Salt redefined political fantasy for me. The prose glows.", novel: "Crown of Salt" },
];

// State
const state = {
  genre: "all",
  search: "",
  sort: "trending",
  status: "all",
  premiumOnly: false,
  bookmarkedOnly: false,
  ratingMin: 0,
  length: "all",
  activeTags: new Set(),
  bookmarks: loadJSON(STORAGE_KEYS.bookmarks, []),
  progress: loadJSON(STORAGE_KEYS.progress, { 1: { chapter: 0, percent: 24 }, 4: { chapter: 0, percent: 41 }, 8: { chapter: 0, percent: 12 } }),
  reviews: loadJSON(STORAGE_KEYS.reviews, SEED_REVIEWS),
  featuredNovel: NOVELS[0],
  showcaseChapter: 0,
  readerFontSize: 18,
  trendingPeriod: "week",
};

// DOM refs
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function formatWords(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k words`;
  return `${n} words`;
}

function getLengthCategory(words) {
  if (words < 50000) return "short";
  if (words <= 150000) return "medium";
  return "long";
}

function isBookmarked(id) {
  return state.bookmarks.includes(id);
}

function toggleBookmark(id, e) {
  e?.stopPropagation();
  const idx = state.bookmarks.indexOf(id);
  if (idx >= 0) state.bookmarks.splice(idx, 1);
  else state.bookmarks.push(id);
  saveJSON(STORAGE_KEYS.bookmarks, state.bookmarks);
  updateBookmarkUI();
  renderNovelGrid();
  renderAiGrid();
  renderTrending();
}

function updateBookmarkUI() {
  const count = state.bookmarks.length;
  const el = $("#bookmarkCount");
  if (el) {
    el.textContent = count;
    el.style.display = count ? "grid" : "none";
  }
  const list = $("#bookmarksList");
  if (!list) return;
  if (!count) {
    list.innerHTML = '<li class="bookmarks-empty">No bookmarks yet. Save stories from any card.</li>';
    return;
  }
  list.innerHTML = state.bookmarks
    .map((id) => {
      const n = NOVELS.find((x) => x.id === id);
      if (!n) return "";
      return `<li data-id="${n.id}"><img src="${n.cover}" alt="" /><div><strong>${n.title}</strong><br/><span style="color:var(--text-muted);font-size:13px">${n.author}</span></div>`;
    })
    .join("");
  $$("li[data-id]", list).forEach((li) => {
    li.addEventListener("click", () => openNovelModal(+li.dataset.id));
  });
}

function filterNovels(list = NOVELS) {
  return list.filter((n) => {
    if (state.genre !== "all" && n.genre !== state.genre) return false;
    if (state.status !== "all" && n.status !== state.status) return false;
    if (state.premiumOnly && !n.premium) return false;
    if (state.bookmarkedOnly && !isBookmarked(n.id)) return false;
    if (n.rating < state.ratingMin) return false;
    if (state.length !== "all" && getLengthCategory(n.words) !== state.length) return false;
    if (state.activeTags.size && ![...state.activeTags].every((t) => n.tags.includes(t))) return false;
    const q = state.search.trim().toLowerCase();
    if (q && !`${n.title} ${n.author} ${n.genre} ${n.tags.join(" ")}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

function sortNovels(list) {
  const arr = [...list];
  switch (state.sort) {
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "new":
      return arr.sort((a, b) => b.id - a.id);
    case "progress":
      return arr.sort((a, b) => (state.progress[b.id]?.percent || 0) - (state.progress[a.id]?.percent || 0));
    default:
      return arr.sort((a, b) => b.trend - a.trend);
  }
}

function novelCardHTML(n, compact = false) {
  const bookmarked = isBookmarked(n.id);
  const prog = state.progress[n.id]?.percent;
  return `
    <article class="novel-card" data-id="${n.id}" role="button" tabindex="0" aria-label="${n.title} by ${n.author}">
      <div class="novel-card__cover">
        <img src="${n.cover}" alt="" loading="lazy" />
        <div class="novel-card__tags">
          ${n.premium ? '<span class="novel-card__tag">Premium</span>' : ""}
          <span class="novel-card__tag">${n.genre}</span>
        </div>
        <button type="button" class="novel-card__bookmark ${bookmarked ? "active" : ""}" data-bookmark="${n.id}" aria-label="Bookmark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${bookmarked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
        </button>
      </div>
      <h3 class="novel-card__title">${n.title}</h3>
      <p class="novel-card__meta">${n.author} · ${formatWords(n.words)}</p>
      <span class="novel-card__rating">★ ${n.rating.toFixed(1)}</span>
      ${prog ? `<div class="progress-bar" style="margin-top:10px"><div class="progress-bar__fill" style="width:${prog}%"></div></div>` : ""}
    </article>
  `;
}

function bindNovelCards(container) {
  if (!container) return;
  container.querySelectorAll(".novel-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-bookmark]")) return;
      openNovelModal(+card.dataset.id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openNovelModal(+card.dataset.id);
    });
  });
  container.querySelectorAll("[data-bookmark]").forEach((btn) => {
    btn.addEventListener("click", (e) => toggleBookmark(+btn.dataset.bookmark, e));
  });
}

function renderNovelGrid() {
  const grid = $("#novelGrid");
  const filtered = sortNovels(filterNovels());
  $("#resultsCount").textContent = `Showing ${filtered.length} novel${filtered.length === 1 ? "" : "s"}`;
  grid.innerHTML = filtered.map((n) => novelCardHTML(n)).join("") || '<p class="section-meta">No stories match your filters.</p>';
  bindNovelCards(grid);
}

function renderContinue() {
  const row = $("#continueRow");
  const withProgress = NOVELS.filter((n) => state.progress[n.id]);
  row.innerHTML = withProgress
    .map((n) => {
      const p = state.progress[n.id];
      const ch = n.chapters[p.chapter]?.title || "Chapter 1";
      return `
        <div class="continue-card" data-id="${n.id}">
          <div class="continue-card__thumb"><img src="${n.cover}" alt="" /></div>
          <div>
            <h3 class="continue-card__title">${n.title}</h3>
            <p class="continue-card__chapter">${ch} · ${p.percent}% complete</p>
            <div class="progress-bar"><div class="progress-bar__fill" style="width:${p.percent}%"></div></div>
          </div>
        </div>
      `;
    })
    .join("");
  $$(".continue-card", row).forEach((c) => {
    c.addEventListener("click", () => {
      state.featuredNovel = NOVELS.find((n) => n.id === +c.dataset.id);
      openReaderShowcase();
      document.getElementById("reader-showcase")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderTrending() {
  const row = $("#trendingRow");
  const mult = state.trendingPeriod === "month" ? 0.92 : 1;
  const sorted = [...NOVELS].sort((a, b) => b.trend * mult - a.trend * mult).slice(0, 8);
  row.innerHTML = sorted.map((n) => novelCardHTML(n)).join("");
  bindNovelCards(row);
}

function renderRankings() {
  const list = $("#rankingList");
  const top = [...NOVELS].sort((a, b) => b.rating - a.rating).slice(0, 6);
  list.innerHTML = top
    .map(
      (n, i) => `
    <div class="ranking-item" data-id="${n.id}">
      <span class="ranking-item__rank">${String(i + 1).padStart(2, "0")}</span>
      <div class="ranking-item__cover"><img src="${n.cover}" alt="" /></div>
      <div>
        <h3 class="ranking-item__title">${n.title}</h3>
        <p class="ranking-item__author">${n.author} · ${n.genre}</p>
      </div>
      <div class="ranking-item__stats">
        <strong>${n.rating}</strong>
        ${(n.trend * (state.trendingPeriod === "month" ? 0.95 : 1)).toFixed(0)}% trending
      </div>
    </div>
  `
    )
    .join("");
  $$(".ranking-item", list).forEach((item) => {
    item.addEventListener("click", () => openNovelModal(+item.dataset.id));
  });
}

function renderAiGrid() {
  const grid = $("#aiGrid");
  const shuffled = [...NOVELS].sort(() => Math.random() - 0.5).slice(0, 6);
  grid.innerHTML = shuffled.map((n) => novelCardHTML(n, true)).join("");
  bindNovelCards(grid);
}

function renderReviews() {
  const list = $("#reviewList");
  list.innerHTML = state.reviews
    .slice(0, 8)
    .map(
      (r) => `
    <div class="review-item">
      <div class="review-item__head">
        <span class="review-item__user">${r.user}</span>
        <span class="review-item__stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</span>
      </div>
      <p class="review-item__text">${r.text} <em style="opacity:0.7">— ${r.novel}</em></p>
    </div>
  `
    )
    .join("");
}

function renderDiscussions() {
  $("#discussionList").innerHTML = DISCUSSIONS.map(
    (d) => `
    <div class="discussion-card">
      <h4 class="discussion-card__topic">${d.topic}</h4>
      <p class="discussion-card__preview">${d.preview}</p>
      <div class="discussion-card__meta"><span>${d.replies} replies</span><span>${d.active}</span></div>
    </div>
  `
  ).join("");
}

function renderTagFilters() {
  const wrap = $("#tagFilters");
  wrap.innerHTML = TAGS.map(
    (t) => `<button type="button" class="chip" data-tag="${t}">${t}</button>`
  ).join("");
  $$(".chip[data-tag]", wrap).forEach((chip) => {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag;
      if (state.activeTags.has(tag)) {
        state.activeTags.delete(tag);
        chip.classList.remove("chip--active");
      } else {
        state.activeTags.add(tag);
        chip.classList.add("chip--active");
      }
    });
  });
}

function openNovelModal(id) {
  const n = NOVELS.find((x) => x.id === id);
  if (!n) return;
  const modal = $("#novelModal");
  $("#modalContent").innerHTML = `
    <div class="modal__cover"><img src="${n.cover}" alt="" /></div>
    <div>
      <h2 class="modal__title">${n.title}</h2>
      <p class="modal__author">by ${n.author} · ★ ${n.rating} · ${n.status}</p>
      <p class="modal__desc">${n.excerpt}</p>
      <p class="modal__desc" style="font-size:14px;color:var(--text-muted)">${formatWords(n.words)} · ${n.tags.join(", ")}</p>
      <div class="modal__actions">
        <button type="button" class="btn btn--primary" data-read="${n.id}">Start reading</button>
        <button type="button" class="btn btn--secondary" data-bookmark-modal="${n.id}">${isBookmarked(n.id) ? "Remove bookmark" : "Bookmark"}</button>
      </div>
    </div>
  `;
  $("[data-read]", modal).addEventListener("click", () => {
    state.featuredNovel = n;
    modal.close();
    openReaderShowcase();
    document.getElementById("reader-showcase")?.scrollIntoView({ behavior: "smooth" });
  });
  $("[data-bookmark-modal]", modal).addEventListener("click", () => {
    toggleBookmark(n.id);
    openNovelModal(id);
  });
  modal.showModal();
}

function openReaderShowcase() {
  const n = state.featuredNovel;
  $("#showcaseTitle").textContent = n.title;
  renderShowcaseChapter();
  renderImmersivePreview();
}

function renderShowcaseChapter() {
  const n = state.featuredNovel;
  const ch = n.chapters[state.showcaseChapter] || n.chapters[0];
  const text = ch.text.split("\n\n").map((p) => `<p>${p}</p>`).join("");
  $("#showcaseText").innerHTML = text;
  $("#showcaseDots").innerHTML = n.chapters
    .map(
      (_, i) =>
        `<button type="button" class="showcase__dot ${i === state.showcaseChapter ? "active" : ""}" data-ch="${i}" aria-label="Chapter ${i + 1}"></button>`
    )
    .join("");
  $$(".showcase__dot", $("#showcaseDots")).forEach((dot) => {
    dot.addEventListener("click", () => {
      state.showcaseChapter = +dot.dataset.ch;
      renderShowcaseChapter();
      updateChapterProgress();
    });
  });
  updateChapterProgress();
}

function updateChapterProgress() {
  const n = state.featuredNovel;
  const pct = Math.round(((state.showcaseChapter + 1) / n.chapters.length) * 100);
  const fill = $("#chapterProgress");
  if (fill) fill.style.width = `${pct}%`;
  state.progress[n.id] = { chapter: state.showcaseChapter, percent: Math.max(state.progress[n.id]?.percent || 0, pct) };
  saveJSON(STORAGE_KEYS.progress, state.progress);
  renderContinue();
}

function renderImmersivePreview() {
  const n = state.featuredNovel;
  $("#previewMeta").textContent = `Chapter ${state.showcaseChapter + 1} · ${n.chapters[state.showcaseChapter]?.title || n.title}`;
  const ch = n.chapters[state.showcaseChapter] || n.chapters[0];
  $("#readingSample").innerHTML = ch.text.split("\n\n").map((p) => `<p>${p}</p>`).join("");
  $("#previewChapters").innerHTML = n.chapters
    .map(
      (c, i) =>
        `<li><button type="button" class="${i === state.showcaseChapter ? "active" : ""}" data-ch="${i}">${i + 1}. ${c.title}</button></li>`
    )
    .join("");
  $$("#previewChapters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.showcaseChapter = +btn.dataset.ch;
      renderShowcaseChapter();
      renderImmersivePreview();
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => observer.observe(el));
}

function initNav() {
  const nav = $("#nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
  });
  $("#navBurger")?.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    const open = nav.classList.contains("nav--open");
    $("#navBurger").setAttribute("aria-expanded", open);
  });
}

function initFilters() {
  $("#globalSearch")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderNovelGrid();
  });

  $$("#categoryChips .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$("#categoryChips .chip").forEach((c) => c.classList.remove("chip--active"));
      chip.classList.add("chip--active");
      state.genre = chip.dataset.genre;
      renderNovelGrid();
    });
  });

  $("#sortSelect")?.addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderNovelGrid();
  });
  $("#statusSelect")?.addEventListener("change", (e) => {
    state.status = e.target.value;
    renderNovelGrid();
  });
  $("#filterPremium")?.addEventListener("change", (e) => {
    state.premiumOnly = e.target.checked;
    renderNovelGrid();
  });
  $("#filterBookmarked")?.addEventListener("change", (e) => {
    state.bookmarkedOnly = e.target.checked;
    renderNovelGrid();
  });

  $("#openFilters")?.addEventListener("click", () => $("#filterDrawer").classList.add("open"));
  $("#closeDrawer")?.addEventListener("click", closeDrawer);
  $("#drawerBackdrop")?.addEventListener("click", closeDrawer);

  $("#ratingMin")?.addEventListener("input", (e) => {
    $("#ratingMinOut").textContent = `${e.target.value}+`;
  });

  $("#applyFilters")?.addEventListener("click", () => {
    state.ratingMin = +$("#ratingMin").value;
    state.length = $("#lengthFilter").value;
    closeDrawer();
    renderNovelGrid();
  });

  $("#resetFilters")?.addEventListener("click", () => {
    state.ratingMin = 0;
    state.length = "all";
    state.activeTags.clear();
    $("#ratingMin").value = 0;
    $("#ratingMinOut").textContent = "0+";
    $("#lengthFilter").value = "all";
    $$("#tagFilters .chip").forEach((c) => c.classList.remove("chip--active"));
    closeDrawer();
    renderNovelGrid();
  });

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((t) => t.classList.remove("tab--active"));
      tab.classList.add("tab--active");
      state.trendingPeriod = tab.dataset.period;
      renderTrending();
      renderRankings();
    });
  });
}

function closeDrawer() {
  $("#filterDrawer").classList.remove("open");
}

function initReaderTools() {
  const sample = $("#readingSample");
  $("#fontStepper")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.dataset.action === "inc") state.readerFontSize = Math.min(24, state.readerFontSize + 1);
    else state.readerFontSize = Math.max(14, state.readerFontSize - 1);
    sample.style.fontSize = `${state.readerFontSize}px`;
    $("#fontSizeLabel").textContent = state.readerFontSize;
  });

  $("#lineSpacing")?.addEventListener("input", (e) => {
    sample.style.lineHeight = e.target.value;
  });

  $$("#readerThemes .theme-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      $$("#readerThemes .theme-pill").forEach((p) => p.classList.remove("theme-pill--active"));
      pill.classList.add("theme-pill--active");
      document.body.classList.remove("reader-sepia", "reader-light");
      const theme = pill.dataset.theme;
      if (theme === "sepia") document.body.classList.add("reader-sepia");
      if (theme === "light") document.body.classList.add("reader-light");
    });
  });

  $("#prevChapter")?.addEventListener("click", () => {
    if (state.showcaseChapter > 0) {
      state.showcaseChapter--;
      renderShowcaseChapter();
      renderImmersivePreview();
    }
  });
  $("#nextChapter")?.addEventListener("click", () => {
    const max = state.featuredNovel.chapters.length - 1;
    if (state.showcaseChapter < max) {
      state.showcaseChapter++;
      renderShowcaseChapter();
      renderImmersivePreview();
    }
  });

  $("#enterFullscreen")?.addEventListener("click", () => {
    $("#showcaseFrame").classList.add("is-fullscreen");
    document.body.style.overflow = "hidden";
  });
  $("#exitFullscreen")?.addEventListener("click", () => {
    $("#showcaseFrame").classList.remove("is-fullscreen");
    document.body.style.overflow = "";
  });
}

function initBookmarks() {
  $("#bookmarkNav")?.addEventListener("click", () => {
    $("#bookmarksPanel").classList.toggle("open");
    updateBookmarkUI();
  });
  $("#closeBookmarks")?.addEventListener("click", () => $("#bookmarksPanel").classList.remove("open"));
}

function initReviews() {
  $("#reviewForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = $("#reviewInput").value.trim();
    if (!text) return;
    state.reviews.unshift({
      user: "You",
      stars: 5,
      text,
      novel: state.featuredNovel.title,
    });
    saveJSON(STORAGE_KEYS.reviews, state.reviews);
    $("#reviewInput").value = "";
    renderReviews();
  });
}

function initModal() {
  $("#closeModal")?.addEventListener("click", () => $("#novelModal").close());
  $("#novelModal")?.addEventListener("click", (e) => {
    if (e.target === $("#novelModal")) $("#novelModal").close();
  });
}

function initMisc() {
  $("#refreshAi")?.addEventListener("click", () => {
    renderAiGrid();
    $("#refreshAi").textContent = "Refreshed!";
    setTimeout(() => ($("#refreshAi").textContent = "Refresh picks"), 1500);
  });
  $("#themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("reader-light");
  });
  $("#langToggle")?.addEventListener("click", () => {
    const btn = $("#langToggle");
    btn.textContent = btn.textContent === "EN" ? "FR" : "EN";
  });
}

function init() {
  renderTagFilters();
  renderNovelGrid();
  renderContinue();
  renderTrending();
  renderRankings();
  renderAiGrid();
  renderReviews();
  renderDiscussions();
  openReaderShowcase();
  updateBookmarkUI();
  initScrollReveal();
  initNav();
  initFilters();
  initReaderTools();
  initBookmarks();
  initReviews();
  initModal();
  initMisc();
}

document.addEventListener("DOMContentLoaded", init);
