const React = require("react");

function searchForm({ cities }) {
  return (
    <form className="search-card">
      <p>Поиск</p>
      <input
        className="search-card__input"
        name="name"
        type="text"
        placeholder="Введите имя"
      />
      <select className="search-card__select" name="city">
        {cities.map((el) => (
          <option className="search-card__option" value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <button className="search-card__btn btn">Поиск</button>
    </form>
  );
}

module.exports = searchForm;
