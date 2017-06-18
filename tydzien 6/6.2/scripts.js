// 2. Polyfill dla metody Array.from Napisz polyfill dla metody Array.from, korzystając wyłącznie z zapisu ES5. W nowoczesnych przeglądarkach ta metoda jest zaimplementowana, a zatem dodając własną, poprzedź ją przedrostkiem my, w ten sposób Array.myFrom. Metoda ta pozwala zamienić obiekt tablicopodobny, a więc zawierający numerowane indeksy i właściwość
// length, na pełnoprawną tablicę. Metodę tę będziesz mógł zatem przetestować np. na zmiennej arguments lub na obiekcie NodeList, który zwrócony zostanie z metody document.querySelectorAll() kiedy wyszukasz w drzewie DOM wybranych elementów HTML.
// Zwróć uwagę, że metoda Array.from przyjmuje do trzech argumentów. Jeśli jako drugi argument podana zostanie funkcja, to powinna być ona przekazana do metody map, a więc każdy element tej tablicy powinien być "przepuszczony" przez tę funkcję. Z kolei ostatni argument pozwala na ustawienie kontekstu dla tej funkcji mapującej, a więc tego, co znajdzie się pod słowem this wewnątrz tej funkcji.


Array.myFrom = function(arrayLike, mapFn, thisArg) {



    let array = [];



    [].forEach.call(arrayLike, function(value) {
        array.push(value);
    });

    if (!!mapFn && !!thisArg) {
        return array.map(mapFn, thisArg);

    } else if (!!mapFn) {
        return array.map(mapFn);
    }

    return array;

}



var lis = document.querySelectorAll("ul li");


var lisArr = Array.myFrom(lis);



console.log(Array.isArray(lisArr)); // true

var lisTexts = Array.myFrom(lis, function(li) {
    return li.textContent;
});

console.log(lisTexts);
// lisTexts powinna być tablicą z tekstami wszystkich <li>

// Array.from(obj, mapFn, thisArg) is the same as Array.from(obj).map(mapFn, thisArg)
