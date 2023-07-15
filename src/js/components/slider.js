import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Parallax
} from 'swiper';


Swiper.use([Navigation, Pagination, Autoplay, Parallax]);

const promotionsSlider = document.querySelector('.promotions__slider')
const reviewsSlider = document.querySelector('.reviews__slider')

if (promotionsSlider) {
  const promotionsSliderSwiper = new Swiper(promotionsSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    loop: true,
    navigation: {
      nextEl: '.promotions__btn--next',
      prevEl: '.promotions__btn--prev',
    },
    pagination: {
      el: '.promotions__pag',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 3,
      }
    }
  });
}

if (reviewsSlider) {
  const reviewsSliderSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    loop: true,
    loopedSlides: 10,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
}
