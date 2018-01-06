var db = require("../models");

module.exports = function(app) {
    app.post('/api/register', function(req, res) {
        console.log(req);

    })

    app.get('/api/login', function(req, res) {
       var username = req.query.username;
       var password = req.query.password;

    })



}







