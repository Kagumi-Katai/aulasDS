//importando a biblioteca gerenciadora de querys
const Sequelize = require("sequelize");

//iniciando a conexão com o banco
const conexaoComBanco = new Sequelize("teste", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//criando uma query
const Postagem = conexaoComBanco.define("postagens", {
    titulo: {
      type: Sequelize.STRING,//VARCHAR
    },
    conteudo: {
      type: Sequelize.TEXT,//TEXTAREA
    },
});

//Postagem.sync({ force: true });

//INSERT no banco
Postagem.create({
  titulo: "Um titulo qualquer",
  conteudo: "Um conteudo qualquer",
});