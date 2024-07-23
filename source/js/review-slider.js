import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const initReviewSlider = () => {
  const sliderReviewEl = document.querySelector('.swiper-review');
  const swiperReview = new Swiper(sliderReviewEl, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperReview.update();
};

export { initReviewSlider };
