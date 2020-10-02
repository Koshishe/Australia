import Swiper, { Navigation, Pagination } from 'swiper';
import dispatcher from './dispatcher';

export default {
  init() {
    Swiper.use([Navigation, Pagination]);
    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      slideClass: 'gallery-slider__item-bg',
      autoScrollOffset: 1,
      wrapperClass: 'gallery-slider__wrapper',
      navigation: {
        nextEl: '.gallery-slider__next',
        prevEl: '.gallery-slider__prev',
      },
    });

    dispatcher.subscribe(({ type }) => {
      if (type === 'document:loaded') {
        setTimeout(() => {
          galleryTop.update();
        }, 200);
      }
      if (type === 'resize:width') {
        setTimeout(() => {
          galleryTop.update();
        }, 200);
      }
    });
  },
};
