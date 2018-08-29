var express = require('express');
var router = express.Router();
const logger = require('../../config/log');
const auth = require('../services/auth');

 router.post('/', (req, res) => {
    logger.log({level: 'info',   message: 'Recebendo requisição: ' + req.method + ' URL: ' + req.headers.host + req.url + ' Body da requisição: ' + JSON.stringify(req.body)});
    auth.auth(req.body).then( (message) => {
        res.status(200).json(message);
    }).catch( (error) => {
        res.status(404).send(error.message);
    })
    
 });


 module.exports = router;