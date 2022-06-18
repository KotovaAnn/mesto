export default class Card {

   constructor({item, cardSelector, userId, handleCardClick, handleDeliteIconclick, handleLikeClick}) {
     this._item = item;
     this._title = item.name;
     this._link = item.link;
     this._cardSelector = cardSelector;
     this._userId = userId;
     this._handleCardClick = handleCardClick;
     this._handleDeliteIconclick = handleDeliteIconclick;
     this._handleLikeClick = handleLikeClick;
     this._likes = item.likes;
   }
   getCardId() {
    return this._item._id;
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

    if (this._item.owner._id === this._userId) {
      this._visualBasket();
    }

    this.getLikes();
    return this._element;
   }

   _visualBasket() {
    this._backet = this._element.querySelector('.element__button-delete');
    this._backet.classList.add('element__button-delete_active');
   }

   getLikes() {
    this._likeContainer = this._element.querySelector('.element__button-like-number');
    this._likeContainer.textContent = this._likes.length;
    if (this.isLiked()) {
      this.addlikeCard();
    } else {
      this.removeLikeCard();
    }
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeContainer.textContent = this._likes.length;
    if (this.isLiked()) {
      this.addlikeCard();
    } else {
      this.removeLikeCard();
    }
  }

  isLiked() {
    return this._likes.some(item => {
      return item._id === this._userId
    });
  }
   deleteCard() {
    this._element.remove();
    this._element = null;
   }

   addlikeCard() {
    this._elementButtonLike.classList.add('element__button-like_active');
   }

   removeLikeCard() {
    this._elementButtonLike.classList.remove('element__button-like_active');
   }

   _clickCard() {
      this._handleCardClick(this._item);
   }

   _setEventListeners() {
    this._element.querySelector('.element__button-delete').addEventListener('click', () => {
      this._handleDeliteIconclick(this);
    });

    this._elementButtonLike.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._cardImage.addEventListener('click', () => {
      this._clickCard();
    });
   }
 }
