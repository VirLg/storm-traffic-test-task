import arr from '../images/webp/mobile/shop';
import a from '../images/webp/mobile/shop/bga.webp';
console.log('first', a);
const ref = {
  shopDiv: document.querySelector('.shop-item'),
};

export function murkup(api) {
  console.log(arr);
  const markup = arr.map(e =>
    Object.values(e)[1]
      .map(({ book_uri, book_image, list_name }) => {
        return `

  <div class="book-card__home">
            <div class="thumb__home">
            <a href="${book_uri}"><img src="${book_image}" alt="" title="" loading="lazy"/></a>
            </div>

             <p class="info-item">
              <b>${list_name}</b>
            </p>
            </div>
            </div>

  `;
      })
      .join('')
  );
  const murkapBest = refBest.insertAdjacentHTML('beforeend', markup);
}
export const a = console.log('first', 'first');
