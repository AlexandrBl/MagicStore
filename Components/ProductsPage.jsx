const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function ProductsPage({ title, products }) {
  return (
    <Layout title={title}>
      <ul className="product-list">
        {products.map((el) => (
          <li className="product-list__item">
            <ProductCard product={el} key={el.id} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = ProductsPage;
