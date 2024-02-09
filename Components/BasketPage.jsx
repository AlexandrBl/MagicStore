const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function BasketPage({ title, products, orderStatus }) {
  return (
    <Layout title={title} products={products}>
      <p className="order-status">
        Стату заказа: {orderStatus}
      </p>
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
