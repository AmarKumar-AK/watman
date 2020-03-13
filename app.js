const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// var engines = require('consolidate');
// const ress =require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/watman", {useNewUrlParser : true,useUnifiedTopology: true});
let db = mongoose.connection;


// const passport= require('passport');
// const expressValidator = require('express-validator');
// const flash = require('connect-flash');
// const session = require('express-session');

//db error
db.once('open',()=>{
    console.log("connected to mongodb")
});

db.on('error',(err)=>{
    console.log("error in db");
    
})
//passort config
// require("./config/passport")(passport);
// app.use(passport.initialize());
// app.use(passport.session());


//bodyparser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

//express message middleware
// app.use(session({
//     secret: 'storyxyz',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));
//express message  middleware

// app.use(require('connect-flash')());
// app.use(function (req, res, next) {
//   res.locals.messages = require('express-messages')(req, res);
//   next();
// });

//express validator middleware
// app.use(expressValidator({
//     errorFormatter: function(param, msg, value) {
//         var namespace = param.split('.')
//         , root    = namespace.shift()
//         , formParam = root;
  
//       while(namespace.length) {
//         formParam += '[' + namespace.shift() + ']';
//       }
//       return {
//         param : formParam,
//         msg   : msg,
//         value : value
//       };
//     }
//   }));  


//setting directory for html(views)
// app.set('views',path.join(__dirname,'views'));
// app.engine('ejs', engines.mustache);
app.set('view engine', 'ejs')
//routes
var home = require("./routes/home");
var login = require("./routes/login");
var userReg = require("./routes/register");
var profile = require("./routes/profile");
var about = require("./routes/about");
var contact = require("./routes/contact");
app.use('/',home);
app.use('/login',login);
app.use('/register',userReg);
app.use('/profile',profile);
app.use('/about',about);
app.use('/contact',contact);

// app.get('/login',(req,res)=>{
//     res.render('login');
// });


app.listen(2929,()=>console.log("Server started at 2929"));


            // <h3>
            //     <%if (amar.length >0){ %>
            //     <% amar.forEach(function(row){ %>
            //       <p><%= row.name %></p>
            //       <p><%= row._id %></p>
            //       <p><%= row.email %></p>
      
            //     <% })}else{ %>
            //           <p>No Record Found</p>
                      
            //       <% } %>
            // </h3> 