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
swiper.update();
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
swiper1.update();

/* Аккордеоны */
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  if (itemToggle === 'false') {
    this.setAttribute('aria-expanded', 'true');
  } else {
    this.setAttribute('aria-expanded', 'false');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));

/* Табы с ценами абонементов */
const priceListButtons = document.querySelectorAll('.price-list__button');
const gymMembershipPrices = document.querySelectorAll('.gym-membership__price-text');
const gymMembershipPriceElements = document.querySelectorAll('.gym-membership__price');
const priceData = {
  '1 месяц': ['5000', '1700', '2700'],
  '6 месяцев': ['30000', '10200', '16200'],
  '12 месяцев': ['60000', '20400', '32400']
};
const updatePrices = (period) => {
  const prices = priceData[period];
  gymMembershipPrices.forEach((price, index) => {
    price.textContent = prices[index];
    gymMembershipPriceElements[index].style.setProperty('--price-shadow', `"${prices[index]}"`);
  });
};
priceListButtons.forEach((button) => {
  button.addEventListener('click', () => {
    priceListButtons.forEach((btn) => btn.classList.remove('price-list__button--active'));
    button.classList.add('price-list__button--active');
    updatePrices(button.textContent);
  });
});
updatePrices('1 месяц');
