# JS Bootcamp 2017

<ul>
    <li><a href="#tydzien1">tydzień 1</a></li>
    <li><a href="#tydzien2">tydzień 2</a></li>
    <li><a href="#tydzien3">tydzień 3</a></li>
    <li><a href="#tydzien4">tydzień 4</a></li>
    <li><a href="#tydzien5">tydzień 5</a></li>
    <li><a href="#tydzien6">tydzień 6</a></li>
</ul>


<h1><a name="tydzien1">Tydzień 1</a></h1>

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
    tak:
</p>

<pre>sum([1, 10, 5, 4]); // zwraca wartość 20</pre>


<h2>5. Funkcja zwracająca sformatowaną datę</h2>

<p>Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę. Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017. Przykładowe użycie tej funkcji powinno wyglądać następująco:</p>

<pre>getDate(); // zwraca np. “17.04.2017”</pre>


<h1><a name="tydzien2">Tydzień 2</a></h1>

<h2>1. Pokazywanie ukrytego elementu</h2>

<p>
    Stwórz projekt z ukrytym elementem HTML (np. div z display:none w CSS), a także przyciskiem button. Przypisz na kliknięcie przycisku funkcję, która pokaże ukryty element, gdy jest niewidoczny i ukryje go, gdy jest widoczny. Podczas zmiany stanu widoczności
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

<p>
    Przygotowany pod adresem http://pastebin.com/YEBncx0d kod zmodyfikuj tak, aby obiekty tworzone z klasy Database mogły korzystać z wszystkich metody klasy EventEmitter. Na chwilę obecną, podany kod wygeneruje błąd, gdyż klasa Database nie zawiera metody
    on oraz emit. Skorzystaj z dziedziczenia prototypowego, aby klasą nadrzędną dla Database stała się klasa EventEmitter. Zadanie to wymaga od Ciebie dopisania wyłącznie kilku linijek kodu.
</p>

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


<h1><a name="tydzien3">Tydzień 3</a></h1>

<h2>1. Polyfill metody repeat dla String</h2>

<p>
    W standardzie EcmaScript 2015 (o którym więcej w 5 i 6 tygodniu Bootcampu) pojawiła się nowa metoda dostępna na obiektach typu String o nazwie repeat. Jej użycie wygląda następująco:
</p>

<pre>“hej ”.repeat(3) // zwraca “hej hej hej ”</pre>

<p>Metoda ta jest dostępna we wszystkich nowoczesnych przeglądarkach internetowych, ale aby poćwiczyć rozszerzanie wbudowanych typów, utwórz jej polyfill. W kodzie sprawdź najpierw czy taka metoda już w przeglądarce została zaimplementowana, a jeśli nie,
    to dopisz własną funkcję,
</p>

<h2>2. Wrapper Toggler dla elementów z drzewa DOM</h2>

<p>
    Do przygotowanego pod adresem http://pastebin.com/hUK5tnh3 kodu dodaj konstruktor (klasę) o nazwie Toggler. Przy tworzeniu nowych jej instancji z użyciem słowa kluczowego <i>new </i>(jak możesz zobaczyć w przygotowanym kodzie) przekazywać będziemy
    selektor. Za jego pomocą należy znaleźć na stronie odpowiedni element (skorzystaj z metody document.querySelector) i zapisać go w nowo stworzonym obiekcie.</p>
<p>Następnie dodaj 3 metody. Pierwsza z nich o nazwie getElem powinna po prostu zwrócić znaleziony wcześniej element. Metoda show i hide powinny kolejno pokazywać i ukrywać element. Jeśli wszystko wykonasz poprawnie, kod który został już napisany powinien
    działać bez żadnych modyfikacji. Zauważ, że do elementu o identyfikatorze button zostało przypisane zdarzenie kliknięcia. Taki element musisz wstawić na stronę, podobnie jak i element, którego selektor zostanie przekazany przy tworzeniu nowego obiektu
    klasy Toggler.
</p>

<h2>3. Ajaxowy polyfill dla funkcji fetch</h2>

<p>
    Napisz polyfill dla funkcji fetch (nie będziemy się tutaj trzymać dokładnie tego, w jaki sposób ona działa, stworzysz jedynie prostą jej wersję). Wykorzystaj obiekt XMLHttpRequest w ten sposób, aby docelowo korzystanie z funkcji fetch wyglądało następująco:
