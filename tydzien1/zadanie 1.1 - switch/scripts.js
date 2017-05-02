var price = 100,
    purchases = prompt("Liczba zakupionych sztuk:"),
    discount;

switch (true) { // nie rozumiem dlaczego działa z "true" a nie chce działać z "purchases"
    case (purchases < 5):
        discount = 0;
        break;
    case (purchases >= 5 && purchases <= 20):
        discount = 5;
        break;
    case (purchases >= 21 && purchases <= 50):
        discount = 10;
        break;
    case (purchases >= 51 && purchases <= 100):
        discount = 15;
        break;
    case (purchases >= 101):
        discount = 20;
        break;
}


var afterDiscount = price - (discount / 100 * price);

console.log("Podstawowa cena produktu to " + price + "zł, po obniżce to " + afterDiscount + "zł\n(Kupiłeś dotąd:" + purchases + "szt. Rabat " + discount + "%)");
