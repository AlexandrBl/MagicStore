const React = require("react");

function ItemCard({ item, user }) {
  return (
    <div className="item-card">
      <p className="item-card__user-city">{user.cities}</p>
      <img className="item-card__img" src={item.img} alt="item img" />
      <h2 className="item-card__name">{item.name}</h2>
      <p className="item-card__price">{item.price}</p>
      <p className="item-card__condition">{item.condition}</p>
      <button type="button" className="item-card__add-button">
        Добавить в корзину
      </button>
    </div>
  );
}

module.exports = ItemCard;
