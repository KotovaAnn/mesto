import { config } from '../utils.js';

export class FormValidator {
    _form;
    _config;
    constructor(formElement, config) {
      this._form = formElement;
      this._config = config;
    }

    _handleForInput() {
      const inputList = (this._form).querySelectorAll((this._config).inputSelector);
      inputList.forEach((input) => {
        const error = document.querySelector(`#${input.id}-error`);
        if (!input.validity.valid) {
          error.textContent = input.validationMessage;
          error.classList.add(this._config.errorClass);
          input.classList.add('popup__form-item_type_error');
        } else {
          error.classList.remove(this._config.errorClass);
          error.textContent = '';
          input.classList.remove('popup__form-item_type_error');
        }
      });
      this.toggleButtonState();
    }

    toggleButtonState() {
      const buttonElement = this._form.querySelector(this._config.submitButtonSelector);
      buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
      buttonElement.disabled = !this._form.checkValidity();
    }

    enableValidation() {
      (this._form).addEventListener('input', (evt) => {
        this._handleForInput();
        this.toggleButtonState();
      });
    }
  }


