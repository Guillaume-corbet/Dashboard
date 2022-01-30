const express = require('express');
const User = require('../models/database');
const appFile = require('../app');
const bcrypt = require('bcrypt');
const rout = express.Router();

rout.get('/login', (req,res) => {
    res.render('login');
});

rout.get('/register', (req,res) => {
    res.render('register');
});

rout.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    let err = "";

    console.log(name, email, password, password2);
    if (!name || !email || !password || !password2) {
        err = "One field is missing";
    } else if (password != password2) {
        err = "Passwords don't match";
    } else if (password.length < 7) {
        err = "Password must have at least 7 characters";
    } else {
        User.findOne({email: email}).exec((error, userFound) => {
            if (userFound) {
                err = "User already exists";
                res.render('register', {
                    errors: err,
                    name: name,
                    email: email,
                    password: password,
                    password2: password2});
            } else {
                const createdUser = new User({name: name, email: email, password: password});
                bcrypt.genSalt(10, (error, salt) =>
                bcrypt.hash(createdUser.password, salt, (error, hash) => {
                    if (error) throw error;
                    console.log("User ", createdUser.name, " created");
                    createdUser.password = hash;
                    createdUser.save().then((value) => {
                        res.redirect('/users/login');
                    }).catch(value => console.log(value));  
                }));
            }
        });
    }

    // Render error
    if(err.length > 0) {
        res.render('register', {
            errors: err,
            name: name,
            email: email,
            password: password,
            password2: password2});
    }
});

rout.post('/login', (req, res) => {
    const {email, password} = req.body;
    let err = "";

    console.log(email, password);
    if (!email || !password) {
        err = "One field is missing";
    } else {
        User.findOne({email: email}).exec((error, userFound) => {
            if (!userFound) {
                err = "User does not exists";
            } else {
                bcrypt.compare(password, userFound.password, (error, matching) => {
                    if (error) throw error;
                    else if (!matching) {
                        console.log("Invalid email or password");
                        err = "Invalid email or password";
                        res.render('login', {
                            errors: err,
                            email: email,
                            password: password});
                    } else {
                        appFile.sess = userFound;
                        console.log("Login in ...");
                        res.redirect('/dashboard');
                    }
                });
            }
            if(err.length > 0) {
                res.render('login', {
                    errors: err,
                    email: email,
                    password: password});
            }
        });
    }

    // Render error
    if(err.length > 0) {
        res.render('login', {
            errors: err,
            email: email,
            password: password});
    }
});

rout.get('/logout', (req,res) => {
    appFile.sess = null;
    res.redirect('/');
});

module.exports = rout;