const loginModal = document.getElementById('loginModal');
const signModal = document.getElementById('signModal');
const log = document.getElementById('log');
const sign = document.getElementById('sign');
const span1 = document.getElementById('close1');
const span2 = document.getElementById('close2');
const log3 = document.getElementById('go2log');
const allActions = document.getElementById('allActions');

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

if (token) {
  allActions.innerHTML = ``;
  const plus = document.createElement('a');
  const fa = document.createElement('i');
  const free = document.createElement('a');
  const logout = document.createElement('a');
  const username = document.createElement('a');
  plus.setAttribute('class', 'plus');
  fa.setAttribute('class', 'fa fa-plus');
  username.id= 'homeUser';
  allActions.appendChild(plus);
  allActions.appendChild(free);
  plus.appendChild(fa);
  allActions.appendChild(logout);
  free.textContent = 'free';
  logout.textContent = 'logout';
  username.textContent = loggedUser;
  username.href = '/html/home.html';
  allActions.appendChild(username);
  plus.href = 'html/addPost.html';
  free.href = 'html/addPost.html';
  logout.href = '/logout';
}
