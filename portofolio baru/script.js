const btn = document.getElementById("togle");

btn.addEventListener("click", function () {
  const body = document.body;
  const currentTheme = body.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  body.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-bs-theme", savedTheme);
  }
});
