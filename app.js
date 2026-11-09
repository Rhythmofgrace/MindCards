const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function getNormalizedStudyData() {
  const raw = window.studyData || {};
  if (window.studyContent && !raw.english) {
    raw.english = window.studyContent;
  }
  const normalized = {
    Subject: {},
    Question: {},
  };

  function addEntry(category, itemName, lang, unitsObj) {
    if (!category || !itemName || !unitsObj) return;
    const cat = category.trim();
    const item = itemName.trim();
    const lName = (lang || "english").toLowerCase().trim();
    if (!normalized[cat]) normalized[cat] = {};
    if (!normalized[cat][item]) normalized[cat][item] = {};
    if (!normalized[cat][item][lName]) normalized[cat][item][lName] = { units: {} };
    Object.assign(normalized[cat][item][lName].units, unitsObj);
  }

  function inferSubjectName(unitsObj) {
    if (!unitsObj || typeof unitsObj !== "object") return "Design Thinking";
    const keys = Object.keys(unitsObj);
    if (!keys.length) return "General";
    for (const key of keys) {
      if (/design thinking/i.test(key)) return "Design Thinking";
      if (/computer network/i.test(key)) return "Computer Networks";
      if (/operating system/i.test(key)) return "Operating Systems";
    }
    const match = keys[0].replace(/^Unit\s*\d+\s*:\s*/i, "").trim();
    return match || "Subject 1";
  }

  for (const [key, val] of Object.entries(raw)) {
    if (!val || typeof val !== "object") continue;
    const isLangKey = /^(english|hinglish|hindi|spanish|french|german|lang)/i.test(key);

    if (val.questions && typeof val.questions === "object") {
      const lang = key;
      for (const [qName, qObj] of Object.entries(val.questions)) {
        if (qObj && qObj.units) {
          addEntry("Question", qName, lang, qObj.units);
        }
      }
    }
    if (val.subjects && typeof val.subjects === "object") {
      const lang = key;
      for (const [sName, sObj] of Object.entries(val.subjects)) {
        if (sObj && sObj.units) {
          addEntry("Subject", sName, lang, sObj.units);
        }
      }
    } else if (val.units && typeof val.units === "object") {
      const lang = key;
      const sName = val.subject || val.name || inferSubjectName(val.units);
      addEntry("Subject", sName, lang, val.units);
    } else if (isLangKey) {
      for (const [subKey, subVal] of Object.entries(val)) {
        if (subKey === "questions" || subKey === "subjects") continue;
        if (subVal && typeof subVal === "object" && subVal.units) {
          addEntry("Subject", subKey, key, subVal.units);
        }
      }
    } else {
      let foundLang = false;
      for (const [subKey, subVal] of Object.entries(val)) {
        if (subVal && typeof subVal === "object" && subVal.units) {
          foundLang = true;
          addEntry("Subject", key, subKey, subVal.units);
        }
      }
      if (!foundLang && val.units) {
        addEntry("Subject", key, "english", val.units);
      }
    }
  }

  if (window.studySubjects && typeof window.studySubjects === "object") {
    for (const [sName, sVal] of Object.entries(window.studySubjects)) {
      if (sVal && typeof sVal === "object") {
        for (const [lKey, lVal] of Object.entries(sVal)) {
          if (lVal && lVal.units) {
            addEntry("Subject", sName, lKey, lVal.units);
          }
        }
      }
    }
  }

  return normalized;
}

let normalizedData = {};
let currentCategory = "";
let currentSubject = "";
let currentLanguage = "english";
let currentUnit = "";
let currentTopic = "";
let topicData = {};

const viewport = $("#viewport"),
  world = $("#world"),
  menu = $("#menu"),
  menuPanel = $("#topic-menu"),
  toolbar = $(".toolbar"),
  studyNav = $("#study-nav"),
  zoomLabel = $("#zoom");

