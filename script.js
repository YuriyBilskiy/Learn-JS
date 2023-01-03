"use strict";

const number0fFilms = prompt('Сколько фильмов вы просмотрели?', '');

const personalMoviesDB = {
    count: number0fFilms,
    movies: {  },
    actors: {},
    genres: [],
    privat: false
};
const   a = prompt('Один з остатніх фільмів?', ''),
            b = prompt('Оцінка фільма?', ''),
            c = prompt('Один з остатніх фільмів?', ''),
            d = prompt('Оцінка фільма?', '');
    personalMoviesDB.movies[a] = b;
    personalMoviesDB.movies[c] = d;

    console.log(personalMoviesDB);

