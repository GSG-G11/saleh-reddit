logged.textContent = loggedUser;

addPostForm.onsubmit = (e) => {
  e.preventDefault();
  const data = {
    title: title.value,
    community_name: communityName.value,
    content_type: contentType.value,
    content: content.value,
    user_id: id,
  };
  axios.post('/post', data)
    .then((response) => {
      location.href = '/html/home.html';
    })
    .catch((error) => {
      addPostError.textContent = error.response.data.msg;
    });
};
