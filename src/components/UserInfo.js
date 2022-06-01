export default class UserInfo {
  constructor(data, popupSelector) {
    this._data = data;
    this._profileTitle = data.name;
    this._profileSubtitle = data.aboutSelf;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputName = this._form.querySelector('.popup__form-item_input_name');
    this._inputAboutself = this._form.querySelector('.popup__form-item_input_aboutself');
  }
  getUserInfo() {
    this._oldUserInfo = {inputName: ` ${this._profileTitle.textContent}`, inputAboutself: `${this._profileSubtitle.textContent}`};
    this._inputName.value = this._oldUserInfo.inputName;
    this._inputAboutself.value = this._oldUserInfo.inputAboutself;
  }

  setUserInfo(inputValues) {
    this._inputValues = inputValues;
    this._profileTitle.innerHTML = this._inputValues.inputName;
    this._profileSubtitle.innerHTML = this._inputValues.inputAboutself;
  }
}
