// Podaj przykłady selektorów, które pozwolą znaleźć na stronie następujące elementy:
// - wszystkie elementy <div>, posiadające zarówno klasę grid oraz klasę grid-12.
// - wszystkie elementy <a>, których atrybut href zaczyna się na “http”, znajdujące się w
// elemencie o klasie nav
// - wszystkie elementy <input>, których typ to radio lub checkbox oraz dodatkowo nie są
// aktualnie zaznaczone (checked).
// - wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w
// elemencie <div> z identyfikatorem text
// - wszystkie elementy z klasą pagination-item, które nie są elementem <span>


(function($) {


    $("div.grid.grid-12").addClass("highlight");
    $("a[href^=http]").addClass("highlight");
    $("input[type=radio]:checked, input[type=checkbox]:checked").next().addClass("highlight");
    $("div#text p:empty").first().addClass("highlight");
    $(".pagination-item:not(span)").first().addClass("highlight");

})(jQuery);
