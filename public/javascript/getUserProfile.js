const container_all = document.getElementById('container');
let userIDFromLocation= window.location.search.substr(1).split("=")[1];

axios.get(`/user-posts/${userIDFromLocation}`)
  .then((response) => {
    response.data.data.forEach((element) => {
      renderCard(container_all, element);
    });
  })
  .catch((error) => {
    container_all.textContent = error.response.data.msg
  });