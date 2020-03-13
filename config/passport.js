// const locaStratergy = require('passport-local').Strategy;
// const User = require("../models/user");
// const config = require("../config/database");
// const bcrypt = require('bcryptjs'); 

// module.exports = (passport)=>{
//     passport.use(new locaStratergy(function(email,password,done){
//         let q = {email:email};
//         User.findOne(q,(err,user)=>{
//             if(err){
//                 console.log("erron in login");
                
//             }
//             if(!user){
//                 return done( null,false,{message:"No user found"});
//             }
//             bcrypt.compare(password,user.password,(err,ismatch)=>{
//                 if(err) throw err;
//                 if(ismatch){
//                     return done(null,user);
//                 }
//                 else{
//                     return done(null,false,{message:"wrong password"});
//                 }
//             })

//         });
//     }));

//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//       });
      
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//           done(err, user);
//         });
//       });   
// }