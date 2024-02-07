const router = require('express').Router();
const authRouter = require('./view/auth.route');
const productsRouter = require('./view/products.route');

router.use('/auth', authRouter);
router.use('/products', productsRouter);

module.exports = router;
