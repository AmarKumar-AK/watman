var express = require('express');
var router = express.Router();

let User = require('../models/registration_data');

router.get("/",(req,res)=>{
    User.find({},function(err,registeredUser){
        if(err){
            console.log(err);
        }else{
            res.render('profile',{
                amar : registeredUser
            });
        }
    });
});




module.exports = router;