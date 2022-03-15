const loginModal = document.getElementById('loginModal');
const signModal = document.getElementById('signModal');
const log = document.getElementById('log');
const sign = document.getElementById('sign');
const span1 = document.getElementById('close1');
const span2 = document.getElementById('close2');
const log3 = document.getElementById('go2log');

log.onclick = () => {
  loginModal.style.display = 'block';
};
log3.onclick = () => {
  signModal.style.display = 'none';
  loginModal.style.display = 'block';
};
sign.onclick = () => {
  signModal.style.display = 'block';
};
span1.onclick = () => {
  loginModal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === loginModal || event.target === signModal) {
    loginModal.style.display = 'none';
    signModal.style.display = 'none';
  }
};
span2.onclick = () => {
  signModal.style.display = 'none';
};

