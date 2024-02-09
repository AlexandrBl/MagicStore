const router = require('express').Router();
const BasketPage = require('../../Components/BasketPage');
const { Product, OrderItem, Order } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const idUser = res.locals.user.id;
    const order = await Order.findOne({ where: { user_id: idUser } });
    const orderStatus = order.status;

    const orderItem = await OrderItem.findAll({
      where: { order_id: order.id },
      include: { model: Product },
    });

    const productsOrder = orderItem.map((el) => el.Product.id);

    // const productsPrderList = productsOrder.map(async el => {
    //   await
    // })

    // console.log(orderItem);

    console.log(productsOrder);

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
