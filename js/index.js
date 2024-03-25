import { data, comments } from './data.js';
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const ref = {
  shopDiv: document.querySelector('.js-shop-item'),
  commentsDiv: document.querySelector('.js-comments-item'),
  openModalBtn: document.querySelector('.hero-button'),
  spoylerOne: document.querySelector('.js-children'),
  modal: document.querySelector('.modal'),
  backdrop: document.querySelector('.backdrop'),
};

const toggleModal = () => {
  ref.backdrop.style.width = screenWidth + 'px';
  ref.backdrop.style.height = screenHeight + 'px';
  ref.modal.classList.add('is-hidden');
  ref.backdrop.classList.add('is-hidden');
};

ref.openModalBtn.addEventListener('click', toggleModal);

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
const spoylerOne = () => `
<div class="spoylerDiv-one"> 
 <div class="spoyler-one">
  <p >আমাদের পৃষ্ঠাটি আপনার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করে। আপনি চাইলে তাদের নিষ্ক্রিয় করতে পারেন, কিন্তু এটি ওয়েবসাইটের কিছু কার্যক্ষমতা সীমিত করতে পারে। আমাদের কুকি নীতি দেখুন।</p>
  <button class="hero-button spoyler-one">সব কুকিজকে গ্রহণ করুন</button>
  <button class="hero-button spoyler-one">কুকিজের সেটিংস</button>
</div>
</div>
  `;

ref.spoylerOne.insertAdjacentHTML('afterbegin', spoylerOne);

ref.shopDiv.insertAdjacentHTML('beforeend', markup);
ref.commentsDiv.insertAdjacentHTML('beforeend', markupComments);
