const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});

app.post('/agendamento', (req, res) => {
    const dados_agendamento = req.body;
    let erros = [];

    if (!dados_agendamento.nome) erros.push("Nome é obrigatório");
    if (!dados_agendamento.sobrenome) erros.push("Sobrenome é obrigatório");
    if (!dados_agendamento.cpf) erros.push("CPF é obrigatório");
    if (!dados_agendamento.data_nascimento) erros.push("Data de nascimento é obrigatória");
    if (!dados_agendamento.telefone) erros.push("Telefone é obrigatório");
    if (!dados_agendamento.cep) erros.push("CEP é obrigatório");
    if (!dados_agendamento.endereco) erros.push("Endereço é obrigatório");
    if (!dados_agendamento.clinica) erros.push("Clínica é obrigatória");
    if (!dados_agendamento.especialidade) erros.push("Especialidade é obrigatória");
    if (!dados_agendamento.data_consulta) erros.push("Data da consulta é obrigatória");
    if (!dados_agendamento.hora_consulta) erros.push("Hora da consulta é obrigatória");

    if (dados_agendamento.data_consulta && new Date(dados_agendamento.data_consulta) <= new Date()) {
        erros.push("A data da consulta deve ser posterior à data atual");
    }
    if (erros.length > 0) {
        return res.render('erros.html', { erros });
    }

    console.log(dados_agendamento);
    res.render('agendamento.html', { dados_agendamento });
});

app.get("/", (req,res)=>{
    res.render("index.html");
})