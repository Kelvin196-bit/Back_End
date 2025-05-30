const express = require('express');
const UsuariosController = require('../controllers/UsuariosController')
const UsuariosRotas = express.Router();

const usuariosController = new UsuariosController();

UsuariosRotas.get('/v1/user/', usuariosController.listar)
UsuariosRotas.get('/v1/user/:id', usuariosController.consultarPorId)
UsuariosRotas.post('/v1/user', usuariosController.criar)
UsuariosRotas.put('/v1/user/:id', usuariosController.atualizar)
UsuariosRotas.delete('/v1/user/:id', usuariosController.deletar)


module.exports= UsuariosRotas;