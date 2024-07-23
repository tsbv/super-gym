const updatePriceShadow = () => {
  const priceShadowNodes = document.querySelectorAll('.gym-membership__price-shadow');
  priceShadowNodes.forEach((priceShadowElement) => {
    const priceElement = priceShadowElement.previousElementSibling;
    const price = priceElement.textContent.trim();
    priceShadowElement.textContent = price;
  });
};

export { updatePriceShadow };
