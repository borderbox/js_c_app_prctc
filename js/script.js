'use strict';

const numberOfFilms = prompt('Сколько фильмов выуже посмотрели?', 'число фильмов'),

 personalMovieDB = {
    count: numberOfFilms,
    movies: {
        /* questionMovie1: questionRating1,
        questionMovie2: questionRating2 */
    },
    actors: {},
    genres: [],
    privat: false
},

    questionMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
    questionRating1 = prompt('На сколько оцените его?', ''),
    questionMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
    questionRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionMovie1] = questionRating1;
personalMovieDB.movies[questionMovie2] = questionRating2;
console.log(personalMovieDB);
