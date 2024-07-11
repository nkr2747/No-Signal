const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();


dotenv.config({path : './config.env'});
require('./db/conn');
const User = require('./model/userSchema');


app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth'));
const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server is runing at port no ${PORT}`);
})



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