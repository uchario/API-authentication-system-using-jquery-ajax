$(document).ready(function() {

    $.fn.postFunction = function() {
        
        event.preventDefault();
    
        var email = $("input[type=email]").val(),
            password = $("input[type=password").val();

        $.post("https://reqres.in/api/login",
        {
            email: email,
            password: password
        })
        .done(function(data) {
            alert(data.token);
            window.location.href = "team.html";  

        })
        .fail(function() {
            $(".form-group").css("border-color", "red");
            $("#invalid-login").html("Invalid login credentials!").css("color", "red");
        }) 
    }
    
    
    $("#login").click(function() {

        
        $.fn.postFunction();
        
        
    });

    
});