
const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.post('/', (req,res) => {

    const {name, email} = req.body; 
    const usuario = [name,email];
    console.log(usuario);
  
    var sql = "INSERT INTO people ( name, email) VALUES (?)";
  
    var query = connection.query(sql, [usuario], function(err, result) {
        //if (err) throw err;
    //if (err) throw 
    if (err) {
            console.log("ERRO na inclusão de Registro");
        } 
        else {
            console.log("Usuario registrado ");
        }
    });
});

app.get('/', (req,res) => {
  
    var sql = "SELECT * FROM people";

    var query = connection.query(sql, function(err, result) {
        if (err) {
            console.log("ERRO ao acessar tabela de usuario");
        } 
        else {
            return res.send(  "<h1>Full Cycle !!  APP 11111</h1>" + JSON.stringify(result));
        }
    });
   
});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
});
