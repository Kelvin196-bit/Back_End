const express = require('express');
const RotasPrivadas = require('./routes/RotasPrivadas');
const RotasPublicas = require('./routes/RotasPublicas');

const host = "localhost"
const port = 3000

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.send("olá, eu sou o Backend")
})

app.use('/', RotasPublicas)
//Rotas Privadas
app.use('/', RotasPrivadas)

app.listen(port, host, () =>{
    console.log(`servidor executando em http://${host}:${port}`)
})
