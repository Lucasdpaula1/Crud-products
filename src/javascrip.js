document
  .getElementById("formulario")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("ola");

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("http://localhost:3000/user/Cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha, name: "lucas" }),
    });
    const data = await response.json();

    document.getElementById("paragraph").innerHTML = data.message;
  });
