// 4. Funkcja asynchroniczna dla ładowania obrazów
// Przepisz utworzony w poprzednim tygodniu w zadaniu piątym kod tak, aby korzystał z
// funkcji asynchronicznej (async await). Oczywiście nadal będzie ona współpracować z
// Promise, ale samo jej użycie będzie inne niż w przypadku .then i .catch. Zadbaj również
// o to, aby w ciele funkcji asynchronicznej znalazł się blok try...catch(), który przechwyci
// ewentualne błędy, gdy Promise zakończy się w stanie rejected.


const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/BROKEN1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/BROKEN2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/BROKEN3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/BROKEN4.jpg",

];


function preload(urls) {

    let promise = new Promise(function(resolve, reject) {

        let counter = 0;
        let length = urls.length;
        let broken = [];
        let errors = [];



        for (let i = 0; i < length; i++) {

            let imgu = document.createElement("img");

            imgu.addEventListener("load", function(e) {
                counter++;
                if (counter === length) {

                    resolve([urls, broken]);

                }
            }, false);

            imgu.addEventListener("error", function(e) {
                broken.push(Number(i));

                length--;

                let err = new Error("Error while loading image index " + i + "\n" + urls[i]);
                errors.push(err);


                if (counter === length) {

                    reject([urls, broken, errors]); // ponieważ chcę załadować obrazki bez względu na reject, przekazuję te same dane co na resolve

                }

            }, false);

            imgu.src = urls[i];
        }
    });

    return promise;
}

function build(imgsInfo) {

console.log("total number of images: " + imgsInfo[0].length);

    let broken = imgsInfo[1];
    let imgs = imgsInfo[0];
    let docFragment = document.createDocumentFragment();


    console.log("indexes of broken images: " + broken);

    imgs.forEach(function(value, index) {

        if (broken.indexOf(index) === -1) {

            // creating custom structure
            let imgparent = document.createElement("div");
            imgparent.classList.add("col-md-6");
            imgparent.classList.add("imgparent");

            let img = document.createElement("img");
            img.classList.add("img-thumbnail");
            imgparent.appendChild(img);

            // set img src value
            img.src = value;

            // append to document fragment
            docFragment.appendChild(imgparent)
            console.log("successfully loaded: " + index);
        }
    });


    document.querySelector("output").appendChild(docFragment);

};

function showErrors(err) {
    err[2].forEach(function (value, index, array) {
        console.log(value);
});


}

async function showImages(urls) {

    try {
        let pre = await preload(urls);
        build(pre);

    } catch (err) {
        showErrors(err)

        preload(urls)              // jeśli promise zwróci reject, w bloku przechwytywania błędu jeszcze raz pobierze się promise
                                    // ponieważ operacja ładowania poprawnych obrazków nie ma zostać przerwana
            .then(x => build(x))    // promise na resolved odpali funkcję ładującą obrazki w DOM
            .catch(x => build(x))   // to samo stanie się na reject, ponieważ przekazała te same dane
    }                               // efekt: błędy raportują sie w konsoli, pomimo ich wystąpienia poparwne obrazki ładują sie

}

showImages(urls);
