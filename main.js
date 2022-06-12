(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_item",void 0),t(this,"_title",void 0),t(this,"_link",void 0),t(this,"_cardSelector",void 0),t(this,"_handleCardClick",void 0),this._item=e,this._title=e.name,this._link=e.link,this._handleCardClick=o,this._cardSelector=r}var r,o;return r=n,(o=[{key:"_getCardElement",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getCardElement(),this._cardImage=this._element.querySelector(".element__place-img"),this._elementButtonLike=this._element.querySelector(".element__button-like"),this._setEventListeners(),this._cardImage.src="".concat(this._link),this._element.querySelector(".element__title").textContent=this._title,this._cardImage.alt=this._title,this._element}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_likeCard",value:function(){this._elementButtonLike.classList.toggle("element__button-like_active")}},{key:"_clickCard",value:function(){this._handleCardClick(this._item)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__button-delete").addEventListener("click",(function(){e._deleteCard()})),this._elementButtonLike.addEventListener("click",(function(){e._likeCard()})),this._cardImage.addEventListener("click",(function(){e._clickCard()}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-btn"),this._handleEscClose=this._handleEscClose.bind(this),this._overlayClick=this._overlayClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_overlayClick",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",this._overlayClick)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._PictureTitle=t._popup.querySelector(".popup__title-picture"),t}return t=u,(n=[{key:"open",value:function(e){a(_(u.prototype),"open",this).call(this),this._popupPicture.src=e.link,this._PictureTitle.textContent=e.name,this._popupPicture.alt=e.name}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popupForm=t._popup.querySelector(".popup__form"),t._inputList=t._popup.querySelectorAll(".popup__form-item"),t._handleFormSubmit=r,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){m(k(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;m(k(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._profileTitle=t.name,this._profileSubtitle=t.aboutSelf}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._oldUserInfo={inputName:" ".concat(this._profileTitle.textContent),inputAboutself:"".concat(this._profileSubtitle.textContent)},this._oldUserInfo}},{key:"setUserInfo",value:function(e){this._inputValues=e,this._profileTitle.innerHTML=this._inputValues.inputName,this._profileSubtitle.innerHTML=this._inputValues.inputAboutself}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"_form",void 0),C(this,"_config",void 0),C(this,"_inputList",void 0),this._form=t,this._config=n,this._buttonElement=this._form.querySelector(this._config.submitButtonSelector),this._inputList=this._form.querySelectorAll(this._config.inputSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("input",(function(t){var n=t.target;e._handleForInput(n),e.toggleButtonState()}))}},{key:"_hideError",value:function(e){this._error=this._form.querySelector("#".concat(e.id,"-error")),this._error.classList.remove(this._config.errorClass),this._error.textContent="",e.classList.remove(this._config.inputErrorClass)}},{key:"_showError",value:function(e){this._error=this._form.querySelector("#".concat(e.id,"-error")),this._error.textContent=e.validationMessage,this._error.classList.add(this._config.errorClass),e.classList.add(this._config.inputErrorClass)}},{key:"_handleForInput",value:function(e){e.validity.valid?this._hideError(e):this._showError(e),this.toggleButtonState()}},{key:"toggleButtonState",value:function(){this._buttonElement.classList.toggle(this._config.inactiveButtonClass,!this._form.checkValidity()),this._buttonElement.disabled=!this._form.checkValidity()}},{key:"resetErrore",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this.toggleButtonState()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P={formSelector:".popup__form",inputSelector:".popup__form-item",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_type_no-active",errorClass:"popup__error_visible",inputErrorClass:"popup__form-item_type_error"},L=document.querySelector(".popup__form"),q=document.querySelector(".profile__edit-button"),I=document.querySelector(".profile__title"),T=document.querySelector(".profile__subtitle"),R=document.querySelector(".popup__form-item_input_name"),B=document.querySelector(".popup__form-item_input_aboutself"),x=document.querySelector(".popup__form_add_element"),V=document.querySelector(".profile__add-button"),F=new j(L,P);F.enableValidation();var U=new j(x,P);U.enableValidation();var A=new o({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){A.addItem(z(e))}},".elements__group-elements");A.renderItems();var D=new E({name:I,aboutSelf:T},".popup"),M=new w({popupSelector:".popup",handleFormSubmit:function(e){D.setUserInfo(e),M.close()}});M.setEventListeners();var N=new w({popupSelector:".popup_add-element",handleFormSubmit:function(e){var t={name:e.inputitle,link:e.inputLinkPicture};A.addItem(z(t)),N.close()}});N.setEventListeners();var H=new h(".popup_open-picture");function z(e){return new n(e,".template",G).generateCard()}function G(e){H.open(e)}H.setEventListeners(),q.addEventListener("click",(function(){R.value=D.getUserInfo().inputName,B.value=D.getUserInfo().inputAboutself,F.resetErrore(),M.open()})),V.addEventListener("click",(function(){x.reset(),U.resetErrore(),N.open()}))})();