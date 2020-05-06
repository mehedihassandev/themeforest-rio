(function () {

    var ld = document.querySelector(".load");
    var bdy = document.querySelector("body");

    window.addEventListener("load", function () {

        ld.classList.add("load_finish");
        bdy.style.overflowY = 'scroll';


    })



})();


$(function () {
"use strict";

    // Special slider
    $('.special-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });


    // Team slider
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });

    // Review slider
    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 2500,
        
    });

    // IMG slider
    $('.img-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 6,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 6,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 4,
                }
    }
  ]
    });

    // Blog slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        speed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });



    //Menu Scroll
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('#navbar').addClass('bg');
        } else {
            $('#navbar').removeClass('bg');
        }

        //back2top
        if (scrolling > 150) {
            $('.back2top').fadeIn(500);
        } else {
            $('.back2top').fadeOut(500);
        }
    });



    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 75
                }, 1500);
                return false;
            }
        }
    });




    //Back To Top  
    $('.back2top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



    //Gallary Part Tab
    var containerEl = document.querySelector('.gallarytab');
    var mixer = mixitup(containerEl);
    
    var containerEl = document.querySelector('.menutab');
    var mixer = mixitup(containerEl);
    
    //Veno Box
    $('.venobox').venobox();

});
