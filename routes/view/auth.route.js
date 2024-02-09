const router = require('express').Router();
const AuthPage = require('../../Components/AuthPage');
const LogForm = require('../../Components/LogForm');
const RegForm = require('../../Components/RegForm');
const { City } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();

    const html = res.renderComponent(AuthPage, { title: 'authentication', cities, user: res.locals.user });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

router.get('/log', (req, res) => {
  const html = res.renderComponent(LogForm);
  res.status(200).json(html);
});

router.get('/reg', async (req, res) => {
  try {
    const cities = await City.findAll();
    const html = res.renderComponent(RegForm, { cities });
    res.status(200).json(html);
  } catch ({ messgae }) {
    console.log(messgae);
  }
});

module.exports = router;
