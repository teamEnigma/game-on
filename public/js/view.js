
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

	$(".button1").on("click", function(){

	});
	 

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

		console.log(data);

		$.ajax({
		    type: "POST",
		    url: "/api/register",
			data: data,
			dataType: "json"
			// success : function(data) {              
			// 	alert('Data: '+data);
			// },
			// error : function(request,error)
			// {
			// 	alert("Request: "+JSON.stringify(request));
			// }
		}).done(function(data) {
			window.location.href = "/start"
		});
	});

	$("#login-form").submit(function(event) {
		event.preventDefault();

		var data = {
			username: $("#username").val().trim(),
			password: $("#login-password").val().trim()	
		}

		console.log(data);

		$.ajax({
		  type: "GET",
		  url: "/api/login",
		  data: data
		  //success: success,
		  //dataType: dataType
		});

	});

});

