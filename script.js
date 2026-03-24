const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const label = document.querySelector("[data-theme-label]");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  root.dataset.theme = theme;
  label.textContent = theme === "dark" ? "Light" : "Dark";
}

function resolveTheme() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme || (systemPrefersDark.matches ? "dark" : "light");
}

applyTheme(resolveTheme());

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});

systemPrefersDark.addEventListener("change", (event) => {
  if (localStorage.getItem("theme")) {
    return;
  }

  applyTheme(event.matches ? "dark" : "light");
});
