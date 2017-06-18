// 5. Funkcja zwracająca sformatowaną datę
// Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę.
// Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017.
// Przykładowe użycie tej funkcji powinno wyglądać następująco:
// getDate(); // zwraca np. “17.04.2017”

function getDateCustom() {
    var currentDate = new Date();
    var ddRaw = currentDate.getDate();
    var dd = ("0" + ddRaw).slice(-2);
    var mmRaw = currentDate.getMonth() + 1;
    var mm = ("0" + mmRaw).slice(-2);
	
	//var mm = (mmRaw < 10) ? mmRaw : to jeszcze musze rozgryzc :-)
	
    var year = currentDate.getFullYear();

    return dd + '.' + mm + '.' + year;
}


console.log(getDateCustom());
