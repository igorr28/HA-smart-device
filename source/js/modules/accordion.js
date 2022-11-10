const accordion = document.querySelector('.accordion');
let accordionButtons;
let accordionContents;

const accordionHandler = (e) => {
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
};

const breakpoint = window.matchMedia('(max-width: 768px)');
const breakpointChecker = () => {
  if (breakpoint.matches) {
    accordionContents = document.querySelectorAll('.accordion__content');
    accordionButtons = document.querySelectorAll('.accordion__btn');

    for (let accordionContent of accordionContents) {
      accordionContent.style.height = '0px';
    }
    for (let accordionButton of accordionButtons) {
      accordionButton.classList.add('accordion__btn--close');
    }
    accordion.addEventListener('click', accordionHandler);
  } else {
    accordionContents = document.querySelectorAll('.accordion__content');
    accordionButtons = document.querySelectorAll('.accordion__btn');

    for (let accordionContent of accordionContents) {
      accordionContent.style.height = '';
    }
    for (let accordionButton of accordionButtons) {
      accordionButton.classList.remove('accordion__btn--close');
    }

    accordion.removeEventListener('click', accordionHandler);
  }
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();
