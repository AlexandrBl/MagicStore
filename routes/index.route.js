const router = require('express').Router();
const productsRouter = require('./view/products.route');
const errRouter = require('./view/err.route');
const productsApiRouter = require('./api/products.api.route');
const authRouter = require('./view/auth.route');
const authApiRouter = require('./api/auth.api.route');
const { ifNotAuthRedirect } = require('../middleware/auth');

router.use('/api/auth', authApiRouter);
router.use('/api/products', productsApiRouter);

router.use('/auth', authRouter);
router.use('/products', ifNotAuthRedirect, productsRouter);

router.use('*', ifNotAuthRedirect, errRouter);

module.exports = router;
