const mongoose = require("mongoose")
// const fuzzysearch = require('fuzzysearch');

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
//   BookSchema.plugin(fuzzysearch, {
//     fields: ['title'], // Fields to enable fuzzy search on
//     minMatches: 2,    // Minimum number of characters to match
//     soreOptions: {
//         distance: 0.2, // Adjust distance for more/less strictness
//         caseSensitive: false // Set to true if case-sensitivity is desired
//     }
// });

module.exports = mongoose.model("Book",BookSchema)

