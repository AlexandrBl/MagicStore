const router = require("express").Router();
const authRouter = require("./view/auth.route");

router.use("/auth", authRouter);

module.exports = router;
