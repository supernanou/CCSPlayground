// Toggles the newspaper page between the "pick an issue" view (month
// pills + tip of the month) and a single issue's full article view.

document.addEventListener("DOMContentLoaded", () => {
  const picker = document.getElementById("issuePicker");
  if (!picker) return;

  const issues = document.querySelectorAll(".issue-detail");

  function showPicker() {
    picker.hidden = false;
    issues.forEach((section) => { section.hidden = true; });
  }

  function showIssue(id) {
    const target = document.getElementById(id);
    if (!target) return;
    picker.hidden = true;
    issues.forEach((section) => { section.hidden = section !== target; });
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll(".archive-pill[data-issue]").forEach((pill) => {
    pill.addEventListener("click", () => showIssue(pill.dataset.issue));
  });

  document.querySelectorAll(".back-to-issues[data-back]").forEach((btn) => {
    btn.addEventListener("click", showPicker);
  });
});
