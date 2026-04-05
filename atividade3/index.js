const express = require('express');
const app = express();
const PORT = 8080;


let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const novoProduto = { 
        id: id, 
        nome: nome, 
        qtd: Number(qtd) 
    };
    
    estoque.push(novoProduto);
    res.send(`<h1>Produto ${nome} adicionado.</h1>`);
});


app.get('/listar', (req, res) => {
    if (estoque.length === 0) {
        return res.send('<h1>Estoque vazio.</h1>');
    }

    let listagem = '<h1>Produtos no Estoque:</h1><ul>';
    estoque.forEach(p => {
        listagem += `<li>ID: ${p.id} | Nome: ${p.nome} | Qtd: ${p.qtd}</li>`;
    });
    listagem += '</ul>';
    
    res.send(listagem);
});


app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const tamanhoAntes = estoque.length;
    
    estoque = estoque.filter(p => p.id !== id);

    if (estoque.length < tamanhoAntes) {
        res.send(`<h1>Produto com ID ${id} removido.</h1>`);
    } else {
        res.send(`<h1>Produto não encontrado.</h1>`);
    }
});



app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    let encontrado = false;

    estoque.forEach(p => {
        if (p.id === id) {
            p.qtd = Number(qtd);
            encontrado = true;
        }
    });

    if (encontrado) {
        res.send(`<h1>Quantidade do produto ${id} alterada para ${qtd}</h1>`);
    } else {
        res.send('<h1>Produto não encontrado.</h1>');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});