// function Movie(title, director, genre, release_year, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.release_year = release_year;
//   this.rating = rating;
// };

// Movie.prototype.getOverview = function () {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.release_year} and also recieved a rating of ${this.rating}`
// }

class Movie {
  constructor(title, director, genre, release_year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.release_year = release_year;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.release_year} and also recieved a rating of ${this.rating}`
  }
};

const Batman = new Movie('Batman', 'Action', 'Christopher Nolan', 2005, 95)

const DarkKnight = new Movie('The Dark Knight', 'Action', 'Christopher Nolan', 2008, 98);


console.log(Batman);
console.log(Batman.getOverview())
console.log('______________________________');

console.log(DarkKnight);

console.log(DarkKnight.getOverview())
