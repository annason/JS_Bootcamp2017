$(document).ready(function() {

$("#load").click(function(){

    $.ajax({
        url: "http://code.eduweb.pl/bootcamp/users/",
        type: "get",
        dataType: 'json',
        success: function(data, status, jqXHR) {
            getData(data);
        },
        error: function(jqXHR, status, errorMsg) {

        }

    });

});
    function getData(data) {

        var names = [],
            usernames = [],
            emails = [],
            phones = [];


        for (var i = 0; i < data.length; i++) {

            names[i] = data[i].name;
            usernames[i] = data[i].username;
            emails[i] = data[i].email;
            phones[i] = data[i].phone;

        }

        showData(data, names, usernames, emails, phones);

    }

    function showData(data, names, usernames, emails, phones) {
        var ul = $("<ul>");

        for (var i = 0; i < data.length; i++) {
            $("<li>").html("<span class='name'>" + names[i] + "</span>" +
                "<span class='username'>" + usernames[i] + "</span>" +
                "<span class='mail'>" + emails[i] + "</span>" +
                "<span class='phone'>" + phones[i] + "</span>" ).appendTo(ul).parent().hide();

        }



        $("output").children().slideUp().remove();
        ul.appendTo("output");
        ul.fadeIn("fast").parent().delay().slideDown("slow");

        console.log($("output ul li .mail"));
    }

});
