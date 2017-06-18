// 4. Funkcja asynchroniczna dla ładowania obrazów
// Przepisz utworzony w poprzednim tygodniu w zadaniu piątym kod tak, aby korzystał z
// funkcji asynchronicznej (async await). Oczywiście nadal będzie ona współpracować z
// Promise, ale samo jej użycie będzie inne niż w przypadku .then i .catch. Zadbaj również
// o to, aby w ciele funkcji asynchronicznej znalazł się blok try...catch(), który przechwyci
// ewentualne błędy, gdy Promise zakończy się w stanie rejected.



// MOJA UWAGA: w mojej wersji preloadera promise nie przyjmuje wartości reject, ponieważ chcę aby kod wykonywał się dalej.
// resolve przekazuje po prostu indeksy błędnych obrazów, które sa uzuwane z listy przed wczytaniem dodaniem do DOM.

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

async function preloadImages(imgUrls) {

    let counter = 0;
    let length = imgUrls.length;
    let broken = [];



        await new Promise(function(resolve, reject) {

        console.log("total number of images: " + length);

        for (let key in imgUrls) {

            let imgu = document.createElement("img");


            imgu.addEventListener("load", function(e) {
                counter++;
                if (counter === length) {
                    resolve([imgUrls, broken]);
                }
            }, false);


            imgu.addEventListener("error", function(e) {
                broken.push(Number(key));
                length--;

                try {
                    throw new Error("Error while loading image index " + key);
                } catch (e) {
                    console.log(e);
                }

                if (counter === length) {
                    resolve([imgUrls, broken]);
                }

            }, false);

            imgu.src = imgUrls[key];

        }


    });

    return [imgUrls, broken];

}


preloadImages(urls)
    .then(function(imgsInfo) {

        let broken = imgsInfo[1];
        let imgs = imgsInfo[0];
        let docFragment = document.createDocumentFragment();

        // console.log("indexes of broken images: " + broken);

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


        return docFragment;


    })
    .then(function(docFragment) {

        document.querySelector("output").appendChild(docFragment);

    })
    .catch(function(err) {

        console.log(err.message);
    });
