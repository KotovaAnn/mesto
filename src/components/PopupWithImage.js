import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector, item) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector('.popup__picture');
    this._PictureTitle = this._popup.querySelector('.popup__title-picture');
  }
  open(item){
    this._popupPicture.src = item.link;
    this._PictureTitle.textContent = item.name;
    this._popupPicture.alt = item.name;
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    this._popup.addEventListener('click', (evt) => {
      this._overlayClick(evt);
    });
    this.setEventListeners();
  }
}
