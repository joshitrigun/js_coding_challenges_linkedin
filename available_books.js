// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return 'Out of stock';
//   } else if (this.numCopies < 10) {
//     return 'Low stock'
//   } else {
//     return 'in stock'
//   }
// }

// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// }

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get availability() {
    return this.availability();
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

const BlackWidow = new Book("Black Widow", " Jessica Alba", 32123, 5);
console.log('-----------Initial state----------');
console.log(BlackWidow)
console.log(BlackWidow.getAvailability());

BlackWidow.restock(15);
console.log('-----------After retock--------------');
console.log(BlackWidow)
console.log(BlackWidow.getAvailability());
BlackWidow.sell(20);

console.log("------------After sell --------------")
console.log(BlackWidow)
console.log(BlackWidow.getAvailability());

