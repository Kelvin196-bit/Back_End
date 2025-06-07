const express = require('express');
const UsuariosRotas = require('./UsuariosRotas');

const RotasPrivadas = express.Router();

//Middleware
RotasPrivadas.use((request,response) => {
    return response.status(403).send('não autorizado')

})

RotasPrivadas.use(UsuariosRotas)

module.exports = RotasPrivadas