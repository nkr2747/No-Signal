const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;
console.log(secretKey)
const Authenticate = async (req, res, next) => {
  try {
    console.log("hey")
    const token = req.cookies.jwtoken;
    console.log("bey")
    console.log(token)
    if (!token) {
      throw new Error('No token provided');
    }

    const verifyToken = jwt.verify(token, secretKey);

    const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

    if (!rootUser) {
      throw new Error('User not found');
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send('Unauthorized: Invalid token');
    console.error('Authentication error:', err.message);
  }
}

module.exports = Authenticate;
