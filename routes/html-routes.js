var db = require("../models");

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render("index")
    })

    app.get('/start', function(req, res) {
        res.render("start")
    })
}

// session storage with cookies?




