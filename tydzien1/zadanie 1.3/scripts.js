// Utwórz funkcję o nazwie toBoolean, która będzie przyjmowała jeden parametr.
// Po przekazaniu do niej wartości przy jej wywołaniu, wartość ta powinna zostać skonwertowana na typ Boolean,
// czyli na true lub false.
// Funkcja ta powinna tę wartość zwrócić.
//
// Przykładowe jej użycie powinno wyglądać tak:
// toBoolean(20); // zwraca wartość true
// toBoolean(“”); // zwraca wartość false



function toBoolean2(x) {
    return Boolean(x);
}

console.log("============== rozwiązanie Boolean(); ==============");
console.log("argument 20 daje: " + toBoolean2(20));
console.log("argument \"\" daje: " + toBoolean2(""));
console.log("argument false daje: " + toBoolean2(false));
