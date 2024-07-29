import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initJurySlider = () => {
  const sliderJuriEl = document.querySelector('.swiper-juri');
  const swiperJuri = new Swiper(sliderJuriEl, {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        simulateTouch: false
      },
      1366: {
        slidesPerView: 4,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperJuri.update();
};

export { initJurySlider };
