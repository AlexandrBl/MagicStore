const React = require('react');
const Layout = require('./Layout');
const AddForm = require('./AddForm');

function UserPage({
  title, user, cities, products,
}) {
  return (
    <Layout title={title} cities={cities}>
      <div className="userCard">
        <div className="user-nav">
          <button type="button" className="user-nav__button">
            Добавить карточку
          </button>
          <button type="button" className="user-nav__button">
            Мои карточки
          </button>
        </div>
        <h3>
          Hello
          {user.name}
          !
        </h3>
      </div>
      <AddForm  />
    </Layout>
  );
}

module.exports = UserPage;
