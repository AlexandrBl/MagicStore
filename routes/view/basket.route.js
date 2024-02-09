const router = require('express').Router();
const BasketPage = require('../../Components/BasketPage');
const EmptyBasket = require('../../Components/EmptyBasket');
const {
  Product, OrderItem, Order, User, City,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const idUser = res.locals.user.id;
    const order = await Order.findOne({ where: { user_id: idUser } });
    if (order) {
      const orderStatus = order.status;

      const orderItem = await OrderItem.findAll({ where: { order_id: order.id }, include: { model: Product, where: { user_id: idUser }, include: { model: User, include: { model: City } } } });

      const products = orderItem.map((el) => el.Product);

      const html = res.renderComponent(BasketPage, {
        title: 'Basket',
        products,
        orderStatus,
      });
      res.send(html);
    } else {
      const html = res.renderComponent(EmptyBasket);
      res.send(html);
    }
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
