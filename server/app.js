const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


dotenv.config({path : './config.env'});
require('./db/conn');
const User = require('./model/userSchema');
const Book = require("./model/bookSchema");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

//get all books
app.get("/books", async (req, res) => {
    try {
      const books = await Book.find({});
      res.json(books);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  //get book
  app.get("/books/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).send("Book not found");
      }
      res.json(book);
    } catch (err) {
      res.status(500).send(err);
    }
  });
//add book
app.post("/books", async (req, res) => {
    const { title,
      description,
      author,
      genre,
      department,
      count,
      vendor,
      vendor_id,
      publisher,
      publisher_id, } = req.body;
  
    try {
      const book = new Book({ title,
          description,
          author,
          genre,
          department,
          count,
          vendor,
          vendor_id,
          publisher,
          publisher_id, });
      await book.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      if (err.code === 11000) {
        // Duplicate key error
        res.status(400).json({ error: "Email already exists" });
      } else {
        res
          .status(500)
          .json({ error: "An error occurred while registering the user" });
      }
    }
  });


// we link the router files to make our route easy
app.use(require('./router/auth'));
const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server is runing at port no ${PORT}`);
})



// app.get('/', (req, res) =>
// {
//     res.send(`Hello world from the server`);
// });
// app.get('/admin', (req, res) =>
// {
//     res.send(`Hello world from the server`);
// });
// app.get('/loginpage', (req, res) =>
// {
//     res.send(`Hello world from the server`);
// });

// app.get('/contact', (req, res) =>
// {
//     res.send(`Hello contact world from the server`);
// });