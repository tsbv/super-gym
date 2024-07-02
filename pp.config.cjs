const desktopSections = [
  {section: 'hero', misMatchThreshold: 0.7},
  {section: 'about', misMatchThreshold: 0.9},
  {section: 'price', misMatchThreshold: 0.9},
  {section: 'games', misMatchThreshold: 0.9},
  {section: 'juri', misMatchThreshold: 0.9},
  {section: 'features', misMatchThreshold: 0.8},
  {section: 'offers', misMatchThreshold: 0.9},
  {section: 'faq', misMatchThreshold: 0.9},
  {section: 'reviews', misMatchThreshold: 0.7},
  {section: 'form', misMatchThreshold: 0.9},
  {section: 'footer', misMatchThreshold: 1.0}
];

const tabletSections = [
  {section: 'hero', misMatchThreshold: 1.0},
  {section: 'about', misMatchThreshold: 0.8},
  {section: 'price', misMatchThreshold: 0.7},
  {section: 'games', misMatchThreshold: 0.8},
  {section: 'juri', misMatchThreshold: 0.7},
  {section: 'features', misMatchThreshold: 1.6},
  {section: 'offers', misMatchThreshold: 0.7},
  {section: 'faq', misMatchThreshold: 1.6},
  {section: 'reviews', misMatchThreshold: 1.3},
  {section: 'form', misMatchThreshold: 1.0},
  {section: 'footer', misMatchThreshold: 1.9}
];

const mobileSections = [
  {section: 'hero', misMatchThreshold: 3.7},
  {section: 'about', misMatchThreshold: 1.8},
  {section: 'price', misMatchThreshold: 0.9},
  {section: 'games', misMatchThreshold: 1.1},
  {section: 'juri', misMatchThreshold: 0.7},
  {section: 'features', misMatchThreshold: 2.7},
  {section: 'offers', misMatchThreshold: 1.4},
  {section: 'faq', misMatchThreshold: 1.7},
  {section: 'reviews', misMatchThreshold: 2.7},
  {section: 'form', misMatchThreshold: 1.6},
  {section: 'footer', misMatchThreshold: 2.0}
];

const VIEWPORTS = {
  'desktop': {"label": "desktop", "width": 1366, "height": 800},
  'tablet': {"label": "tablet", "width": 768, "height": 1024},
  'mobile': {"label": "mobile", "width": 320, "height": 480}
};

const URL = 'http://localhost:3000/index.html';
const REFERENCE_URL = './figma/index.html';

function generateScenario(section, misMatchThreshold, viewport) {
  return {
    "label": `${section}`,
    "url": URL,
    "referenceUrl": REFERENCE_URL,
    selectors: [`[data-test="${section}"]`],
    misMatchThreshold: misMatchThreshold || 5,
    requireSameDimensions: true,
    delay: 500,
    "viewports": [VIEWPORTS[viewport]]
  };
}


module.exports = {
  "id": "supergym test-pp",
  "onReadyScript": "onReady.cjs",
  "onBeforeScript": "onBefore.cjs",
  "viewports": [
    {
      "label": "mobile",
      "width": 320,
      "height": 480,
    },
    {
      "label": "tablet",
      "width": 768,
      "height": 1024,
    },
    {
      "label": "desktop",
      "width": 1366,
      "height": 800,
    }
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "errorType": "movementDifferenceIntensity",
    "transparency": 0.3,
    scaleToSameSize: false
  },
  "scenarios": [
    ...desktopSections.map(({section, misMatchThreshold}) => generateScenario(section, misMatchThreshold, 'desktop')),
    ...tabletSections.map(({section, misMatchThreshold}) => generateScenario(section, misMatchThreshold, 'tablet')),
    ...mobileSections.map(({section, misMatchThreshold}) => generateScenario(section, misMatchThreshold, 'mobile')),
  ],
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  "paths": {
    "bitmaps_reference": "bitmaps_reference/test-pp",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
    "json_report": "backstop_data/json_report",
  },
  "report": ["browser", "json"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": {"waitUntil": ["load", "networkidle0"], timeout: 40000},
  },
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
