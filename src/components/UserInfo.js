export default class UserInfo {
  constructor(data, popupSelector) {
    this._data = data;
    this._profileTitle = data.name;
    this._profileSubtitle = data.aboutSelf;
  }
  getUserInfo() {
    this._oldUserInfo = {inputName: ` ${this._profileTitle.textContent}`, inputAboutself: `${this._profileSubtitle.textContent}`};
    return this._oldUserInfo;
  }

  setUserInfo(inputValues) {
    this._inputValues = inputValues;
    this._profileTitle.innerHTML = this._inputValues.inputName;
    this._profileSubtitle.innerHTML = this._inputValues.inputAboutself;
  }
}
