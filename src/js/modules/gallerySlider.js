import Swiper, { Navigation, Pagination } from 'swiper';
import dispatcher from './dispatcher';

export default {
  init() {
    Swiper.use([Navigation, Pagination]);
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideClass: 'gallery-slider__item-thumb',
      wrapperClass: 'gallery-slider__wrapper',
    });
    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      slideClass: 'gallery-slider__item-bg',
      autoScrollOffset: 1,
      wrapperClass: 'gallery-slider__wrapper',
      navigation: {
        nextEl: '.gallery-slider__next',
        prevEl: '.gallery-slider__prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    dispatcher.subscribe(({ type }) => {
      if (type === 'document:loaded') {
        setTimeout(() => {
          galleryTop.update();
          galleryThumbs.update();
        }, 200);
      }
      if (type === 'resize:width') {
        setTimeout(() => {
          galleryTop.update();
          galleryThumbs.update();
        }, 200);
      }
    });
  },
};
