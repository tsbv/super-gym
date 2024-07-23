import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const initJurySlider = () => {
  const slider1 = document.querySelector('.swiper1');
  const swiper1 = new Swiper(slider1, {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2
      },
      1366: {
        slidesPerView: 4
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiper1.update();
};

export { initJurySlider };
