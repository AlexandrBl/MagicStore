const regForm = document.querySelector('.reg-form');
const regFormMessage = document.querySelector('.reg-form__message');

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      name, email, password, password2, city, method,
    } = event.target;

    if (password.value === password2.value) {
      const resReg = await fetch('/api/auth', {
        method,
        headers: {
          'Content-types': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          city: city.value,
        }),
      });

      const data = await resReg.json();

      if (data.message === 'Такой пользователь уже существует') {
        regFormMessage.innerHTML = data.message;
      } else if (data.message === 'Заполните все поля') {
        regFormMessage.innerHTML = data.message;
      } else if (data.message === 'ok') {
        window.location.assign('/products');
      }
    } else {
      regFormMessage.innerHTML = 'Пароли не совпадают';
    }
  });
}
