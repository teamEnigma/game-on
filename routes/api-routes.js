var db = require("../models/");

module.exports = function(app) {
    // Register a new user
    app.post('/api/register', function(req, res) {
        var firstName = req.body.firstName.trim();
        var lastName = req.body.lastName.trim();
        var email = req.body.email.trim();
        var password = req.body.password.trim();
        var phone = req.body.phone.trim();
        var gender = req.body.gender.trim();
        var birthday = req.body.birthday.trim();
        var city = req.body.city.trim();
        var state = req.body.state.trim();
        var zipcode = req.body.zipcode.trim();

        db.User.findOne({
            where: {email: email}
        }).then(function(results) {
            if (results === null) {
                db.User.create({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    mobile_number: phone,
                    user_gender: gender,
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

    // Session login verification
    app.post('/api/login', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;

        db.User.findOne({
            where: {
                email: email,
                password: password
            }
        }).then(function(results) {
            if (results === null) {
                res.send("incorrect login")
            } else {
                req.session.name = email;
                res.send()
            }
        })
    })

    // Remove a user from the database
    app.delete('/api/remove', function(req, res) {
        var userEmail = req.body.email;

        db.User.destroy({
            where: {
                email: userEmail
            }
        }).then(function(results) {
            res.send()
        })
    })

    // Add a new game to the database
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
        var equipmentStr = req.body.equipment.trim();
        var skillLevelStr = req.body.skillLevel.trim();
        var genderStr = req.body.gender.trim();
        var disabilityStr = req.body.disability.trim();

        if (equipmentStr === "No") {
            var equipmentInt = 0
        } else if (equipmentStr === "Yes") {
            var equipmentInt = 1
        }

        // if (skillLevelStr === "Novice") {
        //     var skillLevelInt = 1
        // } else if (skillLevelStr === "Intermediate") {
        //     var skillLevelInt = 2
        // } else if (skillLevelStr === "Expert") {
        //     var skillLevelInt = 3
        // } else if (skillLevelStr === "None Specified") {
        //     var skillLevelInt = 0
        // }

        // if (genderStr === "Men") {
        //     var genderInt = 1
        // } else if (genderStr === "Women") {
        //     var genderInt = 2
        // } else if (genderStr === "Coed") {
        //     var genderInt = 3
        // }

        if (disabilityStr === "No") {
            var disabilityInt = 0
        } else if (disabilityStr === "Yes") {
            var disabilityInt = 1
        }
    
        db.Event.create({
            event_name: gameName,
            sport_type: eventSport,
            event_date: gameDate,
            event_time: gameTime,
            street: street,
            city: city,
            state: state,
            zipcode: zipcode,
            min_birthdate: minBirthDate,
            min_players: minPlayers,
            max_players: maxPlayers,
            game_fee: gameFee,
            equipment_binary: equipmentInt,
            skill_level_id: skillLevelStr,
            gender_id: genderStr,
            disability_binary: disabilityInt
        }).then(function(results) {
            res.send()
        })
    })
}

