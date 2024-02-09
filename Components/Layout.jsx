const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/header.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/userPage.css" />
        <link rel="stylesheet" href="/css/order.css" />
        <link rel="stylesheet" href="/css/reglog.css" />

        <script defer src="/scripts/authScript.js" />

        <script defer src="/scripts/addProductScript.js" />

        <script defer src="/scripts/filterScript.js" />

        <script defer src="/scripts/userScript.js" />

        <script defer src="/scripts/orderScript.js" />
      </head>
      <body>
        <header className="header">
          <div className="center-container">
            <div className="header__container">
              <div className="logo">MAGIC Store</div>
              <Navbar user={user} />
            </div>
          </div>
        </header>
        <main className="main">
          <div className="center-container">{children}</div>
        </main>
        <footer className="footer">
          <div className="center-container">Footer</div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
