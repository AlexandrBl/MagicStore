const router = require('express').Router();
const { Product } = require('../../db/models');
const fileupload = require('../../utils/fileUpload');
const ProductCard = require('../../Components/ProductCard');

router.post('/', async (req, res) => {
  try {
    const {
      name, price, condition, user_id,
    } = req.body;
    const file = req.files.url;
    if (name && price && file && condition && user_id) {
      if (file.length) {
        const arrUrl = await Promise.all(
          file.map(async (el) => await fileupload(el)),
        );
      } else {
        const img = await fileupload(file);
        const product = await Product.create({
          name,
          price,
          img,
          condition,
          user_id: res.locals.user.id,
        });
        const html = res.renderComponent(
          ProductCard,
          { product },
          { doctype: false },
        );
        res.json({ html, message: 'ok' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
