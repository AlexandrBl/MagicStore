const React = require('react');

module.exports = function LogForm({ cities }) {
  return (
    <form method="POST" className="log-form form">
      <input type="text" name="email" className="log-form__input input" />
      <input required type="text" name="password" className="log-form__input input" />
      <p className="log-form__message message" />
      <button className="log-form__button button">Авторизация</button>
    </form>

  );
};
