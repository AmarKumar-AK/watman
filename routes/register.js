var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

console.log("in user reg.");

//user model
let User = require("../models/registration_data");

//Registration page
router.get("/",(req,res)=>{
    res.render('register',{
        title :"Register"
    });
});

router.post('/',(req,res)=>{
    const name = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    if(password!=confirmpassword){
        res.render('register');
        return 0;
    }
    console.log(req.body);
    
    let newUser = new User({
        name:name,
        email:email,
        password:password
    });

    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            console.log("password hashing error")
        }
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err){
                console.log("error in pass hash");
            }else{  
                newUser.password=hash;
                newUser.save((err)=>{
                    if(err){
                        console.log("error in 1");
                    }else{
                        console.log(" I am saving data")
                        res.redirect('/login');
                
                    }
                })
            }
        })
    });

});


module.exports = router;