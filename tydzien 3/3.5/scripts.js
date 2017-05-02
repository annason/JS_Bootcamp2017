// 5. Parser adresu URL
// Stwórz funkcję o nazwie getPage, która pozwoli odczytać numer strony z adresu URL.
// Dane na temat adresu URL strony, na której wykonuje się Twój kod JavaScript, możesz
// odczytać za pomocą obiektu window.location. Dopisz do adresu Twojej strony ?page=2 i
// wykorzystując odpowiednią właściwość obiektu location, a także odpowiednie wyrażenie
// regularne, zwróć z funkcji 2 (typ Number) lub null, jeśli query string ?page=X nie będzie
// podany lub będzie niepoprawny, np. ?page=tekst
// Użycie funkcji powinno wyglądać następująco:
// // dla adresu np. http://localhost/test/?page=2
// getPage(); // zwraca 2
// // dla adresu np. http://localhost/test/
// getPage(); // zwraca null
// // dla adresu np. http://localhost/test/?page=nieliczba
// getPage(); // zwraca null


function getPage() {

    var searchurl = window.location.search;
    var reg = /(\?page=)(.)/g;

    var cutReg = searchurl.replace(reg, function(match, g1, g2, offset, string) {
        return g2;
    });

    var number = Number(cutReg);

    if (Number(number)) {
        return number;
    } else {
        return null;
    }

}

// console.log(window.location.search);

var onPage = getPage()+"";
var output = document.querySelector("output");
output.textContent = onPage;
