const mongoose = require('mongoose');
const DB = process.env.DATABASE;


// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connection Successfully");
// }).catch((err) => {
//     {
//         console.log("Connection failed")
//     }
// })


mongoose.connect(DB).then(() => {
    console.log("Connection Successfully");
}).catch((err) => {
    {
        console.log("Connection failed")
    }
})