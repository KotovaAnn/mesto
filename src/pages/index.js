import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { config, initialCards, cardListSelector } from '../utils/utils.js';

const popupForm = document.querySelector('.popup__form');
const buttonEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupFormAddElement = document.querySelector('.popup__form_add_element');
const buttonAdd = document.querySelector('.profile__add-button');

const validForm = new FormValidator(popupForm, config);
validForm.enableValidation();
const validFormAddElement = new FormValidator(popupFormAddElement, config);
validFormAddElement.enableValidation();

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card (item, '.template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardListSelector);

cardList.renderItems();

const profileUserInfo = new UserInfo ({name: profileTitle, aboutSelf: profileSubtitle}, '.popup');

const profilePopup = new PopupWithForm ({
  popupSelector:  '.popup',
  handleFormSubmit: (inputValues) => {
    profileUserInfo.setUserInfo(inputValues);
    profilePopup.close();
  }});

  const cardPopup = new PopupWithForm ({
    popupSelector: '.popup_add-element',
    handleFormSubmit: (data) => {
      const addedObject = { name: data.inputitle, link: data.inputLinkPicture };
      const addElement = createdCard(addedObject);
      cardList.addItem(addElement);
      cardPopup.close();
  }});

function openPropfilePopup() {
  profileUserInfo.getUserInfo();
  validForm.resetErrore();
  profilePopup.open();
}

function openCardPopup() {
  popupFormAddElement.reset();
  validFormAddElement.resetErrore();
  cardPopup.open();
}

function createdCard(item) {
  const card = new Card (item, '.template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(item) {
  const imagePopup = new PopupWithImage('.popup_open-picture', item);
  imagePopup.open(item);
}

buttonEdit.addEventListener('click', openPropfilePopup);
buttonAdd.addEventListener('click', openCardPopup);

export { handleCardClick };
