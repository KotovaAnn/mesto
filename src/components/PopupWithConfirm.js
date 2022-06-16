import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('click', (evt) => {
      this._handleSubmit();
    });
  }
}
