$(document).ready(function() {
	// Form collapse functionality
	$('.collapse').on('shown.bs.collapse', function (e) {
		var id = $(e.target).prop('id');
		navigateToElement(id);
	 });

	function navigateToElement(id) {
		$('html, body').animate({
			scrollTop: $("#" + id).offset().top - 12
		}, 400);
	}

	// submit the registartion form
	$("#register-form").submit(function(event) {
		event.preventDefault();

		var genderStr = $("#gender").val().trim();

		if (genderStr === "Male") {
			var genderInt = 1
		} else if (genderStr === "Female") {
			var genderInt = 2
		} else if (genderStr === "Coed") {
			var genderInt = 3
		}
	
		var registerData = {
			firstName: $("#first-name").val().trim(),
			lastName: $("#last-name").val().trim(),
			email: $("#email").val().trim(),
			password: $("#password").val().trim(),
			phone: $("#phone").val().trim(),
			gender: genderInt,
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
			// Error message if the email address is already in the system
			if (data === "duplicate email") {

				$("#form-incomplete").html("Please use another email address");
			// Go to the start page if logged in
			} else {
				window.location.href = "/index"
			}
		});
	});

	// User login form
	$("#login-form").submit(function(event) {
		event.preventDefault();

		var loginData = {
			email: $("#login-email").val().trim(),
			password: $("#login-password").val().trim()	
			}

		$.ajax({
		  type: "POST",
		  url: "/api/login",
		  data: loginData
		}).done(function(results) {
			// Error message if the login didn't work
			if (results === "incorrect login") {
				$("#login-incomplete").html("Your login is invalid")
			// Redirect the user to the start page
			} else {
				window.location.href = "/start"
			}
		})
	});

});

