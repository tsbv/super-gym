import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initReviewSlider = () => {
  const sliderReviewEl = document.querySelector('.swiper-review');
  const swiperReview = new Swiper(sliderReviewEl, {
    modules: [Navigation],
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
