import IMask from 'imask';

const telInputs = Array.from(document.querySelectorAll('input[type="tel"]'));

const initMask = () => {
  telInputs.forEach(
      (telInput) => new IMask(telInput, {
        mask: '+{7}(000)000-00-00',
      })
  );
};

export {initMask};
