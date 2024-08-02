const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  user,
  Verperfil,
  CadastroUser,
} = require("../controllers/UserControllers");

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.send("cchegou aqui");
  }
);
router.get("/profile", Verperfil);
router.post("/Cadastro", CadastroUser);

module.exports = router;
