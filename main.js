let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 9.99,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    price: 11.99,
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 12.99,
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 10.49,
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    price: 8.99,
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    price: 7.99,
  },
  {
    id: 7,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    price: 9.49,
  },
  {
    id: 8,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    price: 13.99,
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    price: 11.99,
  },
  {
    id: 10,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    price: 10.99,
  },
  {
    id: 11,
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    price: 14.99,
  },
  {
    id: 12,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 15.99,
  },
  {
    id: 14,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    price: 9.49,
  },
  {
    id: 15,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Thriller",
    price: 12.49,
  },
  {
    id: 16,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    price: 10.99,
  },
  {
    id: 17,
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    price: 11.99,
  },
  {
    id: 18,
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    price: 10.99,
  },
  {
    id: 19,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Drama",
    price: 11.49,
  },
  {
    id: 20,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    price: 9.99,
  },
  {
    id: 21,
    title: "The Road Not Taken",
    author: "Robert Frost",
    genre: "Poetry",
    price: 6.99,
  },
  {
    id: 22,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    price: 13.99,
  },
  {
    id: 23,
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    price: 10.99,
  },
  {
    id: 24,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Historical Fiction",
    price: 8.99,
  },
  {
    id: 25,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Psychological Thriller",
    price: 12.99,
  },
];

//question one

console.log(
  "Ques 1- How many books are there in the shop?\nAns: " +
    "There are " +
    books.length +
    " Books in the store"
);

//question 2
console.log(
  "Ques 2- Print the names of all the books. (First, create a list containing only the names.)\n"
);

let namesOfBooks = [];
books.forEach((book) => {
  namesOfBooks.push(book.title);
});
console.log("Names of books:\n" + namesOfBooks.join("\n"));

//question 3
console.log("\nQues 3- Print the name and price of all 'Fantasy' books.\n");

let fantasyBooks = books.filter((item) => item.genre == "Fantasy");

console.log("Names of fantasy books:\n");
fantasyBooks.forEach((book) => {
  console.log(`      Title : ${book.title} \t Price : $${book.price}`);
});

//question 4
console.log(
  "\nQues 4- Print the name and genre of all classics, dystopias, and mystery books.\n"
);

let commonBooks = books.filter(
  (item) =>
    item.genre == "Dystopian" ||
    item.genre == "Classic" ||
    item.genre == "Mystery"
);

console.log("Names classics, dystopian, and mystery  books:\n");
commonBooks.forEach((book) => {
  console.log(`  : ${book.genre} \t Name:{book.name}`);
});

//question 5
console.log(
  "\nQues 5- Print the name and price of all books that cost more than $10.\n"
);

let booksPriceMoreThan10$ = books.filter((item) => item.price > 10);

console.log("Names of Books price more than 10$ \n");
booksPriceMoreThan10$.forEach((book) => {
  console.log(`  : ${book.title} \t Price : $${book.price}`);
});


//question 6
console.log(
  "\nQues 6-How much is the entire book holding worth? (What is the total price, if you were to sell all the books?)\n"
);

let total = 0;
books.map((item) => {
  total += item.price;
});
console.log("\nTotal cost of all books Total: " + total.toFixed(2) + "$");

//question 7
console.log(
  "\nQues 7- Which books are worth the most overall, dystopian or mystery?\n"
);

let mysterBooks = books.filter((item) => item.genre == "Mystery");

books.sort((a, b) => b.price - a.price);
mysterBooks.sort((a, b) => b.price - a.price);

console.log("Ans: In Overall books highest price is $" + books[0].price);
console.log(" In Mystery books highest price is $" + mysterBooks[0].price);

//question 8
console.log(
  "\nQues 8- Print the names of all the books in alphabetical order.\n"
);

namesOfBooks.sort((a, b) => {
  let x = a.title.toLowerCase();
  let y = b.title.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log("Ans: Books Alphabaticaly " + JSON.stringify(namesOfBooks));

console.log("\nQues 9- Which book is there a duplicate of?\n");

let sorted_arr = books.slice().sort(); // You can define the comparing function here.
// JS by default uses a crappy string compare.
// (we use slice to clone the array so the
// original array won't be modified)
let results = [];
for (let i = 0; i < sorted_arr.length - 1; i++) {
  if (sorted_arr[i + 1].title == sorted_arr[i].title) {
    results.push(sorted_arr[i]);
  }
}
console.log("\nAns - Duplicate Books\n");
results.map((item) => {
  console.log(item.title);
});

console.log(
  "\nQues 10-  Which authors have a name consisting of more than 2 words? Do not bring authors who have periods in their names.\n"
);

let mBooks = books.filter((item) => {
  let name = item.author.split(" ");

  return name.length > 2;
});

console.log("\nAns- Authors with more than 2 words in name\n");

mBooks.map((item) => {
  if (!item.author.includes(".")) {
    console.log(item.author);
  }
});

console.log(
  "\nQues 11-  Print the names of all authors in alphabetical order. Sort by author's last name.\n"
);

books.sort((a, b) => {
  let x = a.author.toLowerCase();
  let y = b.author.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log("\nAns- all authors in alphabetical order\n");
books.sort((a, b) => {
  let x1 = a.author.split(" ");
  let y1 = b.author.split(" ");
  let lastName1 = x1[x1.length - 1];
  let lastName2 = y1[y1.length - 1];
  if (lastName1 < lastName2) {
    return -1;
  }
  if (lastName1 > lastName2) {
    return 1;
  }
  return 0;
});

books.map((item) => {
  if (!item.title.includes("The")) {
    console.log(item.author);
  }
});

console.log(
  "\nQues 12-  Print the names of all books whose titles do not begin with 'The'.\n"
);
console.log("\nAns- names of all books whose titles do not begin with 'The'\n");
books.map((item) => {
  if (!item.title.includes("The")) {
    console.log(item.title);
  }
});

console.log(
  "\nQues 13-  Print the titles of the books, sorted by title length, in ascending order.\n"
);

books.sort((a, b) => b.title.length - a.title.length);
console.log("\nAns- Books List according length of title\n");
books.map((item) => {
  console.log("\n" + item.title);
});

console.log(
  "\nQues 14- Finish writing the function, which should be able to add a new book at the end of the list.\n"
);

console.log("\nAns- Function for adding book \n");
const addBook = (list, title, author, genre, price) => {
  const data = {
    id: list.length + 1,
    title,
    author,
    genre,
    price,
  };
  list.push(data);
  books = list;
};

addBook(books, "demo book", "gaurav", "Classic", 9);

