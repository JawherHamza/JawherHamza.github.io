$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background-color", "rgba(254, 82, 76, 1)");
            $("#dash").css("color", "white");
            $("#dash2").css("color", "white");

        } else {
            $(".navbar").css("background-color", "transparent");
            $("#dash").css("color", "rgba(254, 82, 76, 1)");
            $("#dash2").css("color", "rgba(254, 82, 76, 1)");

        }
    })

    new TypeIt('#example1', {
        strings: 'Bienvenue sur mon Portfolio !',
        speed: 50,
        autoStart: false
    });
});