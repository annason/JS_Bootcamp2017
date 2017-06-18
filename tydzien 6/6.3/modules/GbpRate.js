import ExchangeRate from "./ExchangeRate.js";

class GbpRate extends ExchangeRate {

    constructor(date) {
        super(date);
        this.currency = "gbp";
        this.date = this.ifdate(date);
    }

}

///////////////////////////////////////////////////
export default GbpRate;
