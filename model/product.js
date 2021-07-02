const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
  productId: {
   type: String
  },
  image: {
   type: String
  },
  image1: {
   type: String
  },
    imag2: {
   type: String
  },
    imag3: {
   type: String
  },
  description: {
   type: String
  },
  star: {
   type: Number
  },
  price: {
   type: Number
  }
})

const product  = mongoose.model('Product',product_schema);
module.exports = product;