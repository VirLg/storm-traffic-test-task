import { data, comments } from './data.js';
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const ref = {
  shopDiv: document.querySelector('.js-shop-item'),
  commentsDiv: document.querySelector('.js-comments-item'),
  openModalBtn: document.querySelector('.hero-button'),
  closeModalBtn: document.querySelector('.none-btn'),
  spoylerOne: document.querySelector('.js-children'),
  modal: document.querySelector('.modal'),
  backdrop: document.querySelector('.backdrop'),
  // burger: document.querySelector('.burger-menu'),
};
const toggleBurger = () => {
  ref.burger.classList.toggle('is-burger');
};

const toggleModal = () => {
  ref.modal.classList.toggle('is-hidden');
  ref.backdrop.classList.toggle('is-hidden');
};

ref.closeModalBtn.addEventListener('click', toggleModal);
const markup = data
  .map(
    ({ img, price, title }) =>
      `<div class="shop-item parent">
      <div class="shop-item-thumb">
        <img class="shop-item-img" src=${img} alt="shop image" />
      </div>
      <div class="flex shop-price">
        <p class="price">${price}</p>
        <div class="shop-cart"></div>
      </div>
      <div class="flex shop-content">
        <h4 class="shop-item-title">${title}</h4>
        <div class="shop-star"></div>
      </div>
    </div>`
  )
  .join('');

const markupComments = comments
  .map(
    ({ comment, title }) =>
      `<div class="comments-item ">
        <div class="shop-star-comments"></div>
        <p class="comments-content">${comment}</p>
        <h4 class="comments-item-title">${title}</h4>
    </div>`
  )
  .join('');

ref.openModalBtn.addEventListener('click', toggleModal);

// ref.burger.addEventListener('click', toggleBurger);

ref.shopDiv.insertAdjacentHTML('beforeend', markup);

ref.commentsDiv.insertAdjacentHTML('beforeend', markupComments);

console.log('5', 5);
