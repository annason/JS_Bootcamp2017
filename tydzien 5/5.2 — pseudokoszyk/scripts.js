// 2. Utwórz funkcję tagującą, która użyta na tzw. template stringu w ES6, sformatuje podane w nim ceny za pomocą kodu: n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
// (pożyczamy ciekawe rozwiązanie z tego postu). Zanim jednak dokonasz takiego formatowania, przelicz cenę przez kurs podanej przy wywołaniu funkcji tagującej waluty.
// Zakładamy, że ceny bazowe są podane w złotówkach, a nazwa i kurs waluty dostępna będzie pod window.currencies (mogłaby być w ten sposób dodana np. podczas
// renderowania strony przez system CMS, a dzięki temu mamy dostęp do tych danych w kodzie JavaScript. My jednak wpiszemy to sobie na sztywno). Przykładowe użycie tego
// kodu powinno wyglądać następująco: https://pastebin.com/6A3WZF6h.
// Zauważ, że przed samym template stringiem nie jest podana wyłącznie nazwa funkcji formatPrice, ale jest ona wywoływana z argumentem “GBP”. Jak być może się domyślasz, oznacza to, że ta funkcja ma zwrócić inną funkcję, która zostanie użyta jako tag function. Argument jest przekazywany po to, aby można go było zmienić np. na “USD” i wówczas funkcja powinna
// przeliczyć cenę po kursie dolara, a także dodać przyrostki USD do ceny w sformatowanym ciągu. Zwracana funkcja, która posłuży jako funkcja tagująca, powinna mieć zatem dostęp do zmiennej przechowującej kurs oraz nazwę waluty dla podanego argumentu. Zrealizujesz to za pomocą domknięcia.


function formatPrice(currency) {

    let exchangeRate = window.currencies[currency]
    let output = "";

    function createString(strings, ...restValues) {

        restValues.forEach(function(value, index) {
            if (typeof value === "number") {

                value = value / exchangeRate;
                restValues[index] = `${ value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') } ${currency}`;
            }
        });

        strings.forEach(function(value, index) {
            output += value;

            if (restValues[index] !== undefined) {
                output += restValues[index];
            }
        });
        // console.log(output);
    }

    function tagFunction(strings, ...restValues) {

        createString(strings, ...restValues);
        return output;
    }
    return tagFunction;
}


// Zakładamy, że taki obiekt byłby dodany
// gdzieś w kodzie HTML w tagu <script>
// przez system CMS generujący widok strony
// window.currencies = {
//     "USD": 3.8078,
//     "EUR": 4.1794,
//     "GBP": 4.9456
// };

let product = {
    name: "Pendrive 16GB",
    price: 23, //zł
    quantity: 4,
};



let {
    name: pName,
    price: pPrice,
    quantity: pQuantity
} = product;


var currencySelect = document.querySelector(".currency");
var currency = currencySelect.options[currencySelect.selectedIndex].value;



currencySelect.onchange = function() {
    currency = this.options[this.selectedIndex].value;
    show();
}

document.querySelector("input.minus").onclick = function(e) {
    if (document.querySelector(".qty").value > 0) {
        document.querySelector(".qty").value = --(document.querySelector(".qty").value);
        document.querySelector(".cart-product-subtotal span").innerHTML = `${product.price * (document.querySelector(".qty").value) } zł`;
        pQuantity = document.querySelector(".qty").value;
    }
show();

}

document.querySelector("input.plus").onclick = function(e) {

        document.querySelector(".qty").value = ++(document.querySelector(".qty").value);
        document.querySelector(".cart-product-subtotal span").innerHTML = `${product.price * (document.querySelector(".qty").value) } zł`;
        pQuantity = document.querySelector(".qty").value;

show();

}
document.querySelector(".cart-product-remove a").onclick = function(e) {
    console.log(this.parentElement.parentElement.innerHTML);

    let rowToremove = this.parentElement.parentElement;

    rowToremove.classList.add("zeroop");
    // rowToremove.parentElement.removeChild(rowToremove);

    setTimeout(function(){rowToremove.parentElement.removeChild(rowToremove);}, 300);
    console.log(parents.parentElement);
}




document.querySelector(".cart-product-thumbnail-name").innerHTML = product.name;
document.querySelector(".cart-product-price span").innerHTML = `${product.price} zł`;
document.querySelector(".qty").value = product.quantity;
document.querySelector(".cart-product-subtotal span").innerHTML = `${product.price * (document.querySelector(".qty").value) } zł`;




let show = function() {
    var stringq = `${pQuantity}`;
    document.querySelector(".calculated").innerHTML =
    formatPrice(currency)`
    <table class="table total">
        <tbody>
            <tr>
                <td class="cart-product-name">
                    <strong>Waluta</strong>
                </td>

                <td class="cart-product-name text-right">
                    <span class="amount"> PLN <i class="fa fa-long-arrow-right" aria-hidden="true"></i> ${currency}</span>
                </td>
            </tr>
            <tr>
                <td class="cart-product-name">
                    <strong>Liczba produktów</strong>
                </td>

                <td class="cart-product-name  text-right">
                    <span class="amount">${stringq}</span>
                </td>
            </tr>
            <tr>
                <td class="cart-product-name">
                    <strong>Cena netto</strong>
                </td>

                <td class="cart-product-name  text-right">
                    <span class="amount">${pPrice * pQuantity}</span>
                </td>
            </tr>
            <tr>
                <td class="cart-product-name">
                    <strong>Cena z VAT (23%)</strong>
                </td>

                <td class="cart-product-name text-right">
                    <span class="amount color lead"><strong>${((pPrice * pQuantity) * 0.23) + pPrice * pQuantity}</strong></span>
                </td>
            </tr>
        </tbody>

    </table>`;


}

window.onload = function() {
    show();
    console.log("zaladowane");
}

document.querySelector(".gobutton").onclick = function(e) {
    e.preventDefault;
    window.location='checkout.html';
}
