const router = require('express').Router();
const incorrectPage = require('../../Components/IncorrectPage');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(incorrectPage, {
      title: 'PRIVET VSEM',
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