const categoryList = $("#category-list"),
  subjectList = $("#subject-list"),
  unitList = $("#unit-list"),
  topicList = $("#topic-list"),
  menuTitle = $("#menu-title"),
  backCategories = $("#back-categories"),
  backSubjects = $("#back-subjects"),
  backUnits = $("#back-units"),
  languageSelect = $("#language");

function getCategories() {
  return Object.keys(normalizedData).filter(
    (cat) => Object.keys(normalizedData[cat] || {}).length > 0
  );
}

function getCategoryItems(catName = currentCategory) {
  return Object.keys(normalizedData[catName] || {});
}

function getSubjectUnits(itemName = currentSubject, catName = currentCategory, lang = currentLanguage) {
  let cat = normalizedData[catName];
  if (!cat) {
    for (const c of Object.values(normalizedData)) {
      if (c[itemName]) {
        cat = c;
        break;
      }
    }
  }
  if (!cat) return {};
  const item = cat[itemName];
  if (!item) return {};
  if (item[lang]?.units) return item[lang].units;
  if (item.english?.units) return item.english.units;
  const firstLang = Object.keys(item)[0];
  return firstLang ? (item[firstLang].units || {}) : {};
}

function populateLanguageDropdown() {
  const langs = new Set(["english", "hinglish"]);
  Object.values(normalizedData).forEach((cat) => {
    Object.values(cat).forEach((item) => {
      Object.keys(item).forEach((lang) => langs.add(lang));
    });
  });
  languageSelect.replaceChildren();
  langs.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
    languageSelect.append(option);
  });
  if (langs.has(currentLanguage)) {
    languageSelect.value = currentLanguage;
  } else {
    currentLanguage = "english";
    languageSelect.value = "english";
  }
}

function buttonFor(name, handler) {
  const button = document.createElement("button");
  button.textContent = name;
  button.onclick = () => handler(button);
  return button;
}

function showCategories() {
  currentCategory = "";
  currentSubject = "";
  currentUnit = "";
  currentTopic = "";
  topicData = {};
  menuTitle.textContent = "MindCards";
  menuTitle.hidden = false;
  if (backCategories) backCategories.hidden = true;
  backSubjects.hidden = true;
  backUnits.hidden = true;
  if (categoryList) categoryList.hidden = false;
  subjectList.hidden = true;
  unitList.hidden = true;
  topicList.hidden = true;
  const cats = getCategories();
  if (categoryList) {
    categoryList.replaceChildren(
      ...cats.map((cat) => buttonFor(cat, () => showCategory(cat)))
    );
  }
}

function showCategory(catName) {
  if (catName) currentCategory = catName;
  currentSubject = "";
  currentUnit = "";
  currentTopic = "";
  topicData = {};
  const items = getCategoryItems(currentCategory);
  menuTitle.textContent = currentCategory;
  menuTitle.hidden = false;
  if (backCategories) {
    backCategories.hidden = false;
    backCategories.textContent = "Back";
  }
  backSubjects.hidden = true;
  backUnits.hidden = true;
  if (categoryList) categoryList.hidden = true;
  subjectList.hidden = false;
  unitList.hidden = true;
  topicList.hidden = true;
  subjectList.replaceChildren(
    ...items.map((itemName) => buttonFor(itemName, () => showUnits(itemName)))
  );
}

function showUnits(itemName) {
  if (itemName) currentSubject = itemName;
  currentUnit = "";
  currentTopic = "";
  topicData = {};
  const units = getSubjectUnits(currentSubject, currentCategory, currentLanguage);
  menuTitle.textContent = currentSubject;
  menuTitle.hidden = false;
  if (backCategories) backCategories.hidden = true;
  backSubjects.hidden = false;
  backSubjects.textContent = currentCategory ? `Back to ${currentCategory}` : "Back";
  backUnits.hidden = true;
  if (categoryList) categoryList.hidden = true;
  subjectList.hidden = true;
  unitList.hidden = false;
  topicList.hidden = true;
  unitList.replaceChildren(
    ...Object.keys(units).map((unitName) => buttonFor(unitName, () => showUnit(unitName)))
  );
}

