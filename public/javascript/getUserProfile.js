const container_all = document.getElementById('container');
let userIDFromLocation= window.location.search.substr(1).split("=")[1];

axios.get(`/user-posts/${userIDFromLocation}`)
  .then((response) => {
    response.data.data.forEach((element) => {
      renderCard(container_all, element);
    });
    console.log(response.data.data);
  })
  .catch((error) => {
    console.log(error.response.data.msg);
  });