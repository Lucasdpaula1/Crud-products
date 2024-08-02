// const { response } = require("../../myserve1r");
const UserAutenticado = require("../models/ValidationUser");

const user = (req, res) => {
  res.send("agora ela esta chegando aqui");
};
const CadastroUser = (req, resp) => {
  try {
    const { email, senha, name } = req.body;
    const verificar = new UserAutenticado(email, senha, name);
    verificar.validadtotal();

    resp.json({ message: `bem vindo novamente ${verificar.validadtotal()}` });
  } catch (err) {
    resp.json({ message: err.message });
  }
  // const { email, nome } = req.body;
  // resp.json({ message: `prazer ${nome}` });
};
const Verperfil = (req, res) => {};

module.exports = {
  user,
  CadastroUser,
  Verperfil,
};
