var db = require("../models");

module.exports = function(app) {
    app.post('/api/register', function(req, res) {
        var firstName = req.body.firstName.trim();
        var lastName = req.body.lastName.trim();
        var email = req.body.email.trim();
        var password = req.body.password.trim();
        var phone = req.body.phone.trim();
        var birthday = req.body.birthday.trim();
        var city = req.body.city.trim();
        var state = req.body.state.trim();
        var zipcode = req.body.zipcode.trim();

        db.Users.findOne({
            where: {email: email}
        }).then(function(results) {
            if (results === null) {
                db.Users.create({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    cell_phone: phone,
                    birthdate: birthday,
                    city: city,
                    state: state,
                    zip: zipcode
                }).then(function(results) {
                    res.send()
                })
            } else {
                res.send("duplicate email")
            }
        })
    })

    app.get('/api/login', function(req, res) {
        var email = req.query.email;
        var password = req.query.password;

        db.Users.findOne({
            where: {
                email: email,
                password: password
            }
        }).then(function(results) {
            if (results === null) {
                res.send("incorrect login")
            } else {
                req.session.name = email;
                res.send(req.session.name)
            }
        })
    })

    app.delete('/api/remove', function(req, res) {
        var userEmail = req.body.email;

        db.Users.destroy({
            where: {
                email: userEmail
            }
        }).then(function(results) {
            res.send()
        })
    })

    app.post('/api/game', function(req, res) {
        var gameName = req.body.gameName.trim();
        var eventSport = req.body.eventSport.trim();
        var gameDate = req.body.gameDate.trim();
        var gameTime = req.body.gameTime.trim();
        var street = req.body.street.trim();
        var city = req.body.city.trim();
        var state = req.body.state.trim();
        var zipcode = req.body.zipcode.trim();
        var minBirthDate = req.body.minBirthDate.trim();
        var minPlayers = req.body.minPlayers.trim();
        var maxPlayers = req.body.maxPlayers.trim();
        var gameFee = req.body.gameFee.trim();
        var equipment = req.body.equipment.trim();
        var skillLevel = req.body.skillLevel.trim();
        var gender = req.body.gender.trim();
        var disability = req.body.disability.trim();
    })
}

