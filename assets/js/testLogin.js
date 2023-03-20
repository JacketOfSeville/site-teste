// Lista de usuários
var users = [
  {username: "user1", password: "1234"},
  {username: "user2", password: "5678"}
];

// Função para verificar o login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      alert("Login realizado com sucesso!");
      return;
    }
  }
  alert("Usuário ou senha incorretos!");
}