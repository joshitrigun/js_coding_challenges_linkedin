class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get availability() {
    return this.getAvailability();
  }
  getAvailability() {
    if (this.numCopies === 0) {
      return 'Out of stock';
    } else if (this.numCopies < 10) {
      return 'Low stock'
    } else {
      return 'in stock'
    }
  }
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  restock = function (numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }
  getEdition() {
    return `The current version of this book is ${this.edition}.`;
  }
}

const BlackWidow = new TechnicalBook("Black Widow", " Jessica Alba", 32123, 5, "2.3");
// console.log('-----------Initial state----------');
// console.log(BlackWidow)
console.log(BlackWidow.availability);
console.log(BlackWidow.getEdition());


// BlackWidow.restock(15);
// console.log('-----------After retock--------------');
// console.log(BlackWidow)
// console.log(BlackWidow.getAvailability());
// BlackWidow.sell(20);

// console.log("------------After sell --------------")
// console.log(BlackWidow)
// console.log(BlackWidow.getAvailability());

