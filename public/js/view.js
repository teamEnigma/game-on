$(document).ready(function() {
	//alert("hey");
	
	$("#register-form").submit(function(event) {
		 event.preventDefault();
	
		var data = {
			name: $("#name").val().trim(),
			password: $("#password").val().trim(),
			email: $("#email").val().trim(),
			phone: $("#phone").val().trim(),
			location: $("#location").val().trim()
		}

		$.ajax({
		  type: "POST",
		  url: "/api/register",
		  data: data
		  //success: success,
		  //dataType: dataType
		});

	});

	$("#login-form").submit(function(event) {
		event.preventDefault();

		console.log("hey");

		var data = {
			username: $("#username").val().trim(),
			password: $("#login-password").val().trim(),
			
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
	function makeEvent(name, data1, data2, data3){
	
		$("#something").text(name);
		$("#something").attr(data1);
  
	}

// calling function, passing in the object info we create
	makeEvent(blah, blah, blah);

});

