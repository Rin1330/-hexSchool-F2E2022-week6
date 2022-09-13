$(function() {
  console.log('Hello Bootstrap5');
});


var swiper = new Swiper(".course-swiper", {
  autoplay: {
      // disableOnInteraction: false,
      // delay: 0
  },
  // speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
      768: {
          slidesPerView: 6
      },
      992: {
          slidesPerView: 9
      }
  }

});