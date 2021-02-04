'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 'число фильмов'),

 personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count == 10 || personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

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

console.log(personalMovieDB);