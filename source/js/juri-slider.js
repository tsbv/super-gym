import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const initJurySlider = () => {
  const sliderJuriEl = document.querySelector('.swiper-juri');
  const swiperJuri = new Swiper(sliderJuriEl, {
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
  swiperJuri.update();
};

export { initJurySlider };
