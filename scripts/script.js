const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-btn');
let inputName = document.querySelector('.popup__form-item_input_name');
let inputAboutself = document.querySelector('.popup__form-item_input_aboutself');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');

function openedPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAboutself.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function onSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAboutself.value;
  closePopup();
};

popupForm.addEventListener('submit', onSubmit);
editButton.addEventListener('click', openedPopup);
closeButton.addEventListener('click', closePopup);
/*
let buttonLike = document.querySelectorAll('.elements__button-like')[0];
let buttonLike1 = document.querySelectorAll('.elements__button-like')[1];
let buttonLike2 = document.querySelectorAll('.elements__button-like')[2];
let buttonLike3 = document.querySelectorAll('.elements__button-like')[3];
let buttonLike4 = document.querySelectorAll('.elements__button-like')[4];
let buttonLike5 = document.querySelectorAll('.elements__button-like')[5];

function likeToggle() {
  this.classList.toggle('elements__button-like_no-active');
  this.classList.toggle('button_active');
}

buttonLike.addEventListener('click', likeToggle);
buttonLike1.addEventListener('click', likeToggle);
buttonLike2.addEventListener('click', likeToggle);
buttonLike3.addEventListener('click', likeToggle);
buttonLike4.addEventListener('click', likeToggle);
buttonLike5.addEventListener('click', likeToggle);
*/
