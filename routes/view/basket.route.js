const router = require('express').Router();
const BasketPage = require('../../Components/BasketPage');
const Product = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { idUser } = res.locals.user.id;
    const products = await Product.findAll({ where: { user_id: idUser } });
    const html = res.renderComponent(BasketPage, {
      title: 'Basket',
      products,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
