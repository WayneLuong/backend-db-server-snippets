const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    //turns to string for validator isEmpty
    data.email = !isEmpty(data.email) ?  data.email : ''; 
    data.password = !isEmpty(data.password) ?  data.password : ''; 

    if(!Validator.isEmail(data.email)){
        errors.email = 'Email field is invalid';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors) //Valid if empty
    }
}