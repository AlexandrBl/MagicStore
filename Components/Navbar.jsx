const React = require("react");

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="">Главная</a>
        </li>
        <li>
          <a href="">Личный кабинет</a>
        </li>
        <li>
          <a href="">Корзина</a>
        </li>
        <li>
          <a href="">Товары</a>
        </li>
        <li>
          <a href="">loga</a>
        </li>
        <li>
          <a href="">Выход</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = Navbar;
