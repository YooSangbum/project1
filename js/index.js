let swiper = new Swiper('.reviewSwiper', {
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  // loop: true,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1435: {
      slidesPerView: 5,
    },
  },
});

let swiper2 = new Swiper('.pdSwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});
