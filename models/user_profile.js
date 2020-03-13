const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//User schema
const UserSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    pid : {
        type : String
    },
    avgWaterFlow : {
        type : Float64Array
    },
    leakDetected : {
        type : String
    },
    avgWaterSaved : {
        type : Float64Array
    }


    // waterFlow:{
    //     type: String,
    //     required : true
    // },
    // time:{
    //     type: String,
    //     required : true
    // },
    // leak:{
    //     type: String,
    //     required : true
    // }
});

const UserProfile = module.exports = mongoose.model('UserProfile',UserSchema,'user_data');    