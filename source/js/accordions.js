const initAccordions = () => {
  const items = document.querySelectorAll('.accordion button');
  const allParagraphs = document.querySelectorAll('.accordion-item p');
  const toggleAccordion = (event) => {
    const button = event.currentTarget;
    const paragraph = button.nextElementSibling;
    button.classList.toggle('accordion-item__button--active');
    allParagraphs.forEach((p) => p.setAttribute('aria-hidden', 'true'));
    if (button.classList.contains('accordion-item__button--active')) {
      paragraph.setAttribute('aria-hidden', 'false');
    }
  };
  items[0].classList.add('accordion-item__button--active');
  items.forEach((item) => item.addEventListener('click', toggleAccordion));
};

export { initAccordions };
