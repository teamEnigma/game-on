var db = require("../models");
var email 	= require("../node_modules/emailjs/email");

module.exports = function(app) {
	// Data for the dropdown menus
	var stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
	stateArray.sort()
	var sportsArray = ["Soccer", "Football", "Basketball", "Beach Volleyball", "Indoor Volleyball", "Floor Hockey", "Ice Hockey", "Field Hockey", "Golf", "Frisbee Golf", "Ultimate Frisbee", "Badminton", "Tennis", "Bowling", "Baseball", "Softball", "Ping Pong", "Broomball", "Dodgeball", "Curling", "Kickball", "Rugby", "Cricket", "Water Polo", "Handball", "Billiards", "Handball", "Cycling", "Lacrosse", "Box Lacrosse", "Paintball", "Polo", "Sparring", "Weightlifting", "Fencing"]
	sportsArray.sort()

	// Route to display the index page
    app.get('/index', function(req, res) {
		if (req.session.name) {
			res.redirect('/start')
		} else {
			res.render("index", {inputState: stateArray})
		}
	})

	// Route to display the start page
    app.get('/start', function(req, res) {
		// Load the start page if the user is signed in
		if (req.session.name) {
			var email = req.session.name

			// Query to retrieve the user's data
			db.User.findOne({
				where: {
					email: email
				}
			}).then(function(results) {
				var name = results.first_name;
				var id = results.id;

				// Createa date range to display games for the next three months
				var currentDate = new Date().toISOString().slice(0,10);

				function addMonthsUTC (date, count) {
					if (date && count) {
					    var m, d = (date = new Date(+date)).getUTCDate()
				  
					    date.setUTCMonth(date.getUTCMonth() + count, 1)
					    m = date.getUTCMonth()
					    date.setUTCDate(d)
					    if (date.getUTCMonth() !== m) date.setUTCDate(0)
					}
					return date.toISOString().slice(0,10)
				}
				
				var monthCount = 3;
				var futureDate = addMonthsUTC(new Date(), monthCount)

				// Query games within the date range
				db.Event.findAll({
					where: {
						event_date: {
								between: [currentDate, futureDate]
							}
						}
				}).then(function(gameData) {
					// Send all of the necessary data with handlebars
					var hbsObj = {
						userEmail: email,
						userId: id,
						userName: name,
						inputState: stateArray,
						inputSport: sportsArray,
						gameData: gameData
					};
					
					res.render("start", hbsObj)
				})
			})
		// Go to the index page if the user isn't signed in
		} else {
			res.redirect('/');
		}
	})

	// End a user's session to logout
	app.get('/logout', function(req, res){
		req.session.destroy();
		res.redirect('/');
	});

	// Redirect to the index page
    app.get('/*', function(req, res) {
		res.redirect('/index')
    })  
}