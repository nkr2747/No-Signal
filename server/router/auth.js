const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const Authenticate = require('../middleware/authenticate');
const nodemailer = require('nodemailer');

const router = express.Router();

require('../db/conn');

const User = require('../model/userSchema');
const Book = require('../model/bookSchema');
const Admin = require('../model/adminSchema');
const AuthenticateAdmin = require('../middleware/authenticateAdmin');

////create new admin
router.post('/adminregister', async (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword ) {
        // window.alert("Please filled properly");
        return res.status(422).json({ error: "Please filled properly" });
    }

    try {
        const adminExist = await Admin.findOne({ email: email });

        if (adminExist) {
            // window.alert("Email already Exist");
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if (password != cpassword) {
            // window.alert("password is not matching");
            return res.status(422).json({ error: "password is not matching" });
        }
        else {
            const admin = new Admin({ name, email, password, cpassword });
            await admin.save();
            res.status(201).json({ massage: "user registered successfully" });
        }

    } catch (err) {
        console.log(err);
    }

})

////


// Async - Await// create new student
router.post('/admin', async (req, res) => {

    const { name, email, password, cpassword, program, branch } = req.body;

    if (!name || !email || !password || !cpassword || !program || !branch) {
        // window.alert("Please filled properly");
        return res.status(422).json({ error: "Please filled properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            // window.alert("Email already Exist");
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if (password != cpassword) {
            // window.alert("password is not matching");
            return res.status(422).json({ error: "password is not matching" });
        }
        else {
            const user = new User({ name, email, password, cpassword, program, branch });
            await user.save();
            res.status(201).json({ massage: "user registered successfully" });
        }

    } catch (err) {
        console.log(err);
    }

})

// login route

router.post('/loginpage', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            // window.alert("Please fill the data");
            return res.status(400).json({ error: "Please fill the data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                // window.alert("User Does not exist");
                res.status(400).json({ error: "User Does not exist" });
            }
            else {
                res.json({ massage: "User login successfully" });
            }
        }
        else {
            res.status(400).json({ error: "User Does not exist" });
        }

    } catch (err) {
        console.log(err);
    }
})

//admin login
router.post('/loginpageadmin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            // window.alert("Please fill the data");
            return res.status(400).json({ error: "Please fill the data" });
        }

        const adminLogin = await Admin.findOne({ email: email });

        if (adminLogin) {
            const isMatch = await bcrypt.compare(password, adminLogin.password);

            const token = await adminLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                // window.alert("User Does not exist");
                res.status(400).json({ error: "User Does not exist" });
            }
            else {
                res.json({ massage: "User login successfully" });
            }
        }
        else {
            res.status(400).json({ error: "User Does not exist" });
        }

    } catch (err) {
        console.log(err);
    }
})


