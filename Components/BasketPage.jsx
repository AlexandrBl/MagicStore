const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function BasketPage({
  title, products, orderStatus, user,
}) {
  return (

    <Layout title={title} products={products}>
      {orderStatus === 'Не оформлен' ? (
        <>
          <p className="order-status">
            Статус заказа:
            {orderStatus}
          </p>
          <ul className="order-item">
            {products.map((el) => (
              <li className="order-item__el">
                <ProductCard product={el} key={el.id} />
              </li>
            ))}
          </ul>
          <button type="submit" className="order-item__button button">
            <a href="/basket/plase">Отправить</a>
          </button>
        </>
      ) : (
        <p>Корзина пустая</p>
      )}

    </Layout>
  );
}

module.exports = BasketPage;
