// Playground v2 — 100 self-checking challenges per level.
// Challenges are declarative data (js/challenges-*.js) checked against
// a shared rule engine (js/rules-engine.js) and rendered on top of
// reusable stages (js/stages.js). Each challenge's editor + live
// preview is built lazily, the first time its card is opened, so 300
// potential challenges don't all spin up iframes on page load.

const CHALLENGE_LEVELS = [
  { key: "beginner", listId: "beginnerChallengeList", countId: "beginnerChallengeCount", searchId: "beginnerChallengeSearch", navId: "beginnerChallengeModuleNav", data: typeof CHALLENGES_BEGINNER !== "undefined" ? CHALLENGES_BEGINNER : [] },
  { key: "intermediate", listId: "intermediateChallengeList", countId: "intermediateChallengeCount", searchId: "intermediateChallengeSearch", navId: "intermediateChallengeModuleNav", data: typeof CHALLENGES_INTERMEDIATE !== "undefined" ? CHALLENGES_INTERMEDIATE : [] },
  { key: "advanced", listId: "advancedChallengeList", countId: "advancedChallengeCount", searchId: "advancedChallengeSearch", navId: "advancedChallengeModuleNav", data: typeof CHALLENGES_ADVANCED !== "undefined" ? CHALLENGES_ADVANCED : [] },
];

function moduleNumber(moduleLabel) {
  const m = /^(\d+)\./.exec(moduleLabel);
  return m ? m[1] : "?";
}

function renderModuleNav(level, navEl, searchEl, draw) {
  const modules = [...new Set(level.data.map((c) => c.module))];
  navEl.innerHTML = modules
    .map((mod) => {
      const num = moduleNumber(mod);
      const label = mod.replace(/^\d+\.\s*/, "");
      return `<button type="button" class="module-chip" data-target="${level.key}-c-m${num}" title="${escapeHtml(label)}" aria-label="Jump to module ${num}: ${escapeHtml(label)}">${num}</button>`;
    })
    .join("");

  navEl.querySelectorAll(".module-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetId = chip.dataset.target;
      const jump = () => {
        const heading = document.getElementById(targetId);
        if (heading) heading.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      if (searchEl && searchEl.value) {
        searchEl.value = "";
        draw("");
        requestAnimationFrame(jump);
      } else {
        jump();
      }
    });
  });
}

let solved = new Set();
try {
  solved = new Set(JSON.parse(localStorage.getItem("cssArcadeSolved") || "[]"));
} catch (e) {
  solved = new Set();
}

