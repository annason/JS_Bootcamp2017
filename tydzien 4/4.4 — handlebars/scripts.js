


function handlebarsData(data) {

	var template = document.getElementById("tpl").innerHTML;
	var compile = Handlebars.compile(template);


	// Wygenerowanie gotowego kodu z szablonu
	var templateHtml = compile(data);

	// Wstawienie kodu na stronę
	// document.querySelector("output").innerHTML = templateHtml;
	$("output").children().slideUp().remove();
	
	$(templateHtml).appendTo("output").hide().fadeIn("fast").parent().delay().slideDown("slow");

}



$(document).ready(function() {

    $("#load").click(function() {

        $.ajax({
            url: "http://code.eduweb.pl/bootcamp/users/",
            type: "get",
            dataType: 'json',
            success: function(data, status, jqXHR) {

				console.log(JSON.stringify(data, null, 4));
				handlebarsData(data);

			console.log("pobrano");
            },
            error: function(jqXHR, status, errorMsg) {

            }

        });

    });


});
