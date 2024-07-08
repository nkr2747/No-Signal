const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    genre: String,
    department: String,
    count: Number,
    vendor: String,
    vendor_id: Number,
    publisher: String,
    publisher_id: String,
  });
module.exports = mongoose.model("Book",BookSchema)