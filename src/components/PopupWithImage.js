import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector('.popup__picture');
    this._PictureTitle = this._popup.querySelector('.popup__title-picture');
  }
  open(item){
    super.open();
    this._popupPicture.src = item.link;
    this._PictureTitle.textContent = item.name;
    this._popupPicture.alt = item.name;
  }
}
