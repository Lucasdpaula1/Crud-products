const express = require("express");
const UserAutenticado = require("../src/model/ValidacaoProduct");

const app = express();
const cors = require("cors");
const port = 3000;
const router = require("../crud-produtos/src/routes/USER");
const passport = require("passport");
const LocalStratgy = require("passport-local").Strategy;
const session = require("express-session");
app.use(express.json());
//  usuárioos autenticcados
const bancoDeDados = [
  { id: 1, name: "lucas", email: "luc@gmail.com", senha: "incorreta" },
  { id: 2, name: "felipe", email: "feliped@gmail.com", senha: "certo" },
];
app.use(cors());
passport.use(
  new LocalStratgy(
    { usernameField: "email", passwordField: "senha" },
    function (email, senha, done) {
      const user = bancoDeDados.find((user) => email === user.email);
      if (!user) {
        return done(null, false, { message: "usuário não encontrado" });
      }
      if (senha == !user.senha) {
        return done(null, false, { message: "senhas não se coincidem" });
      }
      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, bancoDeDados) {
  const user = bancoDeDados.find((eachobject) => eachobject.id === id);
  done(null, user);
});

app.use("/user", router);

app.listen(port, () => {
  console.log("meu serviço esta rodando");
});
module.exports = app;
