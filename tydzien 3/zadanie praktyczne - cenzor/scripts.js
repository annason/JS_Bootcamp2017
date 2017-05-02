(function() {

    function TrollKiller(field, restrictedWords) {

        this._field = field;
        this._words = restrictedWords.split(/ *, */g);
        this._regex = new RegExp("(" + this._words.join("|") + ")", "img");

        this._assignEvent();

        // console.log(this._words.join("|"));

    }

    TrollKiller.prototype._assignEvent = function() {
        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);
    }

    TrollKiller.prototype._filterMessage = function(e) {

        var theInput = this._field.value

        this._field.value = theInput.replace(this._regex, "*%&$#!@%^");

        console.log(theInput);

    }

    TrollKiller.prototype._debounce = function() {

    }

    test = new TrollKiller(
        document.querySelector("[name=message]"),
        "kurka wodna , motyla noga, ożesz,psiakość, kurde, niech to gęś kopnie , kurtka wodna, kurtka na wacie, a niech to, kurka, kurde, kurde belans, wuju , je banany, o żesz ty"
    );



})();
