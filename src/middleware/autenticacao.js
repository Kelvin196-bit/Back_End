const jwt = require('jsonwebtoken')
require('dotenv').config()

function autenticacaoMiddleware(request,response, next) {
    return next(); //Atenção!! Remover esse Return Next. Coloquei apenas para teste
    console.log(request.headers.token)

    let auth = false

    if(request.headers.token){
        const {token} = request.headers

        try {
            jwt.verify(token, process.env.APP_KEY_TOKEN)
            auth = true
        }
        catch(e)
        {
            return response.status(403).send(e)
        }
        
    }

    if (auth === false){
        return response.status(403).send('não autorizado')
    }
    next();
} 


module.exports = autenticacaoMiddleware;