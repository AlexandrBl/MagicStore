const React = require("react");
const Layout = require("./Layuot");
const RegForm = require("./RegForm");

const AuthPage = ({ title }) => {
  <Layout title={title}>
    <div className="auth-form">
      <button type="button" className="auth-form__button">
        Sign-In
      </button>
      <button type="button" className="auth-form__button" disabled>
        Sign-Up
      </button>
      <RegForm />
    </div>
  </Layout>;
};

module.exports = AuthPage;
