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

function render () {
  const elements = initialCards.map(createElement);
  containerElements.append(...elements);
}

function createElement (item) {
  const newitem = template.content.cloneNode(true);
  const picture = newitem.querySelector('.element__place-img');
  const elementTitle = newitem.querySelector('.element__title');
  const buttonDelete = newitem.querySelector('.element__button-delete');
  const buttonLike = newitem.querySelector('.element__button-like');
  picture.src = item.link;
  elementTitle.textContent = item.name;
  picture.alt = item.name;
  buttonDelete.addEventListener('click', deleteElement);
  buttonLike.addEventListener('click', handleLikeButton);
  picture.addEventListener('click', () => handleCardClick(item));
  return newitem;
}

render ()

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', overlayClick);
  })
  document.addEventListener('keydown', escClick);
}

function escClick (evt) {
  if (evt.key === "Escape") {
   const closepopup = document.querySelector('.popup_opened');
   const closepopupForm = closepopup.querySelector('.popup__form');
   closepopup.classList.remove('popup_opened');
   closepopupForm.reset();
  }
}

function openPropfilePopup() {
  inputName.value = profileTitle.textContent;
  inputAboutself.value = profileSubtitle.textContent;
  openPopup(profilePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleAddElement(event) {
  const inputTitleValue = inputTitle.value;
  const inputLinkPictureValue = inputLinkPicture.value;
  const elementAdded = createElement({ name: inputTitleValue, link: inputLinkPictureValue });
  containerElements.prepend(elementAdded);
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
}

function handleLikeButton (event) {
  const element = event.target;
  if (element.type === "button") {
    element.classList.toggle('element__button-like_active');
  }
}

function deleteElement(event) {
  const element = event.target.closest('.element');
  element.remove();
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
    const evttargetForm = (evt.target).querySelector('.popup__form');
    evttargetForm.reset();
  }
}

popupForm.addEventListener('submit', onSubmitFormProfilePopup);
popupFormAddElement.addEventListener('submit', onSubmitPopupFormAddElement);
buttonEdit.addEventListener('click', () => openPropfilePopup());
buttonAdd.addEventListener('click', () => openPopup(cardPopup));
buttonCloseProfilePopup.addEventListener('click', () => closePopup(profilePopup));
buttonCloseCardPopup.addEventListener('click', () => closePopup(cardPopup));
buttonCloseImagePopup.addEventListener('click', () => closePopup(imagePopup));
