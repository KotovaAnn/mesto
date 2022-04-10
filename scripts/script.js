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
const popupForm = document.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-btn');
let inputName = document.querySelector('.popup__form-item_input_name');
let inputAboutself = document.querySelector('.popup__form-item_input_aboutself');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

const popupAddElement = document.querySelector('.popup__add-element');
const popupFormAddElement = document.querySelector('.popup__form_add_element');
const addButton = document.querySelector('.profile__add-button');
const closeButtonPopupAdded = document.querySelector('.popup__close-btn_place_popup__add-element');
let inputTitle = document.querySelector('.popup__form-item_input_title');
let inputLinkPicture = document.querySelector('.popup__form-item_input_link-picture');

const popupOpenPicture = document.querySelector('.popup__open-picture');
const closeButtonPopupPicture = document.querySelector('.popup__close-btn_place_popup__open-picture');

const likesButton = document.querySelectorAll('.element__button-like');
const deleteButton = document.querySelector('.element__button-delete');

function render () {
  const elements = initialCards.map(createElement);
  containerElements.append(...elements);
}

function createElement (item) {
  const newitem = template.content.cloneNode(true);
  const picture = newitem.querySelector('.element__place-img');
  const elementTitle = newitem.querySelector('.element__title');
  const deleteButton = newitem.querySelector('.element__button-delete');
  const likeButton = newitem.querySelector('.element__button-like');
  picture.src = item.link;
  elementTitle.textContent = item.name;
  deleteButton.addEventListener('click', deleteElement);
  picture.addEventListener('click', openPopupOpenPicture);
  return newitem;
}

render ()

function openedPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAboutself.value = profileSubtitle.textContent;
}

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

function onSubmitPopupForm(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAboutself.value;
  closePopup();
}

function onSubmitPopupFormAddElement(event) {
  event.preventDefault();
  handleAddElement();
  closePopupAddElement();
}

function toggleActiveLikeButton (event) {
  const element = event.target;
  if (element.type === "button") {
    element.classList.toggle('element__button-like_active');
  }
}

function deleteElement(event) {
  const element = event.target.closest('.element');
  element.remove();
}

function openPopupOpenPicture (event) {
  popupOpenPicture.classList.add('popup_opened');
  const element = event.target.closest('.element');
  const picture = element.querySelector('.element__place-img');
  const elementTitle = element.querySelector('.element__title');
  const popupPicture = popupOpenPicture.querySelector('.popup__picture');
  const popupPictureTitle = popupOpenPicture.querySelector('.popup__title-picture');
  popupPicture.src = picture.src;
  popupPictureTitle.textContent = elementTitle.textContent;
  popupPicture.alt = elementTitle.textContent;
  console.log(element);
}

function closePopupOpenPicture () {
  popupOpenPicture.classList.remove('popup_opened');
}

containerElements.addEventListener('click', toggleActiveLikeButton);
popupForm.addEventListener('submit', onSubmitPopupForm);
popupFormAddElement.addEventListener('submit', onSubmitPopupFormAddElement);
editButton.addEventListener('click', openedPopup);
addButton.addEventListener('click', openedPopupAddElement);
closeButton.addEventListener('click', closePopup);
closeButtonPopupAdded.addEventListener('click', closePopupAddElement);
closeButtonPopupPicture.addEventListener('click', closePopupOpenPicture);
