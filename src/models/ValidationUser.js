const bancoDeDados = [
  { id: 1, name: "lucas", email: "luc@gmail.com", senha: "incorreta" },
  { id: 2, name: "felipe", email: "feliped@gmail.com", senha: "certo" },
];
class UserAutenticado {
  constructor(email, senha, name) {
    this.email = email;
    this.senha = senha;
    this.name = name;
  }
  validadtotal() {
    const email = bancoDeDados.find((objeto) => objeto.email === this.email);
    console.log(54004);
    if (!email) {
      throw new Error("email não encontrado, usuário não autenticado");
    }
    console.log(123);
    if (email.senha !== this.senha) {
      throw new Error("senha não compativel");
    }
    return email.name;
  }
}
module.exports = UserAutenticado;
