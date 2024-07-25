import { loadVideo } from './video';
import { initPriceTabs } from './price-tabs';
import { updatePriceShadow } from './price-shadow';
import { initJurySlider } from './juri-slider';
import { initReviewSlider } from './review-slider';
import { initFaqTabs } from './faq-tabs';
import { initAccordions } from './accordions';
import { initFormValidation } from './form-validation';
import { initMembershipHover } from './membership-card-hover';

loadVideo(); // Загрузка видео
initPriceTabs(); // Табы с ценами абонементов
updatePriceShadow(); // Тень цены
initJurySlider(); // Слайдер жюри
initReviewSlider(); // Слайдер отзывов
initFaqTabs(); // Табы с аккордеонами
initAccordions(); // Аккордеоны
initFormValidation(); // Валидация формы
initMembershipHover(); // Карточка абонемента при наведении на кнопку внутри неё
