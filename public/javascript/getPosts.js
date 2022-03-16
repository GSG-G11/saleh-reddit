const container_all = document.getElementById('container');
axios.get('/top-posts')
  .then((response) => {
    response.data.data.forEach((element) => {
      renderCard(container_all, element);
      
    });
    console.log(response.data.data);
  })
  .catch((error) => {
    console.log(error.response.data.msg);
  });

document.addEventListener('click', (e) => {
  if (e.target.parentElement.matches('.up')) {
    axios.post('/vote-up', { id: e.target.parentElement.id })
      .then((response) => {
        window.location.href = '/';
        console.table(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (e.target.parentElement.matches('.down')) {
    console.log(e.target.parentElement);
    axios.post('/vote-down', { id: e.target.parentElement.id })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
