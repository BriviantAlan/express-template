
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

// Create database connection
const db = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication_year: 1960,
    isbn: "978-0446310789",
    genre: "Literary Fiction",
    publisher: "Grand Central Publishing",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publication_year: 1949,
    isbn: "978-0451524935",
    genre: "Science Fiction",
    publisher: "Signet Classic",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publication_year: 1925,
    isbn: "978-0743273565",
    genre: "Literary Fiction",
    publisher: "Scribner",
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publication_year: 1937,
    isbn: "978-0547928227",
    genre: "Fantasy",
    publisher: "Houghton Mifflin",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_year: 1813,
    isbn: "978-0141439518",
    genre: "Romance",
    publisher: "Penguin Classics",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publication_year: 1951,
    isbn: "978-0316769488",
    genre: "Literary Fiction",
    publisher: "Little, Brown and Company",
  },
  {
    id: 7,
    title: "Dune",
    author: "Frank Herbert",
    publication_year: 1965,
    isbn: "978-0441172719",
    genre: "Science Fiction",
    publisher: "Ace Books",
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publication_year: 1954,
    isbn: "978-0618640157",
    genre: "Fantasy",
    publisher: "Houghton Mifflin",
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    publication_year: 1932,
    isbn: "978-0060850524",
    genre: "Science Fiction",
    publisher: "Harper Perennial",
  },
  {
    id: 10,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publication_year: 1939,
    isbn: "978-0143039433",
    genre: "Literary Fiction",
    publisher: "Penguin Classics",
  },
  {
    id: 11,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publication_year: 2008,
    isbn: "978-0439023481",
    genre: "Young Adult",
    publisher: "Scholastic Press",
  },
  {
    id: 12,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publication_year: 2003,
    isbn: "978-0307474278",
    genre: "Thriller",
    publisher: "Anchor Books",
  },
  {
    id: 13,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publication_year: 1988,
    isbn: "978-0062315007",
    genre: "Fiction",
    publisher: "HarperOne",
  },
  {
    id: 14,
    title: "The Road",
    author: "Cormac McCarthy",
    publication_year: 2006,
    isbn: "978-0307387899",
    genre: "Post-Apocalyptic",
    publisher: "Vintage",
  },
  {
    id: 15,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publication_year: 1985,
    isbn: "978-0385490818",
    genre: "Dystopian Fiction",
    publisher: "Anchor Books",
  },
];
app.use(express.json());

// GET all books
app.get('/books', (req, res) => {

    return res.json(db);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});