function showUnit(name) {
  currentUnit = name;
  const units = getSubjectUnits(currentSubject, currentCategory, currentLanguage);
  topicData = units[name]?.topics || {};
  menuTitle.textContent = name;
  menuTitle.hidden = false;
  if (backCategories) backCategories.hidden = true;
  backSubjects.hidden = true;
  backUnits.hidden = false;
  backUnits.textContent = currentSubject ? `Back to ${currentSubject}` : "Back";
  if (categoryList) categoryList.hidden = true;
  subjectList.hidden = true;
  unitList.hidden = true;
  topicList.hidden = false;
  topicList.replaceChildren(
    ...Object.keys(topicData).map((topic) =>
      buttonFor(topic, () => showFlashcard(topic))
    )
  );
}

if (backCategories) backCategories.onclick = showCategories;
backSubjects.onclick = () => {
  if (currentCategory) showCategory(currentCategory);
  else showCategories();
};
backUnits.onclick = () => showUnits(currentSubject);

languageSelect.onchange = (event) => {
  currentLanguage = event.target.value;
  const units = getSubjectUnits(currentSubject, currentCategory, currentLanguage);

  if (!world.hidden && currentTopic) {
    const currentUnitObj = units[currentUnit];
    if (currentUnitObj?.topics?.[currentTopic]) {
      topicData = currentUnitObj.topics;
      renderFlashcards();
      updateFocus();
      return;
    }
  }

  world.hidden = true;
  studyNav.hidden = true;
  menu.hidden = false;
  toolbar.classList.remove("study-mode");

  if (currentUnit && units[currentUnit]) {
    showUnit(currentUnit);
  } else if (currentSubject && Object.keys(units).length > 0) {
    showUnits(currentSubject);
  } else if (currentCategory) {
    showCategory(currentCategory);
  } else {
    showCategories();
  }
};

function formatAnswer(container, text) {
  const parts = text
    .split(/\r?\n/)
    .flatMap((line) => {
      line = line.trim();
      return /^[-*•]\s/.test(line)
        ? [line]
        : line.match(/[^.!?]+(?:[.!?]+|$)/g) || [];
    })
    .map((line) => line.trim())
    .filter(Boolean);
  container.replaceChildren();
  let list;
  parts.forEach((part) => {
    const bullet = part.match(/^[-*•]\s*(.+)$/);
    if (bullet) {
      if (!list) {
        list = document.createElement("ul");
        container.append(list);
      }
      const item = document.createElement("li");
      item.textContent = bullet[1];
      list.append(item);
    } else {
      list = null;
      const paragraph = document.createElement("p");
      paragraph.textContent = part;
      container.append(paragraph);
    }
  });
}
function formatAnswerSafe(container, text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  container.replaceChildren();

  let currentTarget = container;
  let currentList = null;

  lines.forEach((line) => {
    // Check if line is a subtopic header (e.g., "Artificial Intelligence (AI):", "Machine Learning (ML):", "Importance:")
    const isHeader = /^([A-Za-z0-9\s()\/,–-]+):$/.test(line);

    if (isHeader) {
      currentList = null;
      const details = document.createElement("details");
      details.className = "answer-subtopic";
      const summary = document.createElement("summary");
      summary.textContent = line;

      summary.onpointerdown = (e) => e.stopPropagation();
      summary.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        details.open = !details.open;
        requestAnimationFrame(relayoutCards);
      };

      details.append(summary);
      container.append(details);
      currentTarget = details;
      return;
    }

    const bullet = line.match(/^[-*•]\s*(.+)$/);
    if (bullet) {
      if (!currentList || currentList.parentElement !== currentTarget) {
        currentList = document.createElement("ul");
        currentTarget.append(currentList);
      }
      const item = document.createElement("li");
      item.textContent = bullet[1];
      currentList.append(item);
    } else {
      currentList = null;
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      currentTarget.append(paragraph);
    }
  });

  // Re-layout cards dynamically if user opens or closes a subtopic accordion
  container.querySelectorAll("details").forEach((details) => {
    details.ontoggle = () => requestAnimationFrame(relayoutCards);
  });
}

