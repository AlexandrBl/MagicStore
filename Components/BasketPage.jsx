const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function BasketPage({ title, products }) {
  return (
    <Layout title={title} products={products}>
      <ul className="order-item">
        {products.map((el) => (
          <li className="order-item__el">
            <ProductCard product={el} key={el.id} />
          </li>
        ))}
      </ul>
      <button type="submit" className="order-item__button button">
        Отправить
      </button>
    </Layout>
  );
}

module.exports = BasketPage;
