// 4. Funkcja sumująca przekazane liczby
// Stwórz funkcję o nazwie sum, która będzie przyjmowała jeden parametr,
// którym będzie tablica z liczbami. Funkcja ta powinna zsumować wszystkie
// liczby z przekazanej tablicy, a następnie zwrócić wynik takiej operacji.
// Przykładowe jej użycie powinno wyglądać tak:
// sum([1, 10, 5, 4]); // zwraca wartość 20


function sum(arr) {


    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        var sum = sum + arr[i];
    }


     if (typeof sum == "number") {
      return sum;
     }


    else {
      return "w tablicy musza się znajdować same liczby";
    }

}

console.log("funkcja sum(); dla tablicy [1,2,3]\nzwróciła: " + sum([1, 2, 3]));
console.log("funkcja sum(); dla tablicy [1,2,3,5,100]\nzwróciła: " + sum([1, 2, 3, 5, 100]));
console.log("funkcja sum() dla tablicy [\"smerfy\",2,3,5,100]\nzwróciła: " + sum(["smerfy", 2, 3, 5, 100]));
