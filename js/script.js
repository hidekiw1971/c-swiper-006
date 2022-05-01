jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  let swipeOption = {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  };
  new Swiper(".swiper01", swipeOption);
});
