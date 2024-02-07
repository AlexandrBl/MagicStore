const React = require("react");

function AddForm({ products }) {
  return (
    <>
      <form className="add-product">
        <select name="product_id" className="add-product__select">
          {products.map((el) => (
            <option className="add-product__option" value={el.id}>
              {el.condition}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="add-product__input"
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          className="add-product__input"
          name="img"
          placeholder="img"
        />
        <input
          type="text"
          className="add-product__input"
          name="condition"
          placeholder="condition"
        />
        <input
          type="text"
          className="add-product__input"
          name="price"
          placeholder="price"
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
