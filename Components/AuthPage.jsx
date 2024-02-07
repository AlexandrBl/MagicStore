const React = require('react');
const Layout = require('./Layout');
const RegForm = require('./RegForm');

function AuthPage({ title, cities }) {
  return (
    <Layout title={title} cities={cities}>
      <div className="auth-form">
        <button type="button" className="auth-form__button">
          Sign-In
        </button>
        <button type="button" className="auth-form__button" disabled>
          Sign-Up
        </button>
        <RegForm cities={cities} />
      </div>
    </Layout>
  );
}

module.exports = AuthPage;
