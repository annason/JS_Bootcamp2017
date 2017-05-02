// Stwórz skrypt, który będzie wyświetlał filmy z podanego tutaj obiektu https://pastebin.com/
// kCbqehMm (oczywiście skopiuj ten kod i wstaw go do swojego skryptu zanim rozpoczniesz
// pracę).
// Skrypt powinien wyświetlać filmy z 3 kategorii (użyj do tego celu console.log()) w
// następujący sposób:
// Dla dzieci:
// Kubuś Puchatek i Przyjaciele
// Zwariowane Melodie
// Piotruś Pan
// =======================

var movies = {
    "Dla dzieci": [
        "Kubuś Puchatek i Przyjaciele",
        "Zwariowane Melodie",
        "Piotruś Pan"
    ],
    "Dla młodzieży": [
        "Szkoła uczuć",
        "Podróż za jeden uśmiech",
        "Szatan z 7-ej klasy"
    ],
    "Dla dorosłych": [
        "Gwiezdne Wojny",
        "Szklana Pułapka",
        "Titanic"
    ]
};

for (var odbiorca in movies) {
    // console.log(odbiorca + ":\n" + movies[odbiorca]);
    // console.log(odbiorca);

    console.log(odbiorca +":");

    for (var tytul in movies[odbiorca]) {
        console.log(movies[odbiorca][tytul]);
    }

    console.log("=======================");


}