const defaultCardPositions = [
  { x: "570px", y: "445px" },
  { x: "1070px", y: "445px" },
  { x: "570px", y: "635px" },
  { x: "1070px", y: "635px" },
  { x: "820px", y: "825px" },
];

function resetCardPositions() {
  $$(".card").forEach((card, index) => {
    const pos = defaultCardPositions[index];
    if (pos) {
      card.style.setProperty("--x", pos.x);
      card.style.setProperty("--y", pos.y);
      card.style.setProperty("--shift-y", "0px");
    }
  });
}

function renderFlashcards() {
  resetCardPositions();
  $(".topic h1").textContent = currentTopic.replace(/\?$/, "");
  const cards = topicData[currentTopic].cards;
  $$(".card").forEach((card, index) => {
    if (index >= cards.length) {
      card.hidden = true;
      return;
    }
    const [question, answer] = cards[index];
    card.hidden = false;
    card.style.setProperty("--shift-y", "0px");
    card.querySelector(".question").textContent = question;
    formatAnswerSafe(card.querySelector(".answer>div"), answer);
    card.classList.remove("open");
    card.querySelector(".question").setAttribute("aria-expanded", "false");
  });
}
function relayoutCards() {
  const cards = $$(".card")
    .filter((card) => !card.hidden)
    .sort(
      (a, b) =>
        parseFloat(a.style.getPropertyValue("--y")) -
        parseFloat(b.style.getPropertyValue("--y")),
    );
  const placed = [];
  cards.forEach((card) => {
    const left =
      parseFloat(card.style.getPropertyValue("--x")) - card.offsetWidth / 2;
    const right = left + card.offsetWidth;
    const top = parseFloat(card.style.getPropertyValue("--y"));
    const height =
      card.querySelector(".question").offsetHeight +
      (card.classList.contains("open")
        ? card.querySelector(".answer>div").scrollHeight
        : 0);
    let shift = 0;
    placed.forEach((other) => {
      if (
        left < other.right &&
        right > other.left &&
        top + shift < other.bottom + 50
      )
        shift = Math.max(shift, other.bottom + 50 - top);
    });
    card.style.setProperty("--shift-y", `${shift}px`);
    placed.push({ left, right, bottom: top + shift + height });
  });
}
function updateFocus() {
  world.classList.toggle("focused", Boolean(world.querySelector(".card.open")));
}
function closeCard(card) {
  if (!card?.classList.contains("open")) return;
  card.classList.remove("open");
  card.querySelector(".question").setAttribute("aria-expanded", "false");
  updateFocus();
  const answer = card.querySelector(".answer");
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    answer.removeEventListener("transitionend", finish);
    relayoutCards();
  };
  answer.addEventListener("transitionend", finish);
  setTimeout(finish, 260);
}
function toggleCard(card, button) {
  if (card.classList.contains("open")) return closeCard(card);
  $$(".card.open").forEach(closeCard);
  card.classList.add("open");
  button.setAttribute("aria-expanded", "true");
  updateFocus();
  requestAnimationFrame(relayoutCards);
}
function showFlashcard(topic) {
  currentTopic = topic;
  menu.hidden = true;
  world.hidden = false;
  studyNav.hidden = false;
  toolbar.classList.add("study-mode");
  renderFlashcards();
  updateFocus();
  const topics = Object.keys(topicData),
    index = topics.indexOf(topic);
  $("#previous-topic").disabled = index <= 0;
  $("#next-topic").disabled = index >= topics.length - 1;
}
$("#back-questions").onclick = () => {
  world.hidden = true;
  studyNav.hidden = true;
  menu.hidden = false;
  toolbar.classList.remove("study-mode");
  showUnit(currentUnit);
};
$("#previous-topic").onclick = () => {
  const topics = Object.keys(topicData),
    index = topics.indexOf(currentTopic);
  if (index > 0) showFlashcard(topics[index - 1]);
};
$("#next-topic").onclick = () => {
  const topics = Object.keys(topicData),
    index = topics.indexOf(currentTopic);
  if (index < topics.length - 1) showFlashcard(topics[index + 1]);
};

