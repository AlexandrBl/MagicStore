const router = require('express').Router();
const ProductsPage = require('../../Components/ProductsPage');
const { Product, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ include: { model: User } });

    console.log(products);

    const html = res.renderComponent(ProductsPage, { title: 'products', products });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

module.exports = router;
