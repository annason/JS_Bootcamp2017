# JS Bootcamp 2017


<h1>Tydzień 1</h1>

<h2>1. Instrukcje warunkowe</h2>
<p>Za pomocą instrukcji warunkowej if (wraz z blokami else) lub switch, stwórz skrypt, który
w konsoli (za pomocą console.log()) wyświetli cenę produktu, w zależności od liczby
zakupionych przez klienta do tej pory produktów.</p>
<p> Oczywiście wszystko to jest abstrakcyjne, więc musisz utworzyć zmienną, która będzie przechowywała liczbę zakupionych produktów, np. 100, a następnie zmienną z ceną jakiegoś fikcyjnego produktu, np. 50. Poniżej tych dwóch zmiennych utwórz blok instrukcji warunkowych, który ustali ostateczną cenę, w zależności od liczby zakupionych przez klienta produktów. Jeśli zatem klient ma już na koncie od 5 do 20 zakupionych produktów, to przyznaj zniżkę 5%. Jeśli 21 do 50, to 10%, od 51 do 100 produktów daje zniżkę 15%, a powyżej 100 produktów zniżkę w wysokości 20%.</p>
<p>Musisz zatem obliczyć ostateczną cenę produktu, a następnie wyświetlić w konsoli komunikat, np. “Podstawowa cena produktu to 20zł, po obniżce to 17zł”. Aby to przetestować, będziesz musiał zmieniać liczbę zakupionych przez klienta produktów wzmiennej, w której taką informację zapiszesz.</p>

<h2>2. Pętle</h2>
<p>Stwórz skrypt, który będzie wyświetlał filmy z podanego tutaj obiektu https://pastebin.com/kCbqehMm.
Skrypt powinien wyświetlać filmy z 3 kategorii (użyj do tego celu console.log()) w
następujący sposób:</p>
<pre>Dla dzieci:
Kubuś Puchatek i Przyjaciele
Zwariowane Melodie
Piotruś Pan
=======================
Dla młodzieży:
Szkoła uczuć
Podróż za jeden uśmiech
Szatan z 7-ej klasy
=======================
Dla dorosłych:
Gwiezdne Wojny
Szklana Pułapka
Titanic
=======================

</pre>

<h2>3. Funkcja konwertująca wartość na typ Boolean</h2>

<p>Utwórz funkcję o nazwie toBoolean, która będzie przyjmowała jeden parametr. Po
przekazaniu do niej wartości przy jej wywołaniu, wartość ta powinna zostać skonwertowana
na typ Boolean, czyli na true lub false. Funkcja ta powinna tę wartość zwrócić.
Przykładowe jej użycie powinno wyglądać tak:</p>

<pre>toBoolean(20); // zwraca wartość true
toBoolean(“”); // zwraca wartość false</pre>


<h2>4. Funkcja sumująca przekazane liczby</h2>

<p>Stwórz funkcję o nazwie sum, która będzie przyjmowała jeden parametr, którym będzie
tablica z liczbami. Funkcja ta powinna zsumować wszystkie liczby z przekazanej tablicy, a
następnie zwrócić wynik takiej operacji.
Przykładowe jej użycie powinno wyglądać tak:</p>

<pre>sum([1, 10, 5, 4]); // zwraca wartość 20</pre>


<h2>5. Funkcja zwracająca sformatowaną datę</h2>

<p>Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę.
Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017.
Przykładowe użycie tej funkcji powinno wyglądać następująco:</p>

<pre>getDate(); // zwraca np. “17.04.2017”</pre>
