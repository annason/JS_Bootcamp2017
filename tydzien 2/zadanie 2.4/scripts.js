// 4. Dziedziczenie z klasy EventEmitter
// Przygotowany pod adresem http://pastebin.com/YEBncx0d kod zmodyfikuj tak, aby obiekty
// tworzone z klasy Database mogły korzystać z wszystkich metody klasy EventEmitter. Na
// chwilę obecną, podany kod wygeneruje błąd, gdyż klasa Database nie zawiera metody on
// oraz emit. Skorzystaj z dziedziczenia prototypowego, aby klasą nadrzędną dla Database
// stała się klasa EventEmitter. Zadanie to wymaga od Ciebie dopisania wyłącznie kilku


// Parent Class
function EventEmitter() {
    this.events = {};
}

EventEmitter.prototype.on = function(type, fn) {
    if(!type || !fn) return;
    this.events[type] = this.events[type] || [];
    this.events[type].push(fn);
};

EventEmitter.prototype.emit = function(type, data) {
    var fns = this.events[type];
    if(!fns || !fns.length) return;
    for(var i = 0; i < fns.length; i++) {
        fns[i](data);
    }
};

// Child Class
function Database(url) {

    EventEmitter.call(this);
    this.url = url;
}

////////////////////////////////////////// the magic :-)
Database.prototype = Object.create(EventEmitter.prototype);
//////////////////////////////////////////

Database.prototype.connect = function() {
    // fikcyjne podłączenie do bazy
    this.emit("connect", this.url);
};

Database.prototype.disconnect = function() {
    // fikcyjne zakończenie połączenia z bazą
    this.emit("disconnect", this.url);
};




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
