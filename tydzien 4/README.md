# JS Bootcamp 2017 - tydzień 4

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

<p>Przygotowałem dla Ciebie pliki startowe, od których powinieneś zacząć. Znajdziesz je tutaj. Zauważ, że plik index.html zawiera kilka sekcji. Każda z nich zawiera nagłówek &lt;h2&gt; oraz treść w postaci paragrafów &lt;p&gt;. Na samym dole strony znajdziesz
    podlinkowane skrypty. Jest to biblioteka jQuery, a także plik jquery.toc.js, w którym powinieneś napisać cały kod pluginu. Poniżej tych skryptów znajduje się skrypt liniowy, wywołujący Twój plugin na zebranych elementach o klasie section. Na samej
    górze strony znajdziesz spis treści, zawarty w elemencie &lt;div&gt; z klasą toc.</p>

<p>Twoim zadaniem będzie usunięcie (ręczne, w kodzie) tego elementu, a następnie napisanie pluginu tak, aby taki element generował i wstawiał go dokładnie w to samo miejsce (podpowiedź: przed pierwszym elementem &lt;section&gt;). Treść odnośnika powinna
    odpowiadać treści nagłówka &lt;h2&gt; każdej sekcji. Dodatkowo stwórz mechanizm, który pozwoli po kliknięciu w wybrany odnośnik spisu treści, przenieść użytkownika do odpowiedniej sekcji (w kodzie, który wstawiłem na sztywno, celowo nie ma tego rozwiązania).
</p>

<p>Uwaga: Jeśli masz czas i chęci, możesz dodać do swojego pluginu możliwość przekazywania opcji. Jedną z opcji mógłby być np. selektor nagłówka, według którego ma być generowana treść odnośnika w spisie treści, inną opcją np. klasa CSS, która powinna zostać
    dodana do elementu &lt;div&gt;, który w tym momencie ma klasę toc. Pomyśl, jakie jeszcze opcje można byłoby dodać, aby przyszli użytkownicy tego pluginu mogli go w łatwy sposób konfigurować pod swoje potrzeby.
</p>
