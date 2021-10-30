const toggleDarkMode = () => {
  const btn = document.querySelector('.btn-dark');
  const body = document.querySelector('body');
  const userValue = localStorage.getItem('darkMode');
  const userPreference = userValue === 'true'
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userPreference && userValue) {
    body.classList.add("dark-theme")
  } else if (userPreference === false && userValue) {
    body.classList.remove("dark-theme")
  } else if (userPrefersDark) {
    body.classList.add("dark-theme")
  }

  btn.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
    if (body.className === '') {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  });
}

export { toggleDarkMode };
