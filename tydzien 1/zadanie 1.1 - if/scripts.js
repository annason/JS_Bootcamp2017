// 1. Instrukcje warunkowe
// Za pomocą instrukcji warunkowej if (wraz z blokami else) lub switch, stwórz skrypt, który
// w konsoli (za pomocą console.log()) wyświetli cenę produktu, w zależności od liczby
// zakupionych przez klienta do tej pory produktów. Oczywiście wszystko to jest abstrakcyjne,
// więc musisz utworzyć zmienną, która będzie przechowywała liczbę zakupionych produktów,
// np. 100, a następnie zmienną z ceną jakiegoś fikcyjnego produktu, np. 50. Poniżej tych
// dwóch zmiennych utwórz blok instrukcji warunkowych, który ustali ostateczną cenę, w
// zależności od liczby zakupionych przez klienta produktów.
// Jeśli zatem klient ma już na koncie od 5 do 20 zakupionych produktów, to przyznaj zniżkę
// 5%. Jeśli 21 do 50, to 10%, od 51 do 100 produktów daje zniżkę 15%, a powyżej 100
// produktów zniżkę w wysokości 20%.
// Musisz zatem obliczyć ostateczną cenę produktu, a następnie wyświetlić w konsoli
// komunikat, np. “Podstawowa cena produktu to 20zł, po obniżce to 17zł”. Aby to
// przetestować, będziesz musiał zmieniać liczbę zakupionych przez klienta produktów w
// zmiennej, w której taką informację zapiszesz.


var price = 100;

var purchases = prompt("Liczba zakupionych sztuk:");

if (purchases < 5) {

    var discount = 0;

} else if (purchases >= 5 && purchases <= 20) {

    var discount = 5;

} else if (purchases >= 21 && purchases <= 50) {

    var discount = 10;

} else if (purchases >= 51 && purchases <= 100) {

    var discount = 15;

} else if (purchases >= 101) {

    var discount = 20;

}


var afterDiscount = price - (discount / 100 * price);

console.log("Podstawowa cena produktu to " + price + "zł, po obniżce to " + afterDiscount + "zł\n(Kupiłeś dotąd:" + purchases + "szt. Rabat " + discount + "%)");
