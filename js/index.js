import { data, comments } from './data.js';

const ref = {
  shopDiv: document.querySelector('.js-shop-item'),
  commentsDiv: document.querySelector('.js-comments-item'),
};
console.log('data', ref.commentsDiv);

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

ref.shopDiv.insertAdjacentHTML('beforeend', markup);

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

ref.commentsDiv.insertAdjacentHTML('beforeend', markupComments);
