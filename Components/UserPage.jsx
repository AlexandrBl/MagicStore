const React = require('react');
const Layout = require('./Layout');
const AddForm = require('./AddForm');

function UserPage({
  title, user,
}) {
  return (
    <Layout title={title}>
      <div className="userCard">
        <div className="user-nav">
          <button disabled type="button" className="user-nav__button button add-button">
            Добавить карточку
          </button>
          <button type="button" className="user-nav__button button my-button">
            Мои карточки
          </button>
        </div>
        <h3 className="greets">Hello {user.name} !</h3>
      </div>
      <form className="add-product">
        <AddForm />
      </form>
      <div className="product-container" />
    </Layout>
  );
}

module.exports = UserPage;
