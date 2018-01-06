$(document).ready(function() {
	//alert("hey");
	
	$("#form").submit(function(event) {
		 event.preventDefault();
		//console.log(event);

		//console.log($( this ).serializeArray());

		// build obj

		// var name = $("#name").val().trim();

		// var password = $("#password").val().trim();

		// var email = $("#email").val().trim();

		// var phone = $("#phone").val().trim();

		// var location = $("#location").val().trim();
	
		// console.log(name);
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





});

