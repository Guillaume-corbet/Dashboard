const express = require('express');
const rout = express.Router();
const {ensureAuthenticated} = require('./auth.js');
const apiGoogle = require('../Api/googleApi');
const apiMovie = require('../Api/movieApi');
const apiWeather = require('../Api/weatherApi');
const about = require('../about');

let dataSubscriber = null;
let dataViews = null;
let dataComment = null;
let dataMovieDate = null;
let dataMovieByGenre = null;
let dataMovieGenre = null;
let dataWeather = null;
let dataGenre = null;

rout.get('/', (req, res) => {
    res.render('main');
});

rout.get('/register', (req, res) => {
    res.render('register');
});

rout.get('/login', (req, res) => {
    res.render('login');
});

//Dashboard
rout.post('/dashboard', ensureAuthenticated, async (req, res) => {
    const {idChannel, idVideoViews, idVideoComment, releaseDate, idGenre, nameCity} = req.body;

    if (idChannel) {
        dataSubscriber = await apiGoogle.getChannelInfo(idChannel);
    } else if (idVideoViews) {
        dataViews = await apiGoogle.getVideoInfo(idVideoViews);
    } else if (idVideoComment) {
        dataComment = await apiGoogle.getVideoComment(idVideoComment);
    } else if (releaseDate) {
        dataMovieDate = await apiMovie.getMovieByReleaseDate(releaseDate);
    } else if (idGenre) {
        dataMovieByGenre = await apiMovie.getMovieByGenre(idGenre);
    } else if (nameCity) {
        dataWeather = await apiWeather.getCurrentWeatherCity(nameCity);
    }

    res.render('dashboard', {
        dataComment: dataComment,
        dataViews: dataViews,
        dataSubscriber: dataSubscriber,
        dataMovieDate: dataMovieDate,
        dataMovieByGenre: dataMovieByGenre,
        dataMovieGenre, dataMovieGenre,
        dataWeather: dataWeather,
        dataGenre: dataGenre});
});

rout.get('/dashboard', async (req, res) => {
    dataGenre = await apiMovie.getGenre();
    res.render('dashboard', {
        dataComment: dataComment,
        dataViews: dataViews,
        dataSubscriber: dataSubscriber,
        dataMovieDate: dataMovieDate,
        dataMovieByGenre: dataMovieByGenre,
        dataMovieGenre, dataMovieGenre,
        dataWeather: dataWeather,
        dataGenre: dataGenre});
});

rout.get('/about.json', (req, res) => {
    res.write(about.data);
});

module.exports = rout