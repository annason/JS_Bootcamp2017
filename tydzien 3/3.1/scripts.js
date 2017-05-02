// 1. Polyfill metody repeat dla String
// W standardzie EcmaScript 2015 (o którym więcej w 5 i 6 tygodniu Bootcampu) pojawiła się
// nowa metoda dostępna na obiektach typu String o nazwie repeat. Jej użycie wygląda
// następująco:
// “hej ”.repeat(3) // zwraca “hej hej hej ”
// Metoda ta jest dostępna we wszystkich nowoczesnych przeglądarkach internetowych, ale
// aby poćwiczyć rozszerzanie wbudowanych typów, utwórz jej polyfill. W kodzie sprawdź
// najpierw czy taka metoda już w przeglądarce została zaimplementowana, a jeśli nie, to
// dopisz własną funkcję, która będzie mogła być na dowolnym stringu wywołana w podany
// wyżej sposób.

String.prototype.repeatCustom = function(n) {

    var multiplied = this;
    n = Number(n);


    function isInt(x) {
        return Number(x) === x && x % 1 === 0;
    }

    function isFloat(x) {
        return Number(x) === x && x % 1 !== 0;
    }



    if (Number(n) !== n) {
        throw new Error('Argument needs to be a number type');

    } else if (n < 0) {
        throw new Error('Invalid count value (argument needs to be a positive integer)');

    } else if (isFloat(n)) {

        if (n < 1 && n > 0) {
            return "";
        } else if (n === Infinity){
             throw new RangeError('repeat count must be less than infinity');
        }

        n = Math.floor(n);

    } else if (n === 0) {
        return "";

    } else if (n === 1) {
        return this.toString();
    }


    else if (isInt(n)) {
        n = n;
    }


    for (i = 1; i < n; i++) {

        multiplied += this;
    }


    return multiplied

// return (new Array (n +1)).join(this.toString());


};


var string = "string";
