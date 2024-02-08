const React = require('react');
const Layout = require('./Layout');
const ProductCard = require('./ProductCard');

function ProductsPage({
  title, products, cities, city,
}) {
  return (
    <Layout title={title} cities={cities}>
      <ul className="product-list">
        {products.map((el) => (
          <li className="product-list__item">
            <ProductCard city={city} product={el} key={el.id} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = ProductsPage;
