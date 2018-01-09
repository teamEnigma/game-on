var db = require("../models");
// const sgMail = require('@sendgrid/mail');
// sgMail.setSubstitutionWrappers('{{', '}}'); // Configure the substitution tag wrappers globally

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render("index")
    })

    app.get('/start', function(req, res) {
		if (req.session.name) {
			var hbsObj = { userEmail: req.session.name };

			res.render("start", hbsObj)
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

    // app.get('/games', function(req, res) {
    //     res.render("games")
    // })
    
}