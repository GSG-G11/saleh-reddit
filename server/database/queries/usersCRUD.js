const connection = require('../config/connection');

const insertUser = (data) =>{
    const { username, email, password } = data; 
    return connection.query({
        text: `INSERT INTO users (username,email, password) VALUES ($1, $2, $3) RETURNING *; `,
        values:[username, email, password]
    });
} 

module.exports = { insertUser };