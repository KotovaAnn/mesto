export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-btn');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    this._popup.addEventListener('click', (evt) => {
      this._overlayClick(evt);
    });
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  //закрытие попапа клавишей ESC
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  //закрытие попапа по оверлею
  _overlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  //добавить слушатель клика иконке закрытия попапа
  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}
