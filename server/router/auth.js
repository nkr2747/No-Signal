const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const Authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');

const User = require('../model/userSchema');
const Book = require('../model/bookSchema')

////

////


// Async - Await
router.post('/admin', async (req, res) => {

    const { name, email, password, cpassword, program, branch} = req.body;

    if (!name || !email || !password || !cpassword || !program || !branch)
    {
        // window.alert("Please filled properly");
        return res.status(422).json({ error: "Please filled properly" });
    }

    try{
        const userExist = await User.findOne({ email: email });

        if (userExist) 
        {
            // window.alert("Email already Exist");
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if(password != cpassword)
        {
            // window.alert("password is not matching");
            return res.status(422).json({ error: "password is not matching" });
        }
        else
        {
            const user = new User({ name, email, password, cpassword, program, branch});
            await user.save();
            res.status(201).json({ massage: "user registered successfully" });
        }

    } catch(err){
        console.log(err);
    }
    
})

// login route
  
router.post('/loginpage', async (req, res) =>
{
    try
    {
        const {email, password} = req.body;
        if(!email || !password)
        {
            // window.alert("Please fill the data");
            return res.status(400).json({error : "Please fill the data"});
        }

        const userLogin = await User.findOne({email : email});

        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            })

            if(!isMatch)
            {
                // window.alert("User Does not exist");
                res.status(400).json({error: "User Does not exist"});
            }
            else
            {
                res.json({massage: "User login successfully"});
            }
        }
        else
        {
            res.status(400).json({error: "User Does not exist"});
        }

    } catch(err)
    {
        console.log(err);
    }
})

module.exports = router;




// About us

router.get('/about',  Authenticate , (req, res) =>
{
    console.log("Hello My About");
    res.send(req.rootUser);
});
// logout ka code

router.get('/logout', (req, res) =>
{
    res.clearCookie('jwtoken',{path:'/'})
    console.log("Hello My About");
    res.status(200).send("User Logout");
});

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
        user.issued_books.push(book._id); // Add to issued books
        book.count--;
        await user.save();
        await book.save();

        ////


        res.status(200).json({ message: 'Book request approved successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

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
        const users = await User.find({ 'requested_books.0': { $exists: true } })
            .select('requested_books name')
            .populate('requested_books.book', 'title');

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




/////

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