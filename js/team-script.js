$(document).ready(function() {
    $.get("https://reqres.in/api/users?page=1")
    .done(function(data, status) {
        alert(status);

        var count = Object.keys(data.data).length;
        /*
        console.log(count);
        console.log(countArray);
        console.log(typeof data.data[0].avatar)
        */

        for (i=0; i < count; i++) {
            for (i=0; i < count; i++) {
                $("#avatar-" + i).attr("src", data.data[i].avatar);
                $("#name-" + i).html(data.data[i].first_name + " " + data.data[i].last_name);
                $("#email-" + i).html(data.data[i].email);
            }
        }

        
    })
    .fail(function(data) {
        alert("error");
    });
})