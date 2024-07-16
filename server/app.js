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
  //get books by department
  app.get("/booksdep/:department", async (req, res) => {
    try {
      const books = await Book.find({department:req.params.department});
      if (!books) {
        return res.status(404).send("Book not found");
      }
      res.json(books);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  //get User
  app.get("/users/:id", async (req, res) => {
    try {
      console.log("hi")
      const user = await User.findOne({email : req.params.id});

      if (!user) {
        return res.status(404).send("Book not found");
      }
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });
//issue

//delete issue request after 24 hours
const cron = require('node-cron');
 // Adjust the path to your User model

cron.schedule('0 * * * *', async () => { // Runs every hour at minute 0
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    try {
        const users = await User.find({ 'requested_books.requestedAt': { $lt: oneDayAgo } });
        for (const user of users) {
            user.requested_books = user.requested_books.filter(request => request.requestedAt >= oneDayAgo);
            await user.save();
        }
        console.log('Cleanup job completed successfully');
    } catch (err) {
        console.error('Error in cleanup job:', err);
    }
});
//reminer after 30 days
// Run every day at midnight
// cron.schedule('0 0 * * *', async () => {
//   try {
//     const today = new Date();
//     const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));

//     const users = await User.find({
//       'borrowed_books.borrowedAt': { $lte: thirtyDaysAgo }
//     }).populate('borrowed_books.book', 'title');

//     users.forEach(user => {
//       user.borrowed_books.forEach(book => {
//         if (book.borrowedAt <= thirtyDaysAgo) {
//           // Add your notification logic here, e.g., add a reminder to the user document
//           user.reminders.push({
//             message: `Please return the book "${book.book.title}"`,
//             createdAt: new Date()
//           });
//         }
//       });
//       user.save();
//     });

//     console.log('Reminders sent');
//   } catch (error) {
//     console.error('Error sending reminders:', error);
//   }
// });

 
//autocomplete search
app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const books = await Book.aggregate([
      {
        $search: {
          index: 'default',
          autocomplete: {
            query: query,
            path: 'title',
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $limit: 7,
      },
      {
        $project: {
          title: 1,
          author: 1,
        },
      },
    ]);
    res.json(books);
  } catch (error) {
    console.error('Error performing search:', error);
    res.status(500).send('Internal server error');
  }
});

//

//delete return request after 24hr
cron.schedule('0 0 * * *', async () => { // Runs every day at midnight
  const users = await User.find({ 'return_requests.returnedAt': { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } });
  
  users.forEach(async (user) => {
    const unapprovedRequests = user.return_requests.filter(r => r.returnedAt < new Date(Date.now() - 24 * 60 * 60 * 1000));
    
    unapprovedRequests.forEach(request => {
      user.borrowed_books.push({ book: request.book });
    });

    user.return_requests = user.return_requests.filter(r => r.returnedAt >= new Date(Date.now() - 24 * 60 * 60 * 1000));

    await user.save();
  });
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

//login was not working after hosting as now frontend and backend are on different ports
const corsOptions = {
  origin: 'https://no-signal-frontend.vercel.app', // Your frontend domain
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));


// we link the router files to make our route easy
app.use(require('./router/auth'));
const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server is runing at port no ${PORT}`);
})

//vercel deployment
// const allowedOrigins = ['https://no-signal-frontend.vercel.app'];

// app.use(cors({
//   origin: function (origin, callback) {
//       console.log("HI")
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));

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
