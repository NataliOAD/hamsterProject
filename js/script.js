"use strict";

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");
console.log(numberOfFilms);

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = prompt("На сколько оцените его?", "");

console.log(a, b);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        a, b, c, d
    },
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);