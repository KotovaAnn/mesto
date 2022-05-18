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
      (this._form).addEventListener('input', (evt) => {
        this._input = evt.target;
        this._handleForInput();
        this.toggleButtonState();
      });
    }

    _handleForInput() {
      this._error = document.querySelector(`#${this._input.id}-error`);

      if (!this._input.validity.valid) {
        this._error.textContent = this._input.validationMessage;
        this._error.classList.add(this._config.errorClass);
        this._input.classList.add(this._config.inputErrorClass);
      } else {
        this._error.classList.remove(this._config.errorClass);
        this._input.classList.remove(this._config.inputErrorClass);
        this._error.textContent = '';
      }

      this.toggleButtonState();
    }

    toggleButtonState() {
      this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
      this._buttonElement.disabled = !this._form.checkValidity();
    }

    resetErrore() {
      this._inputList.forEach((input) => {
        input.classList.remove(this._config.inputErrorClass);
        this._resetError = this._form.querySelector(`#${input.id}-error`);
        this._resetError.classList.remove(this._config.errorClass);
        this._resetError.textContent = '';
        })
      this.toggleButtonState();
      }
    }
