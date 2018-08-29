const logger = require('../../config/log');
const jwt = require('jsonwebtoken');
const sha1 = require('sha1');
const authService = {

    auth: async (body) => {

        try {
            logger.log({level: 'info',   message: 'Auth Service:  Efetuando transação!'});
            logger.log({level: 'info',   message: 'body' + JSON.stringify(body)});

            var exampleUser = {id: 1, login: 'admin', password: sha1('admin')}
            exampleUser.password = sha1('admin')

            if(body.login == exampleUser.login && sha1(body.password) == exampleUser.password){
                let token  = jwt.sign({exampleUser}, process.env.JWT_SECRET, { expiresIn: 24*24*60 });
                return {
                    code: 200,
                    status: true,
                    message: exampleUser,
                    token: token
                }
            } else {
                return {
                    code: 500,
                    status: false,
                    message: 'Usuario Não Encontrado'
                }
            }

        } catch (error) {
            return {
                code: 500,
                status: false,
                message: error
            }
        }
    }
}

module.exports = authService;