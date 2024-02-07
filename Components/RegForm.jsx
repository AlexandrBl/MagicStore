const React = require('react');

module.exports = function RegForm({ cities }) {
  return (
    <form method="POST" className="reg-form">
      <input type="text" name="name" className="reg-form__input" />
      <input type="text" name="email" className="reg-form__input" />
      <p><input className="reg-form__input" name="city" list="cities" /></p>
      <datalist className="reg-form__datalist" id="cities">
        {cities.map((el) => <option className="reg-form__option">{el.name}</option>)}
      </datalist>
      <input type="text" name="password" className="reg-form__input" />
      <input type="text" name="password2" className="reg-form__input" />
      <p className="reg-form__message" />
    </form>

  );
};
