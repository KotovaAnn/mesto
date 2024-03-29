import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__form-item');
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popup.querySelector('.popup__save-btn');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  updateLoading(isLoading, messageInitial, messageLoading) {
    if (isLoading) {
      this._submitButton.textContent = messageLoading;
    } else {
      this._submitButton.textContent = messageInitial;
    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.updateLoading(true, "Сохранить", "Сохранение...");
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
