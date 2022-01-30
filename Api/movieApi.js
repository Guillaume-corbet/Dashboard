const fetch = require('node-fetch');

async function getGenre()
{
    let data = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=530d32379d09a6ff275b1b2d0eeff41d');
    return (await data.json());
}

async function getMovieByGenre(idGenre)
{
    let data = await fetch('http://api.themoviedb.org/3/discover/movie?api_key=530d32379d09a6ff275b1b2d0eeff41d&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + idGenre);
    return (await data.json());
}

async function getMovieByReleaseDate(yearid)
{
    let data = await fetch('http://api.themoviedb.org/3/discover/movie?api_key=530d32379d09a6ff275b1b2d0eeff41d&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=' + yearid);
    return (await data.json());
}

exports.getGenre = getGenre;
exports.getMovieByGenre = getMovieByGenre;
exports.getMovieByReleaseDate = getMovieByReleaseDate;