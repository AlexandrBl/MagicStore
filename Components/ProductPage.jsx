const React = require("react");
const Layout = require("./Layuot");
const Product = require("./Product");

function ProductPage({ title, products }) {
  return (
    <Layout title={title}>
      <div>
        {products.map((el) => (
          <Product product={el} key={el.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = ProductPage;
