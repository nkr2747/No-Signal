const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name: {type:String,
      required:true},
    email: {type:String,
      required:true},
    password: {type:String,
      required:true},
    program: {type:String,
      required:true},
    branch: {type:String,
      required:true}
  });

  module.exports = mongoose.model("User",UserSchema)