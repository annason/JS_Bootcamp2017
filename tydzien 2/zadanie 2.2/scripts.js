// 2. Walidator formularza
// Stwórz prosty walidator formularza, który zawierał będzie pola <input> o typach “text”,
// “email”, “number” oraz element <textarea>. Dodaj do elementu <form> atrybut
// novalidate, aby wyłączyć domyślną walidację przeglądarki. Od Ciebie zależy, czy chcesz
// wyświetlać komunikaty o błędach czy tylko podświetlać niepoprawnie uzupełnione pola np.
// na czerwono. Za poprawnie uzupełnione pole <input> o typie “text” lub pole <textarea>
// uznajemy takie, które ma wpisany przynajmniej jeden znak. W przypadku pola o typie
// “email” sprawdź czy zawiera ono znak @, a w przypadku pola o typie “number” czy podana
// wartość jest liczbą (pamiętaj, że DOM zwróci Ci zawsze wartość o typie String, więc
// musisz znaleźć sposób, jak sprawdzić czy string ten zawiera wyłącznie liczbę).



var button = document.querySelector("form > input[type=submit]"),
    form = document.querySelector("form");




function validation(e) {

    var hasErros = [];

    var email = this.querySelectorAll("input[type=email]"), // create nodelist of mail inputs
        text = this.querySelectorAll("input[type=text]"), // create nodelist of text inputs
        number = this.querySelectorAll("input[type=number]"), // create nodelist of number inputs
        textarea = this.querySelectorAll("textarea"), // create nodelist of textareas
        zip = this.querySelectorAll("[name=zip]"), // create nodelist of inputs with name=zip
        form = this; // the form we are validating



    /// MAIL PART
    function checkMails() {

        var mailHasErros = [];

        for (i = 0; i < email.length; i++) { // for every mail input do this:

            var val = email[i].value;
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

            if (val.match(reg)) { // check if its value contain @
                // if it does do this:
                email[i].classList.remove("mail-error");
                email[i].classList.remove("haserror");
                mailHasErros[i] = 0;

            } else {
                // if it doesn't do this
                email[i].classList.add("mail-error");
                email[i].classList.add("haserror");
                mailHasErros[i] = 1;
            }
        }

        var reportStatus = (mailHasErros.indexOf(1) !== -1) ? 1 : 0; // reduce array of loop reports to one number
        return reportStatus; // return error status number

    }

    /// TXT PART
    function checkTxt() {

        var txtHasErros = [];

        for (i = 0; i < text.length; i++) { // for every text input do this:

            var val = text[i].value;

            if (val.length >= 2) { // check if its value is more than 2 chars
                // if it is do this:
                text[i].classList.remove("text-error");
                text[i].classList.remove("haserror");
                txtHasErros[i] = 0;

            } else {
                // if it don't do this
                text[i].classList.add("text-error");
                text[i].classList.add("haserror");
                txtHasErros[i] = 1;
            }
        }

        var reportStatus = (txtHasErros.indexOf(1) !== -1) ? 1 : 0; // reduce array of loop reports to one number
        return reportStatus; // return error status number

    }


    /// TXTAREA PART
    function checkTxtArea() {

        var txtareaHasErros = [];

        for (i = 0; i < textarea.length; i++) { // for every textarea input do this:

            var val = textarea[i].value.trim();
            var valtxt = textarea[i].textContent.trim();

            //   console.dir(textarea[i]);

            // if (val.length >= 2 && !!val && !!textarea[i].textContent.trim()) { // check if its value is more than 2 chars
            if (val.length >= 2) {
                // if it is do this:
                textarea[i].classList.remove("textarea-error");
                textarea[i].classList.remove("haserror");
                txtareaHasErros[i] = 0;

            } else {
                // if it don't do this
                textarea[i].classList.add("textarea-error");
                textarea[i].classList.add("haserror");
                txtareaHasErros[i] = 1;
                // console.log('oks');
            }
        }

        var reportStatus = (txtareaHasErros.indexOf(1) !== -1) ? 1 : 0; // reduce array of loop reports to one number
        return reportStatus; // return error status number

    }



    /// NUMBER PART
    function checkNumber() {

        var numberHasErros = [];

        for (i = 0; i < number.length; i++) { // for every number input do this:

            var val = number[i].value;


            if ((/^\d+$/).test(val)) { // check if its value is number type
                // isNan && nie jest puste
                // if it is do this:
                number[i].classList.remove("number-error");
                number[i].classList.remove("haserror");
                numberHasErros[i] = 0;

            } else {
                // if it don't do this
                number[i].classList.add("number-error");
                number[i].classList.add("haserror");
                numberHasErros[i] = 1;
            }
        }

        var reportStatus = (numberHasErros.indexOf(1) !== -1) ? 1 : 0; // reduce array of loop reports to one number
        return reportStatus; // return error status number

    }



    /// ZIP PART
    function checkZip() {

        var zipHasErros = [];

        for (i = 0; i < zip.length; i++) { // for every zip input do this:

            var val = zip[i].value;


            if ((val).match(/^\d\d-\d\d\d$/)) { // check if its value is number type

                // if it is do this:
                zip[i].classList.remove("zip-error");
                zip[i].classList.remove("haserror");
                zipHasErros[i] = 0;

            } else {
                // if it don't do this
                zip[i].classList.add("zip-error");
                zip[i].classList.add("haserror");
                zipHasErros[i] = 1;
            }
        }

        var reportStatus = (zipHasErros.indexOf(1) !== -1) ? 1 : 0; // reduce array of loop reports to one number
        return reportStatus; // return error status number

    }


    function removeLabels() {
        var errorDivs = form.querySelectorAll(".errordiv");

        for (i = 0; i < errorDivs.length; i++) {
            form.removeChild(errorDivs[i]);
        }
    }


    function showLabels() {

        removeLabels();

        var errorFields = form.querySelectorAll(".haserror");

        for (i = 0; i < errorFields.length; i++) {

            var errorDiv = document.createElement("div");
            var errorDivNo = "no" + i,
                errorText;

            errorDiv.classList.add("errordiv");
            errorDiv.classList.add(errorDivNo);

            function insertErrorDiv() {
                errorDiv.textContent = "Błąd: " + errorText;
                errorFields[i].parentNode.insertBefore(errorDiv, errorFields[i]);
            }

            if (errorFields[i].type === "email") { // if it's mail type
                errorText = "Nieprawidłowy adres e-mail";
                insertErrorDiv();
            } else if ( (errorFields[i].type === "text" || errorFields[i].nodeName === "TEXTAREA") && errorFields[i].getAttribute("name") !== "zip") { // if it's txt type or texarea
                errorText = "Musisz wpisać conajmniej 2 znaki";
                insertErrorDiv();
            } else if (errorFields[i].type === "number" ) {
                errorText = "Musisz wpisać cyfry";
                insertErrorDiv();
            } else if (errorFields[i].getAttribute("name") === "zip") {
                errorText = "Kod pocztowy musi mieć format 12-345";
                insertErrorDiv();
            }

        }

    }


    function checkAll() { // now check if any function above returned 1;
        hasErros = [checkMails(), checkTxt(), checkTxtArea(), checkNumber(), checkZip()];
        // console.log(hasErros);
        if ((hasErros.indexOf(1)) !== -1) {
            e.preventDefault();
            showLabels();
        } else {
            return true;
        }
    }
    checkAll();
}

form.addEventListener("submit", validation, false);
