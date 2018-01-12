var db = require("../models");
var email 	= require("../node_modules/emailjs/email");

const sgMail = require('@sendgrid/mail');
sgMail.setSubstitutionWrappers('{{', '}}'); // Configure the substitution tag wrappers globally

module.exports = function(app) {
	var stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    app.get('/index', function(req, res) {
		if (req.session.name) {
			res.redirect('/start')
		} else {
			res.render("index", {inputState: stateArray})
		}
	})
	
    app.get('/start', function(req, res) {

   //  		var server 	= email.server.connect({
			// user:    "gameon@erasports.club", 
			// password:"TeamEnigma1", 
			// host:    "smtp.fatcow.com", 
			// ssl:     true
			// });
	
			// // send the message and get a callback with an error or details of the message that was sent
			// server.send({
			// 	text:    "<html> Hello world !! </html>", 
			// 	from:    "gameon@erasports.club", 
			// 	to:      "rtranter25@gmail.com",   
			// 	subject: "<html> Hello world !! </html>",
			
			// 	}, function(err, message) { console.log(err || message); 
			// });


		if (req.session.name) {
			var email = req.session.name

			db.User.findOne({
				where: {
					email: email
				}
			}).then(function(results) {
				var name = results.first_name
			
				var hbsObj = {
					userEmail: email,
					userName: name,
					inputState: stateArray
				};

				res.render("start", hbsObj)
			})
		} else {
			res.redirect('/');
		}

		// sgMail.setApiKey(process.env.SENDGRID_API_KEY='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');
		
		// const msg = {
		//   to: 'rtranter25@gmail.com',
		//   from: 'game.on.enigma@gmail.com',
		//   subject: 'Sending with SendGrid is Fun',
		//   text: 'and easy to do anywhere, even with Node.js',
		//   html: '<p>Hello HTML world!</p>',
		//   templateId: '2ab3dd0d-785b-4cee-b1b1-692e7e3e94dd',
		//   substitutions: {
		//     name: 'Some One',
		//     city: 'Denver',
		//   },
		// };
		
		// sgMail.send(msg);

	})

	app.get('/logout', function(req, res){

		req.session.destroy();
		res.redirect('/');
	});

    app.get('/*', function(req, res) {
		res.redirect('/index')
    })  
}