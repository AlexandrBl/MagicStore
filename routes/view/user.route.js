const router = require('express').Router();
const UserPage = require('../../Components/UserPage');
const { City, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();
    

    const html = res.renderComponent(UserPage, {
      title: 'Личный кабинет',
      user: res.locals.user,
      cities,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
