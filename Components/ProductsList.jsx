const React = require('react');

const ProductCard = require('./ProductCard');

function ProductsList({
  products, city,
}) {
  return (
    <div>
      <ul className="product-list">
        {products.map((el) => (
          <li className="product-list__item">
            <ProductCard city={city} product={el} key={el.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = ProductsList;
