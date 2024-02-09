const router = require('express').Router();
const incorrectPage = require('../../components/IncorrectPage');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(incorrectPage, {
      title: '404 ERROR',
    });
    res.send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
