
//Criando uma variável com os poderes de Express que é um gerenciador de rotas
const express = require("express");

//Clonando a varável com poderes de express para manipular
const app = express();

//ROTAS:
app.get("/", function (req, res) {//rota padrão
  res.send("Hello World");
});

app.get("/login/:email/:senha/:idade", function (req, res) {//rota com parâmetros
    res.send(req.params);
});

app.get("/htmlteste", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

//
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});