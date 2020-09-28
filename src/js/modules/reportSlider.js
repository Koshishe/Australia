import Swiper, { Navigation, Pagination } from 'swiper';

export default {
  init() {
    Swiper.use([Navigation, Pagination]);
    const reportSlider = new Swiper('.js-slider', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    console.log(reportSlider);
  },
};
