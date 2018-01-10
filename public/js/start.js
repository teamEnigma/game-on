$(document).ready(function() {
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
});