const fittedScale = () =>
  innerWidth <= 600
    ? Math.min(0.55, Math.max(0.35, (innerWidth - 24) / 840))
    : 0.8;
const initialScale = fittedScale();
const view = {
  x: innerWidth / 2 - 820 * initialScale,
  y: innerHeight / 2 - 530 * initialScale,
  scale: initialScale,
};
const menuView = { x: 0, y: 0 };
function renderView() {
  const ratio = devicePixelRatio || 1,
    x = Math.round(view.x * ratio) / ratio,
    y = Math.round(view.y * ratio) / ratio;
  world.style.transform = `translate(${x}px,${y}px) scale(${view.scale})`;
  menuPanel.style.transform = `translate(${menuView.x}px,${menuView.y}px) scale(${view.scale / fittedScale()})`;
  zoomLabel.value = `${Math.round(view.scale * 100)}%`;
}
function setZoom(next, cx = innerWidth / 2, cy = innerHeight / 2) {
  next = Math.min(1.6, Math.max(0.35, next));
  const wx = (cx - view.x) / view.scale,
    wy = (cy - view.y) / view.scale;
  view.x = cx - wx * next;
  view.y = cy - wy * next;
  view.scale = next;
  renderView();
}
viewport.onpointerdown = (event) => {
  let drag = null;
  let pinch = null;
  const pointers = new Map();

  function pointerDistance([a, b]) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  function pointerCenter([a, b]) {
    return {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2,
    };
  }

  viewport.onpointerdown = (event) => {
    if (event.target.closest("summary, details, .answer-subtopic")) return;
    const coarse = innerWidth <= 600 || matchMedia("(pointer:coarse)").matches;

    const card = event.target.closest(".card");

    if (
      event.target.closest(".study-nav") ||
      (!coarse && card) ||
      (!card && event.target.closest("button"))
    )
      return;

    pointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });

    viewport.setPointerCapture(event.pointerId);

    if (pointers.size === 2) {
      const points = [...pointers.values()];
      const center = pointerCenter(points);

      pinch = {
        distance: pointerDistance(points),
        scale: view.scale,
        worldX: (center.x - view.x) / view.scale,
        worldY: (center.y - view.y) / view.scale,
      };

      drag = null;
      viewport.classList.add("dragging");
      return;
    }

    drag = !menu.hidden
      ? {
          menu: true,
          x: event.clientX,
          y: event.clientY,
          vx: menuView.x,
          vy: menuView.y,
        }
      : {
          x: event.clientX,
          y: event.clientY,
          vx: view.x,
          vy: view.y,
          toggle: event.target.closest(".question"),
          dismiss: !card,
        };

    viewport.classList.add("dragging");
  };

  viewport.onpointermove = (event) => {
    if (pointers.has(event.pointerId)) {
      pointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
    }

    if (pinch && pointers.size >= 2) {
      const points = [...pointers.values()].slice(0, 2);
      const center = pointerCenter(points);

      const nextScale = Math.min(
        1.6,
        Math.max(
          0.35,
          (pinch.scale * pointerDistance(points)) / pinch.distance,
        ),
      );

      view.scale = nextScale;
      view.x = center.x - pinch.worldX * nextScale;
      view.y = center.y - pinch.worldY * nextScale;

      renderView();
      return;
    }

    if (!drag) return;

    if (drag.menu) {
      menuView.x = drag.vx + event.clientX - drag.x;
      menuView.y = drag.vy + event.clientY - drag.y;
    } else {
      view.x = drag.vx + event.clientX - drag.x;
      view.y = drag.vy + event.clientY - drag.y;
    }

    renderView();
  };

  function clearViewportDrag() {
    drag = null;
    viewport.classList.remove("dragging");
  }

  viewport.onpointerup = (event) => {
    const wasPinching = Boolean(pinch);

    pointers.delete(event.pointerId);

    if (wasPinching) {
      pinch = null;
      pointers.clear();
      clearViewportDrag();
      return;
    }

    if (
      drag &&
      Math.hypot(event.clientX - drag.x, event.clientY - drag.y) <= 8
    ) {
      if (drag.toggle) {
        toggleCard(drag.toggle.closest(".card"), drag.toggle);
      } else if (drag.dismiss) {
        closeCard(world.querySelector(".card.open"));
      }
    }

    clearViewportDrag();
  };

  function cancelViewportGesture() {
    pointers.clear();
    pinch = null;
    clearViewportDrag();
  }

  viewport.onpointercancel = cancelViewportGesture;
  viewport.onlostpointercapture = (event) => {
    pointers.delete(event.pointerId);

    if (!pointers.size) {
      pinch = null;
      clearViewportDrag();
    }
  };
};
viewport.onwheel = (event) => {
  event.preventDefault();
  setZoom(
    view.scale * (event.deltaY > 0 ? 0.9 : 1.1),
    event.clientX,
    event.clientY,
  );
};
onresize = renderView;

