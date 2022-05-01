jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
