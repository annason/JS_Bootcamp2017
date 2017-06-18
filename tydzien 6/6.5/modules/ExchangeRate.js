class ExchangeRate {

    constructor(currency, date) {
        this.currency = currency;
        this.date = this.ifdate(date);

    }

    ajax(type, currency, date) {
        currency = this.currency;
        let url;
        date = this.date || "";

        // console.log(date);

        if (type === "mid") {
            url = `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/${date}?format=json`
        } else if (type === "sellBuy") {
            url = `http://api.nbp.pl/api/exchangerates/rates/c/${currency}/${date}?format=json`
        }

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send(null);
        let promise = new Promise(function(resolve, reject) {
            xhr.onload = function() {
                let response = xhr.response;
                if (xhr.status === 200) {

                    resolve(JSON.parse(response));
                } else if (xhr.status > 200) {
                    reject(new Error('xhr status > 200'))
                }
            }
            xhr.onerror = function() {
                reject(new Error('xhr onerror'))
            }
        });
        return promise;
    }

    getData(callback) {

        let obj = {}

        Promise.all([

            this.ajax("mid"),
            this.ajax("sellBuy")

        ]).then(resolve => {

            obj.currency = resolve[0].code;
            obj.name = resolve[0].currency;
            obj.midRate = resolve[0].rates[0].mid;
            obj.date = resolve[0].rates[0].effectiveDate;
            obj.sellbuydate = resolve[1].rates[0].effectiveDate;
            obj.sell = resolve[1].rates[0].ask;
            obj.buy = resolve[1].rates[0].bid;

            callback(obj);

        }).catch(error => console.log(error));

    }

    ifdate(date) {
        if (Boolean(date)) {

            if (!(/^\d\d\d\d-\d\d-\d\d$/g.test(date))) {
                console.log("date was ignored due to incorrect format");
                return false;
            }

            return date;
        } else if (!Boolean(date)) {
            return false;
        }

    }
}

///////////////////////////////////////////////////

export default ExchangeRate;
