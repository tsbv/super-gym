const initPriceTabs = () => {
  const priceListButtonNodes = document.querySelectorAll('.price-list__button');
  const membershipPriceNodes = document.querySelectorAll('.gym-membership__price-text');
  const membershipPriceShadowNodes = document.querySelectorAll('.gym-membership__price-shadow');
  const priceData = {
    '1 месяц': ['5000', '1700', '2700'],
    '6 месяцев': ['30000', '10200', '16200'],
    '12 месяцев': ['60000', '20400', '32400']
  };
  const updatePrices = (period) => {
    const prices = priceData[period];
    membershipPriceNodes.forEach((price, index) => {
      price.textContent = prices[index];
      membershipPriceShadowNodes[index].textContent = prices[index];
    });
  };
  priceListButtonNodes.forEach((button) => {
    button.addEventListener('click', () => {
      priceListButtonNodes.forEach((btn) => btn.classList.remove('price-list__button--active'));
      button.classList.add('price-list__button--active');
      updatePrices(button.textContent);
    });
  });
  updatePrices('1 месяц');
};

export { initPriceTabs };
