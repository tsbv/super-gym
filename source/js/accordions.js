const initAccordions = () => {
  const accordionButtonNodes = document.querySelectorAll('.accordion button');
  const accordionContentNodes = document.querySelectorAll('.accordion-item p');
  const toggleAccordion = (event) => {
    const button = event.currentTarget;
    const paragraph = button.nextElementSibling;
    button.classList.toggle('accordion-item__button--active');
    accordionContentNodes.forEach((accordionContentNode) => accordionContentNode.setAttribute('aria-hidden', 'true'));
    if (button.classList.contains('accordion-item__button--active')) {
      paragraph.setAttribute('aria-hidden', 'false');
    }
  };
  accordionButtonNodes[0].classList.add('accordion-item__button--active');
  accordionButtonNodes.forEach((accordionButtonNode) => accordionButtonNode.addEventListener('click', toggleAccordion));
};

export { initAccordions };
