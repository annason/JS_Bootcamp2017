import ExchangeRate from "./ExchangeRate.js";

class EurRate extends ExchangeRate {

    constructor(date) {
        super(date);
        this.currency = "eur";
        this.date = this.ifdate(date);
    }

}

///////////////////////////////////////////////////
export default EurRate;
