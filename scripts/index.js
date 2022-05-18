import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { config, initialCards } from '../utils.js';

const containerElements = document.querySelector('.elements__group-elements');
const template = document.querySelector('.template');

const profilePopup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close-btn');
const inputName = document.querySelector('.popup__form-item_input_name');
const inputAboutself = document.querySelector('.popup__form-item_input_aboutself');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardPopup = document.querySelector('.popup_add-element');
const popupFormAddElement = document.querySelector('.popup__form_add_element');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseCardPopup = cardPopup.querySelector('.popup__close-btn');
const inputTitle = document.querySelector('.popup__form-item_input_title');
const inputLinkPicture = document.querySelector('.popup__form-item_input_link-picture');

const imagePopup = document.querySelector('.popup_open-picture');
const buttonCloseImagePopup = imagePopup.querySelector('.popup__close-btn');
const popupPicture = imagePopup.querySelector('.popup__picture');
const popupPictureTitle = imagePopup.querySelector('.popup__title-picture');

const popupList = Array.from(document.querySelectorAll('.popup'));
const validForm = new FormValidator(popupForm, config);
validForm.enableValidation();
const validFormAddElement = new FormValidator(popupFormAddElement, config);
validFormAddElement.enableValidation();

function renderItems() {
  initialCards.forEach((item) => {
    /*const card = new Card (item, '.template', handleCardClick);
    const cardElement = card.generateCard();
    document.querySelector('.elements__group-elements').append(cardElement);*/
    createdCard(item);
  });
}
renderItems();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClick);
}

function escClick (evt, popup) {
  if (evt.key === "Escape") {
    const closepopup = document.querySelector('.popup_opened');
    closePopup(closepopup);
  }
}

function openPropfilePopup() {
  inputName.value = profileTitle.textContent;
  inputAboutself.value = profileSubtitle.textContent;
  validForm.resetErrore();
  openPopup(profilePopup);
}

function openCardPopup() {
  popupFormAddElement.reset();
  validFormAddElement.resetErrore();
  openPopup(cardPopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClick);
}

function handleAddElement(event) {
  const inputTitleValue = inputTitle.value;
  const inputLinkPictureValue = inputLinkPicture.value;
  const addedObject = { name: inputTitleValue, link: inputLinkPictureValue };
  /*const elementAdded = new Card (addedObject, '.template');
  const cardElement = elementAdded.generateCard();
  containerElements.prepend(cardElement);*/
  createdCard(addedObject);
}

function createdCard(item) {
  const card = new Card (item, '.template', handleCardClick);
  const cardElement = card.generateCard();
  containerElements.prepend(cardElement);
}

function onSubmitFormProfilePopup(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAboutself.value;
  closePopup(profilePopup);
}

function onSubmitPopupFormAddElement(event) {
  event.preventDefault();
  handleAddElement();
  popupFormAddElement.reset();
  closePopup(cardPopup);
  validFormAddElement.toggleButtonState();
}

function handleCardClick(item) {
  popupPicture.src = item.link;
  popupPictureTitle.textContent = item.name;
  popupPicture.alt = item.name;
  openPopup(imagePopup);
}

function overlayClick (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

popupForm.addEventListener('submit', onSubmitFormProfilePopup);
popupFormAddElement.addEventListener('submit', onSubmitPopupFormAddElement);
buttonEdit.addEventListener('click', () => openPropfilePopup());
buttonAdd.addEventListener('click', openCardPopup);
buttonCloseProfilePopup.addEventListener('click', () => closePopup(profilePopup));
buttonCloseCardPopup.addEventListener('click', () => closePopup(cardPopup));
buttonCloseImagePopup.addEventListener('click', () => closePopup(imagePopup));
popupList.forEach(popupElement => {popupElement.addEventListener('click', overlayClick)});

export { handleCardClick };