const accordion = document.querySelector('.accordion');
const accordionContents = document.querySelectorAll('.accordion__content');
const accordionButtons = document.querySelectorAll('.accordion__btn');


for (let accordionContent of accordionContents) {
  accordionContent.style.height = '0px';
}
for (let accordionButton of accordionButtons) {
  accordionButton.classList.add('accordion__btn--close');
}

accordion.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('accordion__btn')) {
    accordionButtons = document.querySelectorAll('.accordion__btn');
    for (let accordionButton of accordionButtons) {
      if (accordionButton === target) {
        if (accordionButton.classList.contains('accordion__btn--close')) {
          accordionButton.classList.remove('accordion__btn--close');
          accordionButton.nextElementSibling.style.height = accordionButton.nextElementSibling.scrollHeight + 'px';
        } else {
          accordionButton.classList.add('accordion__btn--close');
          accordionButton.nextElementSibling.style.height = '0px';
        }
      } else {
        accordionButton.classList.add('accordion__btn--close');
        accordionButton.nextElementSibling.style.height = '0px';
      }
    }
  }
});
