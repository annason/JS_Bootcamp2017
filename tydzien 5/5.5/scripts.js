// 5. Preloader obrazów z użyciem Promise
// W lekcjach czwartego tygodnia, w sekcji Ajax w Praktyce oraz model Pub/Sub znajduje się
// lekcja pt. Praktyczny przykład: Preloader obrazów. Utwórz podobne rozwiązanie, ale nie
// korzystając z jQuery, a z natywnych metod DOM API. Zamiast obiektu Deferred z jQuery,
// wykorzystaj Promise dostępną w ES6. Załadowane w tle obrazy zamień następnie na
// elementy <img> i wstaw na stronę. Przykładowe użycie tego kodu powinno wyglądać
// następująco: https://pastebin.com/jM7N6NTn


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

function preloadImages(imgUrls) {



    let promise = new Promise(function(resolve, reject) {

        let counter = 0;
        let length = imgUrls.length;
        let broken = [];
        console.log("total number of images: " + length);

        for (let key in imgUrls) {

            let imgu = document.createElement("img");


            imgu.addEventListener("load", function(e) {
                counter++;
                if (counter === length) {
                    console.log("all images preloaded");
                    resolve([imgUrls, broken]);
                }
            }, false);


            imgu.addEventListener("error", function(e) {
                broken.push(Number(key));
                length--;

                if (counter === length) {
                    console.log("all images preloaded");
                    resolve([imgUrls, broken]);
                }

            }, false);


            imgu.src = imgUrls[key];



        }


    });

    return promise;
}

preloadImages(urls)
    .then(function(imgsInfo) {

        let broken = imgsInfo[1];
        let imgs = imgsInfo[0];
        let docFragment = document.createDocumentFragment();


        console.log("indexes of broken images: "+broken);

        imgs.forEach(function(value,index) {

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


        // tutaj utwórz dla każdego adresu URL
        // z przekazanej tablicy imgs element <img>
        // i wstaw je wszystkie do fragmentu dokumentu,
        // który na końcu zwrócisz, aby był dostępny
        // w kolejnym bloku .then
    })
    .then(function(docFragment) {
        // wstaw otrzymany fragment dokumentu na stronę,
        // aby wczytane obrazy się pokazały
        document.querySelector("output").appendChild(docFragment);

    })
    .catch(function(err) {
        // na wypadek błędu, wyświetl komunikat w konsoli
        console.log(err.message);
    });
