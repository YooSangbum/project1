let swiper = new Swiper('.reviewSwiper', {
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// $('.btn_gotop').click(function () {
//   $('html, body').animate({ scrollTop: 0 }, 400);
//   return false;
// });

let swiper2 = new Swiper('.pdSwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});
