$(document).ready(function () {

    /*LOADING*/
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 5000);

    /*STICKY NAVIGATION*/
    $("#about").waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*SCROLL TO*/
    $('.home-button').click(function () {
        $('html, body').animate({
            scrollTop: $('.home-image').offset().top
        }, 1000);
    });

    $('.about-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $('.calendar-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#calendar").offset().top
        }, 1000);
    });

    $('.contact-button').click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    /*MOBILE NAVIGATION*/
    $('.mobile-nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /*CONTACT FORM*/
    var $contactForm = $('#contact-form');
    $contactForm.submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/megan.gerhard326@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function () {
                $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function (data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            },
            error: function (err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
            }
        });
    });
});
