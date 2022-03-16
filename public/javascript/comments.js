const container_all = document.getElementById('container');
let postIdFromLocation= window.location.search.substr(1).split("=")[1];

axios.post(`/comments/post`,{id: postIdFromLocation})
  .then((response) => {
    response.data.data.forEach((element) => {
        console.log(element);
      renderCard(container_all, element);
    });
    console.log(response.data.data);
  })
  .catch((error) => {
    console.log(error.response.data.msg);
  });