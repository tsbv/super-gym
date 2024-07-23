const initFormValidation = () => {
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
    input.classList.toggle('form__field--error', !isValid);
    return isValid;
  };
  form.addEventListener('submit', (event) => {
    const isNameValid = validateInput(nameInput, NAME_REGEX, nameError);
    const isPhoneValid = phoneInput.value ? validateInput(phoneInput, PHONE_REGEX, phoneError) : true;
    if (!isNameValid || !isPhoneValid) {
      event.preventDefault();
    }
  });
};

export { initFormValidation };
