// 3. Ajaxowy polyfill dla funkcji fetch
// Napisz polyfill dla funkcji fetch (nie będziemy się tutaj trzymać dokładnie tego, w jaki
// sposób ona działa, stworzysz jedynie prostą jej wersję). Wykorzystaj obiekt
// XMLHttpRequest w ten sposób, aby docelowo korzystanie z funkcji fetch wyglądało
// następująco:
// fetch("url", function(data) {
// console.log("Sukces");
// console.log(data);
// }, function(err) {
// console.log("Wystąpił błąd!");
// console.log(err);
// });
// a zatem jako pierwszy argument przekazujemy adres URL (wyślij pod niego zapytanie
// GET), jako drugi funkcję, którą należy wykonać jeśli wszystko się powiedzie (przekaż jej
// pobrane dane), a jako trzeci funkcję, która wykona się na wypadek błędu (przekaż jej
// obiekt z błędem lub komunikat tekstowy). W nowoczesnych przeglądarkach istnieje już
// funkcja fetch, a zatem aby jej nie nadpisywać, możesz nadać jej inną nazwę, np. fecz.
// Jako adres URL, z którego pobierane bedą dane, możesz wykorzystać http://
// code.eduweb.pl/bootcamp/users/

function fecz(url, callbackIfSuccess, callbackIfError) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send(null);
    var err;


    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
    };

    xhr.onerror = function(e) {
        err = new Error ("Zapytanie do serwera nie powiodło się");
        callbackIfError(err);
        throw err;
    };

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = xhr.response;
            callbackIfSuccess(data);
        } else if (xhr.status >= 300) {
            err = "Błąd: "+ xhr.status;
            callbackIfError(err);
            throw err;
        }

    };
}


var ok = fecz("http://code.eduweb.pl/bootcamp/users/", function(data) {
    console.log("Sukces");
    console.log(data);

}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});

console.log(ok);
