import { data } from './data.js';

// import a from '../images/cart.svg';
console.log('first', data);
const ref = {
  shopDiv: document.querySelector('.js-shop-item'),
};
// console.log('data', data);

const markup = data
  .map(
    ({ img, price, title }) =>
      `<div>
     
      <div class="shop-item-thumb"><img class="shop-item-img" src=${img} alt="shop image" /></div>
      
      <div class="flex"><p class="price">${price}</p>
      <div class="shop-cart"></div></div>
      <div class="flex"><h4 class="shop-item-title">${title}</h4> 
      <div class="shop-star"></div></div>

</div>`
  )
  .join('');

ref.shopDiv.insertAdjacentHTML('beforeend', markup);
