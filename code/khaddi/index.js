var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

    var swiper = new Swiper(".heySwiper", {
      slidesPerView: 2,
      spaceBetween:20,
      
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });