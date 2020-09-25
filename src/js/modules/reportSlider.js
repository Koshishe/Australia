import Swiper from 'swiper';

export default {
  init() {
    const reportSlider = new Swiper('.js-slider', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.js-slider-pagination',
      },
    });

    console.log(reportSlider);
  },
};
