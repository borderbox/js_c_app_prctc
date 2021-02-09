'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'число фильмов');

    while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms))  {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'число фильмов');
    }   
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count == 10 || personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let questionMovie = prompt('Один из последних просмотренных фильмов?', '');
        while (questionMovie === '' || questionMovie === null || questionMovie.length > 50) {
            questionMovie = prompt('Один из последних просмотренных фильмов?', '');
        }
        let questionRating = prompt('На сколько оцените его?', '');
        while (questionRating === '' || questionRating === null || questionRating.length > 50) {
            questionRating = prompt('На сколько оцените его?', '');
        }
        personalMovieDB.movies[questionMovie] = questionRating;
    }
}

rememberMyFilms();

console.log(personalMovieDB);