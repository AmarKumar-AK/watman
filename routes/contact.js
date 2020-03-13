var express = require('express');
var router = express.Router();
// const passport = require('passport');

router.get("/",(req,res)=>{
    res.render('contact');
});

module.exports = router;