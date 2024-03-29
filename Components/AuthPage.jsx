const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');
const LogForm = require('./LogForm');

function AuthPage({ title, cities, user }) {
  return (
    <Layout title={title} cities={cities} user={user}>
      <div className="auth-form">
        <div className="button-container">
          <button type="button" className="auth-form__button log-button" disabled>
            Вход
          </button>
          <button type="button" className="auth-form__button reg-button">
            Регистрация
          </button>
        </div>
        <div className="form-container">
          <form method="POST" className="reg-form" />
          <form method="POST" className="log-form"><LogForm /></form>
          <p className="log-form__message message" />
          <p className="reg-form__message message" />
        </div>
      </div>
    </Layout>
  );
}

module.exports = AuthPage;