</p>

<pre>
fetch("url", function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});
</pre>

<p>
    a zatem jako pierwszy argument przekazujemy adres URL (wyślij pod niego zapytanie GET), jako drugi funkcję, którą należy wykonać jeśli wszystko się powiedzie (przekaż jej pobrane dane), a jako trzeci funkcję, która wykona się na wypadek błędu (przekaż
    jej obiekt z błędem lub komunikat tekstowy). W nowoczesnych przeglądarkach istnieje już funkcja fetch, a zatem aby jej nie nadpisywać, możesz nadać jej inną nazwę, np. fecz. Jako adres URL, z którego
</p>

<h2>4. Funkcja getJSON</h2>

<p>Mając już rozwiązanie zadania trzeciego, przepisz swój kod tak, aby stworzyć nową funkcję o nazwie getJSON. Idea działania i użycie będą bardzo podobne:</p>

<pre>getJSON("url", function(data) {
    console.log("Sukces");
    console.log(data);
    // typeof data powinno zwrócić “object”
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});
</pre>

<p>
    Różnica jest taka, że tym razem pod parametrem data przekazanym w funkcji callback, powinien się znajdować javascriptowy obiekt, a nie string przysłany z serwera. Serwer, który przygotowaliśmy pod tym adresem: http://code.eduweb.pl/bootcamp/users/ działa
    tak, że po otrzymaniu standardowego zapytania GET, np. kiedy wpiszesz ten adres w przeglądarce lub wyślesz zapytanie Ajaxem, zwróci dane zawarte w kodzie HTML. Jeśli jednak przy wysyłaniu zapytania dodasz nagłówek Accept: application/json, to serwer
    zwróci te same dane, ale w formacie JSON (bez kodu HTML).</p>
<p>Z poziomu Twojego kodu JavaScript, otrzymane Ajaxem dane to cały czas typ String, ale za pomocą metody JSON.parse możesz ten string łatwo zamienić na javascriptowy obiekt. To jest właśnie Twoje zadanie. Wysyłając żądanie do serwera, dodaj wspomniany wcześniej
    nagłówek za pomocą metody setRequestHeader, a otrzymane dane sparsuj za pomocą JSON.parse i dopiero wtedy przekaż jako parametr data do funkcji callback.
</p>


<h2>5. Parser adresu URL</h2>

<p>Stwórz funkcję o nazwie getPage, która pozwoli odczytać numer strony z adresu URL. Dane na temat adresu URL strony, na której wykonuje się Twój kod JavaScript, możesz odczytać za pomocą obiektu window.location. Dopisz do adresu Twojej strony ?page=2 i
    wykorzystując odpowiednią właściwość obiektu location, a także odpowiednie wyrażenie regularne, zwróć z funkcji 2 (typ Number) lub null, jeśli query string ?page=X nie będzie podany lub będzie niepoprawny, np. ?page=tekst Użycie funkcji powinno wyglądać
    następująco:
</p>

<pre>
// dla adresu np. http://localhost/test/?page=2
    getPage(); // zwraca 2
// dla adresu np. http://localhost/test/
    getPage(); // zwraca null
// dla adresu np. http://localhost/test/?page=nieliczba
    getPage(); // zwraca null
</pre>


<h1><a name="tydzien4">Tydzień 4</a></h1>

<h2>1. Selektory w jQuery</h2>

<p>Podaj przykłady selektorów, które pozwolą znaleźć na stronie następujące elementy:

    <ul>

        <li> wszystkie elementy &lt;div&gt;, posiadające zarówno klasę grid oraz klasę grid-12.</li>
        <li>wszystkie elementy &lt;a&gt;, których atrybut href zaczyna się na “http”, znajdujące się w elemencie o klasie nav</li>
        <li>wszystkie elementy &lt;input&gt;, których typ to radio lub checkbox oraz dodatkowo nie są aktualnie zaznaczone (checked).</li>
        <li>wyłącznie pierwszy element &lt;p&gt;, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie &lt;div&gt; z identyfikatorem text</li>
        <li>wszystkie elementy z klasą pagination-item, które nie są elementem &lt;span&gt;</li>
    </ul>
