# JS Bootcamp 2017

<ul>
    <li><a href="#tydzien1">tydzień 1</a></li>
    <li><a href="#tydzien2">tydzień 2</a></li>
</ul>


<h1><a name="tydzien1"><a>Tydzień 1</h1>

<h2>1. Instrukcje warunkowe</h2>
<p>Za pomocą instrukcji warunkowej if (wraz z blokami else) lub switch, stwórz skrypt, który w konsoli (za pomocą console.log()) wyświetli cenę produktu, w zależności od liczby zakupionych przez klienta do tej pory produktów.</p>
<p> Oczywiście wszystko to jest abstrakcyjne, więc musisz utworzyć zmienną, która będzie przechowywała liczbę zakupionych produktów, np. 100, a następnie zmienną z ceną jakiegoś fikcyjnego produktu, np. 50. Poniżej tych dwóch zmiennych utwórz blok instrukcji
    warunkowych, który ustali ostateczną cenę, w zależności od liczby zakupionych przez klienta produktów. Jeśli zatem klient ma już na koncie od 5 do 20 zakupionych produktów, to przyznaj zniżkę 5%. Jeśli 21 do 50, to 10%, od 51 do 100 produktów daje
    zniżkę 15%, a powyżej 100 produktów zniżkę w wysokości 20%.</p>
<p>Musisz zatem obliczyć ostateczną cenę produktu, a następnie wyświetlić w konsoli komunikat, np. “Podstawowa cena produktu to 20zł, po obniżce to 17zł”. Aby to przetestować, będziesz musiał zmieniać liczbę zakupionych przez klienta produktów wzmiennej,
    w której taką informację zapiszesz.</p>

<h2>2. Pętle</h2>
<p>Stwórz skrypt, który będzie wyświetlał filmy z podanego tutaj obiektu https://pastebin.com/kCbqehMm. Skrypt powinien wyświetlać filmy z 3 kategorii (użyj do tego celu console.log()) w następujący sposób:</p>
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

<p>Utwórz funkcję o nazwie toBoolean, która będzie przyjmowała jeden parametr. Po przekazaniu do niej wartości przy jej wywołaniu, wartość ta powinna zostać skonwertowana na typ Boolean, czyli na true lub false. Funkcja ta powinna tę wartość zwrócić. Przykładowe
    jej użycie powinno wyglądać tak:</p>

<pre>toBoolean(20); // zwraca wartość true
toBoolean(“”); // zwraca wartość false</pre>


<h2>4. Funkcja sumująca przekazane liczby</h2>

<p>Stwórz funkcję o nazwie sum, która będzie przyjmowała jeden parametr, którym będzie tablica z liczbami. Funkcja ta powinna zsumować wszystkie liczby z przekazanej tablicy, a następnie zwrócić wynik takiej operacji. Przykładowe jej użycie powinno wyglądać
    tak:</p>

<pre>sum([1, 10, 5, 4]); // zwraca wartość 20</pre>


<h2>5. Funkcja zwracająca sformatowaną datę</h2>

<p>Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę. Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017. Przykładowe użycie tej funkcji powinno wyglądać następująco:</p>

<pre>getDate(); // zwraca np. “17.04.2017”</pre>


<h1><a name="tydzien2"><a>Tydzień 2</h1>

<h2>1. Pokazywanie ukrytego elementu</h2>

