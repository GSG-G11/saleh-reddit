const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('.env');

const { insertUser, getUserByEmail } = require('../../database/queries/usersCRUD');
const { signUpValidation } = require('../../attachments/validations');
const { myError } = require('../erroes')

const signUp = ( req, res, next ) =>{
    const { username, email, password } = req.body;
    const token = jwt.sign(username, process.env.SECRET_KEY);
    signUpValidation
    .validateAsync(req.body)
    .then(values => getUserByEmail(values.email))
    .then(user => {
        if(user.rowCount){
            throw myError({ msg: 'emaile alredy exiests', status:400 })
        } else {
            return bcrypt.hash(password, 10);
        }
    })
    .then(hashedPW => {
        return {
            username,
            email,
            password: hashedPW
        }
    })
    .then(data2insert => insertUser(data2insert))
    .then((userdata) => {
        console.log(userdata);
        res.cookie('token', token);
        res.cookie('id', userdata.rows[0].id);
        res.cookie('name', userdata.rows[0].username)
        res.status(201).json({ msg: 'user created successfuly', status: 201 })
    })
    .catch(error=> {
        if(error.status){
            res.status(error.status).json({ msg: error.message, status:error.status })
        } else if(error.name ==='ValidationError') {
            res.status(400).json({ msg: error.message, status:400 })
        } else{
            next();
        }
    })
}
module.exports = { signUp }