import ExchangeRate from "./ExchangeRate.js";

class UsdRate extends ExchangeRate {

    constructor(date) {
        super(date);
        this.currency = "usd";
        this.date = this.ifdate(date);
    }

}

///////////////////////////////////////////////////
export default UsdRate;
