const router = require('express').Router();
const BasketPage = require('../../Components/BasketPage');
const {
  Product, OrderItem, Order, User, City,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const idUser = res.locals.user.id;
    const order = await Order.findOne({ where: { user_id: idUser } });
    const orderStatus = order.status;

    // eslint-disable-next-line max-len
    const orderItem = await OrderItem.findAll({ where: { order_id: order.id }, include: { model: Product, where: { user_id: idUser }, include: { model: User, include: { model: City } } } });

    // console.log(orderItem);
    const products = orderItem.map((el) => el.Product);

    const html = res.renderComponent(BasketPage, {
      title: 'Basket',
      products,
      orderStatus,
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
