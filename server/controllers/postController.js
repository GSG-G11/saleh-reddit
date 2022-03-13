const insertPost = require("../database/queries/post")


const storePost = (req, res, next) =>{
    insertPost(req.body).then(result => console.log(result.rows));
}

module.exports = storePost;