
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
	
		var data = {
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
			data: data
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

		if ($("#username").val() == "") {
			$("#user-error").html("<p> Please type in a username</p>");
		} else if ($("#login-password").val() == "") {
			$("#password-error").html("<p> Please type in a password</p>");
		} else {

			$("#user-error").hide();
			$("#password-error").hide();

			var data = {
			username: $("#username").val().trim(),
			password: $("#login-password").val().trim()	
			}

			console.log(data);

			$.ajax({
			  type: "GET",
			  url: "/api/login",
			  data: data
			});

		}

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

