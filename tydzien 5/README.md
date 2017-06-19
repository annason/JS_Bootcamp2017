# JS Bootcamp 2017 - tydzień 5


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