</p>

<p>Uwaga: Możesz utworzyć prostą stronę w HTML, gdzie w jakiś sposób podświetlisz znalezione powyższymi selektorami elementy, ale możesz równie dobrze po prostu wypisać te selektory w pliku tekstowym, bez tworzenia dla tego przykładu specjalnej strony.</p>

<h2>2. Pokazywanie elementów i animacje</h2>
<p>Stwórz kontener z przykładową nawigacją, który domyślnie nie będzie widoczny. Może on znajdować się na samej górze strony lub w sidebarze. Następnie umieść na stronie przycisk typu “hamburger menu”, po kliknięciu którego wysunie się wcześniej ukryte
    menu. Animacja jaką zastosujesz, zależy od Ciebie. Ponowne kliknięcie przycisku powinno chować nawigację.</p>

<h2>3. Dynamiczne tworzenie elementów</h2>

<p>Stwórz aplikację, która zawierać będzie prosty formularz z wyłącznie jednym polem &lt;input&gt;, a także przyciskiem &lt;button&gt;. Napisz kod tak, aby po wpisaniu informacji do pola i po wciśnięciu przycisku, wstawić wpisane informacje do nowego elementu
    &lt;li&gt;, a ten element do wcześniej wstawionego elementu &lt;ul&gt;. W ten sposób za każdym razem, gdy zostanie wpisane np. jakieś imię, pojawi się ono na stronie. Dodatkowo zadbaj o to, by jeśli nic nie zostało wpisane do pola, nie wstawiać na
    stronę pustego elementu &lt;li&gt;.</p>

<p>
    <strong>www: </strong><a href="https://annason.github.io/SayHello/">https://annason.github.io/SayHello/</a>
</p>


<h2>4. Praca z Ajax i JSON</h2>

<p>Stwórz aplikację, która pozwoli po kliknięciu wybranego przycisku, np. “Załaduj”, pobrać Ajaxem dane typu JSON i wyświetlić je na stronie. Adres, pod który wyślesz zapytanie z użyciem jQuery to http://code.eduweb.pl/bootcamp/users/ </p>

<p>Otrzymane dane wyświetl na stronie w formie nieuporządkowanej listy &lt;ul&gt;, a każdego użytkownika w tagu &lt;li&gt;. Z podanych danych wyłuskaj name, username, email oraz phone. Sformatuj je według własnego uznania.</p>

<p>Podpowiedź: Dane możesz umieścić w elemencie &lt;li&gt; jak tylko chcesz. Jeśli jednak chciałbyś poznać tzw. systemy templatingu, to polecam dodatkowo zapoznać się np. z Handlebars.js. Biblioteka ta pozwoli Ci utworzyć szablon HTML, do którego następnie
    przekażesz dane JSON, a w odpowiedzi otrzymasz gotowy kod HTML z wstawionymi w odpowiednie miejsca danymi. Taki kod pozostanie wstawić na stronę. Jak korzystać z Handlebars.js od A do Z dowiesz się z naszego wpisu na blogu pt. Kompendium wiedzy o
    Handlebars.js.
</p>




<h2>5. Własny plugin dla spisu treści</h2>

<p>Napisz własny plugin jQuery o nazwie toc, który umożliwi dynamiczne generowanie spisu treści na podstawie sekcji zawierających treść. TOC to skrót od Table of Contents i oznacza po prostu Spis Treści.</p>
<p>

    Przygotowałem dla Ciebie pliki startowe, od których powinieneś zacząć. Znajdziesz je tutaj. Zauważ, że plik index.html zawiera kilka sekcji. Każda z nich zawiera nagłówek &lt;h2&gt; oraz treść w postaci paragrafów &lt;p&gt;. Na samym dole strony znajdziesz
    podlinkowane skrypty. Jest to biblioteka jQuery, a także plik jquery.toc.js, w którym powinieneś napisać cały kod pluginu. Poniżej tych skryptów znajduje się skrypt liniowy, wywołujący Twój plugin na zebranych elementach o klasie section. Na samej
    górze strony znajdziesz spis treści, zawarty w elemencie &lt;div&gt; z klasą toc.</p>
