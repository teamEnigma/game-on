$(document).ready(function() {
		
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

		$.ajax({
		  type: "GET",
		  url: "/api/login",
		  data: data
		  //success: success,
		  //dataType: dataType
		});

	});

// this function will display on the page the output of the events that get created
//will this be ajax coming from database?
	// function makeEvent(name, data1, data2, data3){
	
	// 	$("#something").text(name);
	// 	$("#something").attr(data1);
  
	// }

// calling function, passing in the object info we create
// 	makeEvent(blah, blah, blah);

});

