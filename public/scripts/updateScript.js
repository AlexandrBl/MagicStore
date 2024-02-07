const updateForm = document.querySelector('.update-form');
const productCard = document.querySelector('.product__card');
const container = document.querySelector('.containerCard');
const errorMessage = document.querySelector('.err-message');

if (updateForm) {
  updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      name, desc, price, categoryID, brandID, img,
    } = event.target;

    const idCard = productCard.dataset.id;

    const resUp = await fetch(`/api/products/${idCard}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        desc: desc.value,
        price: price.value,
        categoryID: categoryID.value,
        brandID: brandID.value,
        img: img.value,
      }),
    });

    const data = await resUp.json();

    if (data.message === 'ok') {
      container.innerHTML = '';
      container.insertAdjacentHTML('beforeend', data.html);
    } else if (data.message === 'Заполните все поля') {
      errorMessage.innerHTML = data.message;
    }
  });
}
