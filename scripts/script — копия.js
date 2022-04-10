const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const containerElements = document.querySelector('.elements__group-elements');
const template = document.querySelector('.template');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-btn');
const closeButtonPopupAdded = document.querySelector('.popup__close-btn_place_popup__add-element');
let inputName = document.querySelector('.popup__form-item_input_name');
let inputAboutself = document.querySelector('.popup__form-item_input_aboutself');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');
const buttonLikes = document.querySelectorAll('.element__button-like');

function toggleActiveLikeButton (event) {
  const element = event.target.closest(".element__button-like");
  console.log(element);
  element.classList.toggle('element__button-like_active');
}

containerElements.addEventListener('click', toggleActiveLikeButton);

function render () {
  const elements = initialCards.map(createElement);
  containerElements.append(...elements);
}

function createElement (item) {
  const newitem = template.content.cloneNode(true);
  const picture = newitem.querySelector('.element__place-img');
  const elementTitle = newitem.querySelector('.element__title');
  const likeButton = newitem.querySelector('.element__button-like');
  picture.src = item.link;
  elementTitle.textContent = item.name;
  return newitem;
}
render ()

function openedPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAboutself.value = profileSubtitle.textContent;
}

const addButton = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup__add-element');
const popupFormAddElement = document.querySelector('.popup__form_add_element')
let inputTitle = document.querySelector('.popup__form-item_input_title');
let inputLinkPicture = document.querySelector('.popup__form-item_input_link-picture');

function openedPopupAddElement() {
  popupAddElement.classList.add('popup_opened');
}

function handleAddElement(event) {
 const inputTitleValue = document.querySelector('.popup__form-item_input_title').value;
 const inputLinkPictureValue = document.querySelector('.popup__form-item_input_link-picture').value;
 const elementAdded = createElement({ name: inputTitleValue, link: inputLinkPictureValue });
 containerElements.prepend(elementAdded);
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function closePopupAddElement() {
  popupAddElement.classList.remove('popup_opened');
}

function onSubmit1(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAboutself.value;
  closePopup();
};

function onSubmit2(event) {
  event.preventDefault();
  handleAddElement();
  closePopupAddElement();
}

popupForm.addEventListener('submit', onSubmit1);
popupFormAddElement.addEventListener('submit', onSubmit2);
editButton.addEventListener('click', openedPopup);
addButton.addEventListener('click', openedPopupAddElement);
closeButton.addEventListener('click', closePopup);
closeButtonPopupAdded.addEventListener('click', closePopupAddElement);
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
