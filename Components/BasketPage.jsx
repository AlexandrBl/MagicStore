const React = require("react");
const Layout = require("./Layuot");
const Product = require("./Product");

function BasketPage({ title, products }) {
  return (
    <Layout title={title}>
      <ul className="order-item">
        {products.map((el) => (
          <li className="order-item__el">
            <Product product={el} key={el.id} />
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
