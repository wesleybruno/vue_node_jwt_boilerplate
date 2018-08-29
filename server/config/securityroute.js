const logger = require('./log');
const jwt = require('jsonwebtoken');

const securityroute = async (req, res, next) => {
    logger.log({level: 'info',   message: 'Recebendo requisição: ' + req.method + ' URL: ' + req.headers.host + req.url + ' Body da requisição: ' + JSON.stringify(req.body)});
    const exclusions = ['/auth']
    if(!exclusions.includes(req.url)){

        if(!req.headers['x-access-token']){
            logger.log({level: 'info',   message: 'Usuário não autenticado '});
            res.status(403).send({'message' : 'Usuario não autenticado'});
            return;
        }
        const token = req.headers['x-access-token'];
        await jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error){
                res.status(403).send({'message' : 'Falha ao autenticar token!'});
            } else {
                next();
            }
        });
    } else {
        next();
    }
}

module.exports = securityroute;