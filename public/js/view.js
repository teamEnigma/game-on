$(document).ready(function() {
	$('.collapse').on('shown.bs.collapse', function (e) {
		var id = $(e.target).prop('id');
		// To scroll to panel-body (untested)
		// var id = $(e.target).children('.panel-body').prop('id');
		navigateToElement(id);
	 });

	function navigateToElement(id) {
		$('html, body').animate({
			scrollTop: $("#" + id).offset().top - 12
		}, 400);
	}

	$("#joinjoin").click(function(){
		$("#join-button").hide(1000);

		$("#demo3").show();
	})

	$("#register-form").submit(function(event) {
		event.preventDefault();
	
		var registerData = {
			firstName: $("#first-name").val().trim(),
			lastName: $("#last-name").val().trim(),
			email: $("#email").val().trim(),
			password: $("#password").val().trim(),
			phone: $("#phone").val().trim(),
			birthday: $("#birthday").val().trim(),
			city: $("#city").val().trim(),
			state: $("#state").val().trim(),
			zipcode: $("#zipcode").val().trim(),
		}

		$.ajax({
		    type: "POST",
		    url: "/api/register",
			data: registerData
		}).done(function(data) {
			if (data === "duplicate email") {

				$("#form-incomplete").html("That email has already been used!")

			} else {
				window.location.href = "/start"
			}
		});
	});

	$("#login-form").submit(function(event) {
		event.preventDefault();

		var loginData = {
			email: $("#login-email").val().trim(),
			password: $("#login-password").val().trim()	
			}

		console.log(loginData)

		$.ajax({
		  type: "GET",
		  url: "/api/login",
		  data: loginData
		}).done(function(results) {
			window.location.href = "/start"
		})

	});

	$("#game-form").submit(function(event) {
	event.preventDefault();

	// // if the data is all entered correctly and goes to the database
	// if () {

	// 	$("#event-head").append(data.eventSport);
	// 	// etc etc
	// //the data values will go to the games table

	// } else {

	// // a message will appear - "something is missing"

	// }

	var data = {
		gameName: $("#game-name").val().trim(),
		eventSport: $("#event-sport").val().trim(),
		gameDate: $("#game-date").val().trim(),
		gameTime: $("#game-time").val().trim(),
		street: $("#street").val().trim(),
		city: $("#city").val().trim(),
		state: $("#state").val().trim(),
        zipcode: $("#zipcode").val().trim(),
        minBirthDate: $("#min-birthdate").val().trim(),
		minPlayers: $("#min-players").val().trim(),
		maxPlayers: $("#max-players").val().trim(),
		gameFee: $("#game-fee").val().trim(),
        equipment: $("#equipment").val().trim(),
        skillLevel: $("#skill-level").val().trim(),
		gender: $("#gender").val().trim(),
		disability: $("#disability").val().trim(),
    }

    console.log(data);
    
    $.ajax({
        type: "GET",
        url: "/api/game",
        data: data
        //success: success,
        //dataType: dataType
      });
	})
});

//});

