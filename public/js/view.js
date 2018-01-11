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
});

