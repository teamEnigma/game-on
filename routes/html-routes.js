var db = require("../models");

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render("index")
    })

    app.get('/start', function(req, res) {
        res.render("start")
    })

    app.get('/games', function(req, res) {
        res.render("games")
    })
    
}

// session storage with cookies?