$$(".card").forEach((card) => {
  let movement = null;
  card.onpointerdown = (event) => {
    if (event.target.closest("summary, details, .answer-subtopic, a, button:not(.question)")) return;
    if (innerWidth <= 600 || matchMedia("(pointer:coarse)").matches) return;
    movement = {
      x: event.clientX,
      y: event.clientY,
      left: parseFloat(card.style.getPropertyValue("--x")),
      top: parseFloat(card.style.getPropertyValue("--y")),
      toggle: Boolean(event.target.closest(".question")),
    };
    card.classList.add("moving");
    card.setPointerCapture(event.pointerId);
  };
  card.onpointermove = (event) => {
    if (movement) {
      card.style.setProperty(
        "--x",
        `${movement.left + (event.clientX - movement.x) / view.scale}px`,
      );
      card.style.setProperty(
        "--y",
        `${movement.top + (event.clientY - movement.y) / view.scale}px`,
      );
    }
  };
  const clearCardDrag = () => {
    movement = null;
    card.classList.remove("moving");
  };
  card.onpointerup = (event) => {
    if (!movement) return;
    if (
      !movement.toggle ||
      Math.hypot(event.clientX - movement.x, event.clientY - movement.y) > 8
    )
      return clearCardDrag();
    toggleCard(card, card.querySelector(".question"));
    clearCardDrag();
  };
  card.onpointercancel = clearCardDrag;
  card.onlostpointercapture = clearCardDrag;
});

$("#minus").onclick = () => setZoom(view.scale - 0.1);
$("#plus").onclick = () => setZoom(view.scale + 0.1);
$("#center").onclick = () => {
  resetCardPositions();
  view.scale = fittedScale();
  view.x = innerWidth / 2 - 820 * view.scale;
  view.y = innerHeight / 2 - 530 * view.scale;
  menuView.x = menuView.y = 0;
  renderView();
};
const styleSelect = $("#text-style"),
  fontSelect = $("#text-font"),
  sizeInput = $("#text-size"),
  colorInput = $("#text-color"),
  widthInput = $("#text-width"),
  focusOpacity = $("#focus-opacity");
