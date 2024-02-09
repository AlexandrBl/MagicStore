const button = document.querySelector('.order-item__button');

if (button) {
  button.addEventListener('submit', async (event) => {
    event.preventDefault();
  });
}
