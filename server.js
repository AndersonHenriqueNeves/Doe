// configurando servidor
const express = require("express");
const server = express();

//configurar o servidor para apresentar arquivos extras(CSS,JS)
server.use(express.static('public'));

// habilitar o corpo do formulario (body)
server.use(express.urlencoded({ extended: true }));

//configurando a conexão com o banco de dados
const Pool = require('pg').Pool

const db = new Pool({
  user: 'postgres',
  password: '0000',
  host: 'localhost',
  port: 5432,
  database: 'doe'
})

// configurando template engine, essa que permite enviar os dados pro html
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server,
  noCache: true
})

//configurar a apresentação da página
server.get("/", function (req, res) {
  db.query("SELECT * FROM donors", function (err, result) {
    if (err) return res.send("erro de banco de dados")
    const donors = result.rows;
    return res.render("index.html", { donors })
  })

})

server.post("/", function (req, res) {
  //pegar dados do formulario
  const name = req.body.name
  const email = req.body.email
  const blood = req.body.blood


  if (name == "" || email == "" || blood == "") {
    return res.send("todos os campos são obrigatorios")
  }

  //colocando valores dentro do BD
  const query = `
  INSERT INTO donors 
  ("name", "email", "blood") 
  VALUES ($1, $2, $3)`

  const values = [name, email, blood]

  db.query(query, values, function (err) {
    //fluxo de erro
    if (err) return res.send("erro no banco de dados")
    //fluxo ideal
    return res.redirect("/")
  })


})

//ligar o servidor, permitindo acesso a porta 3000
server.listen(3000);