const React = require("react");
const Navbar = require("./Navbar");
const Search = require("./Search");

function Layout({ title, children, cities }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/body.css" />
        <script defer src='/scripts/cards.js'/> */}
      </head>
      <body>
        <header className="header">
          <div className="center-container">
            <Search cities={cities} />
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
