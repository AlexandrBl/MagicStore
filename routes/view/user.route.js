const router = require('express').Router();
const UserPage = require('../../Components/UserPage');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(UserPage, {
      title: 'Личный кабинет',
      user: res.locals.user,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
