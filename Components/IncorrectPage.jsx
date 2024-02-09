const React = require('react');
const Layout = require('./Layout');

function IncorrectPage({ title }) {
  return (
    <Layout title={title}>
      <div className="incorrectPage">
        <p className="incorrectPage__text">404</p>
        <img
          className="incorrectPage__img"
          src="/img/IMG_A2074CDB96A2-1.jpeg"
          alt="Тут могла бы быть интересная картинка"
        />
      </div>
    </Layout>
  );
}

module.exports = IncorrectPage;
