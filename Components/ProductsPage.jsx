const React = require('react');
const Layout = require('./Layout');

const SearchForm = require('./SearchForm');
const ListProduct = require('./ListProduct');

function ProductsPage({ title, products, cities }) {
  return (
    <Layout title={title}>
      <SearchForm cities={cities} products={products} />
      <ul className="product-list">
        <ListProduct products={products} />
      </ul>
    </Layout>
  );
}

module.exports = ProductsPage;
