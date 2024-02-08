const router = require('express').Router();
const ListProduct = require('../../Components/ListProduct');
const ProductsPage = require('../../Components/ProductsPage');
const { Product, User, City } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();
    const products = await Product.findAll({
      include: { model: User, include: { model: City } },
    });

    const html = res.renderComponent(ProductsPage, {
      title: 'products',
      products,
      cities,

    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

router.get('/cities/:city', async (req, res) => {
  const { city } = req.params;

  const oneCity = await City.findOne({ where: { name: city } });

  const products = await Product.findAll({
    include: { model: User, include: { model: City } },
  });

  const productsFilter = products.filter(
    (el) => el.User.city_id === oneCity.id,
  );

  const html = res.renderComponent(ListProduct, { products: productsFilter });
  res.json({ html, message: 'ok' });
});

module.exports = router;
