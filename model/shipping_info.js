const mongoose = require("mongoose");
const Shipping_Info_schema = new mongoose.Schema({
  shippingId: {
   type: Number
  },
  ShippingType: {
   type: String
  },
  shippingCost: {
   type: Number
  },
  shippingRegionId:{
   type: Number
  }
})

const Shipping_Info  = mongoose.model('information_Shipping_Info',Shipping_Info_schema);

module.export = information_Shipping_Info;