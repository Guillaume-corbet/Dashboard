const express = require('express');
const app = express();
const ejsLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
//const rout = require('./register/users');
let sess = null;


mongoose.connect('mongodb://mongodb:27017/db', {useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 10000})
.then(() => console.log('Connected to database'))
.catch((err)=> console.log(err));

app.set('view engine','ejs');
app.use(ejsLayout);

app.use(express.urlencoded({extended : false}));

app.use('/',require('./register/index'));
app.use('/users',require('./register/users'));
//app.use('/dashboard',require('./'));

app.listen(3000);