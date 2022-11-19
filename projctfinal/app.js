// DEPENDENCIES
//always the first line on top
const express = require("express");
const path = require('path')
const mongoose = require ('mongoose');
const config = require('./config/db');
const passport = require('passport');
//express sesssion
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,  
});
//import user model
const Registration = require('./models/User')

//Importing route files
const registrationRoutes = require('./routes/registerRoutes');
const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const produceRoutes = require('./routes/produceRoutes');


const urbanfarmerRoutes = require('./routes/uf-routes');

// INSTATIATIONS
const app = express();
//setup database connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});


// CONFIGURATIONS
// app.engine('pug',require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views');

// MIDDLEWARE
// To parse URL encoded data we use a body parser
app.use(express.urlencoded({ extended: false }));
//caters for stattic files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
//caters for the uploaded images
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.use(expressSession);



//passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

//ROUTES
app.use('/',registrationRoutes);
app.use('/',homeRoutes);
app.use('/',authRoutes);
app.use('/',dashboardRoutes);
app.use('/',produceRoutes);



app.use('/', urbanfarmerRoutes);






// For invalid routes. always the last route in the server file(index.js).
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
// Bootstrapping Server always the last line of code in the server file(index.js).
app.listen(3000, () => console.log("We are listening on port 3000"));