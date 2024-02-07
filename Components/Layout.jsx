const React = require('react');
const Navbar = require('./Navbar');

function Layout({
  title, children, user,
}) {
  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>{title}</title>
        <script defer src="/scripts/addScript.js" />
        <script defer src="/scripts/updateScript.js" />
        <script defer src="/scripts/authScript.js" />
      </head>
      <header className="header">
        <div className="center-container">
          <Navbar user={user} />
        </div>
      </header>
      <body>
        <main className="main">
          {children}
        </main>
        <footer className="footer" />

      </body>

    </html>
  );
}

module.exports = Layout;