// Issue book route
router.post('/issuebook', Authenticate, async (req, res) => {
    const { id } = req.body;
    console.log("Book ID:", id);
    
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (book.count <= 0) {
            return res.status(400).json({ message: 'No more copies available' });
        }

        // book.count--;
        // await book.save()
        // const user = req.rootUser;
        // user.requested_books.push(book._id);
        // await user.save();

        /////
        const user = req.rootUser;

        // Check the number of books issued in the last 24 hours
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const recentRequests = user.requested_books.filter(request => request.requestedAt > oneDayAgo);

        if (recentRequests.length >= 2) {
            return res.status(400).json({ message: 'You can issue only 2 books in 24 hours' });
        }

        user.requested_books.push({ book: book._id, requestedAt: Date.now() });
        await user.save();
        book.count--;
        await book.save()

        res.status(200).json({ message: 'Book requested successfully', user });
        

        /////

       
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//add to fav
router.post('/addtofavourite', Authenticate, async (req, res) => {
    const { id } = req.body;
    console.log("Book ID:", id);
    
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const user = req.rootUser;
        
        user.favourites.push(book._id);
        await user.save();

        res.status(200).json({ message: 'Book added to favourites successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nilesh.kumar.2747@gmail.com',
      pass: process.env.TEMP_PASS,
    },
  });

//aproval
router.post('/approvebook', async (req, res) => {
    const { userId, bookId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // const bookIndex = user.requested_books.indexOf(bookId);
        // if (bookIndex === -1) {
        //     return res.status(404).json({ message: 'Book request not found' });
        // }

        // // Move the book from requested_books to borrowed_books
        // user.requested_books.splice(bookIndex, 1);
        // user.borrowed_books.push(bookId);
        // await user.save();

        ////
        const requestIndex = user.requested_books.findIndex(
            request => request.book.toString() === bookId
        );

        if (requestIndex === -1) {
            return res.status(404).json({ message: 'Book request not found' });
        }

        const book = await Book.findById(bookId);
        if (!book || book.count <= 0) {
            return res.status(400).json({ message: 'Book not available for issuing' });
        }

        user.requested_books.splice(requestIndex, 1);
        user.borrowed_books.push(book._id); // Add to issued books
        book.count--;
        await user.save();
        await book.save();

        ////

        const mailOptions = {
            from: 'nilesh.kumar.2747@gmail.com',
            to: user.email,
            subject: 'Book Issue Request Approved',
            text: `Dear ${user.name},\n\nYour request to issue the book "${book.title}" has been approved. You can now pick up the book from the library.\n\nThank you!`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.error(error);
            }
            console.log('Email sent: ' + info.response);
        });
        res.status(200).json({ message: 'Book request approved successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Reminder
// app.get('/user/reminders', Authenticate, async (req, res) => {
//     try {
//       const user = req.rootUser;
//       res.status(200).json({ reminders: user.reminders });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });



//approvebook for admin before adding timestamp
// router.get('/admin/bookrequests',async (req, res) => {
//     try {
//       const users = await User.find({ requested_books: { $exists: true, $ne: [] } })
//       .select('requested_books name')
//       .populate('requested_books', 'title');

//     const requests = users.flatMap(user =>
//       user.requested_books.map(book => ({
//         userId: user._id,
//         userName: user.name,
//         bookId: book._id,
//         bookTitle: book.title
//       }))
      
//     );
    
//       res.status(200).json({ requests });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  
////approvebook for admin after adding timestamp

router.get('/admin/bookrequests', async (req, res) => {
    try {
        
        const users = await User.find({ 'requested_books.book': { $exists: true } })
            .select('requested_books name')
            .populate('requested_books.book', 'title');
        console.log("HI")
        const requests = users.flatMap(user =>
            user.requested_books.map(request => ({
                userId: user._id,
                userName: user.name,
                bookId: request.book._id,
                bookTitle: request.book.title,
                requestedAt: request.requestedAt
            }))
        );

        res.status(200).json({ requests });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//returning book request to admin
router.post('/returnbook', Authenticate, async (req, res) => {
    const { bookId } = req.body;
    
    try {
      const user = req.rootUser;
      
      const borrowedBookIndex = user.borrowed_books.findIndex(b => b.toString() === bookId);
        console.log(borrowedBookIndex)
      if (borrowedBookIndex === -1) {
        return res.status(404).json({ message: 'Book not found in borrowed books' });
      }
  
      const returnRequest = {
        book: bookId,
        returnedAt: new Date()
      };
  
      user.return_requests.push(returnRequest);
      await user.save();
  
      res.status(200).json({ message: 'Return request submitted successfully', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//to show the list of return requests to admin
router.get('/admin/returnrequests', async (req, res) => {
    try {
        
        const users = await User.find({ 'return_requests.book': { $exists: true } })
            .select('return_requests name')
            .populate('return_requests.book', 'title');
        console.log("HI")
        const requests = users.flatMap(user =>
            user.return_requests.map(request => ({
                userId: user._id,
                userName: user.name,
                bookId: request.book._id,
                bookTitle: request.book.title,
                requestedAt: request.requestedAt
            }))
        );

        res.status(200).json({ requests });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//admin,response for returning
router.post('/admin/approvereturn', async (req, res) => {
    const { userId, bookId } = req.body;
    
    try {
      const user = await User.findById(userId);
      const book = await Book.findById(bookId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      const returnRequestIndex = user.return_requests.findIndex(r => r.book.toString() === bookId);
      console.log(returnRequestIndex)
      if (returnRequestIndex === -1) {
        return res.status(404).json({ message: 'Return request not found' });
      }
  
      const returnedBook = user.return_requests[returnRequestIndex];
      user.previously_borrowed_books.push(returnedBook);
      user.return_requests.splice(returnRequestIndex, 1);
  
      const borrowedBookIndex = user.borrowed_books.findIndex(b => b.toString() === bookId);
      if (borrowedBookIndex !== -1) {
        user.borrowed_books.splice(borrowedBookIndex, 1);
      }
    //   const book=Book.findById(user.borrowed_books)
      book.count++
      await user.save();
      await book.save();
      res.status(200).json({ message: 'Return request approved', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


//
// Present-Status

// router.post('/presentstatus', async (req, res) =>
// {
//     try
//     {
//         const {email} = req.body;
//         if(!email)
//         {
//             return res.status(400).json({error : "Please fill the data"});
//         }

//         const userLogin = await User.findOne({email : email});

//         if(userLogin)
//         {
//             res.json({massage: "User Found"});
//         }
//         else
//         {
//             res.status(400).json({error: "User Does not exist"});
//         }

//     } 
//     catch(err)
//     {
//         console.log(err);
//     }
// })



// About us

router.get('/about', Authenticate, (req, res) => {
    console.log("Hello My About");
    res.send(req.rootUser);
});
router.get('/aboutadmin', AuthenticateAdmin, (req, res) => {
    console.log("Hello Admin about");
    res.send(req.rootAdmin);
});

// presentstatuspage

router.get('/presentstatuspage', Authenticate, (req, res) => {
    console.log("Hello My Presentstatuspage");
    res.send(req.rootUser);
});
// logout ka code

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' })
    console.log("Hello My About");
    res.status(200).send("User Logout");
});
// adminlogout ka code

router.get('/logoutadmin', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' })
    //console.log("Hello My About");
    res.status(200).send("Admin Logout");
});


module.exports = router;

// using promises
// router.post('/admin', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.status(422).json({ error: "Please filled properly" });
//     }

//     User.findOne({ email: email })
//       .then((userExist) => {
//         if (userExist) 
//         {
//             return res.status(422).json({ error: "Email already Exist" });
//         }

//         const user = new User({ name, email, phone, work, password, cpassword });

//         user.save().then(() => {
//             res.status(201).json({ massage: "user registered successfully" });
//         }).catch((err) => {
//             res.status(500).json({ error: "Failed to registered" });
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// })