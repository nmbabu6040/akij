$(function () {
  // counter part start
  function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
    let current = start;
    const counterElement = document.getElementById(elementId);
    const intervalId = setInterval(() => {
      counterElement.textContent = current + ' ';
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
    loop: true,
    items: 5,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  });

  // product slide by owl
  $('.product_slide').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      576: {
        items: 2,
      },

      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // director part carousel
  $('.director_part_content').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // news and event slick slider
  $('.news_part_slide').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 30,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
});
