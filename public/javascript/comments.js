const container_all = document.getElementById('container');
const postIdFromLocation = window.location.search.substr(1).split('=')[1];

axios.post('/comments/post', { id: postIdFromLocation })
  .then((response) => {
    response.data.data.forEach((element) => {
      renderCommintCard(container_all, element);
    });
  })
  .catch((error) => {
    container_all.textContent = 'error.response.data.msg';
  });

document.addEventListener('click', (e) => {
  if (e.target.parentElement.matches('.cup')) {
    axios.post('/comments/up', { id: e.target.parentElement.id })
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (e.target.parentElement.matches('.cdown')) {
    console.log(e.target.parentElement);
    axios.post('/comments/down', { id: e.target.parentElement.id })
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
