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

				$("#form-incomplete").html("Please use another email address");
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

		$.ajax({
		  type: "GET",
		  url: "/api/login",
		  data: loginData
		}).done(function(results) {
			if (results === "incorrect login") {
				$("#login-incomplete").html("Your login is invalid")
			} else {
				window.location.href = "/start"
			}
		})

	});

	$("#game-form").submit(function(event) {
		event.preventDefault();

		var data = {
			gameName: $("#game-name").val().trim(),
			eventSport: $("#event-sport").val().trim(),
			gameDate: $("#game-date").val().trim(),
			gameTime: $("#game-time").val().trim(),
			street: $("#street").val().trim(),
			city: $("#city").val().trim(),
			state: $("#inputState").val().trim(),
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
    
	    $.ajax({
	        type: "POST",
	        url: "/api/game",
	        data: data
	        //success: success,
	        //dataType: dataType
	    }).done(function(results) {
	    	window.location.reload();

		});

	});


});

