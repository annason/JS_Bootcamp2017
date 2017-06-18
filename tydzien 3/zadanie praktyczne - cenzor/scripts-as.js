(function() {

    function TrollKiller(field, restrictedWords, info) {

        this._info = info;
        this._field = field;
        this._words = restrictedWords.split(/ *, */g);
        this._regex = new RegExp("(" + this._words.join("|") + ")", "img");

        this._shallIwait = false;

        this._assignEvent();
        this._message();

        // console.log(this._words.join("|"));

    }

    TrollKiller.prototype._assignEvent = function() {
        this._field.addEventListener("keyup", this._filterMessage.bind(this), false);
        //  this._field.addEventListener("keyup", this._throttle.bind(this), false);
    };


    TrollKiller.prototype._throttle = function(callback, limit) {

        callback = this._filterMessage;


        var wait = function() {
            this._shallIwait = true;
            // console.log("poczekaj");
        }.bind(this);

        var dontWait = function() {
            this._shallIwait = false;
            // console.log(this);
        }.bind(this);


        if (this._shallIwait == false) {
            wait();

             this._filterMessage();

            setTimeout(dontWait, 250)
        }
    };

    TrollKiller.prototype._filterMessage = function() {

        var theInput = this._field.value;
        console.log(this._field.value);

        this._field.value = theInput.replace(this._regex, "#!@%^");

    };



    TrollKiller.prototype._message = function() {
        if (this._info) {
            this._info.innerHTML += this._words.join(", ");

        }
    };

    test = new TrollKiller(
        document.querySelector("[name=message]"),
        "kurka wodna , motyla noga, ożesz,psiakość, kurde, niech to gęś kopnie , kurtka wodna, kurtka na wacie, a niech to, kurka, kurde, kurde belans, wuju , je banany, o żesz ty",
        document.querySelector("output > div")
    );



})();
