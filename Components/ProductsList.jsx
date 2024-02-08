const React = require('react');

const ProductCard = require('./ProductCard');

function ProductsList({
  products, city,
}) {
  return (

    <ul className="product-list">
      {products.map((el) => (
        <li className="product-list__item">
          <ProductCard city={city} product={el} key={el.id} />
        </li>
      ))}
    </ul>

  );
}

module.exports = ProductsList;
