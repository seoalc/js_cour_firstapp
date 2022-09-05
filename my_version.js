"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

console.log(personalMovieDB);

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("Как оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("Как оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);