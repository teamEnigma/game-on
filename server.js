var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var session = require("express-session");

// Read and set environment variables
require("dotenv").config();

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Initialize Cookie Parser user auth sessions
app.use(cookieParser());
app.use(session({secret: process.env.SESSION_SECRET}))

// Sequelize database import
var db = require("./models");

// Use the public folder
app.use(express.static("public"));

// Initialize body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Initialize the routing files
app.use(express.static("public"));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Start the server
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});