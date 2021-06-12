const sql = require("..//..//db");

exports.test = function(req, res) {
    res.send("Se i m working");
}

exports.addproduct = function(req, res) {
    //  res.render('addproduct')
    const params = req.body;
    console.log(params);
    const name = params.name;
    const image = params.image;
    const price = params.price;
    const rating = params.rating;
    const productcato = params.cato;
    const details = params.details;
    sql.query(`Insert into product (product_name,product_image,product_price, product_rating, product_category, product_details)  values ('${name}', '${image}', ${price}, ${rating}, '${productcato}', '${details}')`, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("data inserted")
    })
}