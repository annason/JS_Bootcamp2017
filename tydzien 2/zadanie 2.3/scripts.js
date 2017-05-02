// 3. Odliczanie od 10 do 0
// Stwórz projekt, który po uruchomieniu odpowiedniej funkcji, pozwoli na odliczanie
// od 10 do 0. Wszystkie wartości powinny być wyświetlane na stronie, a czas pomiędzy
// zmianą wartości powinien wynosić 1 sekundę. Choć cały Twój kod może być podzielony na
// wiele funkcji, jedna z nich powinna uruchamiać proces odliczania. Przy wywołaniu tej
// funkcji, daj możliwość przekazania innej funkcji jako argument. Przekazaną funkcję
// wywołaj, gdy licznik osiągnie wartość 0.
// Istotą przekazywania jednej funkcji do drugiej (w tym przypadku nazwalibyśmy ją funkcją
// callback) jest to, aby dać użytkownikowi naszego kodu pewną gotową funkcjonalność
// (odliczanie od 10 do 0), ale także możliwość dodania czegoś od siebie, tj. wykonania
// własnej funkcji po zakończeniu odliczania. W przekazanej funkcji możesz wpisać po prostu
// console.log(“Odliczanie zakończone!”).
// Podpowiedź: użyj funkcji setTimeout wywołując ją wielokrotnie zamiast setInterval,
// którą wykonałbyś wyłącznie raz.

var button = document.querySelectorAll("button");
var output = document.querySelector("output");
// flag = false;



// button[0].addEventListener("click", function() {
//   countNLaunch(0, 5, wyswietlalert);
// }, false);
button[0].addEventListener("click", countNLaunch.bind(this, 0, 5, wyswietlalert), false); //opcja z bind. Czy this jest poprawne?
button[1].addEventListener("click", function() {
  countNLaunch(0, 5, otworzstrone);
}, false);
button[2].addEventListener("click", function() {
  countNLaunch(0, 5, pokazkota);
}, false);




function countNLaunch(from, to, launchFn) {

 if (typeof flag === 'undefined'){ flag = false;} //pewnie grzeszę, ale jako zmienna lokalna nie chciało działać

  if (flag === true) {
    return;
  }
  showCounting();

  function showCounting() {
    flag = true;

    if (from <= to) {

      output.textContent = from++;
      setTimeout(showCounting, 1000);
    } else {

      if (!!launchFn) {
        flag = false;
        return launchFn();
      }
    }
  }
}



function wyswietlalert() {
  alert("odliczanie się zakończyło :-)");
}

function pokazkota() {
  document.querySelector("img").classList.add("show");
}

function otworzstrone() {
  window.location.href = "http://devdocs.io/javascript/"

}
