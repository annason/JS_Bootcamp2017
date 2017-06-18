// 1. Wiązanie elementów DOM z danymi z użyciem WeakMap
// Pamiętasz funkcję getJSON, którą stworzyłeś w tygodniu trzecim? Za jej pomocą pobierz
// dane JSON z tego adresu: http://code.eduweb.pl/bootcamp/json/. Następnie w funkcji
// callback, gdzie te dane będą już zamienione na tablicę JavaScript, dla każdego elementu
// tej tablicy (będzie to obiekt) utwórz dynamicznie element <li> i wstaw go na stronę, do
// wcześniej utworzonego elementu <ul>. W elemencie <li> wstaw na początku wyłącznie
// wartość name z obiektu, ale przypisz też do tego elementu obsługę zdarzenia click. Kiedy
// element zostanie kliknięty, zamień jego wewnętrzny tekst na name oraz email, np. w ten
// sposób:
// <li>Leanne Graham <a href=“mailto:Sincere@april.biz">Sincere@april.biz</a></li>.
// Być może zastanawiasz się, jak powiązać element <li> z obiektem, który przechowuje
// potrzebne dla niego dane. W tym celu wykorzystaj WeakMap, gdzie jako klucz podasz
// element z drzewa DOM, czyli <li>, a jako wartość obiekt z danymi. Dzięki temu po
// kliknięciu na element <li>, w funkcji obsługi tego zdarzenia pod this znajdzie się
// odwołanie do tego elementu DOM. Kiedy przekażesz this do WeakMapy, otrzymasz w
// zamian obiekt z pozostałymi danymi. To z nich wyciągniesz name i email, aby
// zaktualizować tekst elementu <li>. Plusem tego rozwiązania jest fakt, że jeśli element
// <li> zostanie usunięty, to również obiekt z danymi zostanie usunięty z pamięci, bo takie
// zadanie realizuje właśnie WeakMap.

let output = document.querySelector("output");

function getJSON(url, callbackIfSuccess, callbackIfError) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);
    var err;



    xhr.onerror = function(e) {
        err = new Error("Zapytanie do serwera nie powiodło się");
        callbackIfError(err);
        return err;
    };

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.response);
            callbackIfSuccess(data);
        } else if (xhr.status >= 300) {
            err = "Błąd: " + xhr.status;
            callbackIfError(err);
            return err;
        }

    };
}


getJSON("http://code.eduweb.pl/bootcamp/users/", function(data) {

    let ul = document.createElement("ul");
    let frag = document.createDocumentFragment();


    ul.addEventListener("click", function(e) {
        let obj = metaData.get(e.target);
        let email = obj.email;

        e.target.textContent = "";
        e.target.innerHTML = `${obj.name} <span class='mail'><a href='mailto:${email}'>${email}</a></span>`;

    }, false);


    let metaData = new WeakMap();


    data.forEach(function(value, index, array) {
        let li = document.createElement("li");
        let person = document.createTextNode(value.name);

        li.appendChild(person);
        frag.appendChild(li);

        metaData.set(li, value);

    });
    //
    console.log(metaData);
    ul.appendChild(frag);
    output.appendChild(ul);


}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});
