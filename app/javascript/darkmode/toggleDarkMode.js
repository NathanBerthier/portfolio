const toggleDarkMode = () => {
  const btn = document.querySelector('.btn-dark');
  const body = document.querySelector('body');

  btn.addEventListener("click", () => {
    body.classList.toggle("light-theme")
  });
}

export { toggleDarkMode };
