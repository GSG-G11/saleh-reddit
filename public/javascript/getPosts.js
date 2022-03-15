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
