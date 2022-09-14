$(function() {
  console.log('Hello Bootstrap5');
});


const courseSwiper = new Swiper(".course-swiper", {
  autoplay: {
      disableOnInteraction: false,
      delay: 0
  },
  speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 2,
  //多欄
  breakpoints: {
      576: {
          slidesPerView: 4
      },
      768: {
          slidesPerView: 6
      },
      992: {
          slidesPerView: 9
      }
  }
});

const feedbackSwiper = new Swiper('.section-feedback .swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const buttonSwiper = new Swiper(".buttonWrap.swiper", {
//   speed: 1500,
//   // loop: true,
//   spaceBetween: 16,
//   slidesPerView: 6,
//   //多欄
//   breakpoints: {
//       768: {
//           // slidesPerView: 6
//       },
//       992: {
//           // slidesPerView: 6
//       }
//   }
// });