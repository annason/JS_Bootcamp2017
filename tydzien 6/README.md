# JS Bootcamp 2017 - tydzień 6



<h2>1. Wiązanie elementów DOM z danymi z użyciem WeakMap</h2>

<p>Pamiętasz funkcję getJSON, którą stworzyłeś w tygodniu trzecim? Za jej pomocą pobierz dane JSON z tego adresu: http://code.eduweb.pl/bootcamp/json/. Następnie w funkcji callback, gdzie te dane będą już zamienione na tablicę JavaScript, dla każdego elementu
    tej tablicy (będzie to obiekt) utwórz dynamicznie element &lt;li&gt; i wstaw go na stronę, do wcześniej utworzonego elementu &lt;ul&gt;. W elemencie &lt;li&gt; wstaw na początku wyłącznie wartość name z obiektu, ale przypisz też do tego elementu obsługę
    zdarzenia click. Kiedy element zostanie kliknięty, zamień jego wewnętrzny tekst na name oraz email, np. w ten sposób:
</p>

<pre><li>Leanne Graham <a href="mailto:Sincere@april.biz">Sincere@april.biz</a></li></pre>


<p> Być może zastanawiasz się, jak powiązać element &lt;li&gt; z obiektem, który przechowuje potrzebne dla niego dane. W tym celu wykorzystaj WeakMap, gdzie jako klucz podasz element z drzewa DOM, czyli &lt;li&gt;, a jako wartość obiekt z danymi. Dzięki temu
    po kliknięciu na element &lt;li&gt;, w funkcji obsługi tego zdarzenia pod this znajdzie się odwołanie do tego elementu DOM. Kiedy przekażesz this do WeakMapy, otrzymasz w zamian obiekt z pozostałymi danymi. To z nich wyciągniesz name i email, aby
    zaktualizować tekst elementu &lt;li&gt;. Plusem tego rozwiązania jest fakt, że jeśli element &lt;li&gt; zostanie usunięty, to również obiekt z danymi zostanie usunięty z pamięci, bo takie zadanie realizuje właśnie WeakMap.</p>

<h2>2. Polyfill dla metody Array.from</h2>

<p>Napisz polyfill dla metody Array.from, korzystając wyłącznie z zapisu ES5. W nowoczesnych przeglądarkach ta metoda jest zaimplementowana, a zatem dodając własną, poprzedź ją przedrostkiem my, w ten sposób Array.myFrom. Metoda ta pozwala zamienić obiekt
    tablicopodobny, a więc zawierający numerowane indeksy i właściwość length, na pełnoprawną tablicę. Metodę tę będziesz mógł zatem przetestować np. na zmiennej arguments lub na obiekcie NodeList, który zwrócony zostanie z metody document.querySelectorAll()
    kiedy wyszukasz w drzewie DOM wybranych elementów HTML.</p>

<p>Zwróć uwagę, że metoda Array.from przyjmuje do trzech argumentów. Jeśli jako drugi argument podana zostanie funkcja, to powinna być ona przekazana do metody map, a więc każdy element tej tablicy powinien być "przepuszczony" przez tę funkcję. Z kolei ostatni
    argument pozwala na ustawienie kontekstu dla tej funkcji mapującej, a więc tego, co znajdzie się pod słowem this wewnątrz tej funkcji.</p>
<p>
    Przykładowe użycie tego kodu powinno wyglądać następująco: https://pastebin.com/q4MC6zXJ
</p>

<h2>3. Praca z modułami ES6</h2>

<p> Utwórz kilka niezależnych modułów i z każdego z nich coś wyeksportuj, w dowolny, wybrany przez Ciebie sposób. Niech jeden z modułów zawiera jakąś przykładową klasę z prostymi funkcjonalnościami, drugi inną klasę, która mogłaby dziedziczyć z pierwszej, a trzeci (główny moduł) powinien z tych eksportowanych funkcjonalności móc skorzystać.</p>


<p>
Możesz utworzyć dowolny kod, ale jeśli nie masz pomysłu, to wykorzystaj kod przepisany na standard ES6 z zadania trzeciego z poprzedniego tygodnia. W jednym module umieść klasę EventEmitter, a w innym klasę Database. W module głównym utwórz nową instancję z klasy Database tak, jak to miało miejsce we wspomnianym przykładzie. Aby moduły działały poprawnie, wykorzystaj element &gt;script type="module"&gt;.
</p>


<p>
    Uwaga: pamiętaj, że konieczne może być ustawienie odpowiedniej flagi, np. w przeglądarce Chrome po przejściu pod adres chrome://flags włącz Experimental Web Platform features poprzez kliknięcie Enable.
</p>


<h2>4. Funkcja asynchroniczna dla ładowania obrazów</h2>

<p>Przepisz utworzony w poprzednim tygodniu w zadaniu czwartym kod tak, aby korzystał z
funkcji asynchronicznej (async await). Oczywiście nadal będzie ona współpracować z
Promise, ale samo jej użycie będzie inne niż w przypadku .then i .catch. Zadbaj również
o to, aby w ciele funkcji asynchronicznej znalazł się blok try...catch(), który przechwyci
ewentualne błędy, gdy Promise zakończy się w stanie rejected.
</p>



<h2>5. Bundlowanie modułów z webpack i praca z Babel</h2>

<p>Z napisanego w zadaniu trzecim kodu (lub innego, jeśli chcesz) utwórz z pomocą
webpacka bundle, a więc jeden plik, który zawierał będzie wszystkie potrzebne moduły.
Dodatkowo skonfiguruj babel-loader tak, aby kod napisany w standardzie ES6, został
przetranspilowany do kodu w standardzie ES5 (babel-preset-es2015), a także
zminifikowany.</p>
<p>Przed umieszczeniem plików dla tego zadania na Slacku, usuń katalog node_modules, ale
pozostaw plik package.json, w którym wylistowane powinny być wszystkie potrzebne
zależności tego projektu. Dzięki temu jednym poleceniem (npm install) będzie można
zainstalować te zależności.</p>
