const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/header.css" />

        <script defer src="/scripts/authScript.js" />

        <script defer src="/scripts/addProductScript.js" />

        <script defer src="/scripts/filterScript.js" />

        <script defer src="/scripts/userScript.js" />

        <script defer src="/scripts/orderScript.js" />
      </head>
      <body>
        <header className="header">
          <div className="center-container">
            <Navbar />
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
