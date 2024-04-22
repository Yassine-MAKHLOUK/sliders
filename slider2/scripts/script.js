
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    autoplay: { delay: 3000 },
		speed: 1000,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  
  // swiper.slideTo(0, 1000, true);
  