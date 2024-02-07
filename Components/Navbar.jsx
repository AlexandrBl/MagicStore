const React = require("react");

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__el">
          <a className="link nav__link" href="">
            Главная
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="">
            Личный кабинет
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="">
            Корзина
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="">
            Товары
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="">
            loga
          </a>
        </li>
        <li className="nav__el">
          <a className="link nav__link" href="">
            Выход
          </a>
        </li>
      </ul>
    </nav>
  );
}

module.exports = Navbar;
