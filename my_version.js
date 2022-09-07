"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);
// if (+numberOfFilms > 10 && +numberOfFilms < 30) {
//     alert("Вы классичсекий зритель");
// } else if (+numberOfFilms > 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 1; i < 4; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("Как оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
// let j = 0;
// while (j < 4) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("Как оцените его?", "");

//     personalMovieDB.movies[a] = b;
//     j++;
// }

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классичсекий зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);