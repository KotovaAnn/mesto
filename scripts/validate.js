function enableValidation(config) {
const formList = Array.from(document.querySelectorAll(config.formSelector));

formList.forEach((formElement) => {
  formElement.addEventListener('input', (evt) => handleForImput(evt, formElement, config));
  toggleButtonState(formElement, config);
});
}

function handleForImput(evt, formElement, config) {
  const input = evt.target;
  const error = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid) {
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add('popup__form-item_type_error');
  } else {
    hideInputError(error, config, input);
  }
  toggleButtonState(formElement, config, input);
}

function hideInputError(error, config, input) {
  error.classList.remove(config.errorClass);
  error.textContent = ''; 
  input.classList.remove('.popup__form-item_type_error');
}

function toggleButtonState(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  buttonElement.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
  buttonElement.disabled = !formElement.checkValidity();
}

enableValidation(config);