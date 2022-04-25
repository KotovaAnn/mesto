function enableValidation(config) {
const formList = Array.from(document.querySelectorAll(config.formSelector));

formList.forEach((formElement) => {
  formElement.addEventListener('submit', handleForSubmit);
  formElement.addEventListener('input', (evt) => handleForImput(evt, formElement, config));
  toggleButtonState(formElement, config);
});
}

function handleForSubmit(evt, formElement) {
  evt.preventDefault();
}

function handleForImput(evt, formElement, config) {
  const input = evt.target;
  const error = document.querySelector(`.${input.id}-error`);
  if (!input.validity.valid) {
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
  } else {
    error.classList.remove(config.errorClass);
    error.textContent = '';
  }
  toggleButtonState(formElement, config);
}

function toggleButtonState(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  buttonElement.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
  buttonElement.disabled = !formElement.checkValidity();
}

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_type_no-active',
  errorClass: 'popup__form-input-error'
});
