const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const Authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');

const User = require('../model/userSchema');

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