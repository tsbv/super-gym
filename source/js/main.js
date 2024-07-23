import { loadVideo } from './video.js';
import { initPriceTabs } from './price-tabs.js';
import { updatePriceShadow } from './price-shadow.js';
import { initJurySlider } from './juri-slider.js';
import { initReviewSlider } from './review-slider.js';
import { initFaqTabs } from './faq-tabs.js';
import { initAccordions } from './accordions.js';
import { initFormValidation } from './form-validation.js';

loadVideo(); // Загрузка видео
initPriceTabs(); // Табы с ценами абонементов
updatePriceShadow(); // Тень цены
initJurySlider(); // Слайдер жюри
initReviewSlider(); // Слайдер отзывов
initFaqTabs(); // Табы с аккордеонами
initAccordions(); // Аккордеоны
initFormValidation(); // Валидация формы
