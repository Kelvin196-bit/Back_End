const express = require('express');
const UsuariosRotas = require('./UsuariosRotas');
const autenticacao = require('../middleware/autenticacao')

const RotasPrivadas = express.Router();

RotasPrivadas.use(autenticacao)

RotasPrivadas.use(UsuariosRotas)

module.exports = RotasPrivadas