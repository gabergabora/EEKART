const mongoose = require("mongoose");
const order_schema = new mongoose.Schema({
  orderId: {
   type: Number,
  },
  dateCreated: {
   type: String
  },
  dateShipped: {
   type: String
  },
  customerName:{
   type: String
  },
  customerId: {
   type: String
  },
  status: {
   type: String
  },
  shippingId: {
   type: String
  }

})

const order  = mongoose.model('information_order',order_schema);

module.export = information_order;