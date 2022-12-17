// Owlcarousel
$(document).ready(function(){
    $(".best-slider").owlCarousel({
        loop:true,
        margin:25,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        //nav:true,
        //center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // Saved Book Carousel
    $(".saved-slider").owlCarousel({
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1.5,
                center:true
            },
            400: {
                items: 1.8
            },
            500: {
                items: 2.5
            },
            600:{
                items:2.5,
            },
            700: {
                items: 3
            },
            1000:{
                items:4.5
            }
        }
    });
    $(".psychology-slider").owlCarousel({
        margin: 25,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

