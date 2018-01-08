$(document).ready(function() {
	//alert("hey");
	
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
        $.ajax({
            type: "GET",
            url: "/api/game",
            data: data
            //success: success,
            //dataType: dataType
          });
    });