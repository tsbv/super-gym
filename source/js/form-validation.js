const initFormValidation = () => {
  const NAME_REGEX = /^[a-zA-Zа-яА-Я\s]+$/;
  const PHONE_REGEX = /^\d+$/;
  const formEl = document.querySelector('.form');
  const nameInputEl = formEl.querySelector('input[name="name"]');
  const phoneInputEl = formEl.querySelector('input[name="phone"]');
  const nameErrorEl = formEl.querySelector('.form__error--name');
  const phoneErrorEl = formEl.querySelector('.form__error--phone');
  const validateInput = (input, regex, error) => {
    const isValid = regex.test(input.value);
    error.style.display = isValid ? 'none' : 'block';
    input.classList.toggle('form__field--error', !isValid);
    return isValid;
  };
  formEl.addEventListener('submit', (event) => {
    const isNameValid = validateInput(nameInputEl, NAME_REGEX, nameErrorEl);
    const isPhoneValid = phoneInputEl.value ? validateInput(phoneInputEl, PHONE_REGEX, phoneErrorEl) : true;
    if (!isNameValid || !isPhoneValid) {
      event.preventDefault();
    }
  });
};

export { initFormValidation };
