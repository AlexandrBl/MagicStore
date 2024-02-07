const React = require("react");

function searchForm() {
  return (
    <form className="search">
      <input name="searchInput" type="text" />
      <button>поиск</button>
    </form>
  );
}

module.exports = searchForm;