<p>Twoim zadaniem będzie usunięcie (ręczne, w kodzie) tego elementu, a następnie napisanie pluginu tak, aby taki element generował i wstawiał go dokładnie w to samo miejsce (podpowiedź: przed pierwszym elementem &lt;section&gt;). Treść odnośnika powinna
    odpowiadać treści nagłówka &lt;h2&gt; każdej sekcji. Dodatkowo stwórz mechanizm, który pozwoli po kliknięciu w wybrany odnośnik spisu treści, przenieść użytkownika do odpowiedniej sekcji (w kodzie, który wstawiłem na sztywno, celowo nie ma tego rozwiązania).
</p>
<p>Uwaga: Jeśli masz czas i chęci, możesz dodać do swojego pluginu możliwość przekazywania opcji. Jedną z opcji mógłby być np. selektor nagłówka, według którego ma być generowana treść odnośnika w spisie treści, inną opcją np. klasa CSS, która powinna zostać
    dodana do elementu &lt;div&gt;, który w tym momencie ma klasę toc. Pomyśl, jakie jeszcze opcje można byłoby dodać, aby przyszli użytkownicy tego pluginu mogli go w łatwy sposób konfigurować pod swoje potrzeby.
</p>










<h1><a name="tydzien5">Tydzień 5</a></h1>

<h2>1. Dekompozycja obiektu z danych JSON</h2>

<p>
    Pamiętasz funkcję getJSON, którą stworzyłeś w tygodniu trzecim? Za jej pomocą pobierz dane JSON z tego adresu: http://code.eduweb.pl/bootcamp/json/. Następnie w funkcji callback, gdzie te dane będą już zamienione na obiekt JavaScript, wykorzystaj dekompozycję
    (destructuring), aby utworzyć za pomocą zapisu ES6 nowe zmienne, które przechowywać będą dane spod kluczy: name, username, email, address.geo[0], address.geo[1], website i company.name. Powyższe dane wstaw do template stringu, dodając odpowiednie
    etykiety jak np. Imię, Firma czy Adres e-mail wraz z niezbędnym kodem HTML, np. w formie linku dla website.</p>

<p> W przypadku współrzędnych geograficznych, wstaw je do takiego linku: &lt;a href=“http://bing.com/maps/ default.aspx?cp=LAT~LON”&gt; Pokaż na mapie &lt;/a&gt;, gdzie LAT i LON zastąpisz kolejno przez address.geo[0] i address.geo[1], które na tym etapie
    powinny być już w zmiennych. Powyższą operację wykonaj oczywiście dla wszystkich obiektów z tablicy. Cały sformatowany ciąg wraz ze wstawkami HTML wstaw na stronę. Sam proces pobierania danych Ajaxem i dalszego ich formatowania, możesz wywołać za
    pomocą kliknięcia jakiegoś przycisku.
</p>

<h2>2. Funkcja tagująca do formatowania cen</h2>

<p>Utwórz funkcję tagującą, która użyta na tzw. template stringu w ES6, sformatuje podane w nim ceny za pomocą kodu: n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');. Zanim jednak dokonasz takiego formatowania, przelicz cenę przez kurs podanej przy wywołaniu
    funkcji tagującej waluty. Zakładamy, że ceny bazowe są podane w złotówkach, a nazwa i kurs waluty dostępna będzie pod window.currencies (mogłaby być w ten sposób dodana np. podczas renderowania strony przez system CMS, a dzięki temu mamy dostęp do
    tych danych w kodzie JavaScript. My jednak wpiszemy to sobie na sztywno). </p>



<p> Przykładowe użycie tego kodu powinno wyglądać następująco: https://pastebin.com/6A3WZF6h. Zauważ, że przed samym template stringiem nie jest podana wyłącznie nazwa funkcji formatPrice, ale jest ona wywoływana z argumentem “GBP”. Jak być może się domyślasz,
    oznacza to, że ta funkcja ma zwrócić inną funkcję, która zostanie użyta jako tag function. Argument jest przekazywany po to, aby można go było zmienić np. na “USD” i wówczas funkcja powinna przeliczyć cenę po kursie dolara, a także dodać przyrostki
    USD do ceny w sformatowanym ciągu. Zwracana funkcja, która posłuży jako funkcja tagująca, powinna mieć zatem dostęp do zmiennej przechowującej kurs oraz nazwę waluty dla podanego argumentu. Zrealizujesz to za pomocą domknięcia.
