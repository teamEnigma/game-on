$(document).ready(function() {
	// Remove a user from the database
    $("#removeUser").click(function(event) {
        event.preventDefault();
        var email = $(this).attr("email")

		// Click to confirm
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
	    }).done(function(results) {
	    	window.location.reload();
		});
	});

	// Open a game and display the registration stataus with a one time query
	$(".gameRow").one( "click", function() {
		var gameRow = this;
		var userId = $(this).attr("userId");
		var gameId = $(this).attr("gameId");
		var gameName = $(this).attr("gameName");

		var data = {
			userId: userId,
			gameId: gameId,
			gameName: gameName
		}

	    $.ajax({
	        type: "POST",
	        url: "/api/eventcheck",
	        data: data
	    }).done(function(response) {
			// I the user hasn't joined yet
	    	if (response === "havent joined") {
				// Display a sign up button
				$("#gameCollapse" + gameId + " .joinBtn").css("visibility", "visible")

				// Button to join a game
				$("#gameCollapse" + gameId + " .joinBtn").click(function(event) {
					event.preventDefault();
			
					$.ajax({
						type: "POST",
						url: "/api/eventconfirm",
						data: data
					}).done(function(response) {
						// Hide the button and tellthe user that they've been registered
						$("#gameCollapse" + gameId + " .joinBtn").css("visibility", "hidden")
						$("#gameCollapse" + gameId + " #join-joined").html("<br>You have been registered!")

						// change the text when the game-on status has changed
						if (response === "game on") {
							$("#gameRow" + gameId + " #event-status-joined").html("Confirmed")
						}
					});		
				})
			// Message if the user has already joined
			} else if (response === "already joined") {
				$("#gameCollapse" + gameId + " #join-joined").html("<br>You have been registered!")
			}
		});
	})
});