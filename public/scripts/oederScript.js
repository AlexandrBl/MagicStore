const productList = document.querySelector('.product-list');
const orderButton = document.querySelector('.item-card__add-button');

if (orderButton) {
  productList.addEventListener('click', (event) => {
    if (event.taeget.classList.contains('orderButton')) {
      console.log(event.target);
    }
  });
}
