const React = require('react');

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__el">
          <a className="link nav__link" href="/">
            Главная
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="/user">
            Личный кабинет
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="/basket">
            Корзина
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="/products">
            Товары
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="/auth">
            loga
          </a>
        </li>
        <li className="nav__el">
          <button type="button" className="logOut-button button">Выход</button>
        </li>
      </ul>
    </nav>
  );
}

module.exports = Navbar;
