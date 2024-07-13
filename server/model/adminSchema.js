const mongoose = require("mongoose")
// const fuzzysearch = require('fuzzysearch');
const Book=require('./bookSchema')
const User=require('./userSchema')

const AdminSchema = new mongoose.Schema({
    newissue: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
    ,
    issuedby: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
  });