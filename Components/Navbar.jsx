const React = require("react");

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__el">
          <a href="">Главная</a>
        </li>
        <li className="nav__el">
          <a href="">Личный кабинет</a>
        </li>
        <li className="nav__el">
          <a href="">Корзина</a>
        </li>
        <li className="nav__el">
          <a href="">Товары</a>
        </li>
        <li className="nav__el">
          <a href="">loga</a>
        </li>
        <li className="nav__el">
          <a href="">Выход</a>
        </li>
      </ul>
    </nav>
  );
}

module.exports = Navbar;
