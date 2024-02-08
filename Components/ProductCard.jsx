const React = require('react');

function ProductCard({ product }) {
  return (

    <>
      <p className="item-card__user-city">{product.User.City.name}</p>

      <div className="item-card" data-id={product.id}>

        <img className="item-card__img" src={product.img} alt="item img" />
        <h2 className="item-card__name">{product.name}</h2>
        <p className="item-card__price">{product.price}</p>
        <p className="item-card__condition">
          Состояние:
          {product.condition}
        </p>
        <button type="button" className="item-card__add-button">
          Добавить в корзину
        </button>
        <p data-num={product.id} className="order-message" />
      </div>
    </>
  );
}

module.exports = ProductCard;
