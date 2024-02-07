const regForm = document.querySelector('.regForm');
const errReg = document.querySelector('.errReg');
const logOutButton = document.querySelector('.logOut-button');

const logForm = document.querySelector('.logForm');
const errLog = document.querySelector('.errLog');

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      name, email, password, password2, method,
    } = event.target;

    if (password.value === password2.value) {
      const resReg = await fetch('/api/auth/reg', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      });

      const data = await resReg.json();
      if (data.message === 'ok') {
        window.location.assign('/products');
      } else if (data.message === 'Заполните все поля') {
        errReg.innerHTML = data.message;
      } else if (data.message === 'Такой пользователь уже существует') {
        errReg.innerHTML = data.message;
      }
    } else {
      errReg.innerHTML = 'Пароли не совпадают';
    }
  });
}

if (logOutButton) {
  logOutButton.addEventListener('click', async () => {
    const resOut = await fetch('/api/auth/out');

    const data = await resOut.json();
    if (data.message === 'ok') {
      window.location.assign('/auth/log');
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        email: email.value,
        password: password.value,
      }),
    });

    const data = await resLog.json();

    if (data.message === 'ok') {
      window.location.assign('/products');
    } else if (data.message === 'Заполните все поля') {
      errLog.innerHTML = data.message;
    } else if (data.message === 'Такого пользователя не существует или введен неверный пароль') {
      errLog.innerHTML = `${data.message}`;
    }
  });
}
