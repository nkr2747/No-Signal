const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Book =require('./bookSchema')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    },
    program : {
        type : String,
        required : true
    },
    branch : {
        type : String,
        required : true
    },
    tokens:[
        {
            token: 
            {
                type : String,
                required : true
            }
        }
    ],
    favourites:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    borrowed_books:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    // requested_books:[
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Book'
    //     }
    // ]
    requested_books: [
        {
            book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
            requestedAt: { type: Date, default: Date.now }
        }
    ]
})


userSchema.pre('save', async function(next)
{
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})


userSchema.methods.generateAuthToken = async function()
{
    try
    {
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});

        await this.save();
        return token;
    } catch(err)
    {
        console.log(err);
    }
}

const User = mongoose.model("USER", userSchema);
module.exports = User;