$(function(){
    // banner carousel for autoplay
    const myCarouselElement = document.querySelector('#myCarousel')

    const carousel = new bootstrap.Carousel(carouselExampleCaptions, {
      interval: 2000,
      touch: true,
      ride: "carousel",
      pause: "hover",
      
    })

    // counter part start
 function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
    let current = start;    
    const counterElement = document.getElementById(elementId);
    const intervalId = setInterval(() => {
        counterElement.textContent = current + " ";
        if (current >= end) {
            clearInterval(intervalId);
        } else {
            current++;
        }
    }, interval);
}
// Call the function for the four counters
startCounting('counter1', 1940, 1950, 50);
startCounting('counter2', 10, 31, 50);
startCounting('counter3', 35000, 35053, 50);
startCounting('counter4', 1, 25, 0);
// counter part end   

// Aos Animation
AOS.init();
   
// Company slider part
$('.company_wings_slider').owlCarousel({
    loop:true,
    margin:30,
    stagePadding:15,
    autoplay:true,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:5,
        },
    },
});

// product slide by owl
$('.product_slide').owlCarousel({
    loop:true,
    margin:20,
    stagePadding:15,
    autoplay:true,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:4,
        },
        1200:{
            items:6,
        },
    },
});

// director part carousel
$('.director_part_content').owlCarousel({
    loop:true,
    margin:70,
    stagePadding:15,
    autoplay:false,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:3,
        },
    },
});

// news and event slick slider
$('.news_part_slide').owlCarousel({
    loop:true,
    margin:20,
    stagePadding:15,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:3,
        },
    },
});

});

