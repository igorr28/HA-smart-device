const forms = document.forms;
const questionsForm = document.forms[0];
const modalForm = document.forms[1];
//const formElements = Array.from(form.elements);

// formElements.forEach((elem) => {
// elem.addEventListener('input', (e) => {
//   console.log(1, elem.value);
//   checkFormElement(elem);
// })
// });

const checkFormElement = (elem) => {
  const inputValue = elem.value;

  if (elem.hasAttribute('required')) {
    if (elem.type === 'checkbox') {
      if (!elem.checked) {
        showErrorElem(elem.parentElement, 'Чтобы продолжить, установите этот флажок');
        return;
      }
    } else {
      if (!inputValue.length) {
        showErrorElem(elem, 'Поле обязательно для заполнения');
        return;
      }
    }
  }

  if (elem.hasAttribute('pattern')) {
    const reg = new RegExp(elem.getAttribute('pattern'));
    if (!reg.test(inputValue)) {
      showErrorElem(elem, elem.title);
      return;
    }
  }

};

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

const showErrorElem = (elem, message) => {
  const errorElem = document.createElement('span');
  (elem.closest('.modal')) ? errorElem.classList.add('form__error', 'form__error--modal') : errorElem.classList.add('form__error');
  errorElem.textContent = message;
  let coords = getCoords(elem);
  errorElem.style.left = coords.left + 'px';
  errorElem.style.top = coords.bottom + 'px';
  errorElem.style.width = elem.offsetWidth + 'px';
  errorElem.dataset.nameField = (elem.tagName === 'LABEL') ? elem.firstElementChild.name : elem.name;
  document.body.append(errorElem);
};

const resetErrorElem = (elem) => {
  const selector = `span[data-name-field="${elem.name}"]`;
  const errorElem = document.querySelector(selector);
  if (errorElem) {
    errorElem.remove();
  }
};

const resetErrors = (form) => {
  const formElements = Array.from(form.elements);
  formElements.forEach((elem) => {
    if (elem.hasAttribute('data-validate')) {
      resetErrorElem(elem);
    }
  });
};

for (let form of forms) {
  form.setAttribute('novalidate', 'novalidate');
  form.addEventListener('input', (e) => {
    const target = e.target;
    resetErrorElem(target);

    if (target.hasAttribute('data-validate')) {
      checkFormElement(target);
    }
  });

  form.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('form__button')) {
      e.preventDefault();
      resetErrors(form);
    }
  });
}

export {modalForm, resetErrors};
