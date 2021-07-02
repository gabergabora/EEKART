const mongoose = require("mongoose");
const User_schema = new mongoose.Schema({
  userId: {
   type: String
  },
  password: {
   type: String
  },
  loginStatus: {
   type: String
  },
  registerDate:{
   type: Date
  }
})

const user  = mongoose.model('information_user',User_schema);

module.export = information_user;