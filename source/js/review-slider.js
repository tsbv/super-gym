import { Swiper } from './vendor/swiper-bundle.min';
/* import 'swiper/css';
import { Navigation } from 'swiper/modules'; */

const initReviewSlider = () => {
  const sliderReviewEl = document.querySelector('.swiper-review');
  const swiperReview = new Swiper(sliderReviewEl, {
    slidesPerView: 1,
    spaceBetween: 40,
    simulateTouch: true,
    breakpoints: {
      768: {
        simulateTouch: false
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperReview.update();
};

export { initReviewSlider };