</p>

<p>
    <strong>www: </strong> https://annason.github.io/FauxBasket/
</p>

<h2>3. Przepisanie konstruktorów z ES5 na klasy w ES6</h2>
<p>
    Wróćmy pamięcią do zadania 4 z tygodnia drugiego. Uzupełniłeś w nim kod tak, aby dziedziczenie prototypowe działało poprawnie. Tutaj znajdziesz kod, od którego należało wtedy zacząć: https://pastebin.com/YEBncx0d. Teraz Twoim zadaniem jest przepisanie
    tego działającego już kodu tak, aby korzystał z klas w ES6. Przepisz zarówno klasę EventEmitter jak i klasę Database, wykorzystując oczywiście dziedziczenie. Samo użycie tego kodu, a więc tworzenie nowych instancji obiektów i korzystanie z ich metod,
    pozostaje bez zmian.
</p>



<h2>4. Iterator dla klasy losującej liczby</h2>

<p>
    W lekcjach drugiego tygodnia, w sekcji Praktyczne projekty znajduje się lekcja pt. Losowanie Dużego Lotka. Utwórz z użyciem zapisu ES6 klasę Lotek, która zawierać będzie metodę getNumbers, a ta z kolei wylosuje liczby według logiki ze wspomnianej lekcji.
    Metoda ta powinna być wywoływana od razu przy tworzeniu nowej instancji obiektu tej klasy. Wylosowane liczby musisz zatem zapisać wewnątrz obiektu. Dodatkowo stwórz metodę checkNumbers, która pozwoli podać 6 liczb jako osobne argumenty i zwróci obiekt,
    który zawierał będzie właściwości numbers, gdzie będzie tablica z trafionymi liczbami oraz count, gdzie będzie liczba trafionych numerów.</p>

<p>To jednak dopiero początek, gdyż najważniejszym celem tego zadania jest dodanie iteratora do tej klasy. Po poprawnym jego dodaniu, kiedy na obiekcie utworzonym z tej klasy użyjemy operatora …spread lub pętli for…of, powinien on zwrócić kolejne wylosowane
    liczby. Przykładowe użycie tego kodu powinno wyglądać następująco: https://pastebin.com/0zygc3hk.</p>

<h2>5. Preloader obrazów z użyciem Promise</h2>

<p>
    W lekcjach czwartego tygodnia, w sekcji Ajax w Praktyce oraz model Pub/Sub znajduje się lekcja pt. Praktyczny przykład: Preloader obrazów. Utwórz podobne rozwiązanie, ale nie korzystając z jQuery, a z natywnych metod DOM API. Zamiast obiektu Deferred
    z jQuery, wykorzystaj Promise dostępną w ES6. Załadowane w tle obrazy zamień następnie na elementy <img> i wstaw na stronę. Przykładowe użycie tego kodu powinno wyglądać następująco: https://pastebin.com/jM7N6NTn
</p>










<h1><a name="tydzien6">Tydzień 6</a></h1>

<h2>1. Wiązanie elementów DOM z danymi z użyciem WeakMap</h2>
<p>Pamiętasz funkcję getJSON, którą stworzyłeś w tygodniu trzecim? Za jej pomocą pobierz dane JSON z tego adresu: http://code.eduweb.pl/bootcamp/json/. Następnie w funkcji callback, gdzie te dane będą już zamienione na tablicę JavaScript, dla każdego elementu
    tej tablicy (będzie to obiekt) utwórz dynamicznie element &lt;li&gt; i wstaw go na stronę, do wcześniej utworzonego elementu &lt;ul&gt;. W elemencie &lt;li&gt; wstaw na początku wyłącznie wartość name z obiektu, ale przypisz też do tego elementu obsługę
    zdarzenia click. Kiedy element zostanie kliknięty, zamień jego wewnętrzny tekst na name oraz email, np. w ten sposób:
</p>

<pre>
<li>Leanne Graham <a href="mailto:Sincere@april.biz">Sincere@april.biz</a></li>
</pre>


