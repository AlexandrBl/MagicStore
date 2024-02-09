const router = require('express').Router();
const BasketPage = require('../../Components/BasketPage');
const { Product, OrderItem, Order, User, City } = require('../../db/models');
const nodemailer = require('nodemailer');

router.get('/', async (req, res) => {
  try {
    let products = [];
    const idUser = res.locals.user.id;
    const order = await Order.findOne({
      where: { user_id: idUser, status: 'Не оформлен' },
    });
    let orderStatus = '';
    if (order) {
      orderStatus = order.status;
      console.log(orderStatus);

      // eslint-disable-next-line max-len
      const orderItem = await OrderItem.findAll({
        where: { order_id: order.id },
        include: {
          model: Product,
          include: { model: User, include: { model: City } },
        },
      });

      products = orderItem.map((el) => el.Product);
    }
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
router.get('/plase', async (req, res) => {
  const idUser = res.locals.user.id;
  const order = await Order.findOne({ where: { user_id: idUser } });

  // eslint-disable-next-line max-len
  const orderItem = await OrderItem.findAll({
    where: { order_id: order.id },
    include: {
      model: Product,
      include: { model: User, include: { model: City } },
    },
  });
  order.status = 'Оформлен';
  order.save();
  const products = orderItem.map((el) => el.Product);
  let text2 = '';
  products.forEach((el) => {
    text2 = text2 + el.name + ' ';
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: 'anna.makarova@elbrusboot.camp',
    to: 'aur67@mail.ru',
    subject: 'Письмо из НОДЫЫЫЫЫЫЫ',
    text: text2,
  };

  const html = res.renderComponent(BasketPage, {
    title: 'Basket',
    products: [],
    orderStatus: order.status,
  });
  res.send(html);
});
module.exports = router;
