const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//User schema
const RegistrationSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    }
});

let RegisteredUser = module.exports = mongoose.model('RegisteredUser',RegistrationSchema,'registeredUser');
