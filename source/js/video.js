const loadVideo = () => {
  const videoEl = document.querySelector('.video');
  const playButton = document.querySelector('.video__play-button');
  const src = `${videoEl.dataset.src}?autoplay=1`;
  playButton.addEventListener('click', () => {
    if (videoEl.classList.contains('video--loaded')) {
      return;
    }
    videoEl.classList.add('video--loaded');
    videoEl.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" title="Бесплатные интерактивные онлайн-курсы" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
  });
};

export { loadVideo };
