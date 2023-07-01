import Isotope from 'isotope-layout';

const elem = document.querySelector('.grid');
const iso = new Isotope(elem, {
  itemSelector: '.reviews__item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.reviews__item',
  },
});
