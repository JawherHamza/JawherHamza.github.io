/* Created By Jawher Hamza */

$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $(".navbar").css("background-color", "rgba(254, 82, 76, 1)");
        $("#dash").css("color", "white");
        $("#dash2").css("color", "white");
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
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
    });

    new TypeIt('#example1', {
        strings: 'Welcome to my Portfolio!',
        speed: 50,
        autoStart: false
    });
});


function sendMail() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    if (name != "" && phone != "" && message != "")
        window.open('mailto:jawher_hamza@yahoo.fr?subject=Hi I\'m ' + name + '&body=' + message + ' My Phone Number :' + phone + '');
}

function openLink(search) {
    window.open("http://www.google.com/search?q=" + search, '_blank')
}

document.querySelectorAll('.progress-title').forEach(item => {
    item.addEventListener('click', event => {
        window.open("http://www.google.com/search?q=" + event.srcElement.innerHTML, '_blank')
    })
})


document.getElementById("year").innerHTML = new Date().getFullYear();

new WOW().init();