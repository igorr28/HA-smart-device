const tel = document.getElementById('tel');
const telModal = document.getElementById('tel-modal');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(tel, maskOptions);
const mask2 = IMask(telModal, maskOptions);
