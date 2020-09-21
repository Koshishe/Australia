export default {
  init() {
    const tab = document.querySelectorAll('.js-tab');
    const content = document.querySelectorAll('.js-tab-text');

    tab[0].classList.add('_is-active');
    content[0].classList.add('_is-active');

    tab.forEach((element, index) => {
      element.addEventListener('click', () => {
        tab.forEach((el) => {
          el.classList.remove('_is-active');
        });
        content.forEach((el) => {
          el.classList.remove('_is-active');
        });
        tab[index].classList.add('_is-active');
        content[index].classList.add('_is-active');
      });
    });
  },
};
