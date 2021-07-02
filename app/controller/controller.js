const sql = require("..//..//db");
const { product1 } = require("./render");
const product = require("../../model/product");
exports.test = function(req, res) {
    res.send("Se i m working");
}

exports.addproduct = async function(req, res) {
    //  res.render('addproduct')
    console.log(req.body);
    const product1 = new product(req.body);
    await product1.save();
    console.log(product1); 
}