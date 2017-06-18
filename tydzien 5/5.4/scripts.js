// 4. Iterator dla klasy losującej liczby
// W lekcjach drugiego tygodnia, w sekcji Praktyczne projekty znajduje się lekcja pt. Losowanie Dużego Lotka. Utwórz z użyciem zapisu ES6 klasę Lotek, która zawierać
// będzie metodę getNumbers, a ta z kolei wylosuje liczby według logiki ze wspomnianej lekcji. Metoda ta powinna być wywoływana od razu przy tworzeniu nowej instancji obiektu
// tej klasy. Wylosowane liczby musisz zatem zapisać wewnątrz obiektu. Dodatkowo stwórz metodę checkNumbers, która pozwoli podać 6 liczb jako osobne argumenty i zwróci obiekt,
// który zawierał będzie właściwości numbers, gdzie będzie tablica z trafionymi liczbami oraz count, gdzie będzie liczba trafionych numerów.
// To jednak dopiero początek, gdyż najważniejszym celem tego zadania jest dodanie iteratora do tej klasy. Po poprawnym jego dodaniu, kiedy na obiekcie utworzonym z tej
// klasy użyjemy operatora …spread lub pętli for…of, powinien on zwrócić kolejne wylosowane liczby. Przykładowe użycie tego kodu powinno wyglądać następująco:
// https://pastebin.com/0zygc3hk.


class Lotek {
    constructor() {
        this.randoms = this.getNumbers();

    }

    getNumbers() {
        function getRandom(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
        var numbers = [],
            random;
        for (var i = 0; i < 6; i++) {
            random = getRandom(1, 49);

            while (numbers.indexOf(random) !== -1) {
                random = getRandom(1, 49);
                // console.log("Powtórzyła się liczba " + random);
            }
            numbers.push(random);
        }
        return numbers;
    }

    checkNumbers(...numbers) {
         let bingo = this.randoms.filter(function(value) {
             return numbers.indexOf(value) != -1;
         })
        return {
            numbers: bingo,
            count: bingo.length,
        }
    }

*[Symbol.iterator](){
    yield *this.randoms;
}

}



let shot = new Lotek();

let results = shot.checkNumbers(2, 13, 15, 22, 34, 40);
// zwraca np. { numbers: [13, 22], count: 2 }


// tablica ze wszystkimi wylosowanymi liczbami
let numbers = [...shot];

console.log('='.repeat(8)+`\n wylosowane liczby to:`);
console.log(shot.randoms);
console.log('='.repeat(8)+`\n shot.checkNumbers(2,13,15,22,34,40) zwraca:`);
console.log(shot.checkNumbers(2, 13, 15, 22, 34, 40));
console.log('='.repeat(8)+`\n spread [...shot] zwraca:`);
console.log(numbers);
console.log('='.repeat(8)+`\n pętla for-of zwraca:`);
// wyświetla kolejno wylosowane liczby
for (let number of shot) {
    console.log(number);
}

//////////////////////////////////


output = document.querySelector("output");
output.innerHTML =
`
<h3>Wylosowane liczby to:</h3>
<p>${JSON.stringify(shot.randoms)}</p>
<h3>Trafione liczby z zakresu (2, 13, 15, 22, 34, 40) to:</h3>
<p>${JSON.stringify(shot.checkNumbers(2, 13, 15, 22, 34, 40))}</p>
<h3> spread instancji [...shot] zwraca:</h3>
<p>${JSON.stringify(numbers)}</p>
`
