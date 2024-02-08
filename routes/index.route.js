const router = require('express').Router();
const authRouter = require('./view/auth.route');
const productsRouter = require('./view/products.route');
const authApiRouter = require('./api/auth.api.route');
const basketRouter = require('./view/basket.route');
const userRouter = require('./view/user.route');

const productApiRouter = require('./api/product.api.route');

const userApiRouter = require('./api/user.api.route');

const { ifNotAuthRedirect } = require('../middleware/auth');

router.use('/api/auth', authApiRouter);

router.use('/api/products', productApiRouter);

router.use('/api/user', userApiRouter);

router.use('/auth', authRouter);
router.use('/products', productsRouter);
router.use('/user', ifNotAuthRedirect, userRouter);
router.use('/basket', ifNotAuthRedirect, basketRouter);

module.exports = router;
