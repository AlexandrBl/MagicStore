const React = require('react');

function SearchForm({ cities }) {
  return (
    <form className="search-card">
      <p className="search-card__title">Поиск</p>
      <input
        className="search-card__input"
        name="name"
        type="text"
        placeholder="Введите имя"
      />
      <p>
        <input className="search-card__input" name="city" list="cities" />
      </p>
      <datalist className="search-card__datalist" id="cities">
        {cities.map((el) => (
          <option className="search-card__option">{el.name}</option>
        ))}
      </datalist>
      <button type="button" className="search-card__btn btn">Поиск</button>
    </form>
  );
}

module.exports = SearchForm;
