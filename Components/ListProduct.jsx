const React = require('react');

const ProductCard = require('./ProductCard');

function ListProduct({ products }) {
  return (
    <>
      {products.map((el) => (
        <li className="product-list__item">
          <ProductCard product={el} key={el.id} />
        </li>
      ))}
    </>
  );
}

module.exports = ListProduct;
