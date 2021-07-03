////testing for ejs//

// const express = require('express');
// const app = express();
// const bodyParser = require("body-parser");
// const path = require('path');
// app.use(express.static(__dirname + '/public'));
// app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('home');
// })

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://admin-birju:Test123@cluster0.rz3bu.mongodb.net/eKart?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
	console.log("DataBase is Connected!!");
})
.catch(err => {
	console.log("Error Occured");
	console.log(err);
})

var sql = require("./db")

const ap = express();

const path = require('path');
ap.use(express.static(__dirname + '/public'));
ap.set('views', path.join(__dirname, 'views'));
ap.set('view engine', 'ejs');

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

ap.listen(port, () => {
    console.log("::::::::::::::::: | Project: Ecart | :::::::::::::");
    console.log("Date: " + new Date());
    console.log("Api server started on: " + port);
})




ap.use(bodyParser.urlencoded({ extended: true }));
ap.use(bodyParser.json());

var routes = require("./appRoute");

routes(ap);