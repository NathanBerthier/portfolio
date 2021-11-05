const changePostClass = () => {
  const postDiv = document.querySelector('.trix-content');

  if (postDiv) {
    postDiv.classList.remove('trix-content');
    postDiv.classList.add('post');
  }
}

export { changePostClass };
