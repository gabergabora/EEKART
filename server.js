////testing for ejs

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

var sql = require("./db")

const app = express();

const path = require('path');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

port = 3000;
app.listen(port, () => {
    console.log("::::::::::::::::: | Project: Ecart | :::::::::::::");
    console.log("Date: " + new Date());
    console.log("Api server started on: " + port);
})




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require(".//appRoute");

routes(app);