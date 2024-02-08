const router = require('express').Router();

const { Order, OrderItem, Product } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { productId } = req.body;

    if (productId) {
      let order = await Order.findOne({ where: { user_id: res.locals.user.id, status: 'Не оформлен' } });

      if (!order) {
        order = await Order.create({ status: 'Не оформлен', price: '0', user_id: res.locals.user.id });

        const product = await Product.findOne({ where: { id: productId } });

        const orderItem = await OrderItem.create({ product_id: productId, order_id: order.id });

        console.log(orderItem, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

        const price = +order.price + +product.price;

        await order.update({ price: `${price}` });

        res.json({ message: 'Товар добавлен в корзину', id: productId });
      } else {
        console.log(res.locals.user.id);
        const order = await Order.findOne({ where: { user_id: res.locals.user.id } });

        console.log(order);

        const product = await Product.findOne({ where: { id: productId } });

        const orderItem = await OrderItem.create({ product_id: productId, order_id: order.id });

        const price = +order.price + +product.price;

        order.update({ price: `${price}` });

        res.json({ message: 'Товар добавлен в корзину', id: productId });
      }
    }
  } catch ({ message }) {
    console.log(message);
    res.json({ message: 'Неудалось добавить товар', id: productId });
  }
});

module.exports = router;
