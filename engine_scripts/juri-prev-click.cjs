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

  const [prev, next] = await page.$$(`[data-test="juri"] button`);
  await prev.click();
  await page.waitForTimeout(scenario.delay || 0);
};
