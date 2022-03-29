const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-btn');

function popupOpened() {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClose);

const popupForm = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input-name');
let inputAboutself = document.querySelector('.popup__input-aboutself');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

inputName.value = profileTitle.textContent;
inputAboutself.value = profileSubtitle.textContent;

function onSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAboutself.value;
  popupClose();
};

popupForm.addEventListener('submit', onSubmit);