const textStyles = {
  question: { size: 21, color: "#29282d", font: "Excalifont" },
  answer: { size: 17, color: "#6e6b73", font: "Excalifont" },
};
styleSelect.onchange = () => {
  const style = textStyles[styleSelect.value];
  sizeInput.value = style.size;
  colorInput.value = style.color;
  fontSelect.value = style.font;
};
fontSelect.onchange = () => {
  const name = styleSelect.value;
  textStyles[name].font = fontSelect.value;
  document.documentElement.style.setProperty(
    `--${name}-font`,
    fontSelect.value,
  );
};
sizeInput.oninput = () =>
  document.documentElement.style.setProperty(
    `--${styleSelect.value}-size`,
    `${sizeInput.value}px`,
  );
widthInput.oninput = () => {
  document.documentElement.style.setProperty(
    "--card-width",
    `${widthInput.value}px`,
  );
  relayoutCards();
};
function darkColor(hex) {
  const rgb = hex.match(/\w\w/g).map((value) => parseInt(value, 16));
  const luminance = rgb.reduce(
    (sum, value, index) =>
      sum + (value / 255) * [0.2126, 0.7152, 0.0722][index],
    0,
  );
  const mix = luminance < 0.65 ? (0.65 - luminance) / 0.65 : 0;
  return `rgb(${rgb.map((value) => Math.round(value + (255 - value) * mix)).join(" ")})`;
}
colorInput.oninput = () => {
  const name = styleSelect.value;
  document.documentElement.style.setProperty(
    `--${name}-color`,
    colorInput.value,
  );
  document.documentElement.style.setProperty(
    `--${name}-dark-color`,
    darkColor(colorInput.value),
  );
};
focusOpacity.oninput = () =>
  document.documentElement.style.setProperty(
    "--focus-opacity",
    `${focusOpacity.value}%`,
  );
const themeButton = $("#theme");
const brand = toolbar.querySelector("strong");
function toggleToolbar(force) {
  const expanded = force ?? !toolbar.classList.contains("expanded");
  toolbar.classList.toggle("expanded", expanded);
  brand.setAttribute("aria-expanded", expanded);
}
brand.onclick = () => {
  toggleToolbar();
  brand.blur();
};
brand.onkeydown = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleToolbar();
  }
};
document.addEventListener("pointerdown", (event) => {
  if (
    toolbar.classList.contains("expanded") &&
    !event.target.closest(".toolbar")
  )
    toggleToolbar(false);
});
toolbar.onwheel = (event) => {
  if (innerWidth <= 700 || !toolbar.classList.contains("expanded")) return;
  event.preventDefault();
  toolbar.scrollLeft +=
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;
};
let toolbarDrag;
toolbar.onpointerdown = (event) => {
  if (
    innerWidth <= 700 ||
    !toolbar.classList.contains("expanded") ||
    (event.target !== toolbar && !event.target.classList.contains("divider"))
  )
    return;
  toolbarDrag = { x: event.clientX, left: toolbar.scrollLeft };
  toolbar.classList.add("dragging-toolbar");
  toolbar.setPointerCapture(event.pointerId);
};
toolbar.onpointermove = (event) => {
  if (toolbarDrag)
    toolbar.scrollLeft = toolbarDrag.left + toolbarDrag.x - event.clientX;
};
function clearToolbarDrag() {
  toolbarDrag = null;
  toolbar.classList.remove("dragging-toolbar");
}
toolbar.onpointerup = clearToolbarDrag;
toolbar.onpointercancel = clearToolbarDrag;
toolbar.onlostpointercapture = clearToolbarDrag;
function setTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  themeButton.title = themeButton.ariaLabel = dark
    ? "Use light mode"
    : "Use dark mode";
  themeButton.setAttribute("aria-pressed", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}
setTheme(
  (localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches && "dark")) === "dark",
);
themeButton.onclick = () =>
  setTheme(!document.documentElement.classList.contains("dark"));
renderView();
world.hidden = true;
normalizedData = getNormalizedStudyData();
populateLanguageDropdown();
showCategories();
