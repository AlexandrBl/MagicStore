const React = require('react');

function SearchForm({ cities, products }) {
  return (
    <>
      <form className="search-card">
        <p className="search-card__title">Поиск</p>

        <input placeholder="Введите название карточки" className="search-card__input" name="name" list="products" />

        <datalist className="search-card__datalist" id="products">
          {products.map((el) => (
            <option className="search-card__option">{el.name}</option>
          ))}
        </datalist>

        <button type="submit" className="search-card__btn btn">Поиск</button>
      </form>

      <form className="search-card">
        <p className="search-card__title">Фильтр по городу</p>

        <input className="search-card__input" name="city" list="cities" />

        <datalist className="search-card__datalist" id="cities">
          {cities.map((el) => (
            <option className="search-card__option">{el.name}</option>
          ))}
        </datalist>
        <button type="submit" className="search-card__btn btn">Фильтровать</button>
      </form>
    </>

  );
}

module.exports = SearchForm;
