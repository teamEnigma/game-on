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
            res.json(results);
        }).catch(function(err) {
            console.log(err);
        })
    })

    app.get('/api/login', function(req, res) {
       var username = req.query.username;
       var password = req.query.password;
    })
}







