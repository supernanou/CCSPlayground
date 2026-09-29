// Renders the 100-lesson-per-level curriculum on learn.html.
// Expects globals BEGINNER_LESSONS / INTERMEDIATE_LESSONS / ADVANCED_LESSONS
// to already be defined by js/data-*.js (loaded before this file).

const LEVELS = [
  { key: "beginner", listId: "beginnerList", countId: "beginnerCount", searchId: "beginnerSearch", navId: "beginnerModuleNav", data: typeof BEGINNER_LESSONS !== "undefined" ? BEGINNER_LESSONS : [] },
  { key: "intermediate", listId: "intermediateList", countId: "intermediateCount", searchId: "intermediateSearch", navId: "intermediateModuleNav", data: typeof INTERMEDIATE_LESSONS !== "undefined" ? INTERMEDIATE_LESSONS : [] },
  { key: "advanced", listId: "advancedList", countId: "advancedCount", searchId: "advancedSearch", navId: "advancedModuleNav", data: typeof ADVANCED_LESSONS !== "undefined" ? ADVANCED_LESSONS : [] },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function lessonMatches(lesson, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    lesson.title.toLowerCase().includes(q) ||
    lesson.summary.toLowerCase().includes(q) ||
    lesson.module.toLowerCase().includes(q)
  );
}

function moduleNumber(moduleLabel) {
  const m = /^(\d+)\./.exec(moduleLabel);
  return m ? m[1] : "?";
}

function renderModuleNav(level, navEl, searchEl, draw) {
  const modules = [...new Set(level.data.map((l) => l.module))];
  navEl.innerHTML = modules
    .map((mod) => {
      const num = moduleNumber(mod);
      const label = mod.replace(/^\d+\.\s*/, "");
      return `<button type="button" class="module-chip" data-target="${level.key}-m${num}" title="${escapeHtml(label)}" aria-label="Jump to module ${num}: ${escapeHtml(label)}">${num}</button>`;
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

function renderLevel(level) {
  const listEl = document.getElementById(level.listId);
  const countEl = document.getElementById(level.countId);
  const searchEl = document.getElementById(level.searchId);
  const navEl = document.getElementById(level.navId);
  if (!listEl) return;

  const total = level.data.length;

  function draw(query) {
    const visible = level.data.filter((l) => lessonMatches(l, query));
    countEl.textContent = query
      ? `${visible.length} of ${total} lessons`
      : `${total} lessons`;

    if (visible.length === 0) {
      listEl.innerHTML = `<p class="no-results">No lessons match "${escapeHtml(query)}" — try a different search.</p>`;
      return;
    }

    let html = "";
    let currentModule = null;
    let lessonIndex = 0;

    visible.forEach((lesson) => {
      if (lesson.module !== currentModule) {
        currentModule = lesson.module;
        const num = moduleNumber(currentModule);
        html += `<h3 class="module-heading" id="${level.key}-m${num}">${escapeHtml(currentModule)}</h3><div class="topic-row">`;
      }

      const openAttr = !query && lessonIndex === 0 ? " open" : "";
      const codeBlock = lesson.code
        ? `<pre>${escapeHtml(lesson.code)}</pre>`
        : "";

      html += `<details class="topic-card"${openAttr}>
        <summary>${escapeHtml(lesson.title)}</summary>
        <div class="topic-body">
          <p>${escapeHtml(lesson.summary)}</p>
          ${codeBlock}
        </div>
      </details>`;

      lessonIndex++;

      const next = visible[visible.indexOf(lesson) + 1];
      if (!next || next.module !== currentModule) {
        html += `</div>`;
      }
    });

    listEl.innerHTML = html;
  }

  draw("");

  if (navEl) renderModuleNav(level, navEl, searchEl, draw);

  if (searchEl) {
    searchEl.addEventListener("input", () => draw(searchEl.value.trim()));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  LEVELS.forEach(renderLevel);
});
