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
            // Add the user if the email is unique
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
            // If the email already exists notify the frontend
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
            // If there are no result notify the frontend that the login failed
            if (results === null) {
                res.send("incorrect login")
            // Start a new session for the user
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

    // Check if a user has already joined a game
    app.post('/api/eventcheck', function(req, res) {
        var userId = req.body.userId
        var gameId = req.body.gameId

        db.Roster.findOne({
            where: {
                UserId: userId,
                EventId: gameId
            }
        }).then(function(results) {
            if (results === null) {
                res.send("havent joined")
            } else {
                res.send("already joined")
            }
        })
    })

    // Add a user to an event
    app.post('/api/eventconfirm', function(req, res) {
        var userId = req.body.userId;
        var gameId = req.body.gameId;
        var gameName = req.body.gameName;

        db.Roster.create({
            UserId: userId,
            EventId: gameId
        }).then(function() {
            db.Event.findOne({
                where: {
                    id: gameId
                }
            }).then(function(results) {
                var gameStatus = results.game_on_boolean;
                var playersNeeded = results.min_players;

                // Game On Functionality if the game wasn't previously on
                if (!gameStatus) {
                    db.Roster.count({
                        where: {
                            EventId: gameId
                        }
                    }).then(function(count) {
                        // If the game is not on due to the new guest
                        if (count >= playersNeeded) {
                            db.Event.update({
                                game_on_boolean: 1
                            }, {
                                where: {
                                    id: gameId
                                }
                            }).then(function() {
                                res.send("game on");

                                // Send a text message to everyone that's going
                                db.Roster.findAll({
                                    where: {
                                        EventId: gameId
                                    }
                                }).then(function(reply) {
                                    var guestList = []
                                    for (i=0; i<reply.length; i++) {
                                        var userId = reply[i].UserId;
                                        guestList.push(userId)
                                    }

                                    var sendMessage = require("./send-sms")
                                    for (i=0; i<guestList.length; i++) {
                                        db.User.findOne({
                                            where: {
                                                id: guestList[i]
                                            }
                                        }).then(function(data) {
                                            var guestPhone = data.mobile_number

                                            // Text Message function
                                            sendMessage(guestPhone, gameName)
                                        })                                       
                                    }
                                })
                            })  
                        // If the game still isn't on                         
                        } else {
                            res.send();
                        }
                    })
                // If the game was already on
                } else {
                    res.send();

                    // Send a text message to the user that just added the game
                    var sendMessage = require("./send-sms")

                    db.User.findOne({
                        where: {
                            id: userId
                        }
                    }).then(function(data) {
                        var guestPhone = data.mobile_number

                        // Text Message function
                        sendMessage(guestPhone, gameName)
                    })                                                         
                }
            })
        })
    })
}