function persistSolved() {
  try {
    localStorage.setItem("cssArcadeSolved", JSON.stringify([...solved]));
  } catch (e) {
    /* ignore — private browsing / blocked storage */
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function challengeMatches(ch, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    ch.title.toLowerCase().includes(q) ||
    ch.brief.toLowerCase().includes(q) ||
    ch.module.toLowerCase().includes(q)
  );
}

function buildDoc(challenge, userCss) {
  const stage = STAGES[challenge.stage];
  return `<!doctype html>
<html><head><meta charset="utf-8">
<style>
  html,body{margin:0;height:100%;font-family:system-ui,sans-serif;}
  ${stage.baseCss}
</style>
<style>${userCss}</style>
</head>
<body>${stage.markup}</body></html>`;
}

const CHECK_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-1px;"><polyline points="20 6 9 17 4 12"></polyline></svg>';
const HINT_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px;"><path d="M9 18h6"></path><path d="M10 21h4"></path><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.45 1.1 1.2 1.1 2.2h5c0-1 .5-1.75 1.1-2.2A6 6 0 0 0 12 3z"></path></svg>';
const RESET_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px;"><path d="M3 12a9 9 0 1 0 3-6.7"></path><polyline points="3 4 3 9 8 9"></polyline></svg>';

function summaryLabel(challenge) {
  const prefix = solved.has(challenge.id) ? `<span style="color:#5c7c4f;">${CHECK_ICON}</span> ` : "";
  return prefix + escapeHtml(challenge.title);
}

function buildChallengeBody(bodyEl, challenge, summaryEl, onSolve) {
  bodyEl.innerHTML = `
    <p class="challenge-brief">${escapeHtml(challenge.brief)}</p>
    <div class="editor-preview">
      <div>
        <div class="pane-label" id="pane-label-css-${challenge.id}">Your CSS</div>
        <textarea class="css-editor" spellcheck="false" aria-labelledby="pane-label-css-${challenge.id}"></textarea>
      </div>
      <div>
        <div class="pane-label">Live preview</div>
        <div class="preview-frame"><iframe title="Live preview of your CSS applied to: ${escapeHtml(challenge.title)}" sandbox="allow-same-origin"></iframe></div>
      </div>
    </div>
    <div class="hint-box">${HINT_ICON} ${escapeHtml(challenge.hint)}</div>
    <div class="challenge-actions">
      <div style="display:flex; gap:10px;">
        <button class="btn btn-ghost hint-toggle" type="button" aria-expanded="false">${HINT_ICON} Hint</button>
        <button class="btn btn-ghost reset-btn" type="button">${RESET_ICON} Reset</button>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="challenge-status" role="status" aria-live="polite"></span>
        <button class="btn btn-soft solution-btn" type="button">Show solution</button>
      </div>
    </div>
  `;

  const editor = bodyEl.querySelector(".css-editor");
  const iframe = bodyEl.querySelector("iframe");
  const status = bodyEl.querySelector(".challenge-status");
  const hintBox = bodyEl.querySelector(".hint-box");
  const hintToggle = bodyEl.querySelector(".hint-toggle");

  editor.value = challenge.starterCss;

  function update() {
    const userCss = editor.value;
    iframe.srcdoc = buildDoc(challenge, userCss);
    iframe.onload = () => {
      let ok = false;
      try {
        ok = runRules(iframe.contentDocument, userCss, challenge.rules);
      } catch (e) {
        ok = false;
      }
      if (ok) {
        status.innerHTML = `${CHECK_ICON} Solved!`;
        status.style.color = "#5c7c4f";
        if (!solved.has(challenge.id)) {
          solved.add(challenge.id);
          persistSolved();
          summaryEl.innerHTML = summaryLabel(challenge);
          onSolve();
        }
      } else {
        status.innerHTML = solved.has(challenge.id) ? `${CHECK_ICON} Solved (edit freely)` : "Not quite yet — keep going";
        status.style.color = solved.has(challenge.id) ? "#5c7c4f" : "#8a7a5c";
      }
    };
  }

  let debounce;
  editor.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(update, 250);
  });

  hintToggle.addEventListener("click", () => {
    const showing = hintBox.classList.toggle("show");
    hintToggle.setAttribute("aria-expanded", String(showing));
  });

  bodyEl.querySelector(".reset-btn").addEventListener("click", () => {
    editor.value = challenge.starterCss;
    update();
  });

  bodyEl.querySelector(".solution-btn").addEventListener("click", () => {
    editor.value = challenge.solutionCss;
    update();
  });

  update();
}

function renderLevel(level) {
  const listEl = document.getElementById(level.listId);
  const countEl = document.getElementById(level.countId);
  const searchEl = document.getElementById(level.searchId);
  const navEl = document.getElementById(level.navId);
  if (!listEl) return;

  const total = level.data.length;

  function solvedCount() {
    return level.data.filter((c) => solved.has(c.id)).length;
  }

  function updateCount(query) {
    if (query) {
      const visible = level.data.filter((c) => challengeMatches(c, query));
      countEl.textContent = `${visible.length} of ${total} tasks`;
    } else {
      countEl.textContent = `${total} tasks · ${solvedCount()} solved`;
    }
  }

  function draw(query) {
    listEl.innerHTML = "";
    const visible = level.data.filter((c) => challengeMatches(c, query));
    updateCount(query);

    if (visible.length === 0) {
      listEl.innerHTML = `<p class="no-results">No challenges match "${escapeHtml(query)}" — try a different search.</p>`;
      return;
    }

    let currentModule = null;
    let currentRow = null;

    visible.forEach((challenge) => {
      if (challenge.module !== currentModule) {
        currentModule = challenge.module;
        const heading = document.createElement("h3");
        heading.className = "module-heading";
        heading.id = `${level.key}-c-m${moduleNumber(currentModule)}`;
        heading.textContent = currentModule;
        listEl.appendChild(heading);

        currentRow = document.createElement("div");
        currentRow.className = "topic-row";
        listEl.appendChild(currentRow);
      }

      const details = document.createElement("details");
      details.className = "topic-card challenge-card";

      const summary = document.createElement("summary");
      summary.innerHTML = summaryLabel(challenge);
      details.appendChild(summary);

      const body = document.createElement("div");
      body.className = "topic-body";
      details.appendChild(body);

      let built = false;
      details.addEventListener("toggle", () => {
        if (details.open && !built) {
          built = true;
          buildChallengeBody(body, challenge, summary, () => updateCount(searchEl ? searchEl.value.trim() : ""));
        }
      });

      currentRow.appendChild(details);
    });
  }

  draw("");

  if (navEl) renderModuleNav(level, navEl, searchEl, draw);

  if (searchEl) {
    searchEl.addEventListener("input", () => draw(searchEl.value.trim()));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("beginnerChallengeList")) return;
  CHALLENGE_LEVELS.forEach(renderLevel);
});
