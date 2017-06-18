// 3. Przepisanie konstruktorów z ES5 na klasy w ES6
// Wróćmy pamięcią do zadania 4 z tygodnia drugiego. Uzupełniłeś w nim kod tak, aby
// dziedziczenie prototypowe działało poprawnie. Tutaj znajdziesz kod, od którego należało
// wtedy zacząć: https://pastebin.com/YEBncx0d. Teraz Twoim zadaniem jest przepisanie
// tego działającego już kodu tak, aby korzystał z klas w ES6. Przepisz zarówno klasę
// EventEmitter jak i klasę Database, wykorzystując oczywiście dziedziczenie. Samo użycie
// tego kodu, a więc tworzenie nowych instancji obiektów i korzystanie z ich metod, pozostaje
// bez zmian.

// Parent Class

class EventEmitter {

    constructor(){
        this.events = {};
    }

    on(type, fn) {
        if(!type || !fn) return;
        this.events[type] = this.events[type] || [];
        this.events[type].push(fn);
    }
    emit(type,data) {
        var fns = this.events[type];
        if(!fns || !fns.length) return;
        for(var i = 0; i < fns.length; i++) {
            fns[i](data);
        }
    }
}

class Database extends EventEmitter {

    constructor(url){
        super();
        this.url = url;
    }

    connect() {
        // fikcyjne podłączenie do bazy
        this.emit("connect", this.url);
    }

    disconnect(){
        // fikcyjne zakończenie połączenia z bazą
        this.emit("disconnect", this.url);
    }

}


// Użycie EventEmittera
var ev = new EventEmitter();

ev.on("hello", function(message) {
    console.log("Witaj " + message + "!");
});

ev.on("hello", function(message) {
    console.log("Siema " + message + ".");
});

ev.on("goodbye", function() {
    console.log("Do widzenia!");
});

ev.emit("hello", "Marek");
ev.emit("goodbye");
ev.emit("custom"); // nic się nie wydarzy



// DO ZROBIENIA!
// Docelowe użycie klasy Database
var db = new Database("db://localhost:3000"); // fikcyjny adres

db.on("connect", function(url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
});
db.on("disconnect", function(url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
});
db.connect();

// po 5 sekundach rozłączamy się
setTimeout(function() {
    db.disconnect();
}, 5000);
