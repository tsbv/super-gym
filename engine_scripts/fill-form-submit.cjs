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

  let el = await page.$(`[data-test="form"] input[type="text"]`);
  await el.type("Some name");

  el = await page.$(`[data-test="form"] input[type="tel"]`);
  await el.type("+79212345671");

  el = await page.$(`[data-test="form"] button`);
  await el.click();
  await page.waitForTimeout(scenario.delay || 0);
};
