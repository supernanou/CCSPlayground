// Pull-cord dark mode toggle. The bulb lights up when dark mode ("night
// mode") is on; it's unlit in light mode. Pulling the string always
// plays the tug animation, whether or not the theme actually changes.

const THEME_KEY = "cssArcadeTheme";

function applyTheme(theme, toggleEl) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  if (toggleEl) {
    toggleEl.classList.toggle("lit", theme === "dark");
    toggleEl.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current, toggle);

  toggle.addEventListener("click", () => {
    const now = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = now === "dark" ? "light" : "dark";

    toggle.classList.remove("pulling");
    void toggle.offsetWidth; // restart the animation even on rapid clicks
    toggle.classList.add("pulling");

    applyTheme(next, toggle);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* ignore — private browsing / blocked storage */
    }
  });

  toggle.addEventListener("animationend", (e) => {
    if (e.animationName === "pull-string") toggle.classList.remove("pulling");
  });
});
