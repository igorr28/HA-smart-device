const aboutBtn = document.querySelector('.about__btn');
const aboutText = document.querySelector('.about__text');

aboutBtn.addEventListener('click', () => {
  if (aboutText.classList.contains('about-text--show-full')) {
    aboutText.style.height = '';
    aboutText.classList.remove('about-text--show-full');
    aboutBtn.textContent = 'подробнее';
  } else {
    const heightFull = aboutText.scrollHeight;
    aboutText.style.height = `${heightFull}px`;
    aboutText.classList.add('about-text--show-full');
    aboutBtn.textContent = 'свернуть';
  }
});
