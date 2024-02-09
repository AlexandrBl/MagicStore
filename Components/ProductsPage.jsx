const React = require('react');
const Layout = require('./Layout');

const SearchForm = require('./SearchForm');
const ListProduct = require('./ListProduct');

function ProductsPage({
  title, products, cities, user,
}) {
  return (
    <Layout title={title} user={user}>
      <SearchForm cities={cities} products={products} />
      <ul className="product-list">
        <ListProduct products={products} />
      </ul>
    </Layout>
  );
}

module.exports = ProductsPage;