<p> Być może zastanawiasz się, jak powiązać element &lt;li&gt; z obiektem, który przechowuje potrzebne dla niego dane. W tym celu wykorzystaj WeakMap, gdzie jako klucz podasz element z drzewa DOM, czyli &lt;li&gt;, a jako wartość obiekt z danymi. Dzięki temu
    po kliknięciu na element &lt;li&gt;, w funkcji obsługi tego zdarzenia pod this znajdzie się odwołanie do tego elementu DOM. Kiedy przekażesz this do WeakMapy, otrzymasz w zamian obiekt z pozostałymi danymi. To z nich wyciągniesz name i email, aby
    zaktualizować tekst elementu &lt;li&gt;. Plusem tego rozwiązania jest fakt, że jeśli element &lt;li&gt; zostanie usunięty, to również obiekt z danymi zostanie usunięty z pamięci, bo takie zadanie realizuje właśnie WeakMap.</p>

<h2>2. Polyfill dla metody Array.from</h2>

<p>Napisz polyfill dla metody Array.from, korzystając wyłącznie z zapisu ES5. W nowoczesnych przeglądarkach ta metoda jest zaimplementowana, a zatem dodając własną, poprzedź ją przedrostkiem my, w ten sposób Array.myFrom. Metoda ta pozwala zamienić obiekt
    tablicopodobny, a więc zawierający numerowane indeksy i właściwość length, na pełnoprawną tablicę. Metodę tę będziesz mógł zatem przetestować np. na zmiennej arguments lub na obiekcie NodeList, który zwrócony zostanie z metody document.querySelectorAll()
    kiedy wyszukasz w drzewie DOM wybranych elementów HTML.
</p>
<p>Zwróć uwagę, że metoda Array.from przyjmuje do trzech argumentów. Jeśli jako drugi argument podana zostanie funkcja, to powinna być ona przekazana do metody map, a więc każdy element tej tablicy powinien być "przepuszczony" przez tę funkcję. Z kolei ostatni
    argument pozwala na ustawienie kontekstu dla tej funkcji mapującej, a więc tego, co znajdzie się pod słowem this wewnątrz tej funkcji.</p>
<p>
    Przykładowe użycie tego kodu powinno wyglądać następująco: https://pastebin.com/q4MC6zXJ
</p>

<h2>3. Praca z modułami ES6</h2>

<p>

    Utwórz kilka niezależnych modułów i z każdego z nich coś wyeksportuj, w dowolny, wybrany przez Ciebie sposób. Niech jeden z modułów zawiera jakąś przykładową klasę z prostymi funkcjonalnościami, drugi inną klasę, która mogłaby dziedziczyć z pierwszej,
    a trzeci (główny moduł) powinien z tych eksportowanych funkcjonalności móc skorzystać.</p>

<p>

    Możesz utworzyć dowolny kod, ale jeśli nie masz pomysłu, to wykorzystaj kod przepisany na standard ES6 z zadania trzeciego z poprzedniego tygodnia. W jednym module umieść klasę EventEmitter, a w innym klasę Database. W module głównym utwórz nową instancję
    z klasy Database tak, jak to miało miejsce we wspomnianym przykładzie. Aby moduły działały poprawnie, wykorzystaj element &gt;script type="module"&gt;.
</p>


<p>

    Uwaga: pamiętaj, że konieczne może być ustawienie odpowiedniej flagi, np. w przeglądarce Chrome po przejściu pod adres chrome://flags włącz Experimental Web Platform features poprzez kliknięcie Enable.

</p>


<h2>4. Funkcja sumująca przekazane liczby</h2>

<p>Stwórz funkcję o nazwie sum, która będzie przyjmowała jeden parametr, którym będzie tablica z liczbami. Funkcja ta powinna zsumować wszystkie liczby z przekazanej tablicy, a następnie zwrócić wynik takiej operacji. Przykładowe jej użycie powinno wyglądać
    tak:
</p>

<pre>sum([1, 10, 5, 4]); // zwraca wartość 20</pre>


<h2>5. Funkcja zwracająca sformatowaną datę</h2>

<p>Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę. Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017. Przykładowe użycie tej funkcji powinno wyglądać następująco:</p>

<pre>getDate(); // zwraca np. “17.04.2017”</pre>
