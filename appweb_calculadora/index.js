// Carrega framework express
const express = require('express');

// Cria um app usando a função express
const app      = express();

// Define porta da aplicação
const PORT = 8080;

// Define o que será respondido caso o usuário faça uma requisição ao endereço / (raíz).
app.get('/', function (req, res){
    res.send('<h1>Oi Tio!</h1><p> Bons equipamentos \n Você sabe o caminho pra amadora?</p>')
});

app.get('/bem-vindo', function (req, res){
    res.send('<h1>Bem vindo ao desenvolvimento web</h1>')
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});