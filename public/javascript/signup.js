const signUpForm = document.getElementById('signup');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorText = document.getElementById('error');

signUpForm.onsubmit = (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  axios.post('/signup', data)
    .then((response) => {
      location.href = '/';
    })
    .catch((error) => {
        errorText.textContent = error.response.data.msg
    });
};
