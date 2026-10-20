(() => {
  const body = document.body;
  const themeButton = document.querySelector(".theme-toggle");

  // تغییر تم با نگه‌داشتن انتخاب کاربر در مرورگر
  const savedTheme = localStorage.getItem("learning-theme");
  if (savedTheme === "light") body.classList.add("light-theme");

  if (themeButton) {
    themeButton.textContent = body.classList.contains("light-theme") ? "☼" : "◐";
    themeButton.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      const isLight = body.classList.contains("light-theme");
      localStorage.setItem("learning-theme", isLight ? "light" : "dark");
      themeButton.textContent = isLight ? "☼" : "◐";
    });
  }

  // ناوبری با کلیدهای جهت‌دار در صفحات اسلاید
  const slideNumber = Number(body.dataset.slide);
  if (slideNumber) {
    document.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft") {
        const next = document.querySelector("[data-next]");
        if (next) window.location.href = next.href;
      } else if (event.key === "ArrowRight") {
        const previous = document.querySelector("[data-previous]");
        if (previous) window.location.href = previous.href;
      } else if (event.key === "Home") {
        window.location.href = "index.html";
      }
    });
  }
})();
