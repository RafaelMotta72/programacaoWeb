// Carrega framework express
const express = require('express');

// Cria um app usando a função express
const app = express();

// Define porta da aplicação
const PORT = 8080;

// Cria um array vazio para armazenar respostas do usuário
const LOG = []

// Define o que será respondido caso o usuário faça uma requisição ao endereço / (raíz).
app.get('/', function (req, res){
    res.send('<h1>Oi Tio!</h1><p> Bons equipamentos \n Você sabe o caminho pra amadora?</p>')
});

//URL fixa
app.get('/ola/joao', function (req, res){
    res.send('olá, João!')
});

//URL com parâmetro
app.get('/ola/:nome', function (req, res){
    res.send(`Olá, ${req.params.nome}!`);
});

//URL com múltiplos parâmetros
app.get('/calculadora/somar/:a/:b', function (req, res){
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado = calculadora.somar(a,b);
    let string_resultado = `<h1>${a} + ${b} = ${resultado}</h1>`
    LOG.push(string_resultado);
    res.send(string_resultado);
});

app.get('/calculadora/log', function (req, res){
    resultado = "";
    LOG.forEach(log => {
        resultado += log;
    })
    res.send(resultado);
});

app.get('/bem-vindo', function (req, res){
    res.send('<h1>Bem vindo ao desenvolvimento web</h1>')
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});