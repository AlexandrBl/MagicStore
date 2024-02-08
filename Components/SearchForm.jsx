const React = require('react');

function SearchForm({ cities, products }) {
  return (
    <>
      <form className="search-form">
        <p className="search-form__title">Поиск</p>

        <input
          placeholder="Введите название карточки"
          className="search-form__input"
          name="name"
          list="products"
        />

        <datalist className="search-form__datalist" id="products">
          {products.map((el) => (
            <option className="search-form__option">{el.name}</option>
          ))}
        </datalist>

        <button type="submit" className="search-form__btn btn">
          Поиск
        </button>
      </form>

      <form className="filter-form">
        <p className="filter-form__title">Фильтр по городу</p>

        <input className="filter-form__input" name="city" list="cities" />

        <datalist className="filter-form__datalist" id="cities">
          {cities.map((el) => (
            <option className="filter-form__option">{el.name}</option>
          ))}
        </datalist>
        <button type="submit" className="filter-form__btn btn">
          Фильтровать
        </button>
      </form>
    </>
  );
}

module.exports = SearchForm;
