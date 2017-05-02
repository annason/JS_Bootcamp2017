// 2. Pokazywanie elementów i animacje
// Stwórz kontener z przykładową nawigacją, który domyślnie nie będzie widoczny. Może on
// znajdować się na samej górze strony lub w sidebarze. Następnie umieść na stronie
// przycisk typu “hamburger menu” ☰, po kliknięciu którego wysunie się wcześniej ukryte
// menu. Animacja jaką zastosujesz, zależy od Ciebie. Ponowne kliknięcie przycisku powinno
// chować nawigację.




$(document).ready(function() {

    var button = $("#letstalk button");
    var input = $("#letstalk input[type=text]");
    var dialogList = $(".outputcol ul");

    var responses = ["很高興見到你", "Yeah, well... nice", "In every real man a child is hidden that wants to play", "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you", "LOL", ":-)", "I see...", ":*", "That was so cute...", "OMG!!!", "Meh...", "Say something else.", ":p", ":3", "Hi there!", "lof", "Duuuuh!", "Can't talk right now, sorry", "Boooring", "A fool thinks himself to be wise, but a wise man knows himself to be a fool", "O, I die, Horatio! The potent poison quite o'er-crows my spirit...", "I look forward to meet you", "Nice try! :p", "That's, hmm... interesting", "Say what?", "D'oh!", ":-(", ";-(", ":o", "rotfl that was grand", ":* I here you", "I'm blue DA BA DE DA BA DI DA BA DE DA BA DI ... lof", "This above all: to thine own self be true, And it must follow, as the night the day,Thou canst not then be false to any man", "Lorem ipsum?... Just kidding :P", "They may take our lives, but they'll never take our freedom! Grrr!", "Chewie, we're home! rotfl", "lof  Magic Mirror on the wall, who is the fairest one of all?"];

    // var responses = ["LOL", ":-)"]

    // console.log(button);

    button.click(function(e) {

        console.log(responses.length);

        function change() {
            var theList = document.querySelectorAll(".outputcol ul li");
            [].forEach.call(document.querySelectorAll(".outputcol ul li"), function(el) {
                el.innerHTML = el.innerHTML.replace(":-)", "<img src='img/happy.png'/>");
                el.innerHTML = el.innerHTML.replace(":)", "<img src='img/happy.png'/>");
                el.innerHTML = el.innerHTML.replace(":p", "<img src='img/wink.png'/>");
                el.innerHTML = el.innerHTML.replace(":P", "<img src='img/wink.png'/>");
                el.innerHTML = el.innerHTML.replace(":-p", "<img src='img/wink.png'/>");
                el.innerHTML = el.innerHTML.replace("lof", "<img src='img/in-love.png'/>");
                el.innerHTML = el.innerHTML.replace(":*", "<img src='img/kiss.png'/>");
                el.innerHTML = el.innerHTML.replace(":-(", "<img src='img/sad.png'/>");
                el.innerHTML = el.innerHTML.replace(":(", "<img src='img/sad.png'/>");
                el.innerHTML = el.innerHTML.replace(";-(", "<img src='img/crying.png'/>");
                el.innerHTML = el.innerHTML.replace(";(", "<img src='img/crying.png'/>");
                el.innerHTML = el.innerHTML.replace(":o", "<img src='img/shocked.png'/>");
                el.innerHTML = el.innerHTML.replace("rotfl", "<img src='img/laughing.png'/>");
            });

        }
        e.preventDefault();

        dialogList.addClass("get-border");

        // $("<li></li>").text(input.val()).append(dialogList);

        if (input.val().length > 0) {

            var newLi = $("<li class='msg'></li>").text(input.val());
            var newResponse = $("<li class='response'></li>").text(function() {
                for (i = 0; i < responses.length; i++) {}
                return responses[Math.floor(Math.random() * responses.length)];
            });

            dialogList.append(newLi.hide().fadeIn(500)).append("<li class='clear'></li>");
            change();
            setTimeout(function() {
                dialogList.append(newResponse.hide().fadeIn(500)).append("<li class='clear'></li>");;

                change();
            }, 1100);

        }



        if (input.val().length > 0 && (document.querySelectorAll(".outputcol ul li")).length > 16) {

            $(".outputcol ul li:first-child, .outputcol ul li:nth-child(2), .outputcol ul li:nth-child(3), .outputcol ul li:nth-child(4)").fadeOut().remove();


        }

        input.val('');
    })

});
