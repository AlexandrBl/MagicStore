const React = require("react");

function RegForm({ cities }) {
  return (
    // <form method="POST" className="reg-form form">
    <>
      <h3 className="reg-form__title">Регистрация</h3>
      <input type="text" name="name" className="reg-form__input input" />
      <input type="text" name="email" className="reg-form__input input" />
      <input className="reg-form__input input" name="city" list="cities" />
      <datalist className="reg-form__datalist" id="cities">


        {cities.map((el) => <option className="reg-form__option">{el.name}</option>)}


      </datalist>
      <input type="text" name="password" className="reg-form__input input" />
      <input type="text" name="password2" className="reg-form__input input" />

      <button type="submit" className="reg-form__button button">
        Регистрация
      </button>
    </>
    // </form>
  );
}

module.exports = RegForm;
