const router = require("express").Router();
const RegForm = require("../../Components/AuthPage");

router.get("/", async (req, res) => {
  try {
    const html = res.renderComponent(RegForm, { title: "authentication" });
    res.status(400).send(html);
  } catch ({ message }) {
    res.status(400).send(message);
  }
});

module.exports = router;
