const router = require('express').Router();
const ProductsPage = require('../../Components/ProductsPage');
const { Product, User, City } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();
    const products = await Product.findAll({ include: { model: User } });

    const city = await City.findOne({ where: { id: res.locals.user.city_id } });
    const html = res.renderComponent(ProductsPage, {
      title: 'products',
      products,
      cities,
      city,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send(message);
  }
});

router.get('/cities/:city', async (req, res) => {
  const { city } = req.params;

  const oneCity = await City.findOne({ where: { name: city } });

  const products = await Product.findAll({ include: { model: User } });

  const productsFilter = products.filter(
    (el) => el.User.city_id === oneCity.id
  );
  console.log(productsFilter);
});

module.exports = router;
