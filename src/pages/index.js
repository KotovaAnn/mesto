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

const popupFormEditAvatar = document.querySelector('.popup__form_edite-avatar');
const buttobEditAvatar = document.querySelector('.profile__edit-avatar');

const popupWithConfirm = new PopupWithConfirm('.popup_delete-card');
popupWithConfirm.setEventListeners();

const container = document.querySelector('.elements__group-elements');

const validForm = new FormValidator(popupForm, config);
validForm.enableValidation();
const validFormAddElement = new FormValidator(popupFormAddElement, config);
validFormAddElement.enableValidation();
const validFormEditAvatar = new FormValidator(popupFormEditAvatar, config);
validFormEditAvatar.enableValidation();

const profileUserInfo = new UserInfo ({name: profileTitle, aboutSelf: profileSubtitle }, '.popup');
//let userId = profileUserInfo.getUserId();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '993044b4-b2b4-40cb-8082-ce0e199167af',
    'Content-Type': 'application/json'
  }
});

  function getUserInfo() {
    api.getInfoUser()
      .then(userInfo => {
        profileUserInfo.setUserInfo(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardListSelector);

function getCards() {
  api.getInitialCards()
    .then((cards) => {
      cardList.renderItems(cards);
    })
    .catch((err) => console.log(err));
}
/*
  function getCards() {
    api.getInitialCards()
      .then((cards) => {
        const cardList = new Section({
          data: cards,
          renderer: (item) => {
            cardList.addItem(createCard(item));
          }
        }, cardListSelector);
        cardList.renderItems();
        return cards;
      })
      .catch((err) => console.log(err));
  }
*/

  Promise.all([getUserInfo(), getCards()])
  .then(([userInfo, cards]) => {
    getUserInfo();
    getCards();
  })
  .catch((err) => console.log(err));

const profilePopup = new PopupWithForm ({
  popupSelector: '.popup',
  handleFormSubmit: (inputValues) => {
    api.editProfile(inputValues)
     .then((res) => {
      profileUserInfo.setUserInfo(res);
      profilePopup.close();
     })
   .catch((err) => console.log(err))
   .finally(res => profilePopup.updateLoading(false, "Сохранить", "Сохранение..."));
  }});

profilePopup.setEventListeners();

const cardPopup = new PopupWithForm ({
  popupSelector: '.popup_add-element',
  handleFormSubmit: (data) => {
    console.log(data);
    api.addNewCard(data)
     .then(item => {
       cardList.addItem(createCard(item));
     })
    .catch((err) => console.log(err))
    .finally(res => cardPopup.updateLoading(false, "Сохранить", "Сохранение..."));
    cardPopup.close();
}});

cardPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup_open-picture');
imagePopup.setEventListeners();

const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_edit-avatar',
  handleFormSubmit: (link) => {
    api.editAvatar(link)
     .then((res) => {
      profileUserInfo.setUserInfo(res);
      editAvatarPopup.close();
     })
     .catch((err) => {
      console.log(err);
    })
    .finally(res => editAvatarPopup.updateLoading(false));
  }
})
editAvatarPopup.setEventListeners();

function createCard(item) {
  const userId = profileUserInfo.getUserId();
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
  validFormAddElement.resetErrore();
  cardPopup.open();
}

function openEditAvatarPopup() {
  popupFormEditAvatar.reset();
  validFormEditAvatar.resetErrore();
  editAvatarPopup.open();
}

function handleCardClick(item) {
  imagePopup.open(item);
}

buttonEdit.addEventListener('click', openPropfilePopup);
buttonAdd.addEventListener('click', openCardPopup);
buttobEditAvatar.addEventListener('click', openEditAvatarPopup);
export { handleCardClick };
