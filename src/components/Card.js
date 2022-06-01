export default class Card {
  _item;
  _title;
  _link;
  _cardSelector;
  _handleCardClick;

   constructor(item, cardSelector, handleCardClick) {
     this._item = item;
     this._title = item.name;
     this._link = item.link;
     this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector('.element__place-img');
    this._elementButtonLike = this._element.querySelector('.element__button-like');
    this._setEventListeners();
    this._cardImage.src = `${this._link}`;
    this._element.querySelector('.element__title').textContent = this._title;
    this._cardImage.alt = this._title;

    return this._element;
   }

   _deleteCard() {
    this._element.remove();
    this._element = null;
   }

   _likeCard() {
     this._elementButtonLike.classList.toggle('element__button-like_active');
   }

   _clickCard() {
      this._handleCardClick(this._item);
   }

   _setEventListeners() {
    this._element.querySelector('.element__button-delete').addEventListener('click', () => {
      this._deleteCard();
    });
    this._elementButtonLike.addEventListener('click', () => {
      this._likeCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._clickCard();
    });
   }
 }
