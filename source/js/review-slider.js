import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const initReviewSlider = () => {
  const slider = document.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiper.update();
};

export { initReviewSlider };
