const aboutBtn = document.querySelector('.about__btn');
const aboutText = document.querySelector('.about__text-more');
const aboutMobile = document.querySelector('.about__text-mobile');

const showAboutText = () => {
  if (aboutBtn && aboutText) {
    aboutBtn.addEventListener('click', () => {
      if (aboutText.classList.contains('is-shown')) {
        aboutText.style.height = '';
        aboutMobile.style.height = '';
        aboutText.classList.remove('is-shown');
        aboutBtn.textContent = 'подробнее';
      } else {
        const heightFull = aboutText.scrollHeight;
        const heightFullMobile = aboutMobile.scrollHeight;
        aboutText.style.height = `${heightFull}px`;
        aboutMobile.style.height = `${heightFullMobile}px`;
        aboutText.classList.add('is-shown');
        aboutBtn.textContent = 'свернуть';
      }
    });
  }
};

export {showAboutText};
