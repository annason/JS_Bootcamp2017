// let xhr = new XMLHttpRequest();
//
// window.currencies = {
// };
//
// xhr.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json", true);
// xhr.send(null);
//
// xhr.onload = function euroRate(){
//     let obj = JSON.parse(xhr.response);
//
//     let {
//         "rates":[{
//         mid:euro,
//         }]
//     } = obj || {};
//     window.currencies["EUR"] = euro;
// }

window.currencies = {
    "USD": 3.8078,
    "GBP": 4.9456
};

const EUROURL = "http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json";
const USDURL = "http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json";
const GBPURL = "http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json";


function ajax(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    let prom = new Promise(function(resolve, reject) {

        xhr.onload = function() {
            // parse to object
            let obj = JSON.parse(xhr.response);
            //deconstruct
            let {
                "rates": [{
                    mid: rate,
                    effectiveDate: date,
                }]
            } = obj || {};

            //standard status promise control
            if (xhr.status === 200) {
                resolve([rate, date])
            } else {
                reject("ajax error");
            }
        }

        xhr.onerror = function() {
            reject("ajax error");

        }

    });

    xhr.send(null);

    return prom;
}

ajax(EUROURL).then(
    function(rateAnddate) {
        window.currencies["EUR"] = rateAnddate[0];
        document.querySelector(".rates li:nth-child(3)").innerHTML += window.currencies["EUR"] + "<span>kurs NBP z dnia: " + rateAnddate[1] + "</span>";
    }).catch(err => console.log(err));


    ajax(USDURL).then(
        function(rateAnddate) {
            window.currencies["USD"] = rateAnddate[0];
            document.querySelector(".rates li:nth-child(2)").innerHTML += window.currencies["USD"] + "<span>kurs NBP z dnia: " + rateAnddate[1] + "</span>";
        }).catch(err => console.log(err));



            ajax(GBPURL).then(
                function(rateAnddate) {
                    window.currencies["GBP"] = rateAnddate[0];
                    document.querySelector(".rates li:nth-child(1)").innerHTML += window.currencies["GBP"] + "<span>kurs NBP z dnia: " + rateAnddate[1] + "</span>";
                }).catch(err => console.log(err));
