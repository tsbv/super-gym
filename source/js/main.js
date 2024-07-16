import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation],
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
