const container_all = document.getElementById('container');
const homeUser = document.getElementById('homeUser');
homeUser.textContent = loggedUser;
axios.post('/my-posts',{id})
  .then((response) => {
    response.data.data.forEach((element) => {
      renderCard(container_all, element, true);
    });
  })
  .catch((error) => {
    container_all.textContent = error.response.data.msg
  });

document.addEventListener('click', (e) => {
  console.log(e.target.parentElement);

  if (e.target.parentElement.matches('.up')) {
    axios.post('/vote-up', { id: e.target.parentElement.id })
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        container_all.textContent = error.response.data.msg
      });
  } else if (e.target.parentElement.matches('.down')) {
    console.log(e.target.parentElement);
    axios.post('/vote-down', { id: e.target.parentElement.id })
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        container_all.textContent = error.response.data.msg
      });
  }
});


document.addEventListener('click', (e) => {
  if (e.target.matches('.delete')) {
    console.log('dfjghslkd deena ');
    axios.post('/delete-post', { id: e.target.id })
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        container_all.textContent = error.response.data.msg
      });
  }
});
