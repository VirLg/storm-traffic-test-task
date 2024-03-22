import { data } from './data.js';
// // import a from '../images/webp/mobile/shop';
console.log('first', data);
const ref = {
  shopDiv: document.querySelector('.js-shop-item'),
};
// console.log('data', data);
const arr = [1, 2, 3];
const markup = data
  .map(
    ({ img, price, cart, title, star }) =>
      `<div>
            <img src=${img} alt="" />
            <p class="price">${price}</p>
            <img src=${cart} alt="burger menu" />
            <h4 class="shop-item-title">${title}</h4>
            <img src=${star} alt="burger menu" />
    </div>`
  )
  .join('');

ref.shopDiv.insertAdjacentHTML('beforeend', markup);
