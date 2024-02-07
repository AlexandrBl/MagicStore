const router = require('express').Router();
const authRouter = require('./view/auth.route');
const productsRouter = require('./view/products.route');
const authApiRouter = require('./api/auth.api.route');

router.use('/api/auth', authApiRouter);

router.use('/auth', authRouter);
router.use('/products', productsRouter);

module.exports = router;
