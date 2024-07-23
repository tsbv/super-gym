const loadVideo = () => {
  const video = document.querySelector('.video');
  const src = video.dataset.src;
  video.addEventListener('click', () => {
    if (video.classList.contains('video--loaded')) {
      return;
    }
    video.classList.add('video--loaded');
    video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
  });
};

export { loadVideo };
