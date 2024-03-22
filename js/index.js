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
    ({ img }) =>
      `<div>
//  console.log('img', ${img})
// <img src='${img}' alt=""></div>
`
  )
  .join('');

ref.shopDiv.insertAdjacentHTML('beforeend', markup);
