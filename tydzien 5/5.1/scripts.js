// 1. Pamiętasz funkcję getJSON, którą stworzyłeś w tygodniu trzecim? Za jej pomocą pobierz
// dane JSON z tego adresu: http://code.eduweb.pl/bootcamp/json/. Następnie w funkcji
// callback, gdzie te dane będą już zamienione na obiekt JavaScript, wykorzystaj
// dekompozycję (destructuring), aby utworzyć za pomocą zapisu ES6 nowe zmienne, które
// przechowywać będą dane spod kluczy: name, username, email, address.geo[0],
// address.geo[1], website i company.name. Powyższe dane wstaw do template stringu,
// dodając odpowiednie etykiety jak np. Imię, Firma czy Adres e-mail wraz z niezbędnym
// kodem HTML, np. w formie linku dla website. W przypadku współrzędnych
// geograficznych, wstaw je do takiego linku: <a href=“http://bing.com/maps/
// default.aspx?cp=LAT~LON”>Pokaż na mapie</a>, gdzie LAT i LON zastąpisz kolejno
// przez address.geo[0] i address.geo[1], które na tym etapie powinny być już w
// zmiennych. Powyższą operację wykonaj oczywiście dla wszystkich obiektów z tablicy.
// Cały sformatowany ciąg wraz ze wstawkami HTML wstaw na stronę. Sam proces
// pobierania danych Ajaxem i dalszego ich formatowania, możesz wywołać za pomocą
// kliknięcia jakiegoś przycisku.

let output = document.querySelector("output");
let button = document.querySelector("#load");

function getJSON(url, callbackIfSuccess, callbackIfError) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);
    let err;


    // xhr.onreadystatechange = function() {
    //     console.log(xhr.readyState);
    // };

    xhr.onerror = function(e) {
        err = new Error("Zapytanie do serwera nie powiodło się");
        callbackIfError(err);
        return err;
    };

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.response);
            callbackIfSuccess(data);
        } else if (xhr.status >= 300) {
            err = "Błąd: " + xhr.status;
            callbackIfError(err);
            return err;
        }

    };
}

button.addEventListener("click", function(e){
    e.preventDefault;
     output.innerHTML ="";

    let kot = getJSON("http://code.eduweb.pl/bootcamp/json/", function(data) {
       console.log("Sukces");

       for (let obj of data) {
           let {
               name,
               username,
               email,
               "address": {
                   "geo": [geo1, geo2]
               }
           } = obj;

           var string =
           `<div class='col-md-3 single'>
           <span><span><b><i class="fa fa-user-circle-o" aria-hidden="true"></i>Name</b>: ${name}</span></span>
           <span><b><i class="fa fa-user-plus" aria-hidden="true"></i>Username</b>: ${username}</span>
           <span><b><i class="fa fa-envelope" aria-hidden="true"></i>E-mail</b>: ${email}</span>
           <span><b><i class="fa fa-map-marker" aria-hidden="true"></i>Location</b>: <a href=\"http://bing.com/maps/default.aspx?cp=${geo1}~${geo2}&lvl=4\" target=\"_blank\">Show on map</a></span>
           </div>`
           output.innerHTML += string;
       }


    }, function(err) {
       console.log("Wystąpił błąd!");
       console.log(err);
    });
}, false);

button.addEventListener("click", function(){

    output.style.display = "block";
}, false)
