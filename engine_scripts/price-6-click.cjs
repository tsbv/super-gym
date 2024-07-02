module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  // add more ready handlers here...
  await page.waitForFunction(() => {
    return document.fonts.ready.then(() => {
      console.log('Fonts loaded');
      return true;
    });
  });

  await page.evaluate((scenario) => {
    /** force load lazy images */
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((i) => {
      i.removeAttribute('loading');
    });
  }, scenario);

  const getByText = async ($container, text) => {
    const [$el] = await $container.$$(`xpath/.//*[text()='${text}']`)
    return $el ? [$el] : $container.$$(`xpath/.//*[contains(text(), '${text}')]`)
  }

  const container = await page.$(`[data-test="price"]`);
  let [$el] = await getByText(container, '6 месяцев');
  if (!$el) {
    ([$el] = await getByText(container, '6 месяцев'))
  }
  if (!$el) {
    throw new Error(`Element with text "6 месяцев" not found in "price" container`);
  }
  await $el.click();

  await page.waitForTimeout(scenario.delay || 0);

};
