const form = document.forms['questions-form'];
const formElements = Array.from(form.elements);

//form.setAttribute('novalidate', 'novalidate');

formElements.forEach((elem) => {
elem.addEventListener('input', (e) => {
  console.log(1, elem.value);
  checkFormElement(elem);
})
});

const checkFormElement = (elem) => {
  const inputValue = elem.value;

  if (elem.hasAttribute('required')) {
    console.log(2, inputValue.length);
    if (inputValue.length) {
      console.log('r', 'true');
      elem.classList.remove('is-error');
    } else {
      console.log('r', 'false');
      elem.classList.add('is-error');
      return;
    }
  }

  if (elem.hasAttribute('pattern')) {
    const reg = new RegExp(elem.getAttribute('pattern'));
    console.log(reg);
    if (reg.test(inputValue)) {
      console.log('p', 'true');
      elem.classList.remove('is-error');
    } else {
      console.log('p', 'false');
      elem.classList.add('is-error');
      return;
    }
  }


};

//console.log(formElements);
//pattern="^\+7[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}$"

