export default {
  init() {
    const label = '.js-label';

    $('.js-input').on('change', (e) => {
      const val = e.target;
      if (val.value !== '') {
        $(val).siblings(label).addClass('_focused');
      } else $(val).siblings(label).removeClass('_focused');
    });
  },
};
