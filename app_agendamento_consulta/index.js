const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 8080;
const app = express();

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});

app.get("/", (req,res)=>{
    res.send("Agendamento de consulta");
})