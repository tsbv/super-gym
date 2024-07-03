// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
const video = document.querySelector('.video');
video.addEventListener('click', () => {
  if (video.classList.contains('ready')) {
    return;
  }
  video.classList.add('ready');

  const src = video.dataset.src;

  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
});
