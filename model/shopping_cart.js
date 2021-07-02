const mongoose = require("mongoose");
const shopping_cart_schema = new mongoose.Schema({
  cartid: {
   type: Number,
  },
  productID: {
   type: Number
  },
  quantity: {
   type: Number
  },
  dateAdded:{
   type: Number
  }
})

const shopping_cart  = mongoose.model('information_shopping',shopping_cart_schema);

module.export = information_shopping;