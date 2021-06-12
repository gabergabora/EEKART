"use strict";

module.exports = function(app) {
    var Controller = require(".//app/controller/controller");
    var rendering = require("./app/controller/render");
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

    app.all("/", rendering.home);
    app.all("/signin", rendering.signin);
    app.get("/addproduct", rendering.addproduct);
    app.all("/test", Controller.test);
    app.post("/addproduct", Controller.addproduct);

};