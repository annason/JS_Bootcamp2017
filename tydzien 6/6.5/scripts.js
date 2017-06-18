// 3. Praca z modułami ES6
// Utwórz kilka niezależnych modułów i z każdego z nich coś wyeksportuj, w dowolny,
// wybrany przez Ciebie sposób. Niech jeden z modułów zawiera jakąś przykładową klasę z
// prostymi funkcjonalnościami, drugi inną klasę, która mogłaby dziedziczyć z pierwszej, a
// trzeci (główny moduł) powinien z tych eksportowanych funkcjonalności móc skorzystać. Aby
// moduły działały poprawnie, wykorzystaj element <script type=“module">.
// Uwaga: pamiętaj, że konieczne może być ustawienie odpowiedniej flagi, np. w
// przeglądarce Chrome po przejściu pod adres chrome://flags włącz Experimental Web
// Platform features poprzez kliknięcie Enable.


import EurRate from "./modules/EurRate.js";
import GbpRate from "./modules/GbpRate.js";
import UsdRate from "./modules/UsdRate.js";

let rates = document.querySelectorAll("#output p span");


let eur = new EurRate();
let gbp = new GbpRate();
let usd = new UsdRate();


eur.getData(info => {
    rates[0].textContent = info.midRate;
});

gbp.getData(info => {
    rates[1].textContent = info.midRate;
});

usd.getData(info => {
    rates[2].textContent = info.midRate;
});

usd.getData(info => {
    rates[3].textContent = info.date;
});
