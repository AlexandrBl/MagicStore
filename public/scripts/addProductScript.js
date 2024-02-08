const addProductForm = document.querySelector('.add-product');
const productsList = document.querySelector('.product-list');

if (addProductForm) {
  addProductForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, img, price, condition } = event.target;

    const formData = new FormData();
    const picData = [...img.files];
    picData.forEach((url) => {
      formData.append('url', url);
    });
    formData.append('name', name.value);
    formData.append('price', price.value);
    formData.append('condition', condition.value);

    const res = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    event.target.reset();
    if (data.message === 'ok') {
      productsList.insertAdjacentHTML('beforeend', data.html);
      document.querySelector('.add-product__message').innerHTML = '';
    } else {
      document.querySelector('.add-product__message').innerHTML = data.message;
    }
  });
}
