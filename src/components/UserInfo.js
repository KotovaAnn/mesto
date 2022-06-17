export default class UserInfo {
  constructor(data, popupSelector) {
    this._data = data;
    this._profileTitle = data.name;
    this._profileSubtitle = data.aboutSelf;
    this._avatar = document.querySelector('.profile__avatar');
  }
  getUserInfo() {
    this._oldUserInfo = {inputName: ` ${this._profileTitle.textContent}`, inputAboutself: `${this._profileSubtitle.textContent}`};
    return this._oldUserInfo;
  }

  setUserInfo(data) {
    this._profileTitle.textContent = data.name;
    this._profileSubtitle.textContent = data.about;
    this._avatar.src = data.avatar;
    this._userId = data._id;
  }
  getUserId() {
    return this._userId;
  }
}
