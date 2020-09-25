export default {
  getSlider(element) {
    return element.querySelector('.js-slider');
  },
  pagination(element) {
    return {
      el: element.querySelector('.js-slider-pagination'),
      type: 'bullets',
      clickable: true,
      bulletClass: 'slider-pagination-bullet',
      bulletActiveClass: 'slider-pagination-bullet-active',
      modifierClass: 'slider-pagination-',
      renderBullet(index, className) {
        return `<span class="${ className }"><span></span></span>`;
      },
    };
  },
  updatePagination(element) {
    const prev = $(element).find('.slider-pagination-bullet-active')
    .prev();

    if (prev.length) {
      prev.addClass('slider-pagination-bullet-prev')
      .siblings()
      .removeClass('slider-pagination-bullet-prev');
    } else {
      $(element).find('.slider-pagination-bullet')
      .removeClass('slider-pagination-bullet-prev');
    }
  },
  navigation(element) {
    return {
      prevEl: element.querySelector('.js-slider-prev'),
      nextEl: element.querySelector('.js-slider-next'),
    };
  },
  updateClasses(slider) {
    const { swiper: { isLocked }, classList } = slider;

    // обновление lock класса,
    // доп проверка contains нужна чтобы не тригерить лишний раз observer (в этом случае будет переполнение стека)
    if (isLocked) {
      if (!classList.contains('swiper-slider-lock')) {
        classList.add('swiper-slider-lock');
      }
    } else {
      if (classList.contains('swiper-slider-lock')) {
        classList.remove('swiper-slider-lock');
      }
    }
  },
};
