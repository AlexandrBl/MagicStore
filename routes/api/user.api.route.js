const router = require('express').Router();
const ProductsList = require('../../Components/ProductsList');
const AddForm = require('../../Components/AddForm');

const { Product, City } = require('../../db/models');

router.get('/card', async (req, res) => {
  try {
    const products = await Product.findAll({ where: { user_id: res.locals.user.id } });
    const city = await City.findOne({ where: { id: res.locals.user.city_id } });

    const html = res.renderComponent(ProductsList, { products, city });

    res.status(200).json(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/addForm', async (req, res) => {
  const html = res.renderComponent(AddForm);

  res.status(200).json(html);
});

module.exports = router;
