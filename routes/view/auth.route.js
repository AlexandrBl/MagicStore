const router = require('express').Router();
const AuthPage = require('../../Components/AuthPage');
const { City } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();

    const html = res.renderComponent(AuthPage, { title: 'authentication', cities });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

module.exports = router;
