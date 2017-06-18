// 4. Funkcja getJSON
// Mając już rozwiązanie zadania trzeciego, przepisz swój kod tak, aby stworzyć nową funkcję
// o nazwie getJSON. Idea działania i użycie będą bardzo podobne:
// getJSON("url", function(data) {
// console.log("Sukces");
// console.log(data);
// // typeof data powinno zwrócić “object”
// }, function(err) {
// console.log("Wystąpił błąd!");
// console.log(err);
// });
// Różnica jest taka, że tym razem pod parametrem data przekazanym w funkcji callback,
// powinien się znajdować javascriptowy obiekt, a nie string przysłany z serwera. Serwer,
// który przygotowaliśmy pod tym adresem: http://code.eduweb.pl/bootcamp/users/ działa tak,
// że po otrzymaniu standardowego zapytania GET, np. kiedy wpiszesz ten adres w
// przeglądarce lub wyślesz zapytanie Ajaxem, zwróci dane zawarte w kodzie HTML. Jeśli
// jednak przy wysyłaniu zapytania dodasz nagłówek Accept: application/json, to serwer
// zwróci te same dane, ale w formacie JSON (bez kodu HTML). Z poziomu Twojego kodu
// JavaScript, otrzymane Ajaxem dane to cały czas typ String, ale za pomocą metody
// JSON.parse możesz ten string łatwo zamienić na javascriptowy obiekt. To jest właśnie
// Twoje zadanie. Wysyłając żądanie do serwera, dodaj wspomniany wcześniej nagłówek za
// pomocą metody setRequestHeader, a otrzymane dane sparsuj za pomocą JSON.parse i
// dopiero wtedy przekaż jako parametr data do funkcji callback.

function getJSON(url, callbackIfSuccess, callbackIfError) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);
    var err;


    // xhr.onreadystatechange = function() {
    //     console.log(xhr.readyState);
    // };

    xhr.onerror = function(e) {
        err = new Error ("Zapytanie do serwera nie powiodło się");
        callbackIfError(err);
        return err;
    };

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.response);
            callbackIfSuccess(data);
        } else if (xhr.status >= 300) {
            err = "Błąd: "+ xhr.status;
            callbackIfError(err);
            return err;
        }

    };
}


getJSON("http://code.eduweb.pl/bootcamp/users/", function(data) {
console.log("Sukces");
console.log(data);
// typeof data powinno zwrócić “object”
}, function(err) {
console.log("Wystąpił błąd!");
console.log(err);
});
