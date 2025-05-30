const UsuarioModel = require('../models/UsuarioModel');

class UsuariosController 
{
    listar(request, response){
        const dados = UsuarioModel.listar()
        return response.json(dados)

    }
    consultarPorId(request, response){
        const id = request.params.id;
        const dados = UsuarioModel.consultarPorId(id) 
        if (dados) {
            return response.status(200).json(dados);} 
        else {
        return response.status(404).json({ mensagem: 'Usuário não encontrado' });
    }


    }
    criar(request, response){
        const body = request.body;
        const {firstname, surname} = body;
         if (!firstname || !surname || typeof firstname !== 'string' || typeof surname !== 'string' ) {
            return response.status(400).json({ erro: "Campo 'nome' e 'sobrenome' são obrigatórios e devem ser uma string." });
            
  }         
        UsuarioModel.criar(body)
        return response.status(201).json({message: "usuário cadastrado com sucesso"})
        
    }
    atualizar(request, response){
        const id = request.params.id
        const body = request.body;
        const {firstname, surname} = body;
        if (!firstname || !surname || typeof firstname !== 'string' || typeof surname !== 'string' ) {
            return response.status(400).json({ erro: "Campo 'nome' e 'sobrenome' são obrigatórios e devem ser uma string." });     
  }        
        const recurso = UsuarioModel.consultarPorId(id);
        if (!recurso) {
        return response.status(404).json({ erro: 'Recurso não encontrado para atualização.' });
  }
        UsuarioModel.atualizar(id, body) 
        return response.status(204).json({message: "usuário atualizado com sucesso"})

    }
    deletar(request, response){
        const id = request.params.id;
        const recurso = UsuarioModel.consultarPorId(id);
        if (!recurso) {
        return response.status(404).json({ erro: 'Recurso não encontrado para atualização.' });
  }
        UsuarioModel.deletar(id) 
        return response.status(204).end()

    }

}

module.exports = UsuariosController;