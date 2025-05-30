const express = require('express');
const UsuariosRotas = require('./routes/UsuariosRotas')

const host = "localhost"
const port = 3000

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.send("olá, eu sou o Backend")
})

app.use(UsuariosRotas)

app.get('/teste/:codigo', (request, response) => {

    //Query
    const query = request.query;
    let dados = "Rota de Testes " + query.nome + " - " + query.sobrenome
    //Params
    const codigo = request.params.codigo;
    dados += "<br > params: " + codigo
    //Body
    const body = request.body
    dados += "<br > Body: " + JSON.stringify(body);
    return response.send(dados);
})

app.listen(port, host, () =>{
    console.log(`servidor executando em http://${host}:${port}`)
})