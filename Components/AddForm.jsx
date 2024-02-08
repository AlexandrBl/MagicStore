const React = require('react');

function AddForm() {
  return (
    <>
      <form className="add-product">
        <input
          type="text"
          className="add-product__input"
          name="name"
          placeholder="name"
        />

        <select className="add-product__select" name="condition" id="1">
          <option value="новая" className="add-product__option">
            новая
          </option>
          <option value="как новая" className="add-product__option">
            как новая
          </option>
          <option value="хорошая" className="add-product__option">
            хорошая
          </option>
        </select>
        <input
          type="text"
          className="add-product__input"
          name="price"
          placeholder="price"
        />
        <input
          type="file"
          className="add-product__input"
          name="img"
          placeholder="img"
          multiple
        />
        <button type="submit" className="add-product__button button">
          Добавить
        </button>
      </form>
      <p className="add-product__message" />
    </>
  );
}

module.exports = AddForm;
