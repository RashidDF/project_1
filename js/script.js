const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько его оцениваете?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько его оцениваете?', '');

personMovieDB.movies[a] = b;
personMovieDB.movies[c] = d;

console.log(personMovieDB);