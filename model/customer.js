const mongoose = require("mongoose");
const customer_schema = new mongoose.Schema({
 user_name: {
  type: String,
  require: true
 },
 address: {
  type: String,
 },
 email_id: {
  type: String,
  require: true
 },
 credit_card_details: {
  type: Number,
 },
 shipping_info: {
  type: String
 },
 account_balance: {
  type: Number
 }
})

const customer  = mongoose.model('information_customer',customer_schema);

module.export = information_customer;