import IMask from 'imask';

const tel = document.getElementById('tel');
const telModal = document.getElementById('tel-modal');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
// eslint-disable-next-line no-unused-vars, new-cap
const mask = IMask(tel, maskOptions);
// eslint-disable-next-line no-unused-vars, new-cap
const mask2 = IMask(telModal, maskOptions);
