import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { config, cardListSelector } from '../utils/utils.js';
import Api from '../components/API.js';
const popupForm = document.querySelector('.popup__form');
const buttonEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const avatar = document.querySelector('.profile__avatar');
const inputName = document.querySelector('.popup__form-item_input_name');
const inputAboutself = document.querySelector('.popup__form-item_input_aboutself');

const popupFormAddElement = document.querySelector('.popup__form_add_element');
const buttonAdd = document.querySelector('.profile__add-button');

let userId = null;

const popupWithConfirm = new PopupWithConfirm('.popup_delete-card');
popupWithConfirm.setEventListeners();

const container = document.querySelector('.elements__group-elements');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '993044b4-b2b4-40cb-8082-ce0e199167af',
    'Content-Type': 'application/json'
  }
});

api.getInfoUser()
  .then(userInfo => {
    profileTitle.textContent = userInfo.name;
    profileSubtitle.textContent = userInfo.about;
    avatar.src = userInfo.avatar;
    userId = userInfo._id;
  })
  .catch((err) => {
    console.log(err);
  });

api.getInitialCards()
  .then((cards) => {
    const cardList = new Section({
      data: cards,
      renderer: (item) => {
        cardList.addItem(createCard(item));
      }
    }, cardListSelector);

    cardList.renderItems();
  })
  .catch((err) => console.log(err));

function editProfile(inputValues) {
  api.editProfile(inputValues);
}

function addNewCard(data) {
  api.addNewCard(data)
   .then(item => {
    createCard(item);
   })
   .catch((err) => console.log(err));
}

const validForm = new FormValidator(popupForm, config);
validForm.enableValidation();
const validFormAddElement = new FormValidator(popupFormAddElement, config);
validFormAddElement.enableValidation();

const profileUserInfo = new UserInfo ({name: profileTitle, aboutSelf: profileSubtitle}, '.popup');

const profilePopup = new PopupWithForm ({
  popupSelector: '.popup',
  handleFormSubmit: (inputValues) => {
    profileUserInfo.setUserInfo(inputValues);
    editProfile(inputValues);
    profilePopup.close();
  }});

profilePopup.setEventListeners();

const cardPopup = new PopupWithForm ({
  popupSelector: '.popup_add-element',
  handleFormSubmit: () => {
    const addedObject = { name: data.inputitle, link: data.inputLinkPicture };
    container.prepend(addNewCard(addedObject));
    cardPopup.close();
}});
cardPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup_open-picture');
imagePopup.setEventListeners();

function createCard(item) {

  const card = new Card ({
    item,
    cardSelector: '.template',
    userId,
    handleCardClick,
    handleDeliteIconclick: (card) => {
      popupWithConfirm.open();
      popupWithConfirm.setSubmitAction( () => {

        api.removeCard(item._id)
          .then(() => {
            card.deleteCard();
            popupWithConfirm.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    handleLikeClick: (card) => {
      console.log(card.isLiked());
      if (card.isLiked()) {
        api.offLikeCard(card.getCardId())
        .then((res) => {
          card.removeLikeCard();
          card.updateLikes(res.likes);
         })
         .catch((err) => {
          console.log(err);
        });
      } else {
        api.likeCard(card.getCardId())
        .then((res) => {
          card.addlikeCard();
          card.updateLikes(res.likes);
        })
        .catch((err) => {
         console.log(err);
       });
      }
    }
/*
handleLikeClick: (card) => {
      if (card.isLiked()) {
        api.offLikeCard(item._id)
        .then((res) => {
          console.log('Получилось удалить лайк');
          card.removeLikeCard();
          card.updateLikes(res.likes);
         })
         .catch((err) => {
          console.log(err);
        });
      } else {
        api.likeCard(item._id)
        .then((res) => {
          console.log('Получилось поставить лайк');
          card.addlikeCard();
          card.updateLikes(res.likes);
        })
        .catch((err) => {
         console.log(err);
       });
      }
    }
*/
  });
  const cardElement = card.generateCard();
  return cardElement;
}

function openPropfilePopup() {
  inputName.value = profileUserInfo.getUserInfo().inputName;
  inputAboutself.value = profileUserInfo.getUserInfo().inputAboutself;
  validForm.resetErrore();
  profilePopup.open();
}

function openCardPopup() {
  popupFormAddElement.reset();
  validFormAddElement.resetErrore();
  cardPopup.open();
}

function handleCardClick(item) {
  imagePopup.open(item);
}

buttonEdit.addEventListener('click', openPropfilePopup);
buttonAdd.addEventListener('click', openCardPopup);

export { handleCardClick };
