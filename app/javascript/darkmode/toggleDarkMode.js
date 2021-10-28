const toggleDarkMode = () => {
  const btn = document.querySelector('.btn-dark');
  const body = document.querySelector('body');

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userPrefersDark) {
    body.classList.toggle("dark-theme")
  }

  btn.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
  });
}

export { toggleDarkMode };
