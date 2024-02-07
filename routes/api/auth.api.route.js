const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { genereteTokens } = require('../../utils/authUtils');
const cookieConfig = require('../../config/cookiesConfig');

router.post('/reg', async (req, res) => {
  const {
    name, email, password, city,
  } = req.body;

  if (name && email && password && city) {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      const hash = await bcrypt.hash(password, 10);
      user = await User.create({
        name, email, password: hash, city,
      });

      const { accessToken, refreshToken } = genereteTokens(
        { user: { name: user.name, id: user.id } },
      );

      res.cookie(
        cookieConfig.access,
        accessToken,
        { maxAge: cookieConfig.maxAgeAccess, httpOnly: cookieConfig.httpOnly },
      );

      res.cookie(
        cookieConfig.refresh,
        refreshToken,
        { maxAge: cookieConfig.maxAgeRefresh, httpOnly: cookieConfig.httpOnly },
      );

      res.status(201).json({ message: 'ok' });
    } else {
      res.status(200).json({ message: 'Такой пользователь уже существует' });
    }
  } else {
    res.status(200).json({ message: 'Заполните все поля' });
  }
});

module.exports = router;
