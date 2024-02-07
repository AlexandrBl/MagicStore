const form = document.querySelector('.form');
const productList = document.querySelector('.productList');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      name, desc, price, categoryID, brandID, img,
    } = event.target;

    const res = await fetch('/api/products', {
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
    const data = await res.json();

    event.target.reset();

    if (data.message === 'ok') {
      productList.insertAdjacentHTML('beforeend', data.html);
      document.querySelector('.err').innerHTML = '';
    } else {
      document.querySelector('.err').innerHTML = data.message;
    }
  });
}

if (productList) {
  productList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-button')) {
      const del = confirm('Точно?');
      if (del) {
        const productCard = event.target.closest('.product__card');
        const { id } = productCard.dataset;
        const res = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.message === 'ok') {
          productCard.remove();
        }
      }
    }
  });
}