<p>
    Stwórz projekt z ukrytym elementem HTML (np. div z display:none w CSS), a także przyciskiem (button>. Przypisz na kliknięcie przycisku funkcję, która pokaże ukryty element, gdy jest niewidoczny i ukryje go, gdy jest widoczny. Podczas zmiany stanu widoczności
    tego elementu, zmień również tekst przycisku np. z “Pokaż treść” na “Ukryj treść” i na odwrót.
</p>

<h2>2. Walidator formularza</h2>
<p>
    Stwórz prosty walidator formularza, który zawierał będzie pola input o typach “text”, “email”, “number” oraz element textarea. Dodaj do elementu form atrybut novalidate, aby wyłączyć domyślną walidację przeglądarki. Od Ciebie zależy, czy chcesz wyświetlać
    komunikaty o błędach czy tylko podświetlać niepoprawnie uzupełnione pola np. na czerwono. Za poprawnie uzupełnione pole input o typie “text” lub pole textarea uznajemy takie, które ma wpisany przynajmniej jeden znak. W przypadku pola o typie “email”
    sprawdź czy zawiera ono znak @, a w przypadku pola o typie “number” czy podana wartość jest liczbą (pamiętaj, że DOM zwróci Ci zawsze wartość o typie String, więc musisz znaleźć sposób, jak sprawdzić czy string ten zawiera wyłącznie liczbę).
</p>
<h2>3. Odliczanie od 10 do 0</h2>
<p>
    Stwórz projekt, który po uruchomieniu odpowiedniej funkcji, pozwoli na odliczanie od 10 do 0. Wszystkie wartości powinny być wyświetlane na stronie, a czas pomiędzy zmianą wartości powinien wynosić 1 sekundę. Choć cały Twój kod może być podzielony na
    wiele funkcji, jedna z nich powinna uruchamiać proces odliczania. Przy wywołaniu tej funkcji, daj możliwość przekazania innej funkcji jako argument. Przekazaną funkcję wywołaj, gdy licznik osiągnie wartość 0.
</p>

<p>
    Istotą przekazywania jednej funkcji do drugiej (w tym przypadku nazwalibyśmy ją funkcją callback) jest to, aby dać użytkownikowi naszego kodu pewną gotową funkcjonalność (odliczanie od 10 do 0), ale także możliwość dodania czegoś od siebie, tj. wykonania
    własnej funkcji po zakończeniu odliczania. W przekazanej funkcji możesz wpisać po prostu console.log(“Odliczanie zakończone!”).
</p>

<h2>4. Dziedziczenie z klasy EventEmitter</h2>

<P>
    Przygotowany pod adresem http://pastebin.com/YEBncx0d kod zmodyfikuj tak, aby obiekty tworzone z klasy Database mogły korzystać z wszystkich metody klasy EventEmitter. Na chwilę obecną, podany kod wygeneruje błąd, gdyż klasa Database nie zawiera metody
    on oraz emit. Skorzystaj z dziedziczenia prototypowego, aby klasą nadrzędną dla Database stała się klasa EventEmitter. Zadanie to wymaga od Ciebie dopisania wyłącznie kilku linijek kodu.
</P>

<h2>5. Funkcja debounce</h2>

<p>
    Stwórz funkcję o nazwie debounce, która przyjmie przy wywołaniu dwa argumenty. Pierwszy z nich to inna funkcja do późniejszego wywołania, a drugi to czas w milisekundach. Po takim wywołaniu, funkcja ta powinna zwrócić nową funkcję, którą można zapisać
    np. w zmiennej. Następnie tę nową funkcję będzie można wielokrotnie wywoływać (a ona powinna wywołać pierwotnie przekazaną funkcję), jednak jeśli czas pomiędzy poszczególnymi wywołaniami będzie krótszy, niż podany wcześniej (wspomniany argument z
    czasem w milisekundach), to funkcja nie powinna nic zrobić, ale ustawić licznik na kolejne Xms i dopiero wtedy się wywołać.
</p>

<p>
    Rozwiązania typu debounce stosuje się np. przy obsłudze zdarzenia scroll w przeglądarkach, które wywoływane jest bardzo wiele razy. Jeśli nie chcemy, aby nasza funkcja negatywnie wpływała na wydajność podczas scrollowania, a wystarczy, że wywoła się np.
    100ms po zakończeniu scrollowania, wtedy stosujemy funkcję debounce. Innym przykładem jest np. zdarzenie resize, które też jest wielokrotnie wywoływane podczas skalowania okna przeglądarki, a nam może zależeć, aby wywołać pewien kod dopiero wtedy,
    gdy taka akcja się zakończy. Całość przetestować możesz z użyciem tego kodu: https://pastebin.com/J0BJVqtR. Twoim zadaniem jest dopisanie funkcji debounce, aby ten kod zaczął działać.
</p>
