import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

/* Загрузка видео */
const video = document.querySelector('.video');
const src = video.dataset.src;
video.addEventListener('click', () => {
  if (video.classList.contains('video--loaded')) {
    return;
  }
  video.classList.add('video--loaded');
  video.insertAdjacentHTML('afterbegin', `<iframe class="video__iframe" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
});

/* Тень цены */
const priceElements = document.querySelectorAll('.gym-membership__price');
priceElements.forEach((priceElement) => {
  const price = priceElement.textContent.trim();
  priceElement.style.setProperty('--price-shadow', `"${price}"`);
});

/* Слайдер отзывов */
const slider = document.querySelector('.swiper');
const slider1 = document.querySelector('.swiper1');
const swiper = new Swiper(slider, {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
swiper.update();
const swiper1 = new Swiper(slider1, {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
swiper1.update();

/* Аккордеоны */
const items = document.querySelectorAll('.accordion button');
const allParagraphs = document.querySelectorAll('.accordion-item p');
function toggleAccordion() {
  const paragraph = this.nextElementSibling;
  this.classList.toggle('accordion-item__button--active');
  allParagraphs.forEach((p) => p.setAttribute('aria-hidden', 'true'));
  if (this.classList.contains('accordion-item__button--active')) {
    paragraph.setAttribute('aria-hidden', 'false');
  }
}
items[0].classList.add('accordion-item__button--active');
items.forEach((item) => item.addEventListener('click', toggleAccordion));

/* Табы с ценами абонементов */
const priceListButtons = document.querySelectorAll('.price-list__button');
const gymMembershipPrices = document.querySelectorAll('.gym-membership__price-text');
const gymMembershipPriceElements = document.querySelectorAll('.gym-membership__price');
const priceData = {
  '1 месяц': ['5000', '1700', '2700'],
  '6 месяцев': ['30000', '10200', '16200'],
  '12 месяцев': ['60000', '20400', '32400']
};
const updatePrices = (period) => {
  const prices = priceData[period];
  gymMembershipPrices.forEach((price, index) => {
    price.textContent = prices[index];
    gymMembershipPriceElements[index].style.setProperty('--price-shadow', `"${prices[index]}"`);
  });
};
priceListButtons.forEach((button) => {
  button.addEventListener('click', () => {
    priceListButtons.forEach((btn) => btn.classList.remove('price-list__button--active'));
    button.classList.add('price-list__button--active');
    updatePrices(button.textContent);
  });
});
updatePrices('1 месяц');

const ANSWER_INDEX = 1;
const QUESTION_INDEX = 2;
const faqListButtons = document.querySelectorAll('.faq-list__button');
const faqQuestions = document.querySelectorAll('.accordion-item span:not([class])');
const faqAnswers = document.querySelectorAll('.accordion-item p');
const faqData = {
  'Центр': [
    'Как стать членом фитнес-центра?',
    'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вам на почту.',
    'Где можно посмотреть расписание?',
    'Вы можете ознакомиться с расписание на стойке информации, на нашем официальном сайте. Так же есть возможность оформить подписку на наши новости и получать расписание и обновления на почту каждую неделю.',
    'Есть кулеры в центре? Предоставляются полотенца?',
    'В нашем центре есть несколько кулеров с водой и каждому посетителю предоставляются чистые полотенца.',
    'Сколько тренеров работает в клубе и какова их квалификация?',
    'В нашем клубе работает свыше 10 тренеров, среди них победители и призёры чемпионатов Мира, России, и Омска.'
  ],
  'Абонемент': [
    'Занятия с тренером входят в абонемент?',
    'При посещении тренажерного зала вам необходимо оплатить занятия с тренером отдельно. В зале всегда присутствует дежурный тренер, которому можно задать вопрос,  получить небольшую консультацию по тренажеру или технике выполнения упражнения.',
    'Можно ли заморозить абонемент?',
    'Можно.',
    'Есть ли лимит по посещениям тренажерного зала и групповых занятий?',
    'Нет никаких лимитов. Занимайтесь сколько вам угодно.',
    'Что такое семейный доступ и доступ для друзей?',
    'При покупке абонемента члены вашей семьи и друзья так же могут посещать зал.'
  ],
  'Услуги': [
    'Предлагает ли клуб услуги по консультированию по вопросам питания?',
    'Конечно.',
    'Проводятся ли в клубе какие-либо мероприятия или соревнования?',
    'Проводятся.',
    'Можно ли приобрести в центре спортивное питание?',
    'Можно.',
    'Есть ли в центре детская комната?',
    'Есть.'
  ],
  'Правила': [
    'Есть в фитнес-центре дресс-код?',
    'Для тренировок необходимо иметь предназначенную для этого закрытую спортивную обувь и одежду. Верхняя и нижняя части тела должны быть закрыты (используйте футболки, майки, спортивные брюки, шорты, кроссовки). В целях безопасности, запрещается тренироваться босиком, в пляжных или домашних тапочках и т. п., исключения составляют специальные классы (например, йога, пилатес).',
    'Можно ли приводить с собой детей на тренировки?',
    'Можно.',
    'Какие дополнительные правила посещения центра?',
    'Дополнительных правил нет.',
    'Нужна ли медицинская справка для посещения залов и бассейна?',
    'Нужна.'
  ]
};
const updateFaqContent = (category) => {
  const faqContent = faqData[category] || [];
  faqQuestions.forEach((question, index) => {
    const questionText = faqContent[index * QUESTION_INDEX] || '';
    question.textContent = questionText;
  });
  faqAnswers.forEach((answer, index) => {
    const answerText = faqContent[index * QUESTION_INDEX + ANSWER_INDEX] || '';
    answer.textContent = answerText;
  });
};
faqListButtons.forEach((button) => {
  button.addEventListener('click', () => {
    faqListButtons.forEach((btn) => btn.classList.remove('faq-list__button--active'));
    button.classList.add('faq-list__button--active');
    updateFaqContent(button.textContent);
  });
});

const NAME_REGEX = /^[a-zA-Zа-яА-Я\s]+$/;
const PHONE_REGEX = /^\d+$/;
const form = document.querySelector('.form');
const nameInput = form.querySelector('input[name="name"]');
const phoneInput = form.querySelector('input[name="phone"]');
const nameError = form.querySelector('.form__error--name');
const phoneError = form.querySelector('.form__error--phone');
const validateInput = (input, regex, error) => {
  const isValid = regex.test(input.value);
  error.style.display = isValid ? 'none' : 'block';
  return isValid;
};
form.addEventListener('submit', (event) => {
  const isNameValid = validateInput(nameInput, NAME_REGEX, nameError);
  const isPhoneValid = phoneInput.value ? validateInput(phoneInput, PHONE_REGEX, phoneError) : true;
  if (!isNameValid || !isPhoneValid) {
    event.preventDefault();
  }
});
