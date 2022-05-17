import { handleCardClick } from './index.js';
import { config } from '../utils.js';
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

class Card {
  _title;
  _link;
  _cardSelector;

   constructor(item, cardSelector) {
     this._title = item.name;
     this._link = item.link;
     this._cardSelector = cardSelector;
   }

   _getCardElement() {
     const CardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return CardElement;
   }

   generateCard() {
    this._element = this._getCardElement();
    this._setEventListeners();
    this._element.querySelector('.element__place-img').src = `${this._link}`;
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__place-img').alt = this._title;

    return this._element;
   }

   _deleteCard() {
    this._element.remove();
   }

   _likeCard() {
     this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
   }

   _clickCard() {
      const item = ({ name: this._title, link: this._link });
      handleCardClick(item);
   }

   _setEventListeners() {
    this._element.querySelector('.element__button-delete').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.element__button-like').addEventListener('click', () => {
      this._likeCard();
    });
    this._element.querySelector('.element__place-img').addEventListener('click', () => {
      this._clickCard();
    });
   }
 }

function renderItems() {
  initialCards.forEach((item) => {
    const card = new Card (item, '.template');
    const cardElement = card.generateCard();
    document.querySelector('.elements__group-elements').append(cardElement);
  });
}

renderItems();

export { Card };
