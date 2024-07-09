const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
// const Authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');

const User = require('../model/userSchema');

// router.get('/', (req, res) => {
//     res.send(`Hello world from the server router.js`);
// })

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


// Async - Await
router.post('/admin', async (req, res) => {

    const { name, email, password, cpassword, program, branch} = req.body;

    if (!name || !email || !password || !cpassword || !program || !branch)
    {
        return res.status(422).json({ error: "Please filled properly" });
    }

    try{
        const userExist = await User.findOne({ email: email });

        if (userExist) 
        {
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if(password != cpassword)
        {
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

// About us

// router.get('/about',  Authenticate , (req, res) =>
// {
//     console.log("Hello My About");
//     res.send("Hello about world from the server");
// });

module.exports = router;