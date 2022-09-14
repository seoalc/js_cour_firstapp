"use strict";

// if (+numberOfFilms > 10 && +numberOfFilms < 30) {
//     alert("Вы классичсекий зритель");
// } else if (+numberOfFilms > 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i < 4; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
                  b = prompt("Как оцените его?", "").trim();
        
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классичсекий зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 2; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre === '') {
                console.log('Vi vveli nekorrectnie dannie ili ne vveli ih voobshe');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, j, genres) => {
            console.log(`Любимый жанр #${j + 1} это ${item}`);
        });
    }
}