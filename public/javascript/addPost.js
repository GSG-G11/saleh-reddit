const addPostForm = document.getElementById('addPost');
const title = document.getElementById('title');
const communityName = document.getElementById('community_name');
const contentType = document.getElementById('content_type');
const content = document.getElementById('content');

addPostForm.onsubmit = (e) => {
  e.preventDefault();
  const data = {
    title: title.value,
    community_name: communityName.value,
    content_type: contentType.value,
    content: content.value,
    user_id: 1,
  };
  axios.post('/post', data)
    .then((response) => {
      location.href = '/html/home.html';
    })
    .catch((error) => {
        console.log(error.response.data.msg);
    });
};
