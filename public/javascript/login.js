const loginForm = document.getElementById('login');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginErrorText = document.getElementById('loginError');

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const data = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  axios.post('/login', data)
    .then((response) => {
      location.href = '/html/home.html';
    })
    .catch((error) => {
        loginErrorText.textContent = error.response.data.msg;
    });
};
