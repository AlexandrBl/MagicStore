const formFilter = document.querySelector('.filter-form');

if (formFilter) {
  formFilter.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { city } = e.target;

    const res = await fetch(`/products/cities/${city.value}`, {
      method: 'GET',
    });
    const data = await res.json();
    if (data.message === 'ok') {
      document.querySelector('.product-list').innerHTML = data.html;
    }
  });
}
