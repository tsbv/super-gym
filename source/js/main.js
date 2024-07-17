import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

/* Загрузка видео */
const video = document.querySelector('.video');
const src = video.dataset.src;
video.addEventListener('click', () => {
  if (video.classList.contains('video--loaded')) {
    return;
  }
  video.classList.add('video--loaded');
  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
});

/* Тень цены */
const priceElements = document.querySelectorAll('.gym-membership__price');
priceElements.forEach((priceElement) => {
  const price = priceElement.textContent.trim();
  priceElement.style.setProperty('--price-shadow', `"${price}"`);
});

/* Слайдер отзывов */
const slider = document.querySelector('.swiper');
const slider1 = document.querySelector('.swiper1');
const swiper = new Swiper(slider, {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = new Swiper(slider1, {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
