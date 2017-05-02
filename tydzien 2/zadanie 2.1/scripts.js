// 1. Pokazywanie ukrytego elementu
// Stwórz projekt z ukrytym elementem HTML (np. <div> z display:none w CSS), a także
// przyciskiem (<button>). Przypisz na kliknięcie przycisku funkcję, która pokaże ukryty
// element, gdy jest niewidoczny i ukryje go, gdy jest widoczny. Podczas zmiany stanu
// widoczności tego elementu, zmień również tekst przycisku np. z “Pokaż treść” na “Ukryj
// treść” i na odwrót.


var button = document.querySelector("button"),
    container = document.querySelector("div");


function showHide() {
container.classList.toggle('showme');
button.textContent = (button.textContent === "Pokaż treść") ? "Ukryj treść" : "Pokaż treść";
}


button.addEventListener("click", showHide, false);
