import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';


Swiper.use([Navigation, Pagination]);

const promotionsSlider = document.querySelector('.promotions__slider')

if (promotionsSlider) {
  const promotionsSliderSwiper = new Swiper(promotionsSlider, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 5,
    navigation: {
      nextEl: '.promotions__btn--next',
      prevEl: '.promotions__btn--prev',
    },
    pagination: {
      el: '.promotions__pag',
      type: 'bullets',
      clickable: true,
    },
  });
}
