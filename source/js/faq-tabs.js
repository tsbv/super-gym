import { faqData } from './faq-data';

const initFaqTabs = () => {
  const ANSWER_INDEX = 1;
  const QUESTION_INDEX = 2;
  const faqListButtons = document.querySelectorAll('.faq-list__button');
  const faqQuestions = document.querySelectorAll('.accordion-item span:not([class])');
  const faqAnswers = document.querySelectorAll('.accordion-item p');
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
};

export { initFaqTabs };
