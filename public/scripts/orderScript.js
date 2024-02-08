const productList = document.querySelector('.product-list');

if (productList) {
  productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-card__add-button')) {
      const card = event.target.closest('.item-card');

      console.log(card);
    }
  });
}
