import Swiper, { Navigation, Pagination } from 'swiper';

export default {
  init() {
    Swiper.use([Navigation, Pagination]);
    const reportSlider = new Swiper('.js-slider', {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    });

    console.log(reportSlider);
  },
};
