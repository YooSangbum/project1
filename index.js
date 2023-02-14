var swiper = new Swiper('.reviewSwiper', {
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
      slidesPerView:2 ,
    },
    1024: {
      slidesPerView:3,
    }
  }
});
