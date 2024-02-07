const regForm = document.querySelector('.reg-form');
const regFormMessage = document.querySelector('.reg-form__message');

const logForm = document.querySelector('.log-form');
const logFormMessage = document.querySelector('.log-form__message');

const logOutBtn = document.querySelector('.logOut-button');

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      name, email, password, password2, city, method,
    } = event.target;
    console.log(event.target.city.value);

    if (password.value === password2.value) {
      const resReg = await fetch('/api/auth/reg', {
        method,
        headers: {
          'Content-type': 'application/json',
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

if (logForm) {
  logForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password, method } = event.target;

    const resLog = await fetch('/api/auth/log', {
      method,
      headers: {
        'Content-types': 'application/json',
      },
      body: {
        email: email.value,
        password: password.value,
      },
    });

    const data = await resLog.json();

    if (data.message === 'ok') {
      window.location.assign('/products');
    } else if (data.message === 'Заполните все поля') {
      regFormMessage.innerHTML = data.message;
    } else if (data.message === 'Не существет такого пользователя или введен неверный пароль') {
      logFormMessage.innerHTML = data.message;
    }
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', async () => {
    const resOut = await fetch('/api/auth/out');

    const data = await resOut.json();
    if (data.message === 'ok') {
      window.location.assign('/auth/log');
    }
  });
}
