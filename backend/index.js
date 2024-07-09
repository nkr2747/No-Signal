const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');

const User = require('./models/users');
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://nileshkumar2747:thalaforareason7@books.5yyh6kt.mongodb.net/lms',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}
main().catch(err => console.log(err));

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).send(err);
  }
});
// app.post('/users', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.post('/users', async (req, res) => {
  const { name, password,email, } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  }
});

// Start the server


app.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedBook) {
      return res.status(404).send('Book not found');
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }
    res.send('Book deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});
// const fuzzySearchUsers = require('./fuzzysearch');
// async function fn() {
//   const searchTerm = 'data'; // Example search term
//   const results = await fuzzySearchUsers(searchTerm);
//   console.log('hi');
//   console.log(results); // Array of matching user documents
// };


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

