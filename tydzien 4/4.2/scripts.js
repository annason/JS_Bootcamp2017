// 2. Pokazywanie elementów i animacje
// Stwórz kontener z przykładową nawigacją, który domyślnie nie będzie widoczny. Może on
// znajdować się na samej górze strony lub w sidebarze. Następnie umieść na stronie
// przycisk typu “hamburger menu” ☰, po kliknięciu którego wysunie się wcześniej ukryte
// menu. Animacja jaką zastosujesz, zależy od Ciebie. Ponowne kliknięcie przycisku powinno
// chować nawigację.




$(document).ready(function() {

    $('.controler').click(function() {
        $("#nav-icon4").toggleClass('open').toggleClass('hamburger-margin');
        $(".sidenav").toggleClass('sidenav--hidden').toggleClass('sidevan--shadow');
        $("#content").toggleClass('when-menu');
        $(".overlay").toggleClass('overlay--hide');
    });

    $('#nav-icon4').hover(function() {
        $(this).children("span").toggleClass('hovered');
    });

});
