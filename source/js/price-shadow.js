const updatePriceShadow = () => {
  const priceShadowElements = document.querySelectorAll('.gym-membership__price-shadow');
  priceShadowElements.forEach((priceShadowElement) => {
    const priceElement = priceShadowElement.previousElementSibling;
    const price = priceElement.textContent.trim();
    priceShadowElement.textContent = price;
  });
};

export { updatePriceShadow };
