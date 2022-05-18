export class FormValidator {
    _form;
    _config;
    _inputList;

    constructor(formElement, config) {
      this._form = formElement;
      this._config = config;
      this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
      this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    }
   enableValidation() {
      this._form.addEventListener('input', (evt) => {
        const input = evt.target;
        this._handleForInput(input);
        this.toggleButtonState();
      });
    }

    _hideError(input) {
      this._error = this._form.querySelector(`#${input.id}-error`);
      this._error.classList.remove(this._config.errorClass);
      this._error.textContent = '';
      input.classList.remove(this._config.inputErrorClass);
    }
    _showError(input) {
      this._error = this._form.querySelector(`#${input.id}-error`);
      this._error.textContent = input.validationMessage;
      this._error.classList.add(this._config.errorClass);
      input.classList.add(this._config.inputErrorClass);
    }

    _handleForInput(input) {
      if (!input.validity.valid) {
        this._showError(input);
      } else {
        this._hideError(input);
      }

      this.toggleButtonState();
    }

    toggleButtonState() {
      this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
      this._buttonElement.disabled = !this._form.checkValidity();
    }

    resetErrore() {
      this._inputList.forEach((input) => {
        this._hideError(input);
      });
      this.toggleButtonState();
      }
    }
