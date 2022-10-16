"use strict";

const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for(let i=0; i<2; i++){
    const 
    a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько его оцениваете?', '');
    
    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personMovieDB.movies[a] = b;
    } else {
        console.log('Error');
        i--;
    }         
}

if(personMovieDB.count > 0 && personMovieDB.count < 10){
    console.log('Просмотренно довольно мало фильмов');
} else if(personMovieDB.count >= 10 && personMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personMovieDB.count >= 30) {
    console.log('Вы киноман');
} else if(personMovieDB.count == null || personMovieDB.count == ''){
    console.log('Error');
} else {
    console.log('Error');
}

console.log(personMovieDB);
console.log(personMovieDB.count);