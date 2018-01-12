$(document).ready(function() {
	// Remove a user from the database
    $("#removeUser").click(function(event) {
        event.preventDefault();
        var email = $(this).attr("email")

        if ($(this).attr("clicked") === "false") {
            $(this).attr("clicked", "true")
            $(this).text("CONFIRM REMOVAL")
        } else {
            $.ajax({
                type: "DELETE",
                url: "/api/remove",
                data: {email: email}
            }).done(function(results) {
                    window.location.href = "/logout"
            })
        }
    });

	// Add a new game
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
			disability: $("#disability").val().trim()
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

	// // Display the games
	// $.ajax({
	// 	type: "GET",
	// 	url: "/api/game"
	// 	// data: data
	// 	//success: success,
	// 	//dataType: dataType
	// }).done(function(results) {
	// 	console.log(results)
	// 	for (i=0; i< results.length ;i++) {
	// 		console.log(results[i].event_name)
	// 	}
	// });

});