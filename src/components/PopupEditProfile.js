import Popup from './Popup.js';
export default class PopupEditProfile extends Popup {
  constructor({popupSelector, handleFormEditSubmit}) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._input = this._popupForm.querySelector('.popup__form-item');
    this._handleFormEditSubmit = handleFormEditSubmit;
    this._submitButton = this._popup.querySelector('.popup__save-btn');
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
      this._handleFormEditSubmit(this._input.value);
    });
  }
}
