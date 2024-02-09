const React = require('react');

module.exports = function LogForm() {
  return (
    // <form method="POST" className="log-form form">
    <>
      <h3 className="log-form__title">Авторизация</h3>
      <input type="text" name="email" className="log-form__input input" placeholder="email" />
      <input type="password" name="password" className="log-form__input input" placeholder="password" />
      <button type="submit" className="log-form__button button">
        Авторизация
      </button>
    </>
    // {/* </form> */}
  );
};
