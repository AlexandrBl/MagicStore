const React = require("react");
const Layout = require("./Layuot");
const Product = require("./Product");

function ProductPage({ title, products }) {
  return (
    <Layout title={title}>
      <ul className="product-list">
        {products.map((el) => (
          <li className="product-list__item">
            <Product product={el} key={el.id} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = ProductPage